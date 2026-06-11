import { Eyebrow, Heading, Lead } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

/**
 * Animated eyebrow + heading + lead lockup with a short accent rule. Shared by
 * the product group pages so every section opens with the same premium rhythm.
 */
export function SectionIntro({ eyebrow, title, description, className }: SectionIntroProps) {
  return (
    <div className={cn("flex max-w-2xl flex-col gap-4", className)}>
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
    </div>
  );
}
