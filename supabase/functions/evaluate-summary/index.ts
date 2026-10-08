// Supabase Edge Function: evaluate-summary
//
// Gives a learner short, encouraging AI feedback on a written summary of an
// AGRI-TOUR lesson. The Anthropic API key lives only here, as a Function
// secret (ANTHROPIC_API_KEY) — it must never be shipped to the client.
//
// Deploy via the Supabase Dashboard: Edge Functions → Create a new function
// named "evaluate-summary" → paste this file's contents → Deploy. Then set
// the ANTHROPIC_API_KEY secret (Edge Functions → Secrets). See
// docs/deploy-ai-summary-function.md for the full walkthrough.

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const MODEL = "claude-haiku-4-5-20251001";

const SYSTEM_PROMPT =
  "You are a supportive tutor for the AGRI-TOUR agritourism MOOC. A learner wrote a short summary of a " +
  "lesson. Give brief, encouraging, specific feedback (120-180 words): confirm what they got right, gently " +
  "correct anything inaccurate or missing relative to the lesson's topic, and suggest one way to deepen " +
  "their understanding. Do not grade with a score or a letter grade. Write directly to the learner, in " +
  "plain English.";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: CORS_HEADERS });
  }

  function fail(status: number, error: string) {
    return new Response(JSON.stringify({ error }), {
      status,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  let body: { lessonId?: string; lessonTitle?: string; prompt?: string; summary?: string; email?: string };
  try {
    body = await req.json();
  } catch {
    return fail(400, "Invalid JSON body.");
  }

  const { lessonId, lessonTitle, prompt, summary, email } = body;

  if (typeof summary !== "string" || summary.trim().length < 20) {
    return fail(400, "Summary is too short.");
  }
  if (summary.length > 2000) {
    return fail(400, "Summary is too long.");
  }

  const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) {
    return fail(500, "AI feedback is not configured on this deployment yet.");
  }

  const userPrompt =
    `Lesson: "${lessonTitle ?? "Untitled lesson"}"\n` +
    `Task given to the learner: "${prompt ?? ""}"\n\n` +
    `Learner's summary:\n"""\n${summary}\n"""`;

  let feedback: string;
  try {
    const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    if (!aiRes.ok) {
      console.error("Anthropic API error:", aiRes.status, await aiRes.text());
      return fail(502, "AI feedback service is unavailable right now.");
    }

    const aiData = await aiRes.json();
    feedback = aiData.content?.[0]?.text ?? "";
    if (!feedback) return fail(502, "AI feedback service returned no content.");
  } catch (err) {
    console.error("evaluate-summary: Anthropic call threw:", err);
    return fail(502, "AI feedback service is unavailable right now.");
  }

  // Best-effort logging to Supabase — never block the response on this.
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (supabaseUrl && serviceKey && email && lessonId) {
      await fetch(`${supabaseUrl}/rest/v1/summary_reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          participant_email: email,
          lesson_id: lessonId,
          summary_text: summary,
          ai_feedback: feedback,
        }),
      });
    }
  } catch (err) {
    console.error("evaluate-summary: logging to summary_reviews failed:", err);
  }

  return new Response(JSON.stringify({ feedback }), {
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
});
