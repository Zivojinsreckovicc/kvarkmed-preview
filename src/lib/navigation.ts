/**
 * Single source of truth for site navigation.
 * Used by the header, mobile overlay, and (later) the footer + sitemap.
 */

export type NavSubItem = {
  label: string;
  href: string;
};

export type ProductGroup = {
  label: string;
  href: string;
  description: string;
  items: NavSubItem[];
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
    items: [
      { label: "PCR dijagnostika", href: "/proizvodi/dijagnostika/pcr" },
      { label: "Brzi dijagnostički testovi", href: "/proizvodi/dijagnostika/brzi-testovi" },
      { label: "Serologija i imunologija", href: "/proizvodi/dijagnostika/serologija" },
      { label: "POCT dijagnostika", href: "/proizvodi/dijagnostika/poct" },
    ],
  },
  {
    label: "Laboratorijska oprema",
    href: "/proizvodi/laboratorijska-oprema",
    description: "POCT analizatori i laboratorijski uređaji.",
    items: [
      { label: "POCT analizatori", href: "/proizvodi/laboratorijska-oprema/poct-analizatori" },
      { label: "Laboratorijski uređaji", href: "/proizvodi/laboratorijska-oprema/uredjaji" },
    ],
  },
  {
    label: "Farmaceutski i medicinski proizvodi",
    href: "/proizvodi/farmaceutski-medicinski",
    description: "Suplementi, flasteri i kućni testovi.",
    items: [
      { label: "Dijetetski suplementi", href: "/proizvodi/farmaceutski-medicinski/suplementi" },
      { label: "Flasteri i trake za bolove", href: "/proizvodi/farmaceutski-medicinski/flasteri" },
      { label: "Kućni testovi", href: "/proizvodi/farmaceutski-medicinski/kucni-testovi" },
    ],
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
