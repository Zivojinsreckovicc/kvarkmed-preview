import { Section, SectionHeader } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { TestimonialsCarousel, type Testimonial } from "./testimonials-carousel";

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Saradnja sa Kvark Med timom je profesionalna i pouzdana. Podrška pri izboru dijagnostike olakšala nam je svakodnevni rad u laboratoriji.",
    name: "M. Petrović",
    role: "Šef laboratorije",
  },
  {
    quote:
      "Brza komunikacija i jasne informacije o proizvodima. Ponuda je prilagođena konkretnim potrebama naše ustanove.",
    name: "J. Nikolić",
    role: "Rukovodilac nabavke",
  },
  {
    quote:
      "Kvalitetna oprema i stručna podrška. Kvark Med je za nas ozbiljan partner u oblasti laboratorijske dijagnostike.",
    name: "A. Jovanović",
    role: "Direktor",
    org: "dom zdravlja",
  },
  {
    quote:
      "Pouzdan partner za farmaceutske i medicinske proizvode, sa doslednim kvalitetom isporuke i korektnim odnosom.",
    name: "S. Ilić",
    role: "Apotekar",
  },
];

type TestimonialsSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: Testimonial[];
};

/**
 * Reusable testimonials section with an animated, accessible carousel.
 * Content is prop-overridable; defaults are editable placeholders.
 */
export function TestimonialsSection({
  id = "reference",
  eyebrow = "Reference",
  title = "Poverenje medicinskih ustanova",
  description = "Iskustva laboratorija, ustanova i partnera sa kojima sarađujemo.",
  items = defaultTestimonials,
}: TestimonialsSectionProps) {
  return (
    <Section id={id} tone="accent-soft" spacing="lg" aria-label={title}>
      <div className="flex flex-col gap-12">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow={eyebrow}
            title={title}
            description={description}
            headingLevel="h2"
          />
        </Reveal>
        <Reveal delay={120}>
          <TestimonialsCarousel items={items} />
        </Reveal>
      </div>
    </Section>
  );
}
