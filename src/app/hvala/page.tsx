import type { Metadata } from "next";
import { Button, Eyebrow, Heading, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Hvala na poruci",
  description: "Vaš upit je uspešno poslat timu Kvark Med. Javićemo vam se u najkraćem mogućem roku.",
  alternates: { canonical: "/hvala" },
  robots: { index: false, follow: true },
};

export default function HvalaPage() {
  return (
    <main className="flex flex-col">
      <Section tone="surface" spacing="lg">
        <div className="flex min-h-[50vh] max-w-2xl flex-col items-start gap-6">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-50 text-accent-600">
            <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <Eyebrow>Poruka poslata</Eyebrow>
          <Heading level="display">Hvala vam na poruci</Heading>
          <Lead>
            Vaš upit je uspešno zaprimljen. Naš tim će pregledati vaše podatke i javiti vam se
            u najkraćem mogućem roku.
          </Lead>
          <Button href="/" size="lg">
            Nazad na početnu
          </Button>
        </div>
      </Section>
    </main>
  );
}
