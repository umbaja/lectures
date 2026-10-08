import { loadJson, saveJson } from "./storage";

const DRAFT_KEY = "course-summary-drafts";

export function getSummaryDraft(lessonId: string): string {
  const all = loadJson<Record<string, string>>(DRAFT_KEY, {});
  return all[lessonId] ?? "";
}

export function saveSummaryDraft(lessonId: string, text: string) {
  const all = loadJson<Record<string, string>>(DRAFT_KEY, {});
  all[lessonId] = text;
  saveJson(DRAFT_KEY, all);
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export interface SummaryFeedbackRequest {
  lessonId: string;
  lessonTitle: string;
  prompt: string;
  summary: string;
  email: string;
}

/**
 * Calls the `evaluate-summary` Supabase Edge Function, which holds the
 * Anthropic API key server-side (see docs/deploy-ai-summary-function.md) —
 * the key can never live in this client bundle.
 */
export async function requestSummaryFeedback(req: SummaryFeedbackRequest): Promise<string> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("AI feedback isn't configured on this deployment yet (missing Supabase env vars).");
  }
  const res = await fetch(`${SUPABASE_URL}/functions/v1/evaluate-summary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      apikey: SUPABASE_ANON_KEY,
    },
    body: JSON.stringify(req),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    throw new Error(data?.error ?? `Edge function returned ${res.status}`);
  }
  if (typeof data?.feedback !== "string") {
    throw new Error("Edge function returned no feedback.");
  }
  return data.feedback;
}
