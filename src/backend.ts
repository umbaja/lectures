import type { Participant } from "./participant";
import type { CheckpointAnswerEntry, VideoWatchStats } from "./video-analytics";

const API_URL = import.meta.env.VITE_API_URL as string | undefined;

/**
 * All sync functions are fire-and-forget and never throw or block the UI: a
 * flaky network or an unconfigured backend must never stop the learner's
 * local progress. Failures are logged to the console instead, so they're
 * diagnosable without ever surfacing as an error in the app itself.
 */
async function post(path: string, body: Record<string, unknown>): Promise<void> {
  if (!API_URL) {
    console.warn(`[AGRI-TOUR] Backend sync skipped: VITE_API_URL not set in this build (POST ${path}).`);
    return;
  }
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      console.error(`[AGRI-TOUR] Backend sync to "${path}" failed:`, res.status, await res.text().catch(() => ""));
    }
  } catch (err) {
    console.error(`[AGRI-TOUR] Backend sync to "${path}" threw:`, err);
  }
}

export function syncParticipant(participant: Participant): Promise<void> {
  return post("/api/participants", {
    email: participant.email,
    name: participant.name,
    wantsCertificate: participant.wantsCertificate,
    consentAt: participant.consentAt,
  });
}

export function syncProgress(
  email: string,
  lessonId: string,
  data: { completed?: boolean; quizScore?: number },
): Promise<void> {
  return post("/api/progress", {
    email,
    lessonId,
    completed: data.completed ?? undefined,
    quizScore: data.quizScore ?? undefined,
  });
}

/** One row per attempt — a registered learner may answer the same checkpoint more than once. */
export function syncCheckpointAnswer(email: string, entry: CheckpointAnswerEntry): Promise<void> {
  return post("/api/checkpoint-answers", {
    email,
    lessonId: entry.lessonId,
    checkpointId: entry.checkpointId,
    selectedIndex: entry.selectedIndex,
    correct: entry.correct,
    attempt: entry.attempt,
    answeredAt: entry.answeredAt,
  });
}

/** Replaces the row with the learner's running total for this lesson's video. */
export function syncVideoWatch(
  email: string,
  lessonId: string,
  stats: VideoWatchStats & { watched?: boolean },
): Promise<void> {
  return post("/api/video-watch", {
    email,
    lessonId,
    watchedSeconds: stats.watchedSeconds,
    seekCount: stats.seekCount,
    watched: stats.watched,
  });
}
