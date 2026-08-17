-- ==============================================================================
-- CLIMA SOCIAL & GIZ: SCRIPT MAESTRO DE CONFIGURACIÓN DE BASE DE DATOS SUPABASE
-- Ejecutar este archivo completo en el SQL Editor de tu proyecto en Supabase.
-- ==============================================================================

-- 1. Extensiones necesarias
create extension if not exists "pgcrypto";

-- 2. Tipos y Enumeradores
do $$ begin
  if not exists (select 1 from pg_type where typname = 'app_role') then
    create type public.app_role as enum ('operator', 'supervisor', 'admin');
  end if;
  if not exists (select 1 from pg_type where typname = 'campaign_status') then
    create type public.campaign_status as enum ('active', 'paused', 'closed');
  end if;
  if not exists (select 1 from pg_type where typname = 'contact_status') then
    create type public.contact_status as enum ('not_managed', 'pending', 'effective', 'no_answer', 'wrong_number', 'refused', 'discarded', 'closed');
  end if;
end $$;

-- 3. Tabla de Perfiles de Usuario (vinculada a auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  initials text,
  username text,
  role public.app_role not null default 'operator',
  active boolean not null default true,
  last_seen_at timestamptz,
  created_at timestamptz not null default now()
);

-- 4. Tabla de Campañas
create table if not exists public.campaigns (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  status public.campaign_status not null default 'active',
  timezone text not null default 'America/Guayaquil',
  created_at timestamptz not null default now()
);

-- 5. Tabla de Resultados de Llamada (Outcomes)
create table if not exists public.outcomes (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text not null,
  category text not null check (category in ('effective', 'ineffective', 'pending')),
  is_terminal boolean not null default false,
  requires_retry boolean not null default false,
  active boolean not null default true,
  display_order integer not null default 0
);

-- 6. Tabla de Contactos
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references public.campaigns(id) on delete cascade,
  external_id text not null,
  name text not null,
  phone_raw text,
  phone_normalized text,
  parish text,
  location text,
  extra_data jsonb not null default '{}'::jsonb,
  assigned_operator_id uuid references public.profiles(id) on delete set null,
  current_status public.contact_status not null default 'not_managed',
  attempt_count integer not null default 0,
  next_attempt_at timestamptz,
  last_attempt_at timestamptz,
  last_attempt_by uuid references public.profiles(id) on delete set null,
  last_outcome_id uuid references public.outcomes(id),
  raffle_email text,
  proof_received_at timestamptz,
  proof_type text check (proof_type is null or proof_type in ('whatsapp_screenshot', 'other')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (campaign_id, external_id)
);

-- 7. Tabla de Intentos y Gestiones de Llamada
create table if not exists public.call_attempts (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references public.contacts(id) on delete cascade,
  operator_id uuid not null references public.profiles(id) on delete cascade,
  attempt_number integer not null,
  outcome_id uuid not null references public.outcomes(id),
  notes text,
  started_at timestamptz,
  completed_at timestamptz not null default now(),
  idempotency_key uuid unique default gen_random_uuid(),
  created_at timestamptz not null default now()
);

-- 8. Tabla de Jornadas de Operadores (Shifts)
create table if not exists public.operator_shifts (
  id uuid primary key default gen_random_uuid(),
  operator_id uuid not null references public.profiles(id) on delete cascade,
  campaign_id uuid references public.campaigns(id) on delete cascade,
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  notes text,
  created_at timestamptz not null default now(),
  check (ended_at is null or ended_at >= started_at)
);

-- 9. Índices de Rendimiento
create index if not exists contacts_campaign_status_idx on public.contacts(campaign_id, current_status);
create index if not exists contacts_operator_idx on public.contacts(assigned_operator_id, current_status);
create index if not exists attempts_contact_idx on public.call_attempts(contact_id, created_at desc);
create index if not exists attempts_operator_idx on public.call_attempts(operator_id, created_at desc);
create index if not exists shifts_operator_idx on public.operator_shifts(operator_id, started_at desc);

-- 10. Inserción de Resultados Estándar (Outcomes)
insert into public.outcomes (code, name, category, is_terminal, requires_retry, display_order) values
  ('effective', 'Llamada efectiva', 'effective', true, false, 1),
  ('no_answer', 'No contesta', 'pending', false, true, 2),
  ('wrong_number', 'Número incorrecto', 'ineffective', true, false, 3),
  ('callback', 'Solicita devolución de llamada', 'pending', false, true, 4),
  ('refused', 'No desea participar', 'ineffective', true, false, 5)
on conflict (code) do update set
  name = excluded.name,
  category = excluded.category,
  is_terminal = excluded.is_terminal,
  requires_retry = excluded.requires_retry;

-- 11. Inserción de Campaña Activa GIZ por defecto
insert into public.campaigns (name, description, status, timezone)
select 'Encuestas Clima Social GIZ', 'Levantamiento de encuestas de satisfacción - Cooperación GIZ', 'active', 'America/Guayaquil'
where not exists (select 1 from public.campaigns where name = 'Encuestas Clima Social GIZ');

-- 12. Función para obtener el rol del usuario autenticado
create or replace function public.current_user_role()
returns public.app_role language sql stable security definer set search_path = public
as $$ select coalesce((select role from public.profiles where id = auth.uid()), 'operator'::public.app_role); $$;

-- 13. Habilitar Seguridad por Fila (Row Level Security - RLS)
alter table public.profiles enable row level security;
alter table public.campaigns enable row level security;
alter table public.outcomes enable row level security;
alter table public.contacts enable row level security;
alter table public.call_attempts enable row level security;
alter table public.operator_shifts enable row level security;

-- 14. Políticas de Seguridad (RLS)

-- Profiles
drop policy if exists "authenticated profiles can be read" on public.profiles;
create policy "authenticated profiles can be read" on public.profiles for select to authenticated using (true);

drop policy if exists "supervisors can manage profiles" on public.profiles;
create policy "supervisors can manage profiles" on public.profiles for all to authenticated using (public.current_user_role() in ('supervisor', 'admin')) with check (public.current_user_role() in ('supervisor', 'admin'));

-- Campaigns
drop policy if exists "authenticated users read campaigns" on public.campaigns;
create policy "authenticated users read campaigns" on public.campaigns for select to authenticated using (true);

drop policy if exists "supervisors can manage campaigns" on public.campaigns;
create policy "supervisors can manage campaigns" on public.campaigns for all to authenticated using (public.current_user_role() in ('supervisor', 'admin')) with check (public.current_user_role() in ('supervisor', 'admin'));

-- Outcomes
drop policy if exists "authenticated can read outcomes" on public.outcomes;
create policy "authenticated can read outcomes" on public.outcomes for select to authenticated using (true);

-- Contacts
drop policy if exists "operators read assigned contacts" on public.contacts;
create policy "operators read assigned contacts" on public.contacts for select to authenticated using (assigned_operator_id = auth.uid() or public.current_user_role() in ('supervisor', 'admin'));

drop policy if exists "operators update assigned contacts" on public.contacts;
create policy "operators update assigned contacts" on public.contacts for update to authenticated using (assigned_operator_id = auth.uid() or public.current_user_role() in ('supervisor', 'admin')) with check (assigned_operator_id = auth.uid() or public.current_user_role() in ('supervisor', 'admin'));

drop policy if exists "supervisors can insert contacts" on public.contacts;
create policy "supervisors can insert contacts" on public.contacts for insert to authenticated with check (public.current_user_role() in ('supervisor', 'admin'));

drop policy if exists "supervisors delete contacts" on public.contacts;
create policy "supervisors delete contacts" on public.contacts for delete to authenticated using (public.current_user_role() in ('supervisor', 'admin'));

-- Call Attempts
drop policy if exists "operators read own attempts" on public.call_attempts;
create policy "operators read own attempts" on public.call_attempts for select to authenticated using (operator_id = auth.uid() or public.current_user_role() in ('supervisor', 'admin'));

drop policy if exists "operators create own attempts" on public.call_attempts;
create policy "operators create own attempts" on public.call_attempts for insert to authenticated with check (operator_id = auth.uid());

drop policy if exists "supervisors delete call attempts" on public.call_attempts;
create policy "supervisors delete call attempts" on public.call_attempts for delete to authenticated using (public.current_user_role() in ('supervisor', 'admin'));

-- Operator Shifts
drop policy if exists "operators read own shifts" on public.operator_shifts;
create policy "operators read own shifts" on public.operator_shifts for select to authenticated using (operator_id = auth.uid() or public.current_user_role() in ('supervisor', 'admin'));

drop policy if exists "operators create own shifts" on public.operator_shifts;
create policy "operators create own shifts" on public.operator_shifts for insert to authenticated with check (operator_id = auth.uid());

drop policy if exists "operators finish own shifts" on public.operator_shifts;
create policy "operators finish own shifts" on public.operator_shifts for update to authenticated using (operator_id = auth.uid() or public.current_user_role() in ('supervisor', 'admin')) with check (operator_id = auth.uid() or public.current_user_role() in ('supervisor', 'admin'));

drop policy if exists "supervisors delete shifts" on public.operator_shifts;
create policy "supervisors delete shifts" on public.operator_shifts for delete to authenticated using (public.current_user_role() in ('supervisor', 'admin'));

-- 15. Habilitar Supabase Realtime para sincronización instantánea
do $$ begin
  alter publication supabase_realtime add table public.contacts;
exception when others then null;
end $$;

do $$ begin
  alter publication supabase_realtime add table public.call_attempts;
exception when others then null;
end $$;

do $$ begin
  alter publication supabase_realtime add table public.operator_shifts;
exception when others then null;
end $$;

-- ==============================================================================
-- 16. CREACIÓN DE USUARIOS INICIALES (AUTH + PROFILES)
-- ==============================================================================
-- Contraseñas fáciles configuradas:
--   * Supervisor: admin2026
--   * Operadores: giz2026

do $$
declare
  sup_id uuid := gen_random_uuid();
  tat_id uuid := gen_random_uuid();
  ale_id uuid := gen_random_uuid();
  val_id uuid := gen_random_uuid();
  hashed_sup_pwd text := crypt('admin2026', gen_salt('bf'));
  hashed_op_pwd text := crypt('giz2026', gen_salt('bf'));
begin
  -- 1. Supervisor Clima Social (clave: admin2026)
  if not exists (select 1 from auth.users where email = 'supervisor@climasocial.local') then
    insert into auth.users (id, instance_id, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, role, aud)
    values (sup_id, '00000000-0000-0000-0000-000000000000', 'supervisor@climasocial.local', hashed_sup_pwd, now(), '{"provider":"email","providers":["email"]}', '{"full_name":"Clima Social","username":"supervisor"}', now(), now(), 'authenticated', 'authenticated');

    insert into public.profiles (id, full_name, initials, username, role, active)
    values (sup_id, 'Clima Social', 'CS', 'supervisor', 'supervisor', true);
  end if;

  -- 2. Tatiana Pasquel (clave: giz2026)
  if not exists (select 1 from auth.users where email = 'tatiana@climasocial.local') then
    insert into auth.users (id, instance_id, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, role, aud)
    values (tat_id, '00000000-0000-0000-0000-000000000000', 'tatiana@climasocial.local', hashed_op_pwd, now(), '{"provider":"email","providers":["email"]}', '{"full_name":"Tatiana Pasquel","username":"operadora1"}', now(), now(), 'authenticated', 'authenticated');

    insert into public.profiles (id, full_name, initials, username, role, active)
    values (tat_id, 'Tatiana Pasquel', 'TP', 'operadora1', 'operator', true);
  end if;

  -- 3. Alejandro Yanascual (clave: giz2026)
  if not exists (select 1 from auth.users where email = 'alejandro@climasocial.local') then
    insert into auth.users (id, instance_id, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, role, aud)
    values (ale_id, '00000000-0000-0000-0000-000000000000', 'alejandro@climasocial.local', hashed_op_pwd, now(), '{"provider":"email","providers":["email"]}', '{"full_name":"Alejandro Yanascual","username":"operadora2"}', now(), now(), 'authenticated', 'authenticated');

    insert into public.profiles (id, full_name, initials, username, role, active)
    values (ale_id, 'Alejandro Yanascual', 'AY', 'operadora2', 'operator', true);
  end if;

  -- 4. Valeria Cruz (clave: giz2026)
  if not exists (select 1 from auth.users where email = 'valeria@climasocial.local') then
    insert into auth.users (id, instance_id, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, role, aud)
    values (val_id, '00000000-0000-0000-0000-000000000000', 'valeria@climasocial.local', hashed_op_pwd, now(), '{"provider":"email","providers":["email"]}', '{"full_name":"Valeria Cruz","username":"operadora3"}', now(), now(), 'authenticated', 'authenticated');

    insert into public.profiles (id, full_name, initials, username, role, active)
    values (val_id, 'Valeria Cruz', 'VC', 'operadora3', 'operator', true);
  end if;
end $$;
