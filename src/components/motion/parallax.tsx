"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  /**
   * How strongly the layer drifts against scroll. 0.1 ≈ very subtle.
   * Positive values move the layer opposite to the scroll direction.
   */
  speed?: number;
  /** Hard cap for the drift in px, so the effect never gets loud. */
  maxOffset?: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Minimal scroll parallax. Translates its children a few pixels against the
 * scroll direction while the element crosses the viewport — transform-only,
 * rAF-throttled, and inert when prefers-reduced-motion is set.
 *
 * Intended for decorative background layers (oversize them slightly, e.g.
 * `-inset-y-10`, so edges never show while drifting).
 */
export function Parallax({ speed = 0.1, maxOffset = 48, className, children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewportHeight) return;
      const fromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
      const offset = Math.max(-maxOffset, Math.min(maxOffset, -fromCenter * speed));
      node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed, maxOffset]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
