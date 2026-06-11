/**
 * Single source of truth for site navigation.
 * Used by the header, mobile overlay, and (later) the footer + sitemap.
 */

export type ProductGroup = {
  label: string;
  href: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
  /** When present, this item renders as a mega-menu trigger. */
  groups?: ProductGroup[];
};

export const productGroups: ProductGroup[] = [
  {
    label: "Dijagnostika",
    href: "/proizvodi/dijagnostika",
    description: "PCR, brzi testovi, serologija i POCT dijagnostika.",
  },
  {
    label: "Laboratorijska oprema",
    href: "/proizvodi/laboratorijska-oprema",
    description: "POCT analizatori i laboratorijski uređaji.",
  },
  {
    label: "Farmaceutski i medicinski proizvodi",
    href: "/proizvodi/farmaceutski-medicinski",
    description: "Suplementi, flasteri i kućni testovi.",
  },
];

export const navItems: NavItem[] = [
  { label: "Početna", href: "/" },
  { label: "O nama", href: "/o-nama" },
  { label: "Proizvodi", href: "/proizvodi", groups: productGroups },
  { label: "Usluge", href: "/usluge" },
  { label: "Partneri", href: "/partneri" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];
