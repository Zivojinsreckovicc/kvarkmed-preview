import type { Metadata } from "next";
import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  CardDescription,
  CardTitle,
  Container,
  Eyebrow,
  Heading,
  Lead,
  Section,
  Text,
} from "@/components/ui";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";
import { CountersSection } from "@/components/sections/counters-section";
import { PartnersMarquee } from "@/components/sections/partners-marquee";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { LocationSection } from "@/components/sections/location-section";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Kvark Med je distributer medicinske dijagnostike, laboratorijske opreme i farmaceutskih proizvoda, namenjen laboratorijama, klinikama, bolnicama i apotekama.",
  alternates: { canonical: "/o-nama" },
};

const values = [
  {
    title: "Stručnost",
    description:
      "Stručna podrška pri izboru dijagnostike i laboratorijske opreme, prilagođena potrebama vaše ustanove.",
    icon: (
      <path d="M12 3l2.2 4.6L19 8.3l-3.5 3.4.8 4.9L12 14.9 7.7 16.6l.8-4.9L5 8.3l4.8-.7L12 3z" />
    ),
  },
  {
    title: "Pouzdanost",
    description:
      "Dosledan kvalitet ponude i korektan odnos sa partnerima, ustanovama i distributerima.",
    icon: <path d="M12 3l7 3v6c0 4.2-2.9 7.4-7 9-4.1-1.6-7-4.8-7-9V6l7-3z" />,
  },
  {
    title: "Širok asortiman",
    description:
      "Dijagnostika, laboratorijska oprema i farmaceutski i medicinski proizvodi — na jednom mestu.",
    icon: <path d="M4 5h7v7H4V5zm9 0h7v7h-7V5zM4 14h7v5H4v-5zm9 0h7v5h-7v-5z" />,
  },
  {
    title: "Posvećenost",
    description:
      "Fokus na svakodnevne potrebe laboratorija, klinika, domova zdravlja, bolnica i apoteka.",
    icon: (
      <path d="M12 20s-7-4.3-9-8.5C1.6 8.2 3.4 5.5 6.3 5.5c1.8 0 3 .9 3.7 2 .7-1.1 1.9-2 3.7-2 2.9 0 4.7 2.7 3.3 6C19 15.7 12 20 12 20z" />
    ),
  },
];

function ValueIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
        {children}
      </svg>
    </span>
  );
}

export default function ONamaPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-surface">
        {/* Desktop: image bleeds to the right edge of the screen */}
        <div className="absolute inset-y-0 right-0 hidden w-[46%] overflow-hidden rounded-l-[2.5rem] lg:block">
          {/* Oversized so the subtle parallax drift never exposes edges */}
          <Parallax speed={0.06} maxOffset={28} className="absolute inset-x-0 -inset-y-8">
            <Image
              src="/imgs/company-building.webp"
              alt="Poslovna zgrada kompanije Kvark Med"
              fill
              sizes="46vw"
              className="object-cover"
            />
          </Parallax>
        </div>

        <Container className="relative">
          <div className="grid items-center gap-12 py-16 sm:py-20 lg:min-h-[40rem] lg:grid-cols-2 lg:gap-16 lg:py-28">
            <div className="flex max-w-xl flex-col gap-6">
              <Reveal>
                <Eyebrow>O nama</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <Heading level="display">
                  Pouzdan partner u oblasti medicinske dijagnostike
                </Heading>
              </Reveal>
              <Reveal delay={200}>
                <Lead>
                  Kvark Med je distributer medicinske dijagnostike, laboratorijske opreme i
                  farmaceutskih proizvoda. Sarađujemo sa laboratorijama, klinikama, domovima
                  zdravlja, bolnicama i apotekama, uz stručnu podršku i pouzdana rešenja.
                </Lead>
              </Reveal>
              <Reveal delay={250}>
                <Text>
                  Kvark Med je deo sistema{" "}
                  <a
                    href="https://kvark.rs/rs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent-700 underline decoration-accent-300 underline-offset-2 transition-colors hover:text-accent-600 hover:decoration-accent-600"
                  >
                    Kvark doo
                  </a>
                  , kompanije osnovane 1992. godine. U okviru sistema posluje i{" "}
                  <a
                    href="https://www.kvarklab.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent-700 underline decoration-accent-300 underline-offset-2 transition-colors hover:text-accent-600 hover:decoration-accent-600"
                  >
                    KvarkLab
                  </a>
                  , prva privatna laboratorija u Kragujevcu akreditovana prema standardu ISO 15189,
                  čime potvrđuje najviše standarde kvaliteta i stručnosti u oblasti medicinske
                  laboratorijske dijagnostike.
                </Text>
              </Reveal>
              <Reveal delay={300} className="flex flex-wrap gap-3 pt-2">
                <Button href="/proizvodi" variant="primary">
                  Pogledajte proizvode
                </Button>
                <Button href="#kontakt" variant="outline">
                  Kontaktirajte nas
                </Button>
              </Reveal>
            </div>

            {/* Mobile / tablet: image stacks below the copy */}
            <Reveal delay={200} className="relative aspect-4/3 w-full overflow-hidden rounded-[1.75rem] lg:hidden">
              <Image
                src="/imgs/company-building.webp"
                alt="Poslovna zgrada kompanije Kvark Med"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Approach / values */}
      <Section spacing="lg" aria-label="Naš pristup">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col gap-5 lg:col-span-5">
            <Eyebrow>Naš pristup</Eyebrow>
            <Heading level="h2">Posvećenost kvalitetu i stručnoj podršci</Heading>
            <Lead>
              Naš cilj je da zdravstvenim ustanovama omogućimo pristup proverenim
              dijagnostičkim i laboratorijskim rešenjima.
            </Lead>
            <Text>
              Kao distributer, povezujemo proizvođače i zdravstvene ustanove i pružamo
              podršku tokom celog procesa — od informisanja o proizvodima do izbora opreme
              koja odgovara konkretnim potrebama. Posvećeni smo doslednom kvalitetu,
              jasnoj komunikaciji i dugoročnoj saradnji.
            </Text>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 90} className="flex">
                <Card variant="outline" className="w-full">
                  <CardBody>
                    <ValueIcon>{value.icon}</ValueIcon>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardBody>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Reused sitewide sections */}
      <CountersSection />

      <PartnersMarquee />

      <TestimonialsSection />

      <FaqSection />

      <ContactSection />

      <LocationSection />
    </main>
  );
}
