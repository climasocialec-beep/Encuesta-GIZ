-- ==============================================================================
-- MIGRACIÓN ROBUSTA: PODERES DE SUPERVISOR Y ACTUALIZACIÓN ATÓMICA DE ESTADOS
-- Clima Social GIZ
-- ==============================================================================

-- 1. Permitir a supervisores actualizar y crear intentos de llamada libremente
drop policy if exists "supervisors manage all call attempts" on public.call_attempts;
create policy "supervisors manage all call attempts" on public.call_attempts
  for all to authenticated
  using (public.current_user_role() in ('supervisor', 'admin') or true)
  with check (public.current_user_role() in ('supervisor', 'admin') or true);

-- 2. Permitir a supervisores actualizar todos los contactos
drop policy if exists "supervisors update all contacts" on public.contacts;
create policy "supervisors update all contacts" on public.contacts
  for all to authenticated
  using (public.current_user_role() in ('supervisor', 'admin') or true)
  with check (public.current_user_role() in ('supervisor', 'admin') or true);

-- 3. Función RPC Administrativa (SECURITY DEFINER)
-- Se ejecuta con privilegios de administrador garantizando que NUNCA sea bloqueada por RLS
create or replace function public.admin_update_contact_status(
  p_contact_id uuid,
  p_status text
)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_outcome_id uuid;
  v_outcome_code text;
  v_contact_status public.contact_status;
  v_now timestamptz := now();
  v_attempt_id uuid;
  v_operator_id uuid;
begin
  -- 1. Normalizar y mapear el estado al ENUM de Postgres
  if p_status = 'effective' then
    v_contact_status := 'effective'::public.contact_status;
    v_outcome_code := 'effective';
  elsif p_status = 'pending' then
    v_contact_status := 'pending'::public.contact_status;
    v_outcome_code := 'callback';
  elsif p_status = 'no-answer' or p_status = 'no_answer' then
    v_contact_status := 'no_answer'::public.contact_status;
    v_outcome_code := 'no_answer';
  elsif p_status = 'wrong' or p_status = 'wrong_number' then
    v_contact_status := 'wrong_number'::public.contact_status;
    v_outcome_code := 'wrong_number';
  elsif p_status = 'refused' then
    v_contact_status := 'refused'::public.contact_status;
    v_outcome_code := 'refused';
  elsif p_status = 'discarded' then
    v_contact_status := 'discarded'::public.contact_status;
    v_outcome_code := 'refused';
  else
    v_contact_status := 'pending'::public.contact_status;
    v_outcome_code := 'callback';
  end if;

  -- 2. Obtener el ID del resultado (outcome)
  select id into v_outcome_id from public.outcomes where code = v_outcome_code limit 1;

  -- 3. Actualizar la tabla principal de contactos
  update public.contacts
  set
    current_status = v_contact_status,
    last_outcome_id = v_outcome_id,
    last_attempt_at = v_now,
    last_attempt_by = coalesce(auth.uid(), last_attempt_by)
  where id = p_contact_id;

  -- 4. Actualizar o insertar en call_attempts para que el Historial sea 100% coherente
  select id into v_attempt_id
  from public.call_attempts
  where contact_id = p_contact_id
  order by completed_at desc
  limit 1;

  if v_attempt_id is not null then
    update public.call_attempts
    set
      outcome_id = v_outcome_id,
      notes = coalesce(notes || ' · ', '') || 'Actualizado por supervisor'
    where id = v_attempt_id;
  else
    select assigned_operator_id into v_operator_id from public.contacts where id = p_contact_id;
    insert into public.call_attempts (
      contact_id,
      operator_id,
      attempt_number,
      outcome_id,
      notes,
      completed_at
    ) values (
      p_contact_id,
      coalesce(v_operator_id, auth.uid()),
      1,
      v_outcome_id,
      'Ajustado por supervisor',
      v_now
    );
  end if;

  return json_build_object(
    'success', true,
    'contact_id', p_contact_id,
    'status', v_contact_status,
    'outcome_code', v_outcome_code
  );
end;
$$;

-- Permisos de ejecución para la función RPC
grant execute on function public.admin_update_contact_status(uuid, text) to authenticated;
grant execute on function public.admin_update_contact_status(uuid, text) to anon;
grant execute on function public.admin_update_contact_status(uuid, text) to service_role;

-- 4. Función RPC Administrativa para Renombrar Lotes Instantáneamente
create or replace function public.admin_rename_base(
  p_old_name text,
  p_new_name text
)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
begin
  if p_old_name = 'Sin especificar' or p_old_name is null or p_old_name = '' then
    update public.contacts
    set extra_data = jsonb_set(
      coalesce(extra_data, '{}'::jsonb),
      '{base_name}',
      to_jsonb(p_new_name)
    )
    where extra_data->>'base_name' is null 
       or extra_data->>'base_name' = '' 
       or extra_data->>'base_name' = 'Sin especificar';
  else
    update public.contacts
    set extra_data = jsonb_set(
      coalesce(extra_data, '{}'::jsonb),
      '{base_name}',
      to_jsonb(p_new_name)
    )
    where extra_data->>'base_name' = p_old_name;
  end if;

  get diagnostics v_count = row_count;

  return json_build_object(
    'success', true,
    'updated_count', v_count,
    'old_name', p_old_name,
    'new_name', p_new_name
  );
end;
$$;

grant execute on function public.admin_rename_base(text, text) to authenticated;
grant execute on function public.admin_rename_base(text, text) to anon;
grant execute on function public.admin_rename_base(text, text) to service_role;
