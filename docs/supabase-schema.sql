-- AGRI-TOUR MOOC — Supabase schema for participant registration + progress tracking.
-- Run this once in the Supabase project's SQL editor, then put the project's
-- URL and anon public key into VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
-- (locally in .env, and as GitHub Actions repo secrets for the live deploy).

create table if not exists participants (
  email text primary key,
  name text not null,
  wants_certificate boolean not null default false,
  consent_at timestamptz not null default now()
);

create table if not exists progress (
  participant_email text not null references participants(email),
  lesson_id text not null,
  completed boolean,
  quiz_score int,
  updated_at timestamptz not null default now(),
  primary key (participant_email, lesson_id)
);

alter table participants enable row level security;
alter table progress enable row level security;

-- The app only ever reads/writes its own visitor's row using the public anon
-- key, so anon is allowed to insert/update but never to select — partners
-- read the data from the Supabase dashboard (or a service-role key), not the
-- public site.
create policy "anon can register" on participants
  for insert to anon with check (true);
create policy "anon can update own registration" on participants
  for update to anon using (true);

create policy "anon can write progress" on progress
  for insert to anon with check (true);
create policy "anon can update own progress" on progress
  for update to anon using (true);
