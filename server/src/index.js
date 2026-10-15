import crypto from "node:crypto";
import express from "express";
import cors from "cors";
import { pool, migrate } from "./db.js";

const PASS_SCORE = 70;
// Every module's proficiency test sits on its 6th (final) lesson — m1-l6 .. m8-l6.
const QUIZ_LESSON_IDS = Array.from({ length: 8 }, (_, i) => `m${i + 1}-l6`);
const VERIFICATION_TOKEN_TTL_HOURS = 48;

function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}

function generateCertificateId() {
  return crypto.randomBytes(9).toString("base64url");
}

/** Fire-and-log: a failed verification email should never crash registration. */
async function sendVerificationEmail(email, name, token) {
  const apiKey = process.env.RESEND_API_KEY;
  const frontendUrl = (process.env.FRONTEND_URL || "").replace(/\/+$/, "");
  if (!apiKey || !frontendUrl) {
    console.warn("sendVerificationEmail: RESEND_API_KEY or FRONTEND_URL not set — skipping email send.");
    return false;
  }
  const verifyUrl = `${frontendUrl}/?verify=${encodeURIComponent(token)}&email=${encodeURIComponent(email)}`;
  const from = process.env.EMAIL_FROM || "AGRI-TOUR MOOC <onboarding@resend.dev>";
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from,
        to: [email],
        subject: "Confirm your email — AGRI-TOUR MOOC",
        html:
          `<p>Hi ${escapeHtmlForEmail(name)},</p>` +
          `<p>Thanks for registering for the AGRI-TOUR MOOC. Confirm your email to unlock the module tests ` +
          `and certificate:</p>` +
          `<p><a href="${verifyUrl}">Confirm my email</a></p>` +
          `<p>This link expires in ${VERIFICATION_TOKEN_TTL_HOURS} hours. If you didn't request this, you can ` +
          `ignore this email.</p>`,
      }),
    });
    if (!res.ok) {
      console.error("sendVerificationEmail: Resend API error:", res.status, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error("sendVerificationEmail: threw:", err);
    return false;
  }
}

function escapeHtmlForEmail(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

const SYSTEM_PROMPT =
  "You are grading a short learner summary for the AGRI-TOUR agritourism MOOC, to decide whether the lesson " +
  "can be marked complete — the learner cannot mark it complete themselves, only you can. Call the " +
  "evaluate_summary tool with your judgment. Set passed=true only if the summary shows genuine understanding " +
  "of the lesson's key ideas in the learner's own words — not a near-empty response, a copy of the prompt, or " +
  "something clearly off-topic. Be a fair but real check: vague or generic summaries should not pass. Write " +
  "feedback directly to the learner (120-180 words, plain English): confirm what they got right, note " +
  "anything inaccurate or missing, and if it didn't pass, say plainly what to add or fix to pass next time.";

const EVALUATE_SUMMARY_TOOL = {
  name: "evaluate_summary",
  description: "Record the grading decision for a learner's lesson summary.",
  input_schema: {
    type: "object",
    properties: {
      passed: {
        type: "boolean",
        description: "True only if the summary demonstrates real understanding of the lesson's key ideas.",
      },
      feedback: {
        type: "string",
        description: "Brief, encouraging, specific feedback for the learner (120-180 words).",
      },
    },
    required: ["passed", "feedback"],
  },
};

const app = express();
// Writes are tied to whatever email the client sends (no further auth layer),
// the same openness model the earlier Supabase anon-key setup had — so CORS
// is intentionally permissive rather than a real security boundary.
app.use(cors());
app.use(express.json({ limit: "100kb" }));

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/api/participants", async (req, res) => {
  const { email, name, wantsCertificate, consentAt } = req.body ?? {};
  if (!email || !name) return res.status(400).json({ error: "email and name are required" });
  try {
    const existing = await pool.query(
      `select email_verified, certificate_id from participants where email = $1`,
      [email],
    );
    const alreadyVerified = existing.rows[0]?.email_verified === true;
    const certificateId = existing.rows[0]?.certificate_id || generateCertificateId();

    let emailSent = false;
    if (alreadyVerified) {
      await pool.query(
        `update participants set name = $2, wants_certificate = $3, consent_at = $4 where email = $1`,
        [email, name, Boolean(wantsCertificate), consentAt || new Date().toISOString()],
      );
    } else {
      const token = generateToken();
      const expires = new Date(Date.now() + VERIFICATION_TOKEN_TTL_HOURS * 3600 * 1000).toISOString();
      await pool.query(
        `insert into participants
           (email, name, wants_certificate, consent_at, certificate_id, verification_token, verification_token_expires)
         values ($1, $2, $3, $4, $5, $6, $7)
         on conflict (email) do update set
           name = $2, wants_certificate = $3, consent_at = $4,
           certificate_id = coalesce(participants.certificate_id, $5),
           verification_token = $6, verification_token_expires = $7`,
        [email, name, Boolean(wantsCertificate), consentAt || new Date().toISOString(), certificateId, token, expires],
      );
      emailSent = await sendVerificationEmail(email, name, token);
    }
    res.json({ ok: true, emailVerified: alreadyVerified, emailSent, certificateId });
  } catch (err) {
    console.error("participants upsert failed:", err);
    res.status(500).json({ error: "database error" });
  }
});

app.get("/api/verify-email", async (req, res) => {
  const { token, email } = req.query;
  if (!token || !email) return res.status(400).json({ error: "token and email are required" });
  try {
    const result = await pool.query(
      `update participants
       set email_verified = true, verification_token = null, verification_token_expires = null
       where email = $1 and verification_token = $2 and verification_token_expires > now()
       returning name, email`,
      [email, token],
    );
    if (result.rows.length === 0) {
      return res.status(400).json({ error: "This verification link is invalid or has expired." });
    }
    res.json({ ok: true, name: result.rows[0].name, email: result.rows[0].email });
  } catch (err) {
    console.error("verify-email failed:", err);
    res.status(500).json({ error: "database error" });
  }
});

app.get("/api/participants/:email/status", async (req, res) => {
  try {
    const result = await pool.query(
      `select email_verified, certificate_id from participants where email = $1`,
      [req.params.email],
    );
    if (result.rows.length === 0) return res.status(404).json({ error: "not found" });
    res.json({ emailVerified: result.rows[0].email_verified, certificateId: result.rows[0].certificate_id });
  } catch (err) {
    console.error("participant status lookup failed:", err);
    res.status(500).json({ error: "database error" });
  }
});

/** Public, read-only: what a LinkedIn/Facebook visitor sees when they open a shared certificate link. */
app.get("/api/certificate/:certificateId", async (req, res) => {
  try {
    const participantResult = await pool.query(
      `select email, name, wants_certificate, email_verified, consent_at
       from participants where certificate_id = $1`,
      [req.params.certificateId],
    );
    if (participantResult.rows.length === 0) return res.status(404).json({ error: "not found" });
    const participant = participantResult.rows[0];

    const progressResult = await pool.query(
      `select lesson_id, completed, quiz_score from progress
       where participant_email = $1 and lesson_id = any($2::text[])`,
      [participant.email, QUIZ_LESSON_IDS],
    );
    const byLesson = Object.fromEntries(progressResult.rows.map((r) => [r.lesson_id, r]));
    const modulesPassed = QUIZ_LESSON_IDS.filter(
      (id) => byLesson[id]?.completed === true && (byLesson[id]?.quiz_score ?? 0) >= PASS_SCORE,
    ).length;
    const earned = participant.wants_certificate && participant.email_verified && modulesPassed === QUIZ_LESSON_IDS.length;

    if (!earned) return res.status(404).json({ error: "Certificate not found or not yet earned." });

    res.json({
      name: participant.name,
      courseTitle: "Agritourism applied in the Pacific",
      modulesPassed,
      totalModules: QUIZ_LESSON_IDS.length,
      issuedAt: participant.consent_at,
    });
  } catch (err) {
    console.error("certificate lookup failed:", err);
    res.status(500).json({ error: "database error" });
  }
});

app.post("/api/progress", async (req, res) => {
  const { email, lessonId, completed, quizScore } = req.body ?? {};
  if (!email || !lessonId) return res.status(400).json({ error: "email and lessonId are required" });
  try {
    await pool.query(
      `insert into progress (participant_email, lesson_id, completed, quiz_score, updated_at)
       values ($1, $2, $3, $4, now())
       on conflict (participant_email, lesson_id)
       do update set
         completed = coalesce($3, progress.completed),
         quiz_score = coalesce($4, progress.quiz_score),
         updated_at = now()`,
      [email, lessonId, completed ?? null, quizScore ?? null],
    );
    res.json({ ok: true });
  } catch (err) {
    console.error("progress upsert failed:", err);
    res.status(500).json({ error: "database error" });
  }
});

app.post("/api/checkpoint-answers", async (req, res) => {
  const { email, lessonId, checkpointId, selectedIndex, correct, attempt, answeredAt } = req.body ?? {};
  if (!email || !lessonId || !checkpointId) return res.status(400).json({ error: "missing fields" });
  try {
    await pool.query(
      `insert into checkpoint_answers
         (participant_email, lesson_id, checkpoint_id, selected_index, correct, attempt, answered_at)
       values ($1, $2, $3, $4, $5, $6, $7)`,
      [email, lessonId, checkpointId, selectedIndex, Boolean(correct), attempt, answeredAt || new Date().toISOString()],
    );
    res.json({ ok: true });
  } catch (err) {
    console.error("checkpoint_answers insert failed:", err);
    res.status(500).json({ error: "database error" });
  }
});

app.post("/api/video-watch", async (req, res) => {
  const { email, lessonId, watchedSeconds, seekCount, watched } = req.body ?? {};
  if (!email || !lessonId) return res.status(400).json({ error: "missing fields" });
  try {
    await pool.query(
      `insert into video_watch (participant_email, lesson_id, watched_seconds, seek_count, watched, updated_at)
       values ($1, $2, $3, $4, coalesce($5, false), now())
       on conflict (participant_email, lesson_id)
       do update set
         watched_seconds = $3,
         seek_count = $4,
         watched = coalesce($5, video_watch.watched),
         updated_at = now()`,
      [email, lessonId, watchedSeconds ?? 0, seekCount ?? 0, watched ?? null],
    );
    res.json({ ok: true });
  } catch (err) {
    console.error("video_watch upsert failed:", err);
    res.status(500).json({ error: "database error" });
  }
});

app.post("/api/evaluate-summary", async (req, res) => {
  const { lessonId, lessonTitle, prompt, summary, email } = req.body ?? {};

  if (typeof summary !== "string" || summary.trim().length < 20) {
    return res.status(400).json({ error: "Summary is too short." });
  }
  if (summary.length > 2000) {
    return res.status(400).json({ error: "Summary is too long." });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "AI feedback is not configured on this server." });

  const userPrompt =
    `Lesson: "${lessonTitle ?? "Untitled lesson"}"\n` +
    `Task given to the learner: "${prompt ?? ""}"\n\n` +
    `Learner's summary:\n"""\n${summary}\n"""`;

  let feedback;
  let passed;
  try {
    const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        tools: [EVALUATE_SUMMARY_TOOL],
        tool_choice: { type: "tool", name: "evaluate_summary" },
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    if (!aiRes.ok) {
      console.error("Anthropic API error:", aiRes.status, await aiRes.text());
      return res.status(502).json({ error: "AI feedback service is unavailable right now." });
    }

    const aiData = await aiRes.json();
    const toolUse = aiData.content?.find((block) => block.type === "tool_use");
    if (!toolUse || typeof toolUse.input?.feedback !== "string" || typeof toolUse.input?.passed !== "boolean") {
      console.error("evaluate-summary: unexpected Anthropic response shape:", JSON.stringify(aiData));
      return res.status(502).json({ error: "AI feedback service returned an unexpected result." });
    }
    feedback = toolUse.input.feedback;
    passed = toolUse.input.passed;
  } catch (err) {
    console.error("evaluate-summary: Anthropic call threw:", err);
    return res.status(502).json({ error: "AI feedback service is unavailable right now." });
  }

  if (email && lessonId) {
    try {
      await pool.query(
        `insert into summary_reviews (participant_email, lesson_id, summary_text, ai_feedback, passed) values ($1, $2, $3, $4, $5)`,
        [email, lessonId, summary, feedback, passed],
      );
    } catch (err) {
      console.error("summary_reviews insert failed:", err);
    }
  }

  res.json({ feedback, passed });
});

const port = process.env.PORT || 3000;

migrate()
  .then(() => {
    console.log("Database schema is up to date.");
    app.listen(port, () => console.log(`AGRI-TOUR API listening on port ${port}`));
  })
  .catch((err) => {
    console.error("Migration failed — not starting the server:", err);
    process.exit(1);
  });
