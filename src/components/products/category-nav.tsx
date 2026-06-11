"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

type CategoryNavItem = { id: string; label: string };

/**
 * Sticky in-page category navigation with scroll-spy. Highlights the section
 * currently in view and stays pinned beneath the site header so long catalog
 * pages remain easy to navigate. Uses anchor links, so it works without JS too.
 */
export function CategoryNav({ items }: { items: readonly CategoryNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Kategorije"
      className="sticky top-20 z-30 border-b border-border bg-background/85 backdrop-blur"
    >
      <Container className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "shrink-0 cursor-pointer rounded-full px-4 py-2 font-body text-sm font-medium transition-colors duration-200",
                isActive
                  ? "bg-accent-600 text-white"
                  : "text-ink-soft hover:bg-surface-strong hover:text-ink",
              )}
            >
              {item.label}
            </a>
          );
        })}
      </Container>
    </nav>
  );
}
