import { cn } from "@/lib/utils";

type AccordionProps = {
  title: string;
  /** Optional small count/label shown next to the title. */
  meta?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
};

/**
 * Premium accordion built on native <details>/<summary> — fully accessible and
 * SEO-friendly (content stays in the DOM) with zero client JavaScript. Used for
 * the deeper levels of the diagnostics catalog so long lists stay scannable.
 */
export function Accordion({ title, meta, defaultOpen = false, children, className }: AccordionProps) {
  return (
    <details
      open={defaultOpen}
      className={cn(
        "group rounded-card border border-border bg-background transition-colors open:border-accent-200 open:shadow-card",
        className,
      )}
    >
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 sm:px-7",
          "[&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600/40",
        )}
      >
        <span className="flex items-baseline gap-3">
          <span className="font-heading text-base font-semibold text-ink sm:text-lg">{title}</span>
          {meta ? (
            <span className="font-body text-xs font-medium uppercase tracking-wider text-faint">
              {meta}
            </span>
          ) : null}
        </span>
        <span
          aria-hidden
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-accent-600 transition-colors group-open:border-accent-200 group-open:bg-accent-50"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-300 group-open:rotate-45">
            <path d="M8 2v12M2 8h12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <div className="border-t border-border px-6 pb-6 pt-5 sm:px-7">{children}</div>
    </details>
  );
}
