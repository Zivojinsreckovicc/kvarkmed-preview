import { Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { SocialLinks } from "@/components/layout/social-links";
import { contactInfo } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ContactForm } from "./contact-form";

type ContactSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  points?: string[];
  className?: string;
};

const defaultPoints = [
  "Stručna podrška pri izboru dijagnostike i opreme",
  "Ponude prilagođene laboratorijama i ustanovama",
  "Brz odgovor na upite i tehnička pitanja",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden>
        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function ContactDetail({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-3 font-body text-sm text-white/90 transition-colors hover:text-white"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/20">
        {children}
      </span>
      {label}
    </a>
  );
}

/**
 * Reusable contact section. Left: high-conversion copy + social links on an
 * accent panel. Right: validated contact form on a clean white panel.
 * Drop it on the home page, the dedicated contact page, or any landing page.
 */
export function ContactSection({
  id = "kontakt",
  eyebrow = "Kontakt",
  title = "Razgovarajmo o potrebama vaše ustanove",
  description = "Bilo da birate dijagnostiku, laboratorijsku opremu ili farmaceutske proizvode — naš tim vam pomaže da pronađete pravo rešenje. Pošaljite upit i javljamo se u najkraćem roku.",
  points = defaultPoints,
  className,
}: ContactSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("w-full bg-surface py-20 sm:py-28", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <Reveal className="grid overflow-hidden rounded-card shadow-card lg:grid-cols-2">
          {/* Left — premium copy + social */}
          <div className="flex flex-col justify-between gap-10 bg-accent-600 p-8 text-white sm:p-12">
            <div className="flex flex-col gap-6">
              <Eyebrow tone="light">{eyebrow}</Eyebrow>
              <h2 id={`${id}-title`} className="font-heading text-h2 font-semibold text-white">
                {title}
              </h2>
              <p className="max-w-md font-body text-base leading-relaxed text-white/80">
                {description}
              </p>

              <ul className="mt-2 flex flex-col gap-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3 font-body text-sm text-white/90">
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6 border-t border-white/15 pt-8">
              <address className="flex flex-col gap-4 not-italic">
                <ContactDetail href={contactInfo.phone.href} label={contactInfo.phone.label}>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
                    <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </ContactDetail>
                {contactInfo.landlines.map((line) => (
                  <ContactDetail key={line.href} href={line.href} label={line.label}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
                      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8 8h2M8 12h8M8 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </ContactDetail>
                ))}
                <ContactDetail href={contactInfo.email.href} label={contactInfo.email.label}>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ContactDetail>
                <ContactDetail href={contactInfo.address.href} label={contactInfo.address.label} external>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
                    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </ContactDetail>
              </address>

              <div className="flex flex-col gap-4 border-t border-white/15 pt-6">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Pratite nas
                </p>
                <SocialLinks tone="light" />
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-background p-8 sm:p-12">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
