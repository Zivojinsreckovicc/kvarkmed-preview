import Link from "next/link";
import { Container } from "@/components/ui";
import { navItems, productGroups } from "@/lib/navigation";
import { contactInfo } from "@/lib/site";
import { Logo } from "./logo";
import { NewsletterForm } from "./newsletter-form";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4 shrink-0 text-accent-400">
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4 shrink-0 text-accent-400">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4 shrink-0 text-accent-400">
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4 shrink-0 text-accent-400">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const legalLinks = [
  { label: "Politika privatnosti", href: "/politika-privatnosti" },
  { label: "Uslovi korišćenja", href: "/uslovi-koriscenja" },
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
      {children}
    </h2>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 font-body text-sm text-white/65 transition-colors hover:text-white"
    >
      <span className="h-px w-0 bg-accent-400 transition-all duration-300 group-hover:w-3" />
      {children}
    </Link>
  );
}

/**
 * Sitewide footer. Dark, premium, and data-driven from `@/lib/navigation`,
 * so new pages and product groups appear here automatically.
 */
export function Footer() {
  const year = new Date().getFullYear();
  // Flat links for the footer: every top-level page except the product mega-menu,
  // which gets its own dedicated column below.
  const quickLinks = navItems.filter((item) => item.href !== "/proizvodi");

  return (
    <footer className="mt-auto bg-ink text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Logo tone="light" />
            <p className="max-w-sm font-body text-sm leading-relaxed text-white/55">
              Distributer medicinske dijagnostike, laboratorijske opreme i farmaceutskih
              proizvoda, namenjen laboratorijama, klinikama, bolnicama, apotekama i
              zdravstvenim ustanovama.
            </p>

            <address className="flex flex-col gap-3 not-italic">
              <a
                href={contactInfo.phone.href}
                className="group inline-flex items-center gap-3 font-body text-sm text-white/70 transition-colors hover:text-white"
              >
                <PhoneIcon />
                {contactInfo.phone.label}
              </a>
              <a
                href={contactInfo.email.href}
                className="group inline-flex items-center gap-3 font-body text-sm text-white/70 transition-colors hover:text-white"
              >
                <MailIcon />
                {contactInfo.email.label}
              </a>
              <a
                href={contactInfo.address.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-3 font-body text-sm text-white/70 transition-colors hover:text-white"
              >
                <span className="mt-0.5">
                  <PinIcon />
                </span>
                {contactInfo.address.label}
              </a>
              <span className="inline-flex items-center gap-3 font-body text-sm text-white/70">
                <ClockIcon />
                Radno vreme: {contactInfo.workingHours}
              </span>
            </address>
          </div>

          {/* Quick links */}
          <nav aria-label="Brzi linkovi" className="lg:col-span-2">
            <ColumnTitle>Navigacija</ColumnTitle>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label="Proizvodi" className="lg:col-span-3">
            <ColumnTitle>Proizvodi</ColumnTitle>
            <ul className="flex flex-col gap-3">
              {productGroups.map((group) => (
                <li key={group.href}>
                  <FooterLink href={group.href}>{group.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <ColumnTitle>Newsletter</ColumnTitle>
            <p className="mb-4 font-body text-sm leading-relaxed text-white/55">
              Prijavite se za stručne novosti iz oblasti dijagnostike i laboratorijske
              opreme.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="font-body text-xs text-white/45">
            © {year} Kvark Med. Sva prava zadržana.
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-xs text-white/45 transition-colors hover:text-white/80"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
