/**
 * Global site configuration: brand contact details and social profiles.
 * Update the `href` values with real profiles when available.
 */

/** Single source of truth for company contact details used sitewide. */
export const contactInfo = {
  phone: { label: "063/494-590", href: "tel:+38163494590" },
  landlines: [
    { label: "034/352-702", href: "tel:+38134352702" },
  ],
  email: { label: "kvarkmed@kvark.rs", href: "mailto:kvarkmed@kvark.rs" },
  address: {
    label: "Industrijska 16A, Kragujevac",
    href: "https://www.google.com/maps/search/?api=1&query=Industrijska%2016A%2C%2034000%20Kragujevac%2C%20Serbia",
    embedHref:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1887.350195596321!2d20.944581329137304!3d44.02541173723574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47572700700c886f%3A0x94d707d1da4a0c39!2sKVARKMED!5e0!3m2!1sen!2sus!4v1782407266507!5m2!1sen!2sus",
  },
  workingHours: "08h - 16h",
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
