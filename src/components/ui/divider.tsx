import { cn } from "@/lib/utils";

type DividerProps = React.ComponentPropsWithoutRef<"div"> & {
  tone?: "default" | "accent" | "light";
};

const tones = {
  default: "bg-border",
  accent: "bg-accent-600",
  light: "bg-white/20",
} as const;

/** Thin hairline rule used to separate content or as a short accent underline. */
export function Divider({ tone = "default", className, ...props }: DividerProps) {
  return <div role="separator" className={cn("h-px w-full", tones[tone], className)} {...props} />;
}

/** Short accent underline used beneath eyebrows / headings for premium rhythm. */
export function AccentRule({ className }: { className?: string }) {
  return <span className={cn("block h-0.5 w-12 rounded-full bg-accent-600", className)} />;
}
