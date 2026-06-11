import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { ProductHero } from "@/components/products/product-hero";
import { AnalyzerCard } from "@/components/products/analyzer-card";
import { SectionIntro } from "@/components/products/section-intro";
import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/products/cta-banner";
import { ContactSection } from "@/components/sections/contact-section";
import { analyzers } from "@/lib/products";

export const metadata: Metadata = {
  title: "Laboratorijska oprema",
  description:
    "POCT analizatori iz ponude kompanije Kvark Med — HbA1c, imunofluorescentni i elektrolitni analizatori sa detaljnim tehničkim specifikacijama.",
  alternates: { canonical: "/proizvodi/laboratorijska-oprema" },
};

const crumbs = [
  { label: "Početna", href: "/" },
  { label: "Proizvodi", href: "/proizvodi" },
  { label: "Laboratorijska oprema" },
];

export default function LaboratorijskaOpremaPage() {
  return (
    <main className="flex flex-col">
      <ProductHero
        title="Laboratorijska oprema"
        description="POCT analizatori dizajnirani za brzu, preciznu i pouzdanu analizu uzoraka. Pogledajte osnovne informacije i tehničke specifikacije svakog uređaja."
        crumbs={crumbs}
      />

      <Section id="poct-analizatori" spacing="lg" className="scroll-mt-24" aria-label="POCT analizatori">
        <SectionIntro
          eyebrow="POCT analizatori"
          title="Analizatori za point-of-care dijagnostiku"
          description="Kompaktni i pouzdani analizatori namenjeni laboratorijama, klinikama i urgentnim centrima. Otvorite „Osnovne informacije&rdquo; za potpun opis i specifikaciju."
        />

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          {analyzers.map((analyzer, i) => (
            <Reveal key={analyzer.slug} delay={i * 90}>
              <AnalyzerCard analyzer={analyzer} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner
        eyebrow="Upit za opremu"
        title="Zatražite ponudu za laboratorijsku opremu"
        description="Pripremamo ponudu i tehničku dokumentaciju prilagođenu obimu rada i potrebama vaše ustanove."
      />

      <ContactSection />
    </main>
  );
}
