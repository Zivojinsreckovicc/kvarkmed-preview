/**
 * Global site configuration: brand contact details and social profiles.
 * Update the `href` values with real profiles when available.
 */

/** Single source of truth for company contact details used sitewide. */
export const contactInfo = {
  phone: { label: "063/494-590", href: "tel:+38163494590" },
  email: { label: "kvarkmed@kvark.rs", href: "mailto:kvarkmed@kvark.rs" },
  address: {
    label: "Industrijska BB, 34000 Kragujevac",
    href: "https://maps.google.com/?q=Industrijska+BB+34000+Kragujevac",
  },
} as const;

export type SocialIcon = "linkedin" | "instagram" | "facebook";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
];

/** Areas of interest used by the contact form selector. */
export const contactTopics = [
  "Dijagnostika",
  "Laboratorijska oprema",
  "Farmaceutski i medicinski proizvodi",
  "Opšti upit",
] as const;
