import { Button, Eyebrow, Heading, Lead, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { FaqAccordion, type FaqItem } from "./faq-accordion";

const defaultFaqs: FaqItem[] = [
  {
    question: "Kome su namenjeni Kvark Med proizvodi?",
    answer:
      "Naš asortiman je namenjen laboratorijama, klinikama, domovima zdravlja, bolnicama, apotekama i drugim medicinskim ustanovama, kao i distributerima i partnerima u oblasti zdravstva.",
  },
  {
    question: "Koje kategorije proizvoda su dostupne?",
    answer:
      "U ponudi su tri glavne grupe: dijagnostika (PCR, brzi testovi, serologija i POCT), laboratorijska oprema (POCT analizatori i uređaji) i farmaceutski i medicinski proizvodi (suplementi, flasteri i kućni testovi).",
  },
  {
    question: "Da li pružate podršku pri izboru opreme?",
    answer:
      "Da. Naš tim pomaže u izboru dijagnostike i laboratorijske opreme u skladu sa potrebama vaše ustanove i podržava vas tokom procesa informisanja.",
  },
  {
    question: "Da li su dostupni katalozi i dokumentacija za proizvode?",
    answer:
      "Za pojedine proizvode dostupni su PDF katalozi i osnovne informacije, a dodatnu dokumentaciju možete zatražiti putem kontakt forme.",
  },
  {
    question: "Kako mogu da zatražim ponudu ili dodatne informacije?",
    answer:
      "Popunite kontakt formu sa kratkim opisom vaših potreba i naš tim će vam se javiti u najkraćem mogućem roku.",
  },
  {
    question: "Da li sarađujete sa distributerima i partnerima?",
    answer:
      "Da, otvoreni smo za saradnju sa distributerima, partnerima i medicinskim ustanovama. Za detalje o saradnji kontaktirajte naš tim.",
  },
];

type FaqSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: FaqItem[];
  /** Index open on load, or null for all collapsed. */
  defaultOpen?: number | null;
};

/**
 * Reusable FAQ section. Split layout: intro + contact CTA on the left,
 * accordion on the right. Content is prop-overridable for any page.
 */
export function FaqSection({
  id = "faq",
  eyebrow = "Česta pitanja",
  title = "Odgovori na najčešća pitanja",
  description = "Sažeti odgovori o našem asortimanu, podršci i saradnji. Za detaljnije informacije, naš tim vam stoji na raspolaganju.",
  items = defaultFaqs,
  defaultOpen = 0,
}: FaqSectionProps) {
  return (
    <Section id={id} tone="default" spacing="lg" aria-labelledby={`${id}-title`}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="flex flex-col gap-6 lg:col-span-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level="h2" id={`${id}-title`}>
            {title}
          </Heading>
          <Lead>{description}</Lead>

          <div className="mt-2 flex flex-col items-start gap-3 rounded-card border border-border bg-surface p-6">
            <p className="font-body text-sm text-muted">
              Niste pronašli odgovor koji tražite?
            </p>
            <Button href="#kontakt" variant="outline" size="sm">
              Kontaktirajte nas
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <FaqAccordion items={items} defaultOpen={defaultOpen} />
        </Reveal>
      </div>
    </Section>
  );
}
