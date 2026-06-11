"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org?: string;
};

/** useLayoutEffect that no-ops on the server to avoid hydration warnings. */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function initials(name: string) {
  return name
    .replace(/[^\p{L}\s.]/gu, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function Arrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d={direction === "prev" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const AUTOPLAY_MS = 6500;

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [height, setHeight] = useState<number>();
  const reducedMotion = useRef(false);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  const count = items.length;
  const go = useCallback((next: number) => setIndex((next + count) % count), [count]);
  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  // Smoothly resize the box to fit the active slide.
  const measure = useCallback(() => {
    const el = slideRefs.current[index];
    if (el) setHeight(el.offsetHeight);
  }, [index]);

  useIsomorphicLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    if (paused || count <= 1 || reducedMotion.current) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, count, index]);

  return (
    <div
      role="group"
      aria-roledescription="karusel"
      aria-label="Iskustva klijenata"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
      className="relative mx-auto w-full max-w-3xl"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-background px-8 py-12 shadow-card sm:px-14 sm:py-16">
        {/* Decorative quote mark */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-8 top-6 select-none font-heading text-8xl leading-none text-accent-100 sm:left-12"
        >
          &ldquo;
        </span>

        {/* Crossfade stack — height animates to the active slide */}
        <div
          className="relative transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ height }}
        >
          {items.map((item, i) => {
            const isActive = i === index;
            return (
              <div
                key={item.name + i}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                aria-hidden={!isActive}
                inert={!isActive}
                className={cn(
                  "absolute inset-x-0 top-0 flex flex-col items-center gap-8 text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isActive
                    ? "translate-y-0 opacity-100 blur-0"
                    : "pointer-events-none translate-y-3 opacity-0 blur-[2px]",
                )}
              >
                <blockquote className="max-w-2xl text-balance font-heading text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                  {item.quote}
                </blockquote>

                <figcaption className="flex flex-col items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-600 font-heading text-sm font-semibold text-white">
                    {initials(item.name)}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-body text-sm font-semibold text-ink">{item.name}</span>
                    <span className="font-body text-xs text-muted">
                      {item.role}
                      {item.org ? `, ${item.org}` : ""}
                    </span>
                  </span>
                </figcaption>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      {count > 1 ? (
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Prethodna izjava"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-ink-soft transition-colors hover:border-accent-600 hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600/40"
          >
            <Arrow direction="prev" />
          </button>

          <div className="flex items-center gap-2.5">
            {items.map((item, i) => (
              <button
                key={item.name + i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Izjava ${i + 1} od ${count}`}
                aria-current={i === index}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-7 bg-accent-600" : "w-2 bg-border-strong hover:bg-accent-300",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Sledeća izjava"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-ink-soft transition-colors hover:border-accent-600 hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600/40"
          >
            <Arrow direction="next" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
