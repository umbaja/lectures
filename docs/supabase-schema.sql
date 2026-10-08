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

-- One row per attempt: a registered learner may answer the same in-video
-- checkpoint more than once (a wrong answer rewinds them for another try).
create table if not exists checkpoint_answers (
  id bigint generated always as identity primary key,
  participant_email text not null references participants(email),
  lesson_id text not null,
  checkpoint_id text not null,
  selected_index int not null,
  correct boolean not null,
  attempt int not null,
  answered_at timestamptz not null default now()
);

-- Running total per lesson's video: how long they actually watched, and how
-- many times they jumped the seek bar more than a couple of seconds.
create table if not exists video_watch (
  participant_email text not null references participants(email),
  lesson_id text not null,
  watched_seconds int not null default 0,
  seek_count int not null default 0,
  watched boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (participant_email, lesson_id)
);

-- Safe to re-run: adds the column if an earlier version of this file already
-- created the table without it.
alter table video_watch add column if not exists watched boolean not null default false;

alter table participants enable row level security;
alter table progress enable row level security;
alter table checkpoint_answers enable row level security;
alter table video_watch enable row level security;

-- The app only ever reads/writes its own visitor's row using the public anon
-- key, so anon is allowed to insert/update but never to select — partners
-- read the data from the Supabase dashboard (or a service-role key), not the
-- public site.
-- Each policy is dropped first so this whole file is safe to re-run as-is
-- (e.g. after a new table/policy is added later) without "already exists" errors.
drop policy if exists "anon can register" on participants;
create policy "anon can register" on participants
  for insert to anon with check (true);
drop policy if exists "anon can update own registration" on participants;
create policy "anon can update own registration" on participants
  for update to anon using (true);

drop policy if exists "anon can write progress" on progress;
create policy "anon can write progress" on progress
  for insert to anon with check (true);
drop policy if exists "anon can update own progress" on progress;
create policy "anon can update own progress" on progress
  for update to anon using (true);

drop policy if exists "anon can log checkpoint answers" on checkpoint_answers;
create policy "anon can log checkpoint answers" on checkpoint_answers
  for insert to anon with check (true);

drop policy if exists "anon can write video watch stats" on video_watch;
create policy "anon can write video watch stats" on video_watch
  for insert to anon with check (true);
drop policy if exists "anon can update own video watch stats" on video_watch;
create policy "anon can update own video watch stats" on video_watch
  for update to anon using (true);
