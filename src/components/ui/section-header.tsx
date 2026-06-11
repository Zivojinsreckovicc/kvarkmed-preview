import { cn } from "@/lib/utils";
import { Eyebrow, Heading, Lead } from "./typography";

type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  /** Use on accent/dark backgrounds to flip text colors. */
  onAccent?: boolean;
  headingLevel?: "display" | "h1" | "h2" | "h3";
  className?: string;
};

/**
 * Eyebrow + heading + lead lockup. The most repeated section intro on the site,
 * packaged once so every page stays visually consistent.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  onAccent = false,
  headingLevel = "h2",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "center" && "mx-auto max-w-2xl",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={onAccent ? "light" : "accent"}>{eyebrow}</Eyebrow> : null}
      <Heading level={headingLevel} className={onAccent ? "text-white" : undefined}>
        {title}
      </Heading>
      {description ? (
        <Lead className={cn("max-w-2xl", onAccent && "text-white/80")}>{description}</Lead>
      ) : null}
    </div>
  );
}
