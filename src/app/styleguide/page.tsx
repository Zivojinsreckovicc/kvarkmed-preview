import type { Metadata } from "next";
import {
  AccentRule,
  Badge,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardMedia,
  CardTitle,
  Container,
  Divider,
  Eyebrow,
  Heading,
  Lead,
  Section,
  SectionHeader,
  Text,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Stil i komponente",
  description:
    "Interni pregled dizajn sistema Kvark Med — boje, tipografija i UI komponente.",
  robots: { index: false, follow: false },
};

const palette = [
  { name: "accent-50", className: "bg-accent-50", text: "text-ink" },
  { name: "accent-100", className: "bg-accent-100", text: "text-ink" },
  { name: "accent-300", className: "bg-accent-300", text: "text-ink" },
  { name: "accent-500", className: "bg-accent-500", text: "text-white" },
  { name: "accent-600", className: "bg-accent-600", text: "text-white" },
  { name: "accent-700", className: "bg-accent-700", text: "text-white" },
  { name: "accent-900", className: "bg-accent-900", text: "text-white" },
];

const neutrals = [
  { name: "ink", className: "bg-ink", text: "text-white" },
  { name: "ink-soft", className: "bg-ink-soft", text: "text-white" },
  { name: "muted", className: "bg-muted", text: "text-white" },
  { name: "faint", className: "bg-faint", text: "text-white" },
  { name: "border", className: "bg-border", text: "text-ink" },
  { name: "surface", className: "bg-surface", text: "text-ink" },
  { name: "background", className: "bg-background border border-border", text: "text-ink" },
];

const categories = [
  {
    badge: "Dijagnostika",
    title: "PCR dijagnostika",
    description:
      "RT-PCR testovi za HPV, STI i respiratorne infekcije, dizajnirani za pouzdanu laboratorijsku analizu.",
  },
  {
    badge: "Laboratorija",
    title: "POCT analizatori",
    description:
      "Kompaktni analizatori za brzu obradu uzoraka na mestu pružanja zdravstvene zaštite.",
  },
  {
    badge: "Farmacija",
    title: "Dijetetski suplementi",
    description:
      "Vitamini, minerali i proizvodi za imunološku podršku namenjeni apotekama i ustanovama.",
  },
];

function Block({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 border-t border-border pt-10">
      <div className="flex flex-col gap-2">
        <Heading level="h3" as="h2">
          {title}
        </Heading>
        {description ? <Text className="max-w-2xl">{description}</Text> : null}
      </div>
      {children}
    </div>
  );
}

export default function StyleguidePage() {
  return (
    <main className="flex flex-col">
      {/* Intro */}
      <Section tone="surface" spacing="lg">
        <div className="flex max-w-3xl flex-col gap-5">
          <Eyebrow>Dizajn sistem</Eyebrow>
          <Heading level="display">Kvark Med — vizuelni jezik</Heading>
          <Lead>
            Premium, klinički i miran dizajn sistem. Tokeni boja i tipografije, plus skup
            komponenti koje omogućavaju brzu i konzistentnu izradu stranica.
          </Lead>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="#boje" variant="primary">
              Pregledaj tokene
            </Button>
            <Button href="#komponente" variant="outline">
              Komponente
            </Button>
          </div>
        </div>
      </Section>

      <Section spacing="lg">
        <div className="flex flex-col gap-16">
          {/* Colors */}
          <div id="boje" className="flex flex-col gap-6 scroll-mt-24">
            <SectionHeader
              eyebrow="Tokeni"
              title="Paleta boja"
              description="Akcentna boja se koristi suzdržano — za naglaske, dugmad i istaknute sekcije."
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {palette.map((c) => (
                <div
                  key={c.name}
                  className={`flex h-24 flex-col justify-end rounded-card p-3 ${c.className} ${c.text}`}
                >
                  <span className="text-xs font-medium">{c.name}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {neutrals.map((c) => (
                <div
                  key={c.name}
                  className={`flex h-24 flex-col justify-end rounded-card p-3 ${c.className} ${c.text}`}
                >
                  <span className="text-xs font-medium">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <Block
            title="Tipografija"
            description="Montserrat za naslove, Poppins za telo teksta, navigaciju i UI."
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Eyebrow>Eyebrow / oznaka</Eyebrow>
                <Heading level="display">Display naslov</Heading>
              </div>
              <Divider />
              <Heading level="h1">Naslov H1</Heading>
              <Heading level="h2">Naslov H2</Heading>
              <Heading level="h3">Naslov H3</Heading>
              <Lead className="max-w-2xl">
                Lead pasus — miran i čitljiv uvodni tekst koji vodi korisnika kroz sekciju
                bez nepotrebnog marketinškog preterivanja.
              </Lead>
              <Text className="max-w-2xl">
                Telo teksta (Poppins). Koristi se za opise proizvoda, kategorije i opšti
                sadržaj. Pažljiv razmak i hijerarhija drže stranicu profesionalnom.
              </Text>
            </div>
          </Block>

          {/* Buttons */}
          <Block title="Dugmad" description="Jedna komponenta — radi i kao dugme i kao link.">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primarno</Button>
              <Button variant="secondary">Sekundarno</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Tekstualni link</Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Mala</Button>
              <Button size="md">Srednja</Button>
              <Button size="lg">Velika</Button>
              <Button disabled>Onemogućeno</Button>
            </div>
          </Block>

          {/* Badges */}
          <Block title="Oznake" description="Kompaktne oznake za kategorije i ključne specifikacije.">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">Dijagnostika</Badge>
              <Badge variant="neutral">Laboratorija</Badge>
              <Badge variant="outline">Farmacija</Badge>
              <Badge variant="solid">Novo</Badge>
              <Badge variant="accent" size="md">
                CE označeno
              </Badge>
            </div>
          </Block>

          {/* Cards */}
          <Block
            title="Kartice"
            description="Premium kartice za kategorije proizvoda i istaknuti sadržaj."
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((item) => (
                <Card key={item.title} variant="outline" interactive>
                  <CardMedia />
                  <CardBody>
                    <Badge>{item.badge}</Badge>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                    <CardFooter>
                      <Button variant="link">Saznaj više</Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Block>
        </div>
      </Section>

      {/* Accent section demo */}
      <Section tone="accent" spacing="lg">
        <div className="flex flex-col items-start gap-6">
          <SectionHeader
            onAccent
            eyebrow="Sekcija na akcentu"
            title="Akcentna sekcija sa svetlim tekstom"
            description="Koristi se suzdržano za snažan vizuelni ritam između belih sekcija."
          />
          <AccentRule className="bg-white/70" />
          <Button variant="on-accent" href="#boje">
            Kontaktirajte nas
          </Button>
        </div>
      </Section>
    </main>
  );
}
