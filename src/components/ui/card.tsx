import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("group relative flex flex-col overflow-hidden rounded-card", {
  variants: {
    variant: {
      /** Quiet bordered card — the premium default. */
      outline: "border border-border bg-background",
      /** Elevated with a soft, non-cheap shadow. */
      elevated: "bg-background shadow-card",
      /** Accent-tinted block for category highlights. */
      accent: "border border-accent-100 bg-accent-50",
    },
    interactive: {
      true: "transition-all duration-300 hover:-translate-y-0.5",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      interactive: true,
      class: "hover:border-accent-200 hover:shadow-card",
    },
    { variant: "elevated", interactive: true, class: "hover:shadow-card-hover" },
    { variant: "accent", interactive: true, class: "hover:border-accent-200" },
  ],
  defaultVariants: {
    variant: "outline",
    interactive: false,
  },
});

type CardProps = React.ComponentPropsWithoutRef<"div"> & VariantProps<typeof cardVariants>;

export function Card({ variant, interactive, className, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant, interactive }), className)} {...props} />;
}

export function CardMedia({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("relative aspect-4/3 w-full overflow-hidden bg-surface-strong", className)}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("flex flex-1 flex-col gap-3 p-6 sm:p-7", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={cn("font-heading text-lg font-semibold leading-snug text-ink", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-sm leading-relaxed text-muted", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("mt-auto flex flex-wrap items-center gap-3 pt-2", className)}
      {...props}
    />
  );
}

export { cardVariants };
