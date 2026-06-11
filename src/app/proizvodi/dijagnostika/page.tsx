import type { Metadata } from "next";
import { Badge, Section, Text } from "@/components/ui";
import { ProductHero } from "@/components/products/product-hero";
import { ProductInfoCard } from "@/components/products/product-info-card";
import { Accordion } from "@/components/products/accordion";
import { CategoryNav } from "@/components/products/category-nav";
import { CtaBanner } from "@/components/products/cta-banner";
import { SectionIntro } from "@/components/products/section-intro";
import { Reveal } from "@/components/motion/reveal";
import { ContactSection } from "@/components/sections/contact-section";
import {
  dijagnostikaSections,
  imunoCategories,
  pcrSubsections,
  poctGroups,
  serologyItems,
  stiPathogens,
  urinTestStrips,
} from "@/lib/products";

export const metadata: Metadata = {
  title: "Dijagnostika",
  description:
    "Molekularna PCR dijagnostika, imunohromatografski brzi testovi, serologija i imunologija i kvantitativna POCT dijagnostika iz ponude kompanije Kvark Med.",
  alternates: { canonical: "/proizvodi/dijagnostika" },
};

const crumbs = [
  { label: "Početna", href: "/" },
  { label: "Proizvodi", href: "/proizvodi" },
  { label: "Dijagnostika" },
];

/* Reusable subsection heading ------------------------------------------------ */
function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="flex items-center gap-3">
      <span className="h-0.5 w-8 rounded-full bg-accent-600" />
      <h3 className="font-heading text-xl font-semibold text-ink">{children}</h3>
    </Reveal>
  );
}

export default function DijagnostikaPage() {
  return (
    <main className="flex flex-col">
      <ProductHero
        title="Dijagnostika"
        description="Sveobuhvatan asortiman dijagnostičkih rešenja — od molekularne PCR dijagnostike i imunohromatografskih brzih testova, do serologije i kvantitativne POCT dijagnostike namenjene bržem donošenju odluka u dijagnostičkom procesu."
        crumbs={crumbs}
        quickLinks={dijagnostikaSections.map((s) => ({ label: s.label, href: `#${s.id}` }))}
      />

      <CategoryNav items={dijagnostikaSections} />

      {/* ---- PCR DIJAGNOSTIKA ---- */}
      <Section id="pcr" spacing="lg" className="scroll-mt-32">
        <SectionIntro
          eyebrow="01 — Molekularna dijagnostika"
          title="PCR dijagnostika"
          description="Real-Time PCR testovi za preciznu detekciju i genotipizaciju, organizovani po kliničkoj nameni."
        />

        <div className="mt-12 flex flex-col gap-12">
          {pcrSubsections.map((subsection) => (
            <div key={subsection.title} className="flex flex-col gap-6">
              <SubHeading>{subsection.title}</SubHeading>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {subsection.products.map((product, i) => (
                  <Reveal key={product.name} delay={i * 80} className="flex">
                    <ProductInfoCard product={product} className="w-full" />
                  </Reveal>
                ))}
              </div>

              {subsection.title === "STI RT-PCR Testovi" ? (
                <Reveal className="mt-2 flex flex-col gap-3 rounded-card border border-border bg-surface p-6 sm:p-7">
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    STI patogeni
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {stiPathogens.map((pathogen) => (
                      <li key={pathogen}>
                        <Badge
                          variant="neutral"
                          size="md"
                          className="cursor-default transition-colors duration-200 hover:bg-accent-50 hover:text-accent-700"
                        >
                          {pathogen}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      {/* ---- BRZI DIJAGNOSTIČKI TESTOVI ---- */}
      <Section id="brzi-testovi" tone="surface" spacing="lg" className="scroll-mt-32">
        <SectionIntro
          eyebrow="02 — Brzi testovi"
          title="Brzi dijagnostički testovi"
          description="Imunohromatografski brzi testovi i test trake za urin, organizovani u jasne medicinske kategorije."
        />

        {/* Test trake za urin */}
        <div className="mt-12 flex flex-col gap-6">
          <SubHeading>Test trake za urin</SubHeading>
          <div className="grid gap-5 sm:grid-cols-2 lg:max-w-2xl">
            {urinTestStrips.map((strip, i) => (
              <Reveal key={strip} delay={i * 80}>
                <div className="group flex items-center gap-3 rounded-card border border-border bg-background p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-accent-200 hover:shadow-card">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent-600 transition-transform duration-300 group-hover:scale-150" />
                  <span className="font-body text-sm font-medium text-ink">{strip}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Imunohromatografski brzi testovi */}
        <div className="mt-14 flex flex-col gap-6">
          <SubHeading>Imunohromatografski brzi testovi</SubHeading>
          <Reveal>
            <Text className="max-w-2xl">
              Brzi testovi podeljeni po medicinskim oblastima. Otvorite kategoriju da vidite
              pripadajuće testove.
            </Text>
          </Reveal>

          <div className="mt-2 flex flex-col gap-4">
            {imunoCategories.map((category, i) => {
              const total = category.subgroups.reduce((sum, group) => sum + group.items.length, 0);
              return (
                <Reveal key={category.title} delay={i * 60}>
                  <Accordion
                    title={category.title}
                    meta={`${total} ${total === 1 ? "test" : "testova"}`}
                    defaultOpen={i === 0}
                  >
                    <div className="flex flex-col gap-7">
                      {category.subgroups.map((group, gi) => (
                        <div key={group.title ?? gi} className="flex flex-col gap-3">
                          {group.title ? (
                            <h5 className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-700">
                              {group.title}
                            </h5>
                          ) : null}
                          <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 font-body text-sm text-ink-soft"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-300" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </Accordion>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ---- Mid-page conversion banner ---- */}
      <CtaBanner
        eyebrow="Stručna podrška"
        title="Niste sigurni koji test odgovara vašoj laboratoriji?"
        description="Naš tim vam pomaže da izaberete pravu dijagnostiku i priprema ponudu prilagođenu potrebama vaše ustanove."
      />

      {/* ---- SEROLOGIJA I IMUNOLOGIJA ---- */}
      <Section id="serologija" spacing="lg" className="scroll-mt-32">
        <SectionIntro
          eyebrow="03 — Serologija"
          title="Serologija i imunologija"
          description="Serološki i imunološki testovi za podršku u dijagnostičkom procesu."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serologyItems.map((item, i) => (
            <Reveal key={item} delay={i * 70} as="li">
              <div className="group flex h-full items-center gap-3 rounded-card border border-border bg-background p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-accent-200 hover:shadow-card">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="font-body text-sm font-medium text-ink">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ---- POCT DIJAGNOSTIKA ---- */}
      <Section id="poct" tone="surface" spacing="lg" className="scroll-mt-32">
        <SectionIntro
          eyebrow="04 — POCT"
          title="POCT dijagnostika"
          description="POCT testovi i kvantitativni fluorescentni imunoesej (FIA) testovi, organizovani po kliničkoj nameni."
        />

        <div className="mt-12 flex flex-col gap-12">
          {poctGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-6">
              <SubHeading>{group.title}</SubHeading>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.products.map((product, i) => (
                  <Reveal key={product.name} delay={i * 80} className="flex">
                    <ProductInfoCard product={product} className="w-full" />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ContactSection />
    </main>
  );
}
