-- Waitlist for the marketing site (capybudget-mkt). Copy into capybudget/supabase/migrations/
-- as a new forward migration (e.g. <timestamp>_waitlist_signups.sql) and apply it out-of-band.

create extension if not exists citext;

create table public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email citext not null unique,
  source text,
  referrer text,
  created_at timestamptz not null default now()
);

comment on table public.waitlist_signups is
  'Marketing-site waitlist. Written by capybudget-mkt with the secret key; no client access.';

-- RLS on with no policies, and no grants to anon/authenticated: only the service role can read or write.
alter table public.waitlist_signups enable row level security;
revoke all on table public.waitlist_signups from anon, authenticated;
