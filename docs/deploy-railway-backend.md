# Deploying the backend to Railway

This replaced the earlier Supabase-based setup. One Node.js service plus
its own Postgres database, both hosted on Railway, now handle everything
the app sends to a backend — participant registration, progress,
video-watch stats, checkpoint answers, and the AI summary feedback on
lesson 4.1. The backend's source is in `server/` in this repo.

## 1. Create the Railway project

1. Go to <https://railway.app> and log in.
2. **New Project** → **Deploy from GitHub repo** → pick `umbaja/lectures`.
3. Railway will try to build the whole repo as one service — that's wrong,
   the backend lives in the `server/` subfolder. Open the new service's
   **Settings** tab and set **Root Directory** to `server`.
4. Still in Settings, the **Start Command** should be picked up from
   `server/package.json` (`npm start`) automatically — leave it as is.

## 2. Add a Postgres database

1. In the same Railway project: **New** → **Database** → **Add PostgreSQL**.
2. Railway creates a `DATABASE_URL` variable and shares it with every
   service in the project automatically — the backend will pick it up
   without any manual copying.

## 3. Set the Anthropic API key

1. Open the backend service → **Variables** tab.
2. Add `ANTHROPIC_API_KEY` with your key from
   <https://console.anthropic.com/>.

## 4. Deploy and get the public URL

1. Railway deploys automatically on every push to `main` once connected.
2. Once it's deployed, go to the service's **Settings → Networking** and
   click **Generate Domain** to get a public URL, e.g.
   `https://agritour-api-production.up.railway.app`.
3. Visit `<that URL>/health` — it should show `{"ok":true}`. The very
   first deploy also creates all the database tables automatically (the
   server does this itself on startup, and it's safe to redeploy any
   time — it only creates what's missing).

## 5. Point the site at it

1. On GitHub: <https://github.com/umbaja/lectures/settings/secrets/actions>
2. Add a repository secret named `VITE_API_URL` set to the Railway URL
   from step 4 (no trailing slash).
3. The old `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` secrets can be
   deleted — they're no longer used.
4. Trigger a redeploy of the site (any push to `main`) so it picks up the
   new variable.

## Testing

Register on the live site, answer a checkpoint question, and write an AI
summary on lesson 4.1. Then in Railway, open the Postgres database →
**Data** tab and check the `participants`, `checkpoint_answers`,
`video_watch` and `summary_reviews` tables for new rows.

## Local development

```
cd server
npm install
DATABASE_URL=postgres://user:pass@localhost:5432/agritour npm start
```

## Cost

Railway's free trial credit easily covers a course pilot. After that it's
usage-based — a small always-on Node service plus a small Postgres
instance is typically a few dollars a month. Keep an eye on the Railway
usage dashboard.
