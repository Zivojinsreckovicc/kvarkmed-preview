import { Button, Container, Eyebrow } from "@/components/ui";
import { contactInfo } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";

/** Phone-handset glyph for the secondary call action. */
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
      <path
        d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CtaBannerProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  /** Show the tap-to-call secondary button. */
  showPhone?: boolean;
};

/**
 * Mid-page conversion banner: a contained, rounded accent block with the same
 * layered decoration as the hero. Gives long catalog pages a clear, repeated
 * "talk to us" action without waiting for the footer form.
 */
export function CtaBanner({
  eyebrow = "Kontakt",
  title,
  description,
  primaryLabel = "Zatražite ponudu",
  primaryHref = "#kontakt",
  showPhone = true,
}: CtaBannerProps) {
  return (
    <section className="w-full py-16 sm:py-20" aria-label="Poziv na akciju">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-accent-600 px-8 py-12 sm:px-12 sm:py-14">
            {/* Decoration */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="kvark-grid absolute inset-0 text-white/[0.07]" />
              <div className="animate-float absolute -right-16 -top-20 h-72 w-72 rounded-full bg-accent-300/25 blur-3xl" />
              <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-accent-200/10 blur-3xl" />
            </div>

            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex max-w-2xl flex-col gap-3">
                <Eyebrow tone="light">{eyebrow}</Eyebrow>
                <h2 className="font-heading text-h2 font-semibold text-white">{title}</h2>
                {description ? (
                  <p className="font-body text-base leading-relaxed text-white/80">{description}</p>
                ) : null}
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <Button href={primaryHref} variant="on-accent" size="lg">
                  {primaryLabel}
                </Button>
                {showPhone ? (
                  <Button
                    href={contactInfo.phone.href}
                    variant="outline"
                    size="lg"
                    className="border-white/30 bg-transparent text-white hover:border-white hover:text-white"
                  >
                    <PhoneIcon />
                    {contactInfo.phone.label}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
