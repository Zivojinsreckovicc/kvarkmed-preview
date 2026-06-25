import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, Heading, Lead, Section } from "@/components/ui";
import { contactInfo } from "@/lib/site";

export function LocationSection() {
  return (
    <Section tone="surface" spacing="lg" aria-label="Kako nas pronaći">
      <Reveal className="flex flex-col gap-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <Eyebrow>Lokacija</Eyebrow>
          <Heading level="h2">Kako nas pronaći</Heading>
          <Lead>{contactInfo.address.label}</Lead>
          <p className="font-body text-base text-muted">
            Radno vreme: {contactInfo.workingHours}
          </p>
        </div>

        <div className="overflow-hidden rounded-card border border-border bg-background shadow-card">
          <iframe
            title="Mapa — Kvark Med, Industrijska 16A, Kragujevac"
            src={contactInfo.address.embedHref}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-96 w-full border-0 sm:h-[28rem]"
          />
        </div>
      </Reveal>
    </Section>
  );
}
