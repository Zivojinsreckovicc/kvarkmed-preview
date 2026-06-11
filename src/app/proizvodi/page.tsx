import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui";
import { ProductHero } from "@/components/products/product-hero";
import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/products/cta-banner";
import { ContactSection } from "@/components/sections/contact-section";
import { productGroupSummaries } from "@/lib/products";

export const metadata: Metadata = {
  title: "Proizvodi",
  description:
    "Asortiman kompanije Kvark Med organizovan u tri grupe: dijagnostika, laboratorijska oprema i farmaceutski i medicinski proizvodi.",
  alternates: { canonical: "/proizvodi" },
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const assurances = [
  {
    title: "Stručna podrška",
    text: "Pomoć pri izboru dijagnostike i opreme prilagođene vašoj ustanovi.",
    icon: <path d="M12 3l2.2 4.6L19 8.3l-3.5 3.4.8 4.9L12 14.9 7.7 16.6l.8-4.9L5 8.3l4.8-.7L12 3z" />,
  },
  {
    title: "Širok asortiman",
    text: "Tri glavne grupe proizvoda na jednom mestu, sa jasnom hijerarhijom.",
    icon: <path d="M4 5h7v7H4V5zm9 0h7v7h-7V5zM4 14h7v5H4v-5zm9 0h7v5h-7v-5z" />,
  },
  {
    title: "Pouzdani partneri",
    text: "Saradnja sa proverenim proizvođačima dijagnostike i laboratorijske opreme.",
    icon: <path d="M12 3l7 3v6c0 4.2-2.9 7.4-7 9-4.1-1.6-7-4.8-7-9V6l7-3z" />,
  },
];

export default function ProizvodiPage() {
  return (
    <main className="flex flex-col">
      <ProductHero
        title="Proizvodi"
        description="Naš asortiman je organizovan u tri jasne grupe — dijagnostika, laboratorijska oprema i farmaceutski i medicinski proizvodi — kako biste lako pronašli prava rešenja za svoju ustanovu."
        crumbs={[{ label: "Početna", href: "/" }, { label: "Proizvodi" }]}
      />

      <Section spacing="lg" aria-label="Grupe proizvoda">
        <div className="grid gap-6 lg:grid-cols-3">
          {productGroupSummaries.map((group, i) => (
            <Reveal key={group.slug} delay={i * 90} className="flex">
              <Link
                href={group.href}
                className="group relative flex w-full flex-col gap-5 overflow-hidden rounded-card border border-border bg-background p-8 transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:border-accent-200 hover:shadow-card-hover"
              >
                {/* Oversized index watermark */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 font-heading text-[7rem] font-bold leading-none text-accent-50 transition-colors duration-300 group-hover:text-accent-100"
                >
                  {group.index}
                </span>
                {/* Accent wash on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent-600 transition-transform duration-300 ease-premium group-hover:scale-x-100"
                />

                <span className="relative font-heading text-sm font-semibold tabular-nums text-accent-400">
                  {group.index}
                </span>
                <div className="relative flex flex-col gap-3">
                  <h2 className="font-heading text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-accent-700">
                    {group.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">{group.description}</p>
                </div>

                <ul className="relative mt-1 flex flex-col gap-2 border-t border-border pt-5">
                  {group.categories.map((category) => (
                    <li key={category} className="flex items-center gap-2.5 font-body text-sm text-ink-soft">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-300 transition-colors group-hover:bg-accent-600" />
                      {category}
                    </li>
                  ))}
                </ul>

                <span className="relative mt-auto inline-flex items-center gap-2 pt-4 font-body text-sm font-medium text-accent-700">
                  Pogledajte grupu
                  <span className="transition-transform duration-300 ease-premium group-hover:translate-x-1.5">
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Pomažemo vam da izaberete pravo rešenje"
        description="Za ponude, tehničku dokumentaciju i stručnu podršku pri izboru dijagnostike i opreme — javite nam se."
      />

      {/* Trust / assurance band */}
      <Section tone="surface" spacing="md" aria-label="Zašto Kvark Med">
        <div className="grid gap-6 sm:grid-cols-3">
          {assurances.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="flex flex-col gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
                    {item.icon}
                  </svg>
                </span>
                <h3 className="font-heading text-base font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactSection />
    </main>
  );
}
