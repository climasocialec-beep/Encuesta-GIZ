-- Esquema inicial para Supabase/PostgreSQL.
-- La interfaz actualmente funciona en modo demo; esta migración será la fuente
-- de verdad al conectar autenticación y tiempo real.

create extension if not exists "pgcrypto";

create type public.app_role as enum ('operator', 'supervisor', 'admin');
create type public.campaign_status as enum ('active', 'paused', 'closed');
create type public.contact_status as enum ('not_managed', 'pending', 'effective', 'no_answer', 'wrong_number', 'refused', 'discarded', 'closed');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role public.app_role not null default 'operator',
  active boolean not null default true,
  last_seen_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.campaigns (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  status public.campaign_status not null default 'active',
  timezone text not null default 'America/Guayaquil',
  created_at timestamptz not null default now()
);

create table public.outcomes (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text not null,
  category text not null check (category in ('effective', 'ineffective', 'pending')),
  is_terminal boolean not null default false,
  requires_retry boolean not null default false,
  active boolean not null default true,
  display_order integer not null default 0
);

create table public.contacts (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  external_id text not null,
  name text not null,
  phone_raw text,
  phone_normalized text,
  parish text,
  location text,
  extra_data jsonb not null default '{}'::jsonb,
  assigned_operator_id uuid references public.profiles(id),
  current_status public.contact_status not null default 'not_managed',
  attempt_count integer not null default 0,
  next_attempt_at timestamptz,
  last_attempt_at timestamptz,
  last_attempt_by uuid references public.profiles(id),
  last_outcome_id uuid references public.outcomes(id),
  raffle_email text,
  proof_received_at timestamptz,
  proof_type text check (proof_type is null or proof_type in ('whatsapp_screenshot', 'other')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (campaign_id, external_id)
);

create table public.contact_assignments (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references public.contacts(id) on delete cascade,
  operator_id uuid not null references public.profiles(id),
  assigned_by uuid not null references public.profiles(id),
  assigned_at timestamptz not null default now(),
  unassigned_at timestamptz,
  reason text
);

create table public.contact_locks (
  contact_id uuid primary key references public.contacts(id) on delete cascade,
  operator_id uuid not null references public.profiles(id),
  session_token uuid not null,
  locked_at timestamptz not null default now(),
  expires_at timestamptz not null,
  last_heartbeat_at timestamptz not null default now()
);

create table public.call_attempts (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references public.contacts(id) on delete cascade,
  operator_id uuid not null references public.profiles(id),
  attempt_number integer not null,
  outcome_id uuid not null references public.outcomes(id),
  notes text,
  started_at timestamptz,
  completed_at timestamptz not null default now(),
  idempotency_key uuid not null unique,
  created_at timestamptz not null default now()
);

create table public.audit_events (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id),
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table public.operator_shifts (
  id uuid primary key default gen_random_uuid(),
  operator_id uuid not null references public.profiles(id),
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  notes text,
  created_at timestamptz not null default now(),
  check (ended_at is null or ended_at >= started_at)
);

create index contacts_campaign_status_idx on public.contacts(campaign_id, current_status);
create index contacts_operator_idx on public.contacts(assigned_operator_id, current_status);
create index attempts_contact_idx on public.call_attempts(contact_id, created_at desc);
create index attempts_operator_idx on public.call_attempts(operator_id, created_at desc);
create index shifts_operator_idx on public.operator_shifts(operator_id, started_at desc);

insert into public.outcomes (code, name, category, is_terminal, requires_retry, display_order) values
  ('effective', 'Llamada efectiva', 'effective', true, false, 1),
  ('no_answer', 'No contesta', 'pending', false, true, 2),
  ('wrong_number', 'Número incorrecto', 'ineffective', true, false, 3),
  ('callback', 'Solicita devolución de llamada', 'pending', false, true, 4),
  ('refused', 'No desea participar', 'ineffective', true, false, 5);

alter table public.profiles enable row level security;
alter table public.campaigns enable row level security;
alter table public.contacts enable row level security;
alter table public.call_attempts enable row level security;
alter table public.contact_locks enable row level security;
alter table public.audit_events enable row level security;
alter table public.operator_shifts enable row level security;

create or replace function public.current_user_role()
returns public.app_role language sql stable security definer set search_path = public
as $$ select role from public.profiles where id = auth.uid(); $$;

create policy "authenticated profiles can be read" on public.profiles for select to authenticated using (true);
create policy "supervisors can manage contacts" on public.contacts for all to authenticated using (public.current_user_role() in ('supervisor', 'admin')) with check (public.current_user_role() in ('supervisor', 'admin'));
create policy "operators read assigned contacts" on public.contacts for select to authenticated using (assigned_operator_id = auth.uid() or public.current_user_role() in ('supervisor', 'admin'));
create policy "operators read own attempts" on public.call_attempts for select to authenticated using (operator_id = auth.uid() or public.current_user_role() in ('supervisor', 'admin'));
create policy "operators create own attempts" on public.call_attempts for insert to authenticated with check (operator_id = auth.uid());
create policy "operators read own shifts" on public.operator_shifts for select to authenticated using (operator_id = auth.uid() or public.current_user_role() in ('supervisor', 'admin'));
create policy "operators create own shifts" on public.operator_shifts for insert to authenticated with check (operator_id = auth.uid());
create policy "operators finish own shifts" on public.operator_shifts for update to authenticated using (operator_id = auth.uid()) with check (operator_id = auth.uid());
