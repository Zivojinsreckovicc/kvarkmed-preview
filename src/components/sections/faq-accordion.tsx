"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span
      className={cn(
        "relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
        open ? "border-accent-600 text-accent-600" : "border-border-strong text-ink-soft group-hover:border-accent-600",
      )}
    >
      <span className="absolute h-0.5 w-3 rounded-full bg-current" />
      <span
        className={cn(
          "absolute h-3 w-0.5 rounded-full bg-current transition-transform duration-300",
          open && "scale-y-0",
        )}
      />
    </span>
  );
}

/**
 * Accessible disclosure accordion. Single panel open at a time; smooth height
 * animation via the grid-rows technique. Collapsed panels are `inert` so their
 * content stays out of the tab order and accessibility tree.
 */
export function FaqAccordion({
  items,
  defaultOpen = 0,
}: {
  items: FaqItem[];
  defaultOpen?: number | null;
}) {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="flex flex-col border-t border-border">
      {items.map((item, index) => {
        const open = openIndex === index;
        const triggerId = `${uid}-trigger-${index}`;
        const panelId = `${uid}-panel-${index}`;

        return (
          <div key={item.question} className="border-b border-border">
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span
                  className={cn(
                    "font-heading text-base font-semibold leading-snug transition-colors sm:text-lg",
                    open ? "text-accent-700" : "text-ink group-hover:text-accent-700",
                  )}
                >
                  {item.question}
                </span>
                <PlusMinus open={open} />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              inert={!open}
              className={cn(
                "grid transition-all duration-300 ease-out",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-prose pb-6 pr-10 font-body text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
