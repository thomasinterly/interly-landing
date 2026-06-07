import { createClient } from "@supabase/supabase-js";

/**
 * Client Supabase pour usage SERVEUR uniquement (Server Actions, Route Handlers).
 * Utilise la service_role key qui bypasse les RLS — ne JAMAIS l'utiliser dans un Client Component.
 */
export function createServerSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Supabase env vars manquantes. Vérifie NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
