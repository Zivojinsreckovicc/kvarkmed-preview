import Image from "next/image";
import { Button, Container, Eyebrow } from "@/components/ui";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { Counter } from "./counter";

export type CounterItem = {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

type CountersSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  /** Replace with real figures — these are editable placeholders. */
  counters?: CounterItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

const defaultCounters: CounterItem[] = [
  { value: 15, suffix: "+", label: "Godina iskustva" },
  { value: 500, suffix: "+", label: "Proizvoda u ponudi" },
  { value: 200, suffix: "+", label: "Partnerskih ustanova" },
];

/**
 * Reusable animated stats band. Rounded rectangle with a scientific background
 * image and a brand-teal overlay, three count-up figures, and a centered CTA.
 */
export function CountersSection({
  id = "counters",
  eyebrow,
  title,
  counters = defaultCounters,
  ctaLabel = "Pogledajte proizvode",
  ctaHref = "/proizvodi",
  className,
}: CountersSectionProps) {
  return (
    <section className={cn("w-full py-20 sm:py-28", className)}>
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem]">
          {/* Background image — oversized so the subtle parallax drift never exposes edges */}
          <Parallax speed={0.08} maxOffset={32} className="absolute inset-x-0 -inset-y-10 -z-10">
            <Image
              src="/imgs/counters-bg.webp"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
            />
          </Parallax>

          {/* Brand-teal overlay to unify the image with the design system */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-900/95 via-accent-800/85 to-accent-900/95" />
          <div className="absolute inset-0 -z-10 bg-ink/30" />

          <div className="flex flex-col items-center gap-12 px-6 py-16 text-center sm:px-12 sm:py-20">
            {eyebrow || title ? (
              <Reveal className="flex max-w-2xl flex-col items-center gap-4">
                {eyebrow ? <Eyebrow tone="light">{eyebrow}</Eyebrow> : null}
                {title ? (
                  <h2 className="font-heading text-h2 font-semibold text-white">{title}</h2>
                ) : null}
              </Reveal>
            ) : null}

            {/* Counters */}
            <dl className="grid w-full max-w-4xl grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0">
              {counters.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={index * 100}
                  className={cn(
                    "flex flex-col items-center gap-2 px-4",
                    index > 0 && "sm:border-l sm:border-white/15",
                  )}
                >
                  <dd className="font-heading text-5xl font-bold leading-none text-white sm:text-6xl">
                    <Counter
                      value={item.value}
                      suffix={item.suffix}
                      prefix={item.prefix}
                      decimals={item.decimals}
                    />
                  </dd>
                  <dt className="font-body text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                    {item.label}
                  </dt>
                </Reveal>
              ))}
            </dl>

            {/* CTA */}
            <Reveal delay={200}>
              <Button href={ctaHref} variant="on-accent" size="lg">
                {ctaLabel}
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
