import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Container } from "./container";

const sectionVariants = cva("w-full", {
  variants: {
    tone: {
      /** Default white canvas. */
      default: "bg-background text-ink",
      /** Soft off-white for gentle alternation between sections. */
      surface: "bg-surface text-ink",
      /** Deep accent block with light text — use sparingly for impact. */
      accent: "bg-accent-600 text-white",
      /** Subtle accent tint for feature / category bands. */
      "accent-soft": "bg-accent-50 text-ink",
    },
    spacing: {
      none: "",
      sm: "py-16 sm:py-20",
      md: "py-20 sm:py-28",
      lg: "py-24 sm:py-32",
    },
  },
  defaultVariants: {
    tone: "default",
    spacing: "md",
  },
});

type SectionProps = React.ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof sectionVariants> & {
    /** Wrap children in a Container automatically. Set false for full-bleed. */
    contained?: boolean;
    containerSize?: React.ComponentProps<typeof Container>["size"];
  };

/**
 * Full-width page band that owns vertical rhythm and background tone.
 * Alternate `tone="surface"` / `tone="accent"` to build editorial section flow.
 */
export function Section({
  tone,
  spacing,
  contained = true,
  containerSize,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(sectionVariants({ tone, spacing }), className)} {...props}>
      {contained ? <Container size={containerSize}>{children}</Container> : children}
    </section>
  );
}

export { sectionVariants };
