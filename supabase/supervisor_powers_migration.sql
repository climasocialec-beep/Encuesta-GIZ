-- ==============================================================================
-- MIGRACIÓN ROBUSTA: PODERES DE SUPERVISOR Y GESTIÓN INFALIBLE DE JORNADAS
-- Clima Social GIZ
-- ==============================================================================

-- 1. Políticas RLS para Intentos de Llamada
drop policy if exists "supervisors manage all call attempts" on public.call_attempts;
create policy "supervisors manage all call attempts" on public.call_attempts
  for all to authenticated
  using (true)
  with check (true);

-- 2. Políticas RLS para Contactos
drop policy if exists "supervisors update all contacts" on public.contacts;
create policy "supervisors update all contacts" on public.contacts
  for all to authenticated
  using (true)
  with check (true);

-- 3. Políticas RLS para Jornadas (operator_shifts)
drop policy if exists "authenticated manage operator_shifts" on public.operator_shifts;
create policy "authenticated manage operator_shifts" on public.operator_shifts
  for all to authenticated
  using (true)
  with check (true);

-- 4. RPC: Cierre Forzado de Jornada Específica (SECURITY DEFINER)
create or replace function public.admin_close_shift(
  p_shift_id uuid,
  p_ended_at timestamptz default now()
)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
  v_final_ended timestamptz := coalesce(p_ended_at, now());
begin
  update public.operator_shifts
  set ended_at = v_final_ended
  where id = p_shift_id;

  get diagnostics v_count = row_count;

  return json_build_object(
    'success', true,
    'shift_id', p_shift_id,
    'updated_count', v_count,
    'ended_at', v_final_ended
  );
end;
$$;

grant execute on function public.admin_close_shift(uuid, timestamptz) to authenticated;
grant execute on function public.admin_close_shift(uuid, timestamptz) to anon;
grant execute on function public.admin_close_shift(uuid, timestamptz) to service_role;

-- 5. RPC: Cierre de TODAS las jornadas abiertas de un operador (SECURITY DEFINER)
create or replace function public.admin_close_all_operator_shifts(
  p_operator_id uuid,
  p_ended_at timestamptz default now()
)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
  v_final_ended timestamptz := coalesce(p_ended_at, now());
begin
  update public.operator_shifts
  set ended_at = v_final_ended
  where operator_id = p_operator_id
    and (ended_at is null or ended_at = '');

  get diagnostics v_count = row_count;

  return json_build_object(
    'success', true,
    'operator_id', p_operator_id,
    'updated_count', v_count,
    'ended_at', v_final_ended
  );
end;
$$;

grant execute on function public.admin_close_all_operator_shifts(uuid, timestamptz) to authenticated;
grant execute on function public.admin_close_all_operator_shifts(uuid, timestamptz) to anon;
grant execute on function public.admin_close_all_operator_shifts(uuid, timestamptz) to service_role;

-- 6. RPC: Operador cierra sus propias jornadas abiertas (SECURITY DEFINER)
create or replace function public.operator_end_my_shifts(
  p_ended_at timestamptz default now()
)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_count integer;
  v_final_ended timestamptz := coalesce(p_ended_at, now());
begin
  if v_user_id is null then
    return json_build_object('success', false, 'error', 'No autenticado');
  end if;

  update public.operator_shifts
  set ended_at = v_final_ended
  where operator_id = v_user_id
    and ended_at is null;

  get diagnostics v_count = row_count;

  return json_build_object(
    'success', true,
    'operator_id', v_user_id,
    'updated_count', v_count,
    'ended_at', v_final_ended
  );
end;
$$;

grant execute on function public.operator_end_my_shifts(timestamptz) to authenticated;
grant execute on function public.operator_end_my_shifts(timestamptz) to anon;
grant execute on function public.operator_end_my_shifts(timestamptz) to service_role;

-- 7. RPC: Eliminar Jornada (SECURITY DEFINER)
create or replace function public.admin_delete_shift(
  p_shift_id uuid
)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
begin
  delete from public.operator_shifts
  where id = p_shift_id;

  get diagnostics v_count = row_count;

  return json_build_object(
    'success', true,
    'shift_id', p_shift_id,
    'deleted_count', v_count
  );
end;
$$;

grant execute on function public.admin_delete_shift(uuid) to authenticated;
grant execute on function public.admin_delete_shift(uuid) to anon;
grant execute on function public.admin_delete_shift(uuid) to service_role;

-- 8. RPC: Actualización Administrativa de Contacto
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

  select id into v_outcome_id from public.outcomes where code = v_outcome_code limit 1;

  update public.contacts
  set
    current_status = v_contact_status,
    last_outcome_id = v_outcome_id,
    last_attempt_at = v_now,
    last_attempt_by = coalesce(auth.uid(), last_attempt_by)
  where id = p_contact_id;

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

grant execute on function public.admin_update_contact_status(uuid, text) to authenticated;
grant execute on function public.admin_update_contact_status(uuid, text) to anon;
grant execute on function public.admin_update_contact_status(uuid, text) to service_role;

-- 9. RPC: Renombrar Lote en Vivo
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
