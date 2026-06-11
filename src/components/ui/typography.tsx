import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Eyebrow — small uppercase label above headings                              */
/* -------------------------------------------------------------------------- */
type EyebrowProps = React.ComponentPropsWithoutRef<"p"> & {
  tone?: "accent" | "muted" | "light";
};

const eyebrowTones = {
  accent: "text-accent-600",
  muted: "text-faint",
  light: "text-white/70",
} as const;

export function Eyebrow({ tone = "accent", className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-body text-xs font-semibold uppercase tracking-[0.18em]",
        eyebrowTones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/* Heading — display + h1..h3 scale driven by theme tokens                      */
/* -------------------------------------------------------------------------- */
const headingVariants = cva("font-heading font-semibold text-balance", {
  variants: {
    level: {
      display: "text-display font-bold",
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3 font-semibold",
    },
  },
  defaultVariants: {
    level: "h2",
  },
});

type HeadingProps = Omit<React.ComponentPropsWithoutRef<"h2">, "color"> &
  VariantProps<typeof headingVariants> & {
    as?: "h1" | "h2" | "h3" | "h4";
  };

export function Heading({ level, as, className, children, ...props }: HeadingProps) {
  const Tag = (as ?? (level === "display" ? "h1" : level === "h1" ? "h1" : level === "h3" ? "h3" : "h2")) as "h1";
  return (
    <Tag className={cn(headingVariants({ level }), className)} {...props}>
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------- */
/* Lead — calm intro paragraph                                                  */
/* -------------------------------------------------------------------------- */
type TextProps = React.ComponentPropsWithoutRef<"p">;

export function Lead({ className, children, ...props }: TextProps) {
  return (
    <p
      className={cn("font-body text-lg leading-relaxed text-muted sm:text-xl", className)}
      {...props}
    >
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/* Text — default body copy                                                     */
/* -------------------------------------------------------------------------- */
export function Text({ className, children, ...props }: TextProps) {
  return (
    <p className={cn("font-body text-base leading-relaxed text-muted", className)} {...props}>
      {children}
    </p>
  );
}

export { headingVariants };
