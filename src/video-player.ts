import type { VideoCheckpoint } from "./course";
import { isCheckpointAnswered } from "./progress";

// Minimal shape of the YouTube IFrame Player API we actually use.
interface YTPlayerInstance {
  playVideo(): void;
  pauseVideo(): void;
  getCurrentTime(): number;
  destroy(): void;
}

interface YTNamespace {
  Player: new (
    elementId: string,
    options: {
      videoId: string;
      playerVars?: Record<string, number | string>;
      events?: { onReady?: () => void };
    },
  ) => YTPlayerInstance;
}

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiReadyPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (apiReadyPromise) return apiReadyPromise;
  apiReadyPromise = new Promise((resolve) => {
    if (window.YT?.Player) {
      resolve();
      return;
    }
    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      resolve();
    };
    if (!document.getElementById("youtube-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
  });
  return apiReadyPromise;
}

const POLL_INTERVAL_MS = 400;

export class VideoController {
  private player: YTPlayerInstance | null = null;
  private pollHandle: number | null = null;
  private answeredIds = new Set<string>();

  async mount(
    containerId: string,
    youtubeId: string,
    checkpoints: VideoCheckpoint[],
    onCheckpoint: (checkpoint: VideoCheckpoint) => void,
  ) {
    this.answeredIds = new Set(checkpoints.filter((cp) => isCheckpointAnswered(cp.id)).map((cp) => cp.id));

    await loadYouTubeApi();
    if (!window.YT) return;

    this.player = new window.YT.Player(containerId, {
      videoId: youtubeId,
      playerVars: { rel: 0 },
      events: {
        onReady: () => {
          this.pollHandle = window.setInterval(() => {
            if (!this.player) return;
            const t = this.player.getCurrentTime();
            for (const cp of checkpoints) {
              if (!this.answeredIds.has(cp.id) && t >= cp.atSeconds) {
                this.answeredIds.add(cp.id);
                this.player.pauseVideo();
                onCheckpoint(cp);
                break;
              }
            }
          }, POLL_INTERVAL_MS);
        },
      },
    });
  }

  resume() {
    this.player?.playVideo();
  }

  destroy() {
    if (this.pollHandle !== null) {
      window.clearInterval(this.pollHandle);
      this.pollHandle = null;
    }
    this.player?.destroy();
    this.player = null;
  }
}
