"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Status = "idle" | "error" | "success";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Newsletter sign-up. Self-contained client component with inline validation
 * and a success state. Wire `onSubscribe` to a real endpoint when available.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      setMessage("Unesite ispravnu e-mail adresu.");
      return;
    }
    // TODO: replace with real subscription endpoint.
    setStatus("success");
    setMessage("Hvala! Vaša prijava je zabeležena.");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          E-mail adresa
        </label>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="vasa@email.rs"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          aria-describedby="newsletter-status"
          className={cn(
            "h-11 w-full flex-1 rounded-button border bg-white/5 px-4 font-body text-sm text-white placeholder:text-white/40",
            "transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400/50",
            status === "error" ? "border-red-400/70" : "border-white/15 focus:border-accent-400",
          )}
        />
        <button
          type="submit"
          className="h-11 shrink-0 rounded-button bg-accent-600 px-6 font-body text-sm font-medium text-white transition-colors hover:bg-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Prijavite se
        </button>
      </div>
      <p
        id="newsletter-status"
        role="status"
        aria-live="polite"
        className={cn(
          "min-h-[1rem] font-body text-xs",
          status === "error" && "text-red-300",
          status === "success" && "text-accent-200",
          status === "idle" && "text-white/45",
        )}
      >
        {status === "idle"
          ? "Povremene novosti o proizvodima i dijagnostici. Bez neželjene pošte."
          : message}
      </p>
    </form>
  );
}
