import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-body font-medium leading-none",
  {
    variants: {
      variant: {
        accent: "bg-accent-50 text-accent-700",
        neutral: "bg-surface-strong text-ink-soft",
        outline: "border border-border-strong text-muted",
        solid: "bg-accent-600 text-white",
      },
      size: {
        sm: "px-2.5 py-1 text-[0.6875rem] uppercase tracking-wider",
        md: "px-3 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "sm",
    },
  },
);

type BadgeProps = React.ComponentPropsWithoutRef<"span"> & VariantProps<typeof badgeVariants>;

/** Compact label for categories, statuses, and key specs. */
export function Badge({ variant, size, className, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { badgeVariants };
