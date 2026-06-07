-- Schéma Supabase pour la waitlist Interly
-- À exécuter dans le SQL Editor de ton projet Supabase

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'hero',
  created_at timestamptz not null default now()
);

-- Index pour les requêtes d'analytics
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

-- Row Level Security ACTIVÉE
-- Notre Server Action utilise la service_role key qui bypasse RLS,
-- donc on bloque tout accès depuis le client (anon key)
alter table public.waitlist enable row level security;

-- Aucune policy → personne ne peut lire/écrire depuis le frontend.
-- Seul le serveur (service_role) peut insérer via la Server Action.
