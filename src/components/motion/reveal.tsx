"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps<T extends React.ElementType> = {
  as?: T;
  /** Stagger offset in ms — pass an index*step for lists. */
  delay?: number;
  /** Re-animate every time it enters the viewport (default: once). */
  once?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * Lightweight scroll-reveal wrapper. Adds a staggered fade-up the first time the
 * element scrolls into view via IntersectionObserver. The actual transition is
 * defined in CSS (`.kvark-reveal`), which is disabled under
 * `prefers-reduced-motion`, so motion-sensitive users get instant content.
 */
export function Reveal<T extends React.ElementType = "div">({
  as,
  delay = 0,
  once = true,
  className,
  children,
  style,
  ...props
}: RevealProps<T>) {
  const Component = (as ?? "div") as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setRevealed(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Component
      ref={ref}
      data-revealed={revealed ? "true" : "false"}
      className={cn("kvark-reveal", className)}
      style={{ ...(style as React.CSSProperties), "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      {...props}
    >
      {children}
    </Component>
  );
}
