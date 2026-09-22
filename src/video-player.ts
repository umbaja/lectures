import type { VideoCheckpoint } from "./course";
import { isCheckpointAnswered } from "./progress";

/**
 * Controls a YouTube embed via the raw postMessage bridge instead of the
 * official `https://www.youtube.com/iframe_api` script. That script is a
 * cross-origin <script src> load, which Claude Artifacts' CSP blocks (only
 * cdnjs/jsdelivr/tailwind/jquery script hosts are allowed) — so on an
 * Artifact the YT.Player object would never initialize and no iframe (and
 * therefore no video) would ever appear. A plain <iframe src="…youtube…">
 * is not a script load and isn't subject to that restriction, and with
 * `enablejsapi=1` it still speaks the same postMessage protocol the
 * official wrapper uses internally — we just implement the two message
 * types (send "listening" once, then read periodic "infoDelivery" pushes
 * for currentTime, and send {event:"command", func, args} to control
 * playback) ourselves instead of going through YT.Player.
 */

interface InfoDeliveryMessage {
  event: "infoDelivery";
  info?: { currentTime?: number };
}

function isInfoDelivery(data: unknown): data is InfoDeliveryMessage {
  return typeof data === "object" && data !== null && (data as { event?: unknown }).event === "infoDelivery";
}

const POLL_INTERVAL_MS = 400;

export class VideoController {
  private iframe: HTMLIFrameElement | null = null;
  private messageListener: ((event: MessageEvent) => void) | null = null;
  private listenIntervalHandle: number | null = null;
  private answeredIds = new Set<string>();

  mount(containerId: string, youtubeId: string, checkpoints: VideoCheckpoint[], onCheckpoint: (checkpoint: VideoCheckpoint) => void) {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.answeredIds = new Set(checkpoints.filter((cp) => isCheckpointAnswered(cp.id)).map((cp) => cp.id));

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(youtubeId)}?enablejsapi=1&rel=0`;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
    iframe.setAttribute("allowfullscreen", "true");
    container.appendChild(iframe);
    this.iframe = iframe;

    this.messageListener = (event: MessageEvent) => {
      if (event.source !== iframe.contentWindow) return;
      let data: unknown;
      try {
        data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      } catch {
        return;
      }
      if (isInfoDelivery(data) && typeof data.info?.currentTime === "number") {
        this.checkCheckpoints(data.info.currentTime, checkpoints, onCheckpoint);
      }
    };
    window.addEventListener("message", this.messageListener);

    // The embedded player only starts pushing "infoDelivery" updates once a
    // listener has registered; re-announce periodically in case the first
    // message races the iframe's own load.
    this.listenIntervalHandle = window.setInterval(() => {
      iframe.contentWindow?.postMessage(JSON.stringify({ event: "listening", id: containerId }), "*");
    }, POLL_INTERVAL_MS);
  }

  private checkCheckpoints(currentTime: number, checkpoints: VideoCheckpoint[], onCheckpoint: (checkpoint: VideoCheckpoint) => void) {
    for (const cp of checkpoints) {
      if (!this.answeredIds.has(cp.id) && currentTime >= cp.atSeconds) {
        this.answeredIds.add(cp.id);
        this.postCommand("pauseVideo");
        onCheckpoint(cp);
        break;
      }
    }
  }

  private postCommand(func: string, args: unknown[] = []) {
    this.iframe?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), "*");
  }

  resume() {
    this.postCommand("playVideo");
  }

  destroy() {
    if (this.listenIntervalHandle !== null) {
      window.clearInterval(this.listenIntervalHandle);
      this.listenIntervalHandle = null;
    }
    if (this.messageListener) {
      window.removeEventListener("message", this.messageListener);
      this.messageListener = null;
    }
    this.iframe?.remove();
    this.iframe = null;
  }
}
