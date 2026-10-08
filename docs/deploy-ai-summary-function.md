# Deploying the AI summary feedback feature

Lesson 4.1 has a "write a short summary" box (registered participants only)
that sends the learner's text to Claude for brief feedback. The Anthropic
API key must live on the server side — it can never be bundled into the
static site — so this runs as a **Supabase Edge Function**.

## 1. Update the database schema

Run the latest `docs/supabase-schema.sql` in your Supabase project's SQL
Editor (it's safe to re-run even if you've run an earlier version before).
This adds the `summary_reviews` table the function logs to.

## 2. Create the Edge Function (no CLI/Docker needed)

1. In your Supabase project dashboard, open **Edge Functions** in the left
   menu.
2. Click **Create a new function**, name it exactly `evaluate-summary`.
3. Open the file `supabase/functions/evaluate-summary/index.ts` from this
   repo, copy its entire contents, and paste it into the function's code
   editor, replacing the placeholder.
4. Click **Deploy**.

## 3. Add your Anthropic API key as a secret

1. Get an API key from <https://console.anthropic.com/> if you don't have
   one yet (Settings → API Keys).
2. In Supabase: **Edge Functions → Secrets** (or **Project Settings →
   Edge Functions**, depending on the dashboard version).
3. Add a secret named exactly `ANTHROPIC_API_KEY` with your key as the
   value.

`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are provided automatically to
every Edge Function in the project — you don't need to set those yourself.

## 4. Test it

1. On the live site, register as a participant and open lesson 4.1.
2. Scroll past the video to **"Write a short summary"**, write a couple of
   sentences, and click **Get AI feedback**.
3. Feedback should appear within a few seconds.
4. In Supabase → Table Editor → `summary_reviews`, a row should appear with
   the summary and the AI's feedback.

If it doesn't work, open the browser console (F12) for an `[AGRI-TOUR]`
error, and check the function's own logs in Supabase (**Edge Functions →
evaluate-summary → Logs**) for anything from the Anthropic API call.

## Cost note

This uses Claude Haiku, a small/fast/cheap model, and only registered
participants can trigger it — each call costs a fraction of a cent. Keep an
eye on usage under <https://console.anthropic.com/> if the course gets a lot
of traffic.
