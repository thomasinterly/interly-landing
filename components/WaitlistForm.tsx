"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions";

const initialState: WaitlistState | null = null;

export default function WaitlistForm({ source = "hero" }: { source?: string }) {
  const [state, formAction, isPending] = useActionState(joinWaitlist, initialState);

  return (
    <div>
      <form action={formAction} className="l-email" noValidate>
        <input
          type="email"
          name="email"
          placeholder="ton.email@uni.fr"
          required
          aria-label="Adresse email"
          autoComplete="email"
          disabled={isPending || state?.ok}
        />
        <input type="hidden" name="source" value={source} />
        <button
          type="submit"
          className="l-email__btn"
          disabled={isPending || state?.ok}
        >
          {isPending ? "..." : state?.ok ? "Inscrit·e ✓" : "Rejoindre la beta"}
          {!isPending && !state?.ok && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </form>

      {state && (
        <p
          role="status"
          aria-live="polite"
          style={{
            margin: "10px 0 0",
            fontSize: 13.5,
            fontWeight: 600,
            color: state.ok ? "var(--green-press)" : "#C0573A",
          }}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
