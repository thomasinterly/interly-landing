import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Nom de la table et de la colonne email (modifiable via .env)
export const WAITLIST_TABLE = import.meta.env.VITE_WAITLIST_TABLE || "waitlist";
export const EMAIL_COLUMN = import.meta.env.VITE_WAITLIST_EMAIL_COLUMN || "email";

export const supabase = url && anonKey ? createClient(url, anonKey) : null;

/**
 * Ajoute un email à la liste d'attente.
 * @returns {Promise<{ ok: boolean, duplicate?: boolean, error?: string }>}
 */
export async function joinWaitlist(email) {
  if (!supabase) {
    return { ok: false, error: "Configuration Supabase manquante." };
  }
  const { error } = await supabase
    .from(WAITLIST_TABLE)
    .insert({ [EMAIL_COLUMN]: email.trim().toLowerCase() });

  if (error) {
    // 23505 = violation de contrainte unique (email déjà inscrit)
    if (error.code === "23505") return { ok: true, duplicate: true };
    return { ok: false, error: error.message };
  }
  return { ok: true };
}
