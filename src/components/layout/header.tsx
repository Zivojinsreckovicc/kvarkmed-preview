"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { navItems, type NavItem, type ProductGroup } from "@/lib/navigation";
import { Logo } from "./logo";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/* -------------------------------------------------------------------------- */
/* Desktop nav link with animated accent underline                             */
/* -------------------------------------------------------------------------- */
function NavLink({
  href,
  label,
  active,
  hasChevron,
  open,
  ...handlers
}: {
  href: string;
  label: string;
  active: boolean;
  hasChevron?: boolean;
  open?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      aria-expanded={hasChevron ? open : undefined}
      className={cn(
        "relative inline-flex items-center gap-1 py-2 font-body text-[0.8rem] font-medium uppercase tracking-[0.12em] transition-colors duration-200",
        "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent-600 after:transition-transform after:duration-300 hover:after:scale-x-100",
        active ? "text-accent-700 after:scale-x-100" : "text-ink-soft hover:text-ink",
      )}
      {...handlers}
    >
      {label}
      {hasChevron ? (
        <svg
          viewBox="0 0 12 12"
          aria-hidden
          className={cn(
            "h-2.5 w-2.5 transition-transform duration-300",
            open && "rotate-180",
          )}
        >
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Desktop full-width mega menu                                                 */
/* -------------------------------------------------------------------------- */
function MegaMenu({
  groups,
  open,
  pathname,
  onEnter,
  onLeave,
}: {
  groups: ProductGroup[];
  open: boolean;
  pathname: string;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      aria-hidden={!open}
      inert={!open}
      className={cn(
        "absolute inset-x-0 top-full z-40 border-b border-border bg-background/95 backdrop-blur-sm transition-all duration-300",
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0",
      )}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 sm:px-8 lg:grid-cols-4 lg:px-12">
        {groups.map((group) => (
          <div key={group.href} className="flex flex-col gap-4">
            <Link
              href={group.href}
              className="group/col flex flex-col gap-1.5 border-l-2 border-accent-100 pl-4 transition-colors hover:border-accent-600"
            >
              <span className="font-heading text-sm font-semibold leading-snug text-ink transition-colors group-hover/col:text-accent-700">
                {group.label}
              </span>
              <span className="font-body text-xs leading-relaxed text-muted">
                {group.description}
              </span>
            </Link>
            <ul className="flex flex-col gap-1 pl-4">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group/link inline-flex items-center gap-2 py-1 font-body text-[0.82rem] text-muted transition-colors hover:text-accent-700",
                      isActive(pathname, item.href) && "text-accent-700",
                    )}
                  >
                    <span className="h-px w-0 bg-accent-600 transition-all duration-300 group-hover/link:w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col justify-between gap-6 rounded-card bg-accent-600 p-6 text-white">
          <div className="flex flex-col gap-2">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Potrebna pomoć?
            </p>
            <p className="font-heading text-base font-semibold leading-snug">
              Zatražite informacije o našem asortimanu
            </p>
          </div>
          <Button href="/kontakt" variant="on-accent" size="sm" className="self-start">
            Kontaktirajte nas
          </Button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Mobile accordion item                                                        */
/* -------------------------------------------------------------------------- */
function MobileGroup({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  if (!item.groups) return null;

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left font-heading text-xl font-semibold text-ink"
      >
        {item.label}
        <svg
          viewBox="0 0 16 16"
          aria-hidden
          className={cn("h-4 w-4 text-accent-600 transition-transform duration-300", open && "rotate-45")}
        >
          <path d="M8 2v12M2 8h12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-4 pl-1">
            {item.groups.map((group) => (
              <div key={group.href} className="flex flex-col gap-1.5">
                <Link
                  href={group.href}
                  onClick={onNavigate}
                  className="font-body text-sm font-semibold uppercase tracking-wider text-accent-700"
                >
                  {group.label}
                </Link>
                {group.items.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={onNavigate}
                    className={cn(
                      "py-1 font-body text-base text-muted transition-colors hover:text-accent-700",
                      isActive(pathname, sub.href) && "text-accent-700",
                    )}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Header                                                                       */
/* -------------------------------------------------------------------------- */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const productNav = navItems.find((item) => item.groups);

  const openMega = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  }, []);

  // Scroll-aware styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // Body scroll lock + ESC while mobile overlay is open
  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-background/90 backdrop-blur transition-shadow duration-300",
          scrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.06),0_8px_24px_-16px_rgba(26,29,31,0.18)]" : "border-b border-border",
        )}
        onMouseLeave={closeMega}
      >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Glavna navigacija" className="hidden items-center gap-7 lg:flex">
          {navItems
            .filter((item) => item.href !== "/kontakt")
            .map((item) =>
              item.groups ? (
                <div key={item.href} onMouseEnter={openMega} onMouseLeave={closeMega}>
                  <NavLink
                    href={item.href}
                    label={item.label}
                    active={isActive(pathname, item.href)}
                    hasChevron
                    open={megaOpen}
                    onFocus={openMega}
                  />
                </div>
              ) : (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={isActive(pathname, item.href)}
                  onFocus={closeMega}
                />
              ),
            )}
        </nav>

        <div className="hidden items-center lg:flex">
          <Button href="/kontakt" variant="primary" size="sm">
            Kontakt
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={mobileOpen}
          aria-controls="mobilna-navigacija"
          onClick={() => setMobileOpen((v) => !v)}
          className="relative flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="sr-only">Meni</span>
          <span className="relative block h-4 w-6">
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-6 rounded-full bg-ink transition-all duration-300",
                mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-ink transition-all duration-300",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-6 rounded-full bg-ink transition-all duration-300",
                mobileOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
              )}
            />
          </span>
        </button>
      </div>

      {/* Desktop mega menu */}
      {productNav?.groups ? (
        <MegaMenu
          groups={productNav.groups}
          open={megaOpen}
          pathname={pathname}
          onEnter={openMega}
          onLeave={closeMega}
        />
      ) : null}
      </header>

      {/* Mobile full-screen overlay — rendered outside the backdrop-blur header
          so `fixed` is positioned against the viewport, not the header box. */}
      <div
        id="mobilna-navigacija"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-background transition-[opacity,visibility] duration-300 lg:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="h-20 shrink-0" aria-hidden />
        <nav
          aria-label="Mobilna navigacija"
          className="flex-1 overflow-y-auto px-6 pb-12 pt-2 sm:px-8"
        >
          <div className="flex flex-col">
            {navItems.map((item, index) =>
              item.groups ? (
                <div
                  key={item.href}
                  style={{ transitionDelay: mobileOpen ? `${100 + index * 60}ms` : "0ms" }}
                  className={cn(
                    "transition-all duration-500",
                    mobileOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                  )}
                >
                  <MobileGroup item={item} pathname={pathname} onNavigate={() => setMobileOpen(false)} />
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ transitionDelay: mobileOpen ? `${100 + index * 60}ms` : "0ms" }}
                  className={cn(
                    "border-b border-border py-4 font-heading text-xl font-semibold transition-all duration-500",
                    mobileOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                    isActive(pathname, item.href) ? "text-accent-700" : "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <div
            style={{ transitionDelay: mobileOpen ? `${100 + navItems.length * 60}ms` : "0ms" }}
            className={cn(
              "mt-8 transition-all duration-500",
              mobileOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
          >
            <Button href="/kontakt" variant="primary" size="lg" className="w-full">
              Kontaktirajte nas
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
