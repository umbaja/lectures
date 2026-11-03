# AGRI-TOUR API

Small Express + Postgres backend for the AGRI-TOUR MOOC frontend
(`umbaja/lectures`). Handles participant registration, progress,
in-video checkpoint answers, video-watch stats, and AI summary feedback
(via the Anthropic API) for lesson 4.1.

Deployment instructions: see `../docs/deploy-railway-backend.md`.

## Local development

```
npm install
DATABASE_URL=postgres://user:pass@localhost:5432/agritour npm start
```

The server creates any missing tables on startup (`db/schema.sql`) — no
separate migration step needed.

## Environment variables

- `DATABASE_URL` — Postgres connection string (Railway provides this
  automatically when a Postgres service is in the same project).
- `ANTHROPIC_API_KEY` — required for `/api/evaluate-summary`; every other
  endpoint works without it.
- `RESEND_API_KEY` — Resend API key for the confirmation emails.
- `EMAIL_FROM` — sender address on a domain verified in Resend. If unset,
  `onboarding@resend.dev` is used, which Resend only delivers to the
  Resend account owner's own address — so other participants get no email.
- `FRONTEND_URL` — public course URL used in the confirmation link.
- `PORT` — defaults to 3000 (Railway sets this itself).
- `PGSSL` — set to `true` if connecting to Postgres over a connection that
  requires SSL (e.g. Railway's public proxy host) and you see SSL errors.
