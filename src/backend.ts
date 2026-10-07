import type { Participant } from "./participant";
import type { CheckpointAnswerEntry, VideoWatchStats } from "./video-analytics";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

const isConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

let clientPromise: Promise<import("@supabase/supabase-js").SupabaseClient> | null = null;

function getClient() {
  if (!isConfigured) return null;
  if (!clientPromise) {
    clientPromise = import("@supabase/supabase-js").then(({ createClient }) =>
      createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!),
    );
  }
  return clientPromise;
}

/**
 * All sync functions are fire-and-forget and never throw or block the UI: a
 * flaky network or an unconfigured backend must never stop the learner's
 * local progress. Failures are logged to the console instead, so they're
 * diagnosable without ever surfacing as an error in the app itself.
 */
async function upsert(table: string, row: Record<string, unknown>): Promise<void> {
  if (!isConfigured) {
    console.warn("[AGRI-TOUR] Supabase sync skipped: VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY not set in this build.");
    return;
  }
  try {
    const supabase = await getClient()!;
    const { error } = await supabase.from(table).upsert(row);
    if (error) console.error(`[AGRI-TOUR] Supabase sync to "${table}" failed:`, error);
  } catch (err) {
    console.error(`[AGRI-TOUR] Supabase sync to "${table}" threw:`, err);
  }
}

async function insert(table: string, row: Record<string, unknown>): Promise<void> {
  if (!isConfigured) {
    console.warn("[AGRI-TOUR] Supabase sync skipped: VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY not set in this build.");
    return;
  }
  try {
    const supabase = await getClient()!;
    const { error } = await supabase.from(table).insert(row);
    if (error) console.error(`[AGRI-TOUR] Supabase sync to "${table}" failed:`, error);
  } catch (err) {
    console.error(`[AGRI-TOUR] Supabase sync to "${table}" threw:`, err);
  }
}

export function syncParticipant(participant: Participant): Promise<void> {
  return upsert("participants", {
    email: participant.email,
    name: participant.name,
    wants_certificate: participant.wantsCertificate,
    consent_at: participant.consentAt,
  });
}

export function syncProgress(
  email: string,
  lessonId: string,
  data: { completed?: boolean; quizScore?: number },
): Promise<void> {
  return upsert("progress", {
    participant_email: email,
    lesson_id: lessonId,
    completed: data.completed ?? undefined,
    quiz_score: data.quizScore ?? undefined,
    updated_at: new Date().toISOString(),
  });
}

/** One row per attempt — a registered learner may answer the same checkpoint more than once. */
export function syncCheckpointAnswer(email: string, entry: CheckpointAnswerEntry): Promise<void> {
  return insert("checkpoint_answers", {
    participant_email: email,
    lesson_id: entry.lessonId,
    checkpoint_id: entry.checkpointId,
    selected_index: entry.selectedIndex,
    correct: entry.correct,
    attempt: entry.attempt,
    answered_at: entry.answeredAt,
  });
}

/** Replaces the row with the learner's running total for this lesson's video. */
export function syncVideoWatch(email: string, lessonId: string, stats: VideoWatchStats): Promise<void> {
  return upsert("video_watch", {
    participant_email: email,
    lesson_id: lessonId,
    watched_seconds: stats.watchedSeconds,
    seek_count: stats.seekCount,
    updated_at: new Date().toISOString(),
  });
}
