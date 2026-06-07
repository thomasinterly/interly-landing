"use server";

import { createServerSupabaseClient } from "@/lib/supabase";

export type WaitlistState = {
  ok: boolean;
  message: string;
};

// Regex email simple et permissive
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(
  _prev: WaitlistState | null,
  formData: FormData
): Promise<WaitlistState> {
  const rawEmail = formData.get("email");
  const source = (formData.get("source") as string) || "hero";

  if (typeof rawEmail !== "string") {
    return { ok: false, message: "Email invalide." };
  }

  const email = rawEmail.trim().toLowerCase();

  if (!email) {
    return { ok: false, message: "Renseigne ton email." };
  }
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return { ok: false, message: "Format d'email incorrect." };
  }

  try {
    const supabase = createServerSupabaseClient();
    const { error } = await supabase
      .from("waitlist")
      .insert({ email, source })
      .select()
      .single();

    if (error) {
      // 23505 = unique_violation (email déjà inscrit)
      if (error.code === "23505") {
        return { ok: true, message: "Tu es déjà dans la liste ✨" };
      }
      console.error("[waitlist] insert error:", error);
      return {
        ok: false,
        message: "Oups, problème côté serveur. Réessaie dans un instant.",
      };
    }

    return { ok: true, message: "C'est fait ! On te tient au courant 💌" };
  } catch (err) {
    console.error("[waitlist] unexpected:", err);
    return { ok: false, message: "Erreur inattendue. Réessaie." };
  }
}
