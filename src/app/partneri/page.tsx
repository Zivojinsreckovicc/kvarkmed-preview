import type { Metadata } from "next";
import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  CardDescription,
  CardTitle,
  Eyebrow,
  Heading,
  Lead,
  Section,
  Text,
} from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { partnerLogos, partnerLogoHref } from "@/components/sections/partners-marquee";
import { CountersSection } from "@/components/sections/counters-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Partneri",
  description:
    "Kvark Med sarađuje sa proverenim proizvođačima medicinske dijagnostike, laboratorijske opreme i farmaceutskih proizvoda. Upoznajte brendove koje zastupamo.",
  alternates: { canonical: "/partneri" },
};

const cooperationPillars = [
  {
    title: "Zastupanje i distribucija",
    description:
      "Proizvode renomiranih proizvođača činimo dostupnim laboratorijama, klinikama, bolnicama i apotekama širom Srbije.",
    icon: (
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4zm0 2.2L17.6 8 12 10.8 6.4 8 12 5.2zM6 9.6l5 2.5v6.7l-5-2.5V9.6zm12 0v6.7l-5 2.5v-6.7l5-2.5z" />
    ),
  },
  {
    title: "Stručna podrška",
    description:
      "Pomažemo ustanovama pri izboru dijagnostike i opreme — od informacija o proizvodima do tehničkih specifikacija i obuke.",
    icon: (
      <path d="M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4.5 3 5.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3c1.8-1.2 3-3.3 3-5.7a7 7 0 0 0-7-7zm-3 18h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1z" />
    ),
  },
  {
    title: "Pouzdano snabdevanje",
    description:
      "Dosledna logistika i jasna komunikacija omogućavaju ustanovama kontinuitet u svakodnevnom radu.",
    icon: (
      <path d="M3 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8H3V6zm12 3h2.6a1 1 0 0 1 .8.4l2.4 3.2a1 1 0 0 1 .2.6V16h-2.1a2.5 2.5 0 0 0-4.8 0H15V9zM7.5 15.5A2.5 2.5 0 1 1 5 18a2.5 2.5 0 0 1 2.5-2.5zm11 0A2.5 2.5 0 1 1 16 18a2.5 2.5 0 0 1 2.5-2.5z" />
    ),
  },
];

const partnerCriteria = [
  "Dokazan kvalitet proizvoda i dokumentacija u skladu sa važećim standardima",
  "Stabilnost snabdevanja i dugoročna saradnja",
  "Tehnička podrška i dostupnost stručnih informacija",
  "Asortiman prilagođen potrebama zdravstvenih ustanova",
];

function PillarIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
        {children}
      </svg>
    </span>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m8.5 12.2 2.3 2.3 4.7-4.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PartneriPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <Section tone="surface" spacing="lg" aria-labelledby="partneri-naslov">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Reveal>
            <Eyebrow>Partneri</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <Heading level="display" id="partneri-naslov">
              Brendovi i proizvođači sa kojima sarađujemo
            </Heading>
          </Reveal>
          <Reveal delay={200}>
            <Lead>
              Sarađujemo sa proverenim proizvođačima medicinske dijagnostike,
              laboratorijske opreme i farmaceutskih proizvoda. Svaki partner je
              odabran prema kvalitetu, pouzdanosti i potrebama zdravstvenih ustanova.
            </Lead>
          </Reveal>
          <Reveal delay={300} className="flex flex-wrap justify-center gap-3 pt-2">
            <Button href="#brendovi" variant="primary">
              Pogledajte brendove
            </Button>
            <Button href="#kontakt" variant="outline">
              Postanite partner
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* Logo showcase */}
      <Section id="brendovi" spacing="lg" aria-label="Brendovi koje zastupamo">
        <div className="flex flex-col gap-12">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Naš portfolio</Eyebrow>
            <Heading level="h2">Proizvođači koje zastupamo</Heading>
            <Text>
              Portfolio obuhvata brendove iz oblasti dijagnostike, laboratorijske
              opreme i farmaceutskih proizvoda.
            </Text>
          </Reveal>

          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {partnerLogos.map((logo, i) => {
              const href = partnerLogoHref(logo);
              const partnerName = logo.alt.replace(/ logo$/i, "");
              const image = (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 40vw, 220px"
                  className="h-10 w-auto object-contain opacity-85 transition-opacity duration-300 hover:opacity-100 sm:h-12"
                />
              );
              return (
                <Reveal
                  as="li"
                  key={logo.src}
                  delay={(i % 4) * 80}
                  className="flex flex-col items-center justify-center gap-5 rounded-card border border-border bg-background px-6 py-10 transition-[border-color,box-shadow] duration-300 hover:border-accent-200 hover:shadow-card"
                >
                  {href ? (
                    <>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${logo.alt} — sajt proizvođača`}
                        className="flex items-center justify-center"
                      >
                        {image}
                      </a>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm font-semibold text-accent-700 underline decoration-accent-300 underline-offset-4 transition-colors hover:text-accent-900"
                      >
                        Posetite sajt — {partnerName}
                      </a>
                    </>
                  ) : (
                    image
                  )}
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Section>

      {/* Cooperation model */}
      <Section tone="surface" spacing="lg" aria-label="Model saradnje">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col gap-5 lg:col-span-5">
            <Eyebrow>Model saradnje</Eyebrow>
            <Heading level="h2">Povezujemo proizvođače i zdravstvene ustanove</Heading>
            <Lead>
              Saradnja sa partnerima zasniva se na poverenju, doslednom kvalitetu i
              dugoročnom odnosu.
            </Lead>
            <ul className="mt-2 flex flex-col gap-4">
              {partnerCriteria.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="font-body text-base leading-relaxed text-ink-soft">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-5 lg:col-span-7">
            {cooperationPillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90} className="flex">
                <Card variant="outline" className="w-full bg-background">
                  <CardBody className="sm:flex-row sm:items-start sm:gap-6">
                    <PillarIcon>{pillar.icon}</PillarIcon>
                    <div className="flex flex-col gap-2">
                      <CardTitle>{pillar.title}</CardTitle>
                      <CardDescription className="text-base">
                        {pillar.description}
                      </CardDescription>
                    </div>
                  </CardBody>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Social proof + CTA */}
      <CountersSection
        eyebrow="Saradnja u brojkama"
        title="Poverenje koje se gradi godinama"
        ctaLabel="Kontaktirajte nas"
        ctaHref="#kontakt"
      />

      <ContactSection />
    </main>
  );
}
