import type { Participant } from "./participant";
import type { CheckpointAnswerEntry, VideoWatchStats } from "./video-analytics";

const API_URL = import.meta.env.VITE_API_URL as string | undefined;

export function isBackendConfigured(): boolean {
  return Boolean(API_URL);
}

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

export interface RegisterResult {
  ok: boolean;
  emailVerified: boolean;
  emailSent: boolean;
  certificateId: string;
}

/** Unlike the other sync calls, registration result is used to drive the UI (not fire-and-forget). */
export async function syncParticipant(participant: Participant): Promise<RegisterResult | null> {
  if (!API_URL) {
    console.warn("[AGRI-TOUR] Backend sync skipped: VITE_API_URL not set in this build (POST /api/participants).");
    return null;
  }
  try {
    const res = await fetch(`${API_URL}/api/participants`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: participant.email,
        name: participant.name,
        wantsCertificate: participant.wantsCertificate,
        consentAt: participant.consentAt,
      }),
    });
    if (!res.ok) {
      console.error("[AGRI-TOUR] Registration failed:", res.status, await res.text().catch(() => ""));
      return null;
    }
    return (await res.json()) as RegisterResult;
  } catch (err) {
    console.error("[AGRI-TOUR] Registration request threw:", err);
    return null;
  }
}

export async function verifyEmail(token: string, email: string): Promise<{ ok: boolean; certificateId?: string }> {
  if (!API_URL) return { ok: false };
  try {
    const res = await fetch(
      `${API_URL}/api/verify-email?token=${encodeURIComponent(token)}&email=${encodeURIComponent(email)}`,
    );
    if (!res.ok) return { ok: false };
    const data = (await res.json()) as { ok: boolean; email: string; name: string };
    if (!data.ok) return { ok: false };
    const status = await checkParticipantStatus(email);
    return { ok: true, certificateId: status?.certificateId };
  } catch (err) {
    console.error("[AGRI-TOUR] Email verification request threw:", err);
    return { ok: false };
  }
}

export interface PublicCertificate {
  name: string;
  courseTitle: string;
  modulesPassed: number;
  totalModules: number;
  issuedAt: string;
}

/** Public lookup by certificate id — no login needed, used for the shareable certificate link. */
export async function getPublicCertificate(certificateId: string): Promise<PublicCertificate | null> {
  if (!API_URL) return null;
  try {
    const res = await fetch(`${API_URL}/api/certificate/${encodeURIComponent(certificateId)}`);
    if (!res.ok) return null;
    return (await res.json()) as PublicCertificate;
  } catch (err) {
    console.error("[AGRI-TOUR] Public certificate request threw:", err);
    return null;
  }
}

export async function checkParticipantStatus(
  email: string,
): Promise<{ emailVerified: boolean; certificateId: string } | null> {
  if (!API_URL) return null;
  try {
    const res = await fetch(`${API_URL}/api/participants/${encodeURIComponent(email)}/status`);
    if (!res.ok) return null;
    return (await res.json()) as { emailVerified: boolean; certificateId: string };
  } catch (err) {
    console.error("[AGRI-TOUR] Participant status request threw:", err);
    return null;
  }
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
