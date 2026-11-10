# AGRI-TOUR MOOC — project notes for Claude

Online course (MOOC) for the EU co-funded AGRI-TOUR project: 8 modules,
each with lessons, videos with in-video checkpoints, supplementary
materials, a 10-question proficiency test and a certificate.

The project owner communicates in **Slovak** — reply in Slovak unless asked
otherwise. Course content itself is in English.

## Repository layout

- `src/` — frontend (Vite + plain TypeScript, no framework)
  - `data/course-content.ts` — **all course content** (modules, lessons,
    quizzes, materials). Most content edits happen here.
  - `main.ts` — UI, routing, registration form, email-confirmation flow
  - `course.ts` — content types; `progress.ts`, `participant.ts`,
    `storage.ts` — localStorage state
  - `backend.ts` — calls to the API (only when `VITE_API_URL` is set;
    otherwise the site runs in local-only mode)
  - `video-player.ts`, `video-analytics.ts`, `micro-quiz.ts`,
    `worksheets.ts`, `certificate.ts`, `ai-summary.ts`
- `server/` — backend API (Express + Postgres), see `server/README.md`
  - `src/index.js` — all endpoints; `db/schema.sql` — tables (created
    automatically on startup)
- `docs/` — `deploy-railway-backend.md` (backend + email setup),
  `agri_tour_master_content_matrix.xlsx` (content matrix)
- `public/` — logos (AGRI-TOUR, EU co-funded)

## Modules and owner partners

| # | Module | Owner |
|---|---|---|
| 1 | Neuroscience of Food | IVI |
| 2 | Cultural sustainability of food | UCSC (Università Cattolica del Sacro Cuore; "UNICATT" in D3.2) — **not** UNISG |
| 3 | Promoting Rural Culture in Islands | NewEdu |
| 4 | Precision Agriculture for Micro-Farms | SUA |
| 5 | Samoan Culture of Food | NUS |
| 6 | Women's empowerment & leadership | FNU |
| 7 | Micro agri-tourism in remote islands | USP |
| 8 | Environmental rights in remote Pacific islands | NUV |

D3.2 guidelines per module: intro (~100–150 words), 6 learning units,
≥ 4 supplementary materials in ≥ 3 formats, 10-item test (4 options,
pass ≥ 7/10), reference list. The module test is lesson `m<N>-l6`.

## Where things run (production)

- **Frontend:** GitHub Pages — https://umbaja.github.io/lectures
  - Deployed by `.github/workflows/deploy-pages.yml` on every push to
    `main`. Built with `--base=/lectures/`.
  - `VITE_API_URL` comes from the GitHub Actions secret of the same name.
- **Backend:** Railway (Express service + Postgres), redeploys
  automatically on push to `main`. Health check: `<api-url>/health` →
  `{"ok":true}` (the root `/` returns "Cannot GET /", which is normal).
- **Email confirmation:** Resend, with a verified sending domain.
  Railway variables: `RESEND_API_KEY`, `EMAIL_FROM` (sender on the verified
  domain), `FRONTEND_URL` (`https://umbaja.github.io/lectures`).
  Without a verified domain Resend only delivers to the account owner —
  that was the cause of "emails only reach me" earlier.
- **AI summary feedback** (`/api/evaluate-summary`): Anthropic API,
  `ANTHROPIC_API_KEY` in Railway.

Secrets live only in Railway / GitHub settings — never commit them.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # vite build + type check (run before pushing)
```

Backend locally: see `server/README.md`.

## Working conventions

- `main` is what's live: pushing to `main` deploys both the site and the
  backend. Develop on a branch and push to `main` only when the owner says so.
- Keep content edits in `src/data/course-content.ts`; run `npm run build`
  to catch type errors.
