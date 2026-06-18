import { Eyebrow, Heading, Lead } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional manufacturer link rendered beneath the description. */
  link?: { label: string; href: string };
  className?: string;
};

function ExternalArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-3.5 w-3.5 shrink-0">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Animated eyebrow + heading + lead lockup with a short accent rule. Shared by
 * the product group pages so every section opens with the same premium rhythm.
 */
export function SectionIntro({ eyebrow, title, description, link, className }: SectionIntroProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4 rounded-card border border-border bg-background p-8 shadow-card sm:p-10",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal className="flex items-center gap-3">
          <span className="h-0.5 w-8 rounded-full bg-accent-600" />
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <Reveal delay={80}>
        <Heading level="h2">{title}</Heading>
      </Reveal>
      {description ? (
        <Reveal delay={150}>
          <Lead>{description}</Lead>
        </Reveal>
      ) : null}
      {link ? (
        <Reveal delay={220}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 font-body text-sm font-medium text-accent-700 underline decoration-accent-300 underline-offset-4 transition-colors hover:text-accent-600 hover:decoration-accent-600"
          >
            {link.label}
            <ExternalArrow />
          </a>
        </Reveal>
      ) : null}
    </div>
  );
}
