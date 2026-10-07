import type { VideoCheckpoint } from "./course";
import { isCheckpointAnswered } from "./progress";

// Minimal shape of the YouTube IFrame Player API we actually use.
interface YTPlayerInstance {
  playVideo(): void;
  pauseVideo(): void;
  getCurrentTime(): number;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
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
  private pendingCheckpointId: string | null = null;

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
            // While a question is open, don't scan for the next checkpoint — the
            // learner is stopped exactly where they are until they resolve it.
            if (!this.player || this.pendingCheckpointId) return;
            const t = this.player.getCurrentTime();
            for (const cp of checkpoints) {
              if (!this.answeredIds.has(cp.id) && t >= cp.atSeconds) {
                this.pendingCheckpointId = cp.id;
                // Snap the playhead back to the checkpoint itself: this is what
                // stops the native seek bar from skipping past an unanswered
                // question — scrubbing ahead just lands back here instead.
                this.player.seekTo(cp.atSeconds, true);
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

  /** Call once a checkpoint is resolved for good (correct, or an unregistered skip). */
  markAnswered(checkpointId: string) {
    this.answeredIds.add(checkpointId);
  }

  /** Continue playing from the checkpoint onward (correct answer, or an unregistered skip). */
  resume() {
    this.pendingCheckpointId = null;
    this.player?.playVideo();
  }

  /** Rewind to the start of the explanatory passage and keep playing (wrong answer, registered learner). */
  rewindAndResume(seconds: number) {
    this.pendingCheckpointId = null;
    this.player?.seekTo(seconds, true);
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
