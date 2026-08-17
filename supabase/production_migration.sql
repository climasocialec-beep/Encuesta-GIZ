-- Ejecutar una sola vez después de schema.sql.
-- Permite que la aplicación realice asignaciones, importaciones y gestiones.

-- Asegurar que los outcomes existen y son legibles por operadoras
alter table public.outcomes enable row level security;
drop policy if exists "authenticated can read outcomes" on public.outcomes;
create policy "authenticated can read outcomes" on public.outcomes
  for select to authenticated using (true);

insert into public.outcomes (code, name, category, is_terminal, requires_retry, display_order) values
  ('effective', 'Llamada efectiva', 'effective', true, false, 1),
  ('no_answer', 'No contesta', 'pending', false, true, 2),
  ('wrong_number', 'Número incorrecto', 'ineffective', true, false, 3),
  ('callback', 'Solicita devolución de llamada', 'pending', false, true, 4),
  ('refused', 'No desea participar', 'ineffective', true, false, 5)
on conflict (code) do nothing;

drop policy if exists "supervisors can manage campaigns" on public.campaigns;
create policy "supervisors can manage campaigns" on public.campaigns
  for all to authenticated
  using (public.current_user_role() in ('supervisor', 'admin'))
  with check (public.current_user_role() in ('supervisor', 'admin'));

drop policy if exists "authenticated users read campaigns" on public.campaigns;
create policy "authenticated users read campaigns" on public.campaigns
  for select to authenticated using (true);

drop policy if exists "supervisors can insert contacts" on public.contacts;
create policy "supervisors can insert contacts" on public.contacts
  for insert to authenticated
  with check (public.current_user_role() in ('supervisor', 'admin'));

drop policy if exists "operators update assigned contacts" on public.contacts;
create policy "operators update assigned contacts" on public.contacts
  for update to authenticated
  using (assigned_operator_id = auth.uid() or public.current_user_role() in ('supervisor', 'admin'))
  with check (assigned_operator_id = auth.uid() or public.current_user_role() in ('supervisor', 'admin'));

drop policy if exists "supervisors delete contacts" on public.contacts;
create policy "supervisors delete contacts" on public.contacts
  for delete to authenticated
  using (public.current_user_role() in ('supervisor', 'admin'));

drop policy if exists "supervisors delete call attempts" on public.call_attempts;
create policy "supervisors delete call attempts" on public.call_attempts
  for delete to authenticated
  using (public.current_user_role() in ('supervisor', 'admin'));
