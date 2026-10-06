import type { Participant } from "./participant";

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
export async function syncParticipant(participant: Participant): Promise<void> {
  if (!isConfigured) {
    console.warn("[AGRI-TOUR] Supabase sync skipped: VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY not set in this build.");
    return;
  }
  try {
    const supabase = await getClient()!;
    const { error } = await supabase.from("participants").upsert({
      email: participant.email,
      name: participant.name,
      wants_certificate: participant.wantsCertificate,
      consent_at: participant.consentAt,
    });
    if (error) console.error("[AGRI-TOUR] Supabase participant sync failed:", error);
  } catch (err) {
    console.error("[AGRI-TOUR] Supabase participant sync threw:", err);
  }
}

export async function syncProgress(
  email: string,
  lessonId: string,
  data: { completed?: boolean; quizScore?: number },
): Promise<void> {
  if (!isConfigured) {
    console.warn("[AGRI-TOUR] Supabase sync skipped: VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY not set in this build.");
    return;
  }
  try {
    const supabase = await getClient()!;
    const { error } = await supabase.from("progress").upsert({
      participant_email: email,
      lesson_id: lessonId,
      completed: data.completed ?? undefined,
      quiz_score: data.quizScore ?? undefined,
      updated_at: new Date().toISOString(),
    });
    if (error) console.error("[AGRI-TOUR] Supabase progress sync failed:", error);
  } catch (err) {
    console.error("[AGRI-TOUR] Supabase progress sync threw:", err);
  }
}
