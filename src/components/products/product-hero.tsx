import Link from "next/link";
import { Button, Container, Eyebrow, Heading, Lead } from "@/components/ui";
import { contactInfo } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";

export type Crumb = { label: string; href?: string };

type ProductHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
  /** Optional quick-jump links rendered as pills under the lead. */
  quickLinks?: { label: string; href: string }[];
  /** Render the quote + call action buttons (default true). */
  actions?: boolean;
};

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

/**
 * Shared hero for product group / category pages. A deep brand-accent panel with
 * layered decoration (radial glow + dotted grid) gives the page presence and
 * depth, while the copy animates in with a gentle stagger.
 */
export function ProductHero({
  eyebrow = "Proizvodi",
  title,
  description,
  crumbs,
  quickLinks,
  actions = true,
}: ProductHeroProps) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-accent-900 text-white">
      {/* Decorative layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="kvark-grid absolute inset-0 text-white/[0.06]" />
        <div className="animate-float absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-accent-400/25 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-accent-300/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-accent-900 via-accent-900/40 to-transparent" />
      </div>

      <Container className="py-14 sm:py-20 lg:py-24">
        {/* Breadcrumb */}
        <Reveal as="nav" aria-label="Putanja" className="mb-8">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-xs text-white/55">
            {crumbs.map((crumb, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                  {crumb.href && !last ? (
                    <Link href={crumb.href} className="transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={last ? "text-white" : undefined} aria-current={last ? "page" : undefined}>
                      {crumb.label}
                    </span>
                  )}
                  {!last ? <span className="text-white/30">/</span> : null}
                </li>
              );
            })}
          </ol>
        </Reveal>

        <div className="flex max-w-3xl flex-col gap-5">
          <Reveal delay={60}>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <Heading level="display" className="text-white">
              {title}
            </Heading>
          </Reveal>
          {description ? (
            <Reveal delay={200}>
              <Lead className="text-white/75">{description}</Lead>
            </Reveal>
          ) : null}

          {actions ? (
            <Reveal delay={260} className="mt-2 flex flex-wrap gap-3">
              <Button href="#kontakt" variant="on-accent" size="lg">
                Zatražite ponudu
              </Button>
              <Button
                href={contactInfo.phone.href}
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white hover:border-white hover:text-white"
              >
                <PhoneIcon />
                {contactInfo.phone.label}
              </Button>
            </Reveal>
          ) : null}

          {quickLinks?.length ? (
            <Reveal delay={340} className="mt-2">
              <ul className="flex flex-wrap gap-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-body text-sm font-medium text-white/85 backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
