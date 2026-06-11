import type { Metadata } from "next";
import { Eyebrow, Heading, Lead, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { contactInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte Kvark Med — za ponude, tehničku dokumentaciju i stručnu podršku pri izboru dijagnostike, laboratorijske opreme i farmaceutskih proizvoda.",
  alternates: { canonical: "/kontakt" },
};

type Channel = {
  title: string;
  description: string;
  label: string;
  href: string;
  external?: boolean;
  icon: React.ReactNode;
};

const channels: Channel[] = [
  {
    title: "Pozovite nas",
    description: "Za brze informacije o proizvodima i ponudi.",
    label: contactInfo.phone.label,
    href: contactInfo.phone.href,
    icon: (
      <path
        d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Pišite nam",
    description: "Za upite, ponude i tehničku dokumentaciju.",
    label: contactInfo.email.label,
    href: contactInfo.email.href,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Posetite nas",
    description: "Naša adresa u Kragujevcu.",
    label: contactInfo.address.label,
    href: contactInfo.address.href,
    external: true,
    icon: (
      <>
        <path
          d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
];

export default function KontaktPage() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <Section tone="surface" spacing="lg">
        <div className="flex max-w-3xl flex-col gap-6">
          <Reveal>
            <Eyebrow>Kontakt</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <Heading level="display">Razgovarajmo o potrebama vaše ustanove</Heading>
          </Reveal>
          <Reveal delay={200}>
            <Lead>
              Bilo da birate dijagnostiku, laboratorijsku opremu ili farmaceutske
              proizvode — naš tim vam stoji na raspolaganju. Javite nam se telefonom,
              e-mailom ili putem kontakt forme.
            </Lead>
          </Reveal>
        </div>
      </Section>

      {/* Contact channels */}
      <Section spacing="md" aria-label="Načini kontakta">
        <div className="grid gap-6 lg:grid-cols-3">
          {channels.map((channel, i) => (
            <Reveal key={channel.title} delay={i * 90} className="flex">
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative flex w-full flex-col gap-4 overflow-hidden rounded-card border border-border bg-background p-8 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-accent-200 hover:shadow-card-hover"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent-600 transition-transform duration-300 ease-premium group-hover:scale-x-100"
                />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-all duration-300 group-hover:bg-accent-600 group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
                    {channel.icon}
                  </svg>
                </span>
                <div className="flex flex-col gap-1.5">
                  <h2 className="font-heading text-lg font-semibold text-ink transition-colors group-hover:text-accent-700">
                    {channel.title}
                  </h2>
                  <p className="font-body text-sm leading-relaxed text-muted">{channel.description}</p>
                </div>
                <span className="mt-auto border-t border-border pt-4 font-body text-sm font-medium text-accent-700">
                  {channel.label}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Form */}
      <ContactSection
        eyebrow="Kontakt forma"
        title="Pošaljite upit našem timu"
        description="Popunite formu sa kratkim opisom vaših potreba — odgovaramo u najkraćem mogućem roku."
      />

      {/* Map */}
      <Section spacing="lg" aria-label="Lokacija">
        <Reveal className="flex flex-col gap-8">
          <div className="flex max-w-2xl flex-col gap-4">
            <Eyebrow>Lokacija</Eyebrow>
            <Heading level="h2">Gde se nalazimo</Heading>
            <Lead>{contactInfo.address.label}</Lead>
          </div>
          <div className="overflow-hidden rounded-card border border-border">
            <iframe
              title="Mapa — Kvark Med, Industrijska BB, Kragujevac"
              src="https://maps.google.com/maps?q=Industrijska%20BB%2C%2034000%20Kragujevac&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-96 w-full border-0 sm:h-[28rem]"
            />
          </div>
        </Reveal>
      </Section>

      <FaqSection />
    </main>
  );
}
