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
 * All sync functions are fire-and-forget and swallow errors: a flaky network or
 * an unconfigured backend must never block the learner's local progress.
 */
export async function syncParticipant(participant: Participant): Promise<void> {
  const client = getClient();
  if (!client) return;
  try {
    const supabase = await client;
    await supabase.from("participants").upsert({
      email: participant.email,
      name: participant.name,
      wants_certificate: participant.wantsCertificate,
      consent_at: participant.consentAt,
    });
  } catch {
    // Ignored — see note above.
  }
}

export async function syncProgress(
  email: string,
  lessonId: string,
  data: { completed?: boolean; quizScore?: number },
): Promise<void> {
  const client = getClient();
  if (!client) return;
  try {
    const supabase = await client;
    await supabase.from("progress").upsert({
      participant_email: email,
      lesson_id: lessonId,
      completed: data.completed ?? undefined,
      quiz_score: data.quizScore ?? undefined,
      updated_at: new Date().toISOString(),
    });
  } catch {
    // Ignored — see note above.
  }
}
