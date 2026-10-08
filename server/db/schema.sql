-- AGRI-TOUR MOOC — backend schema (Railway Postgres).
-- Applied automatically on every server startup (see src/db.js) — every
-- statement is safe to re-run.

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

create table if not exists summary_reviews (
  id bigint generated always as identity primary key,
  participant_email text not null references participants(email),
  lesson_id text not null,
  summary_text text not null,
  ai_feedback text not null,
  passed boolean,
  created_at timestamptz not null default now()
);

-- Safe to re-run: adds the column if an earlier version of this file already
-- created the table without it.
alter table summary_reviews add column if not exists passed boolean;
