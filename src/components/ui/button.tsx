import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-button font-body font-medium whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        /** Primary call to action. */
        primary: "bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800",
        /** Neutral solid for secondary emphasis. */
        secondary: "bg-ink text-white hover:bg-ink-soft",
        /** Outlined, premium and quiet. */
        outline:
          "border border-border-strong bg-transparent text-ink hover:border-accent-600 hover:text-accent-700",
        /** Minimal text affordance. */
        ghost: "bg-transparent text-ink hover:bg-surface-strong",
        /** Inline text link styled as a button. */
        link: "h-auto rounded-none p-0 text-accent-700 underline-offset-4 hover:underline",
        /** For placement on dark / accent backgrounds. */
        "on-accent": "bg-white text-accent-700 hover:bg-accent-50",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    compoundVariants: [{ variant: "link", size: ["sm", "md", "lg"], class: "h-auto px-0" }],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Primary interactive primitive. Renders a `<button>` by default, or a Next.js
 * `<Link>` when `href` is provided — so navigation and actions share one API.
 */
export function Button({ variant, size, className, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href !== undefined) {
    return <Link className={classes} {...props} />;
  }

  const { type, ...rest } = props as ButtonAsButton;
  return <button type={type ?? "button"} className={classes} {...rest} />;
}
