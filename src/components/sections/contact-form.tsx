"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { contactTopics } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldBase =
  "w-full rounded-button border bg-background px-4 font-body text-sm text-ink placeholder:text-faint transition-colors focus:outline-none focus:ring-2 focus:ring-accent-600/30 focus:border-accent-600";

type Errors = Partial<Record<"name" | "email" | "message" | "consent", string>>;

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block font-body text-xs font-medium text-ink-soft">
      {children}
      {required ? <span className="text-accent-600"> *</span> : null}
    </label>
  );
}

export function ContactForm() {
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";

    const next: Errors = {};
    if (!name) next.name = "Unesite ime i prezime.";
    if (!EMAIL_RE.test(email)) next.email = "Unesite ispravnu e-mail adresu.";
    if (message.length < 10) next.message = "Poruka treba da sadrži najmanje 10 karaktera.";
    if (!consent) next.consent = "Potrebna je saglasnost za obradu podataka.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstError = form.querySelector<HTMLElement>("[aria-invalid='true']");
      firstError?.focus();
      return;
    }

    // TODO: send to a real endpoint / email service.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full min-h-80 flex-col items-center justify-center gap-4 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-50 text-accent-600">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="font-heading text-xl font-semibold text-ink">Hvala na poruci</h3>
        <p className="max-w-sm font-body text-sm leading-relaxed text-muted">
          Vaš upit je zabeležen. Naš tim će vam se javiti u najkraćem mogućem roku.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor={`${uid}-name`} required>
            Ime i prezime
          </Label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Vaše ime"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${uid}-name-err` : undefined}
            className={cn(fieldBase, "h-11", errors.name ? "border-red-400" : "border-border")}
          />
          {errors.name ? (
            <p id={`${uid}-name-err`} className="mt-1 font-body text-xs text-red-500">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <Label htmlFor={`${uid}-email`} required>
            E-mail
          </Label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="vasa@email.rs"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${uid}-email-err` : undefined}
            className={cn(fieldBase, "h-11", errors.email ? "border-red-400" : "border-border")}
          />
          {errors.email ? (
            <p id={`${uid}-email-err`} className="mt-1 font-body text-xs text-red-500">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <Label htmlFor={`${uid}-phone`}>Telefon</Label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+381"
            className={cn(fieldBase, "h-11 border-border")}
          />
        </div>

        <div>
          <Label htmlFor={`${uid}-org`}>Ustanova / organizacija</Label>
          <input
            id={`${uid}-org`}
            name="organization"
            type="text"
            autoComplete="organization"
            placeholder="Naziv ustanove"
            className={cn(fieldBase, "h-11 border-border")}
          />
        </div>
      </div>

      <div>
        <Label htmlFor={`${uid}-topic`}>Oblast interesovanja</Label>
        <select
          id={`${uid}-topic`}
          name="topic"
          defaultValue={contactTopics[0]}
          className={cn(fieldBase, "h-11 border-border")}
        >
          {contactTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor={`${uid}-message`} required>
          Poruka
        </Label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          placeholder="Opišite vaš upit ili potrebe vaše ustanove…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${uid}-message-err` : undefined}
          className={cn(fieldBase, "resize-none py-3", errors.message ? "border-red-400" : "border-border")}
        />
        {errors.message ? (
          <p id={`${uid}-message-err`} className="mt-1 font-body text-xs text-red-500">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div>
        <label className="flex items-start gap-3 font-body text-xs leading-relaxed text-muted">
          <input
            name="consent"
            type="checkbox"
            aria-invalid={Boolean(errors.consent)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border-strong text-accent-600 accent-accent-600 focus:ring-2 focus:ring-accent-600/30"
          />
          <span>
            Saglasan/na sam da Kvark Med obrađuje moje podatke u skladu sa{" "}
            <Link href="/politika-privatnosti" className="text-accent-700 underline underline-offset-2">
              politikom privatnosti
            </Link>
            .
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-1 font-body text-xs text-red-500">{errors.consent}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-button bg-accent-600 px-8 font-body text-sm font-medium text-white transition-colors hover:bg-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600/40 focus-visible:ring-offset-2"
      >
        Pošaljite upit
      </button>
    </form>
  );
}
