import { cn } from "@/lib/utils";
import { socialLinks, type SocialIcon } from "@/lib/site";

const icons: Record<SocialIcon, React.ReactNode> = {
  linkedin: (
    <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3.4 9h3.16v11H3.4V9zm5.06 0h3.03v1.5h.04c.42-.8 1.45-1.65 2.98-1.65 3.19 0 3.78 2.1 3.78 4.82V20h-3.16v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V20H8.46V9z" />
  ),
  instagram: (
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17C2.41 8.5 2.4 8.85 2.4 12s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4C15.5 4.01 15.15 4 12 4zm0 3.05A4.95 4.95 0 1 1 12 17a4.95 4.95 0 0 1 0-9.9zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3zM17.15 6a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z" />
  ),
  facebook: (
    <path d="M13.5 21v-8h2.7l.4-3.13H13.5V7.87c0-.9.25-1.52 1.55-1.52h1.65V3.56c-.29-.04-1.27-.12-2.41-.12-2.38 0-4.01 1.45-4.01 4.12v2.3H7.55V13h2.73v8h3.22z" />
  ),
};

type SocialLinksProps = {
  tone?: "dark" | "light";
  className?: string;
};

/** Row of social profile icon links. Reused in the contact section and footer. */
export function SocialLinks({ tone = "dark", className }: SocialLinksProps) {
  const light = tone === "light";
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200",
              light
                ? "border-white/20 text-white/80 hover:border-white/70 hover:bg-white/10 hover:text-white"
                : "border-border text-muted hover:border-accent-600 hover:bg-accent-50 hover:text-accent-700",
            )}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-[18px] w-[18px]">
              {icons[social.icon]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
