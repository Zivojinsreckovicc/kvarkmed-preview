"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Button, Container, Eyebrow } from "@/components/ui";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type ProductGroupContent = {
  id: string;
  index: string;
  label: string;
  tagline: string;
  detail: string;
  items: string[];
  href: string;
};

const groups: ProductGroupContent[] = [
  {
    id: "dijagnostika",
    index: "01",
    label: "Dijagnostika",
    tagline: "PCR, brzi testovi, serologija i POCT",
    detail:
      "Sveobuhvatan asortiman dijagnostičkih rešenja — od molekularne PCR dijagnostike, preko imunohromatografskih brzih testova, do POCT analiza namenjenih bržem donošenju odluka u dijagnostičkom procesu.",
    items: [
      "PCR dijagnostika",
      "Brzi dijagnostički testovi",
      "Serologija i imunologija",
      "POCT dijagnostika",
    ],
    href: "/proizvodi/dijagnostika",
  },
  {
    id: "laboratorijska-oprema",
    index: "02",
    label: "Laboratorijska oprema",
    tagline: "POCT analizatori i laboratorijski uređaji",
    detail:
      "POCT analizatori i laboratorijski uređaji dizajnirani za pouzdanu i efikasnu obradu uzoraka, uz stručnu podršku pri izboru opreme za potrebe vaše ustanove.",
    items: ["POCT analizatori", "Laboratorijski uređaji"],
    href: "/proizvodi/laboratorijska-oprema",
  },
  {
    id: "farmaceutski-medicinski",
    index: "03",
    label: "Farmaceutski i medicinski proizvodi",
    tagline: "Suplementi, flasteri i kućni testovi",
    detail:
      "Dijetetski suplementi, medicinski flasteri i kućni testovi namenjeni apotekama i zdravstvenim ustanovama, sa fokusom na kvalitet i doslednost ponude.",
    items: ["Dijetetski suplementi", "Flasteri i trake za bolove", "Kućni testovi"],
    href: "/proizvodi/farmaceutski-medicinski",
  },
];

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProductGroupsSection({ id = "proizvodi" }: { id?: string }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const count = groups.length;

  function focusTab(i: number) {
    const next = (i + count) % count;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        focusTab(active + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        focusTab(active - 1);
        break;
      case "Home":
        e.preventDefault();
        focusTab(0);
        break;
      case "End":
        e.preventDefault();
        focusTab(count - 1);
        break;
    }
  }

  const current = groups[active];

  return (
    <section id={id} className="w-full py-20 sm:py-28" aria-label="Grupe proizvoda">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem]">
          {/* Background image — oversized so the subtle parallax drift never exposes edges */}
          <Parallax speed={0.08} maxOffset={32} className="absolute inset-x-0 -inset-y-10 -z-10">
            <Image
              src="/imgs/product-categories.webp"
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
            />
          </Parallax>
          {/* Brand overlay (light tint — keeps the image visible) */}
          <div className="absolute inset-0 -z-10 bg-ink/30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-900/30 via-accent-900/5 to-accent-800/20" />

          <div className="flex flex-col gap-10 p-8 sm:p-12 lg:p-16">
            {/* Header */}
            <Reveal className="flex max-w-2xl flex-col gap-4">
              <Eyebrow tone="light">Proizvodi</Eyebrow>
              <h2 className="font-heading text-h2 font-semibold text-white">
                Kompletan asortiman na jednom mestu
              </h2>
            </Reveal>

            {/* Interactive split */}
            <Reveal delay={120} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Tabs */}
              <div
                role="tablist"
                aria-orientation="vertical"
                aria-label="Grupe proizvoda"
                onKeyDown={onKeyDown}
                className="flex flex-col gap-2 lg:col-span-5"
              >
                {groups.map((group, i) => {
                  const selected = i === active;
                  return (
                    <button
                      key={group.id}
                      ref={(el) => {
                        tabRefs.current[i] = el;
                      }}
                      role="tab"
                      id={`${id}-tab-${group.id}`}
                      aria-selected={selected}
                      aria-controls={`${id}-panel`}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => setActive(i)}
                      className={cn(
                        "group flex items-center gap-4 rounded-2xl border px-5 py-5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                        selected
                          ? "border-white/20 bg-white/10 backdrop-blur-sm"
                          : "border-transparent hover:border-white/10 hover:bg-white/5",
                      )}
                    >
                      <span
                        className={cn(
                          "font-heading text-sm font-semibold tabular-nums transition-colors",
                          selected ? "text-accent-200" : "text-white/40",
                        )}
                      >
                        {group.index}
                      </span>
                      <span className="flex flex-1 flex-col gap-0.5">
                        <span
                          className={cn(
                            "font-heading text-base font-semibold leading-snug transition-colors sm:text-lg",
                            selected ? "text-white" : "text-white/75 group-hover:text-white",
                          )}
                        >
                          {group.label}
                        </span>
                        <span className="font-body text-xs text-white/50">{group.tagline}</span>
                      </span>
                      <ChevronIcon
                        className={cn(
                          "h-5 w-5 shrink-0 transition-all duration-300",
                          selected
                            ? "translate-x-0 text-accent-200 opacity-100"
                            : "-translate-x-1 text-white/40 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                        )}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Detail panel */}
              <div
                id={`${id}-panel`}
                role="tabpanel"
                aria-labelledby={`${id}-tab-${current.id}`}
                tabIndex={0}
                className="lg:col-span-7"
              >
                <div
                  key={current.id}
                  className="animate-fade-in flex h-full flex-col gap-6 rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm sm:p-9"
                >
                  <h3 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                    {current.label}
                  </h3>
                  <p className="max-w-xl font-body text-sm leading-relaxed text-white/75 sm:text-base">
                    {current.detail}
                  </p>

                  <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {current.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-body text-sm text-white/85">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-300" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <Button href={current.href} variant="on-accent" size="md">
                      Saznajte više
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
