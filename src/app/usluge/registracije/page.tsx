import type { Metadata } from "next";
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
  SectionHeader,
  Text,
} from "@/components/ui";
import { ProductHero } from "@/components/products/product-hero";
import { CtaBanner } from "@/components/products/cta-banner";
import { ContactSection } from "@/components/sections/contact-section";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Usluge registracije",
  description:
    "Kvark Med pruža stručnu podršku u registraciji medicinskih sredstava i dijetetskih proizvoda — priprema dokumentacije, vođenje regulatornih postupaka, izmene, obnove i zvanični prevodi.",
  alternates: { canonical: "/usluge/registracije" },
};

/* -------------------------------------------------------------------------- */
/* Page data                                                                    */
/* -------------------------------------------------------------------------- */

const pillars = [
  {
    title: "Iskustvo i stručnost",
    description:
      "Tim sa iskustvom u regulatornim poslovima i kontinuiranim praćenjem važećih propisa.",
    icon: (
      <path d="M12 3l2.2 4.6L19 8.3l-3.5 3.4.8 4.9L12 14.9 7.7 16.6l.8-4.9L5 8.3l4.8-.7L12 3z" />
    ),
  },
  {
    title: "Poznavanje propisa",
    description:
      "Detaljno poznavanje regulatornih zahteva u oblasti medicinskih sredstava i dijetetskih proizvoda.",
    icon: <path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm6 1v4h4M8.5 13h7M8.5 16.5h5" />,
  },
  {
    title: "Saradnja sa institucijama",
    description:
      "Uspostavljena saradnja sa nadležnim institucijama i referentnim ustanovama.",
    icon: <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />,
  },
];

const steps = [
  {
    title: "Analiza i kategorizacija",
    description:
      "Određivanje kategorije proizvoda i pribavljanje stručnog mišljenja nadležnih regulatornih tela.",
  },
  {
    title: "Priprema dokumentacije",
    description:
      "Usklađivanje deklaracija, ambalaže, uputstava i prateće tehničke dokumentacije.",
  },
  {
    title: "Podnošenje i praćenje",
    description:
      "Koordinacija predaje kompletne dokumentacije i praćenje postupka do donošenja rešenja.",
  },
  {
    title: "Obnova i izmene",
    description:
      "Podrška u obnovi registracije i sprovođenju naknadnih izmena i dopuna.",
  },
];

type Service = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: string[];
  note?: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    id: "medicinska-sredstva",
    index: "01",
    eyebrow: "Regulatorna podrška",
    title: "Medicinska sredstva",
    intro:
      "Pružamo kompletnu uslugu upisa medicinskih sredstava u odgovarajuće registre, kao i podršku tokom celokupnog životnog ciklusa proizvoda.",
    items: [
      "Priprema i vođenje postupka upisa u Registar medicinskih sredstava",
      "Izmene, dopune i produženje važenja registracije",
      "Stručno mišljenje o kategorizaciji od strane nadležnih regulatornih tela",
      "Priprema i usklađivanje tekstova deklaracija, ambalaže i uputstava za upotrebu",
      "Koordinacija prikupljanja i predaja kompletne dokumentacije",
      "Praćenje regulatornog postupka do donošenja rešenja",
      "Podrška u postupcima obnove registracije",
      "Sprovođenje izmena kod već registrovanih medicinskih sredstava",
    ],
    icon: (
      <>
        <path
          d="M12 3l7 3v5.5c0 4.3-2.9 7.6-7 8.5-4.1-.9-7-4.2-7-8.5V6l7-3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    id: "dijetetski-proizvodi",
    index: "02",
    eyebrow: "Regulatorna podrška",
    title: "Dijetetski proizvodi",
    intro:
      "Pružamo kompletnu regulatornu podršku za upis dijetetskih proizvoda u evidencije i baze podataka nadležnih institucija, kao i za održavanje njihovog regulatornog statusa.",
    items: [
      "Pribavljanje stručnog mišljenja i određivanje kategorije proizvoda od referentnih ustanova",
      "Savetovanje i stručna podrška pri izradi deklaracije i prateće dokumentacije",
      "Organizacija stručnog mišljenja o zdravstvenoj ispravnosti od ovlašćenih laboratorija",
      "Koordinacija i podnošenje kompletne dokumentacije regulatornim organima",
      "Praćenje postupka upisa proizvoda u bazu podataka",
      "Usluge obnove upisa",
      "Sprovođenje izmena i dopuna za već upisane dijetetske proizvode",
    ],
    icon: (
      <>
        <path
          d="M5 19c8 2 14-3 15-14C11 4 4 9 5 19z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8 16c2.5-3.5 5.5-5.5 9.5-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    id: "prevodi",
    index: "03",
    eyebrow: "Stručni prevodi",
    title: "Zvanični prevodi dokumentacije",
    intro:
      "U okviru regulatornih usluga vršimo stručne i zvanične prevode dokumentacije, izrađene u skladu sa regulatornim zahtevima i terminologijom relevantnom za oblast medicinskih sredstava i dijetetskih proizvoda.",
    items: [
      "Uputstva za upotrebu medicinskih sredstava",
      "Deklaracije i tekstovi ambalaže",
      "Tehnička i regulatorna dokumentacija",
      "Sertifikati i izjave proizvođača",
      "Dokumentacija za postupke registracije i obnove registracije",
    ],
    note:
      "Prevodi se izrađuju u skladu sa regulatornim zahtevima, čime se obezbeđuje potpuna usklađenost sa zahtevima nadležnih institucija.",
    icon: (
      <>
        <path
          d="M4 5h8M8 3v2c0 4-1.8 7-5 8.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 10c1.3 2.4 3.5 4 6.2 4.7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 21l3.5-8 3.5 8m-6-2.6h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
];

/* -------------------------------------------------------------------------- */
/* Small building blocks                                                        */
/* -------------------------------------------------------------------------- */

function PillarIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="h-5 w-5"
      >
        {children}
      </svg>
    </span>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 rounded-card border border-border bg-background p-4 transition-colors duration-300 hover:border-accent-200">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-3 w-3">
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-body text-sm leading-relaxed text-ink-soft">{children}</span>
    </li>
  );
}

function ServiceBlock({ service, reverse }: { service: Service; reverse?: boolean }) {
  return (
    <Section
      id={service.id}
      tone={reverse ? "surface" : "default"}
      spacing="lg"
      aria-labelledby={`${service.id}-title`}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Lockup */}
        <Reveal
          className={cn(
            "flex flex-col gap-5 lg:col-span-5",
            reverse && "lg:order-2",
          )}
        >
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-600 text-white">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-7 w-7">
                {service.icon}
              </svg>
            </span>
            <span className="font-heading text-5xl font-bold leading-none text-accent-100">
              {service.index}
            </span>
          </div>
          <Eyebrow>{service.eyebrow}</Eyebrow>
          <Heading level="h2" as="h2" id={`${service.id}-title`}>
            {service.title}
          </Heading>
          <Text className="text-muted">{service.intro}</Text>
          {service.note ? (
            <p className="rounded-card border-l-2 border-accent-300 bg-accent-50/60 px-4 py-3 font-body text-sm leading-relaxed text-ink-soft">
              {service.note}
            </p>
          ) : null}
          <div className="pt-2">
            <Button href="#kontakt" variant="outline" size="md">
              Zatražite ponudu
            </Button>
          </div>
        </Reveal>

        {/* Checklist */}
        <div className={cn("lg:col-span-7", reverse && "lg:order-1")}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.items.map((item, i) => (
              <Reveal key={item} delay={i * 60} className="flex">
                <CheckItem>{item}</CheckItem>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                         */
/* -------------------------------------------------------------------------- */

export default function UslugeRegistracijePage() {
  return (
    <main className="flex flex-col">
      <ProductHero
        eyebrow="Regulatorni poslovi"
        title="Usluge registracije"
        description="Stručna podrška u pripremi dokumentacije i vođenju regulatornih postupaka za medicinska sredstva i dijetetske proizvode — od registracije, preko izmena i obnove, do zvaničnih prevoda dokumentacije."
        crumbs={[{ label: "Početna", href: "/" }, { label: "Usluge registracije" }]}
        quickLinks={[
          { label: "Medicinska sredstva", href: "#medicinska-sredstva" },
          { label: "Dijetetski proizvodi", href: "#dijetetski-proizvodi" },
          { label: "Zvanični prevodi", href: "#prevodi" },
        ]}
      />

      {/* Intro — pouzdan partner u regulatornim poslovima */}
      <Section spacing="lg" aria-label="O regulatornim uslugama">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col gap-5 lg:col-span-5">
            <Eyebrow>Kvark Med d.o.o.</Eyebrow>
            <Heading level="h2">Vaš pouzdan partner u regulatornim poslovima</Heading>
            <Lead>
              Regulatorni zahtevi u oblasti medicinskih sredstava i dijetetskih proizvoda
              predstavljaju složenu oblast koja zahteva stručno znanje, iskustvo i
              kontinuirano praćenje važećih propisa.
            </Lead>
            <Text>
              Pružamo profesionalnu podršku u pripremi dokumentacije i vođenju regulatornih
              postupaka, sa ciljem da svojim partnerima omogućimo efikasan i pouzdan proces
              registracije proizvoda. Zahvaljujući iskustvu, poznavanju regulatornih zahteva i
              saradnji sa nadležnim institucijama, obezbeđujemo kvalitetnu podršku tokom
              postupaka registracije, izmena, dopuna i obnove registracija.
            </Text>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-1 lg:col-span-7">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90} className="flex">
                <Card variant="outline" interactive className="w-full">
                  <CardBody className="sm:flex-row sm:items-start sm:gap-5">
                    <PillarIcon>{pillar.icon}</PillarIcon>
                    <div className="flex flex-col gap-2">
                      <CardTitle>{pillar.title}</CardTitle>
                      <CardDescription>{pillar.description}</CardDescription>
                    </div>
                  </CardBody>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Process steps */}
      <Section tone="accent-soft" spacing="lg" aria-label="Tok saradnje">
        <SectionHeader
          eyebrow="Kako teče saradnja"
          title="Jasan i pregledan regulatorni postupak"
          description="Vodimo vas kroz svaki korak postupka — od kategorizacije proizvoda do donošenja rešenja i kasnijih obnova."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90} className="flex">
              <div className="relative flex w-full flex-col gap-3 overflow-hidden rounded-card border border-border bg-background p-7">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-1 -top-3 font-heading text-6xl font-bold leading-none text-accent-100"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative font-heading text-sm font-semibold tabular-nums text-accent-500">
                  Korak {i + 1}
                </span>
                <h3 className="relative font-heading text-lg font-semibold leading-snug text-ink">
                  {step.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Service blocks */}
      {services.map((service, i) => (
        <ServiceBlock key={service.id} service={service} reverse={i % 2 === 1} />
      ))}

      <CtaBanner
        eyebrow="Regulatorna podrška"
        title="Pokrenite registraciju uz pouzdanog partnera"
        description="Za pripremu dokumentacije, vođenje postupka registracije, obnovu ili zvanične prevode — javite nam se i predložićemo najefikasniji put."
      />

      <ContactSection
        eyebrow="Kontakt"
        title="Razgovarajmo o registraciji vaših proizvoda"
        description="Opišite nam svoj proizvod i potrebe — naš tim vam pomaže da kroz regulatorni postupak prođete efikasno i pouzdano."
        points={[
          "Stručna podrška u registraciji medicinskih sredstava i dijetetskih proizvoda",
          "Vođenje postupaka izmena, dopuna i obnove registracije",
          "Zvanični prevodi usklađeni sa zahtevima nadležnih institucija",
        ]}
      />
    </main>
  );
}
