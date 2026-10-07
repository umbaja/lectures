import { loadJson, saveJson } from "./storage";

export interface CheckpointAnswerEntry {
  lessonId: string;
  checkpointId: string;
  selectedIndex: number;
  correct: boolean;
  attempt: number;
  answeredAt: string;
}

export interface VideoWatchStats {
  watchedSeconds: number;
  seekCount: number;
}

const ANSWERS_KEY = "course-checkpoint-answers";
const WATCH_KEY = "course-video-watch";

export function logCheckpointAnswer(entry: CheckpointAnswerEntry) {
  const all = loadJson<CheckpointAnswerEntry[]>(ANSWERS_KEY, []);
  all.push(entry);
  saveJson(ANSWERS_KEY, all);
}

export function getCheckpointAnswers(): CheckpointAnswerEntry[] {
  return loadJson<CheckpointAnswerEntry[]>(ANSWERS_KEY, []);
}

/** Adds to the running total for this lesson (a learner may revisit a video several times). */
export function recordVideoWatch(lessonId: string, stats: VideoWatchStats): VideoWatchStats {
  const all = loadJson<Record<string, VideoWatchStats>>(WATCH_KEY, {});
  const prev = all[lessonId] ?? { watchedSeconds: 0, seekCount: 0 };
  const next = {
    watchedSeconds: prev.watchedSeconds + stats.watchedSeconds,
    seekCount: prev.seekCount + stats.seekCount,
  };
  all[lessonId] = next;
  saveJson(WATCH_KEY, all);
  return next;
}

export function getVideoWatch(lessonId: string): VideoWatchStats {
  const all = loadJson<Record<string, VideoWatchStats>>(WATCH_KEY, {});
  return all[lessonId] ?? { watchedSeconds: 0, seekCount: 0 };
}
