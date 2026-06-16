"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { Analyzer } from "@/lib/products";
import { SpecTable } from "./spec-table";

function AnalyzerPlaceholder() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-accent-50 via-surface to-surface-strong">
      <div aria-hidden className="kvark-grid absolute inset-0 text-accent-600/[0.07]" />
      <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-200/30 blur-2xl transition-transform duration-500 group-hover:scale-125" />
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="relative h-16 w-16 text-accent-400 transition-transform duration-500 ease-premium group-hover:-translate-y-1"
        aria-hidden
      >
        <rect x="14" y="8" width="36" height="48" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <rect x="20" y="14" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <path d="M22 38h8M22 46h20M34 38h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/** External-link icon for the "Poseti sajt proizvođača" button. */
function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <path d="M6 3H3v10h10v-3M9 3h4v4M13 3 7 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Premium analyzer card: image, name, short description and three actions.
 * "Osnovne informacije" expands an inline panel with the full description and
 * the two-column specification table, keeping the grid tidy until requested.
 */
export function AnalyzerCard({ analyzer }: { analyzer: Analyzer }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const shortDescription = analyzer.description.split(". ")[0].replace(/\.$/, "") + ".";

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-card border border-border bg-background transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-accent-200 hover:shadow-card-hover",
        open && "border-accent-200 shadow-card",
      )}
    >
      <div className="relative aspect-16/10 w-full overflow-hidden">
        {analyzer.image ? (
          <Image
            src={analyzer.image}
            alt={analyzer.name}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 384px"
            className={cn(
              "object-cover transition-transform duration-500 ease-premium group-hover:scale-105",
              analyzer.imageClassName,
            )}
          />
        ) : (
          <AnalyzerPlaceholder />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <h3 className="font-heading text-lg font-semibold leading-snug text-ink">{analyzer.name}</h3>
        <p className="text-sm leading-relaxed text-muted">{shortDescription}</p>

        <div className="mt-auto flex flex-wrap gap-2.5 pt-4">
          <Button
            type="button"
            variant="primary"
            size="sm"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Sakrij informacije" : "Osnovne informacije"}
          </Button>
          <Button
            href={analyzer.catalogHref ?? "#"}
            variant="outline"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            PDF katalog
          </Button>
          <Button
            href={analyzer.manufacturerHref ?? "#"}
            variant="ghost"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Poseti sajt proizvođača
            <ExternalIcon />
          </Button>
        </div>
      </div>

      <div
        id={panelId}
        hidden={!open}
        className={cn("border-t border-border bg-surface/60 px-6 py-6 sm:px-7", open && "animate-fade-in")}
      >
        <p className="mb-6 text-sm leading-relaxed text-muted">{analyzer.description}</p>
        <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
          Specifikacija
        </p>
        <SpecTable rows={analyzer.specs} />

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
          <Button href="#kontakt" variant="primary" size="sm">
            Zatražite ponudu
          </Button>
          <span className="font-body text-xs text-faint">
            Tražite tehničke detalje o ovom uređaju? Javite nam se.
          </span>
        </div>
      </div>
    </article>
  );
}
