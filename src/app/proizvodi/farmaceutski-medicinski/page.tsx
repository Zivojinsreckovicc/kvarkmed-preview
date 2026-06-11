import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { ProductHero } from "@/components/products/product-hero";
import { SectionIntro } from "@/components/products/section-intro";
import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/products/cta-banner";
import { ContactSection } from "@/components/sections/contact-section";
import { pharmaCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Farmaceutski i medicinski proizvodi",
  description:
    "Dijetetski suplementi, flasteri i trake za bolove i kućni testovi iz ponude kompanije Kvark Med, namenjeni apotekama i zdravstvenim ustanovama.",
  alternates: { canonical: "/proizvodi/farmaceutski-medicinski" },
};

const crumbs = [
  { label: "Početna", href: "/" },
  { label: "Proizvodi", href: "/proizvodi" },
  { label: "Farmaceutski i medicinski proizvodi" },
];

/** One distinct line icon per category, kept minimal and on-brand. */
const categoryIcons: Record<string, React.ReactNode> = {
  suplementi: (
    <>
      <path d="M12 3v4M12 21v-4M5 8c0 4 3 5 7 5s7-1 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 8a5 5 0 0 1 10 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
  flasteri: (
    <>
      <rect x="3.5" y="9" width="17" height="6" rx="3" transform="rotate(-30 12 12)" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="9.5" cy="13.4" r="0.8" fill="currentColor" />
      <circle cx="14.5" cy="10.6" r="0.8" fill="currentColor" />
    </>
  ),
  "kucni-testovi": (
    <>
      <rect x="9" y="3" width="6" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 9h6M11.5 13v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
};

export default function FarmaceutskiMedicinskiPage() {
  return (
    <main className="flex flex-col">
      <ProductHero
        title="Farmaceutski i medicinski proizvodi"
        description="Dijetetski suplementi, medicinski flasteri i trake za bolove i kućni testovi — namenjeni apotekama, zdravstvenim ustanovama i krajnjim korisnicima."
        crumbs={crumbs}
      />

      <Section spacing="lg" aria-label="Kategorije proizvoda">
        <SectionIntro
          eyebrow="Asortiman"
          title="Tri kategorije za apoteke i ustanove"
          description="Pregledan asortiman organizovan u tri jasne celine, sa pratećim podkategorijama."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pharmaCategories.map((category, i) => (
            <Reveal key={category.slug} delay={i * 90} className="flex">
              <article
                id={category.slug}
                className="group relative flex w-full scroll-mt-24 flex-col gap-5 overflow-hidden rounded-card border border-border bg-background p-8 transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:border-accent-200 hover:shadow-card-hover"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent-600 transition-transform duration-300 ease-premium group-hover:scale-x-100"
                />

                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-all duration-300 group-hover:bg-accent-600 group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
                    {categoryIcons[category.slug]}
                  </svg>
                </span>

                <div className="flex flex-col gap-2">
                  <h2 className="font-heading text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent-700">
                    {category.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">{category.description}</p>
                </div>

                <ul className="mt-1 flex flex-col gap-2.5 border-t border-border pt-5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 font-body text-sm text-ink-soft">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-300 transition-colors group-hover:bg-accent-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner
        eyebrow="Saradnja"
        title="Zainteresovani za našu ponudu?"
        description="Za apoteke, distributere i zdravstvene ustanove pripremamo ponude prilagođene asortimanu i obimu."
        primaryLabel="Kontaktirajte nas"
      />

      <ContactSection />
    </main>
  );
}
