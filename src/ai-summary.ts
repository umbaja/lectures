import { loadJson, saveJson } from "./storage";

const DRAFT_KEY = "course-summary-drafts";
const FEEDBACK_KEY = "course-summary-feedback";

export function getSummaryDraft(lessonId: string): string {
  const all = loadJson<Record<string, string>>(DRAFT_KEY, {});
  return all[lessonId] ?? "";
}

export function saveSummaryDraft(lessonId: string, text: string) {
  const all = loadJson<Record<string, string>>(DRAFT_KEY, {});
  all[lessonId] = text;
  saveJson(DRAFT_KEY, all);
}

/** The AI's last feedback text for this lesson, shown again once the lesson is complete. */
export function getSummaryFeedback(lessonId: string): string {
  const all = loadJson<Record<string, string>>(FEEDBACK_KEY, {});
  return all[lessonId] ?? "";
}

export function saveSummaryFeedback(lessonId: string, text: string) {
  const all = loadJson<Record<string, string>>(FEEDBACK_KEY, {});
  all[lessonId] = text;
  saveJson(FEEDBACK_KEY, all);
}

const API_URL = import.meta.env.VITE_API_URL as string | undefined;

export interface SummaryFeedbackRequest {
  lessonId: string;
  lessonTitle: string;
  prompt: string;
  summary: string;
  email: string;
}

export interface SummaryFeedbackResult {
  feedback: string;
  /** True only if the AI judged the summary as showing real understanding — this is what marks the lesson complete, not the learner. */
  passed: boolean;
}

/**
 * Calls the backend's /api/evaluate-summary endpoint, which holds the
 * Anthropic API key server-side (see docs/deploy-railway-backend.md) — the
 * key can never live in this client bundle.
 */
export async function requestSummaryFeedback(req: SummaryFeedbackRequest): Promise<SummaryFeedbackResult> {
  if (!API_URL) {
    throw new Error("AI feedback isn't configured on this deployment yet (missing VITE_API_URL).");
  }
  const res = await fetch(`${API_URL}/api/evaluate-summary`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    throw new Error(data?.error ?? `Backend returned ${res.status}`);
  }
  if (typeof data?.feedback !== "string" || typeof data?.passed !== "boolean") {
    throw new Error("Backend returned an unexpected response.");
  }
  return { feedback: data.feedback, passed: data.passed };
}
