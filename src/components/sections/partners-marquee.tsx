import Image from "next/image";
import { Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export type PartnerLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Manufacturer website. Replace "#" placeholders with real URLs to make the logo clickable. */
  href?: string;
};

export const partnerLogos: PartnerLogo[] = [
  { src: "/imgs/partners-logos/partner1.webp", alt: "Cypress Diagnostics logo", width: 272, height: 374, href: "https://diagnostics.be/" },
  { src: "/imgs/partners-logos/partner2.webp", alt: "RainSure Scientific logo", width: 434, height: 144, href: "https://www.rainsurebio.com/" },
  { src: "/imgs/partners-logos/partner3.webp", alt: "Orient Gene logo", width: 378, height: 392, href: "https://www.orientgene.com/" },
  { src: "/imgs/partners-logos/partner4.webp", alt: "Healgen logo", width: 536, height: 186, href: "https://healgen.com/" },
  { src: "/imgs/partners-logos/partner5.webp", alt: "AllTest logo", width: 486, height: 190, href: "https://www.alltests.com.cn/#home" },
  { src: "/imgs/partners-logos/partner6.webp", alt: "Genes2Me logo", width: 418, height: 176, href: "https://www.genes2me.com/" },
  { src: "/imgs/partners-logos/partner7.webp", alt: "Wantai logo", width: 546, height: 172, href: "https://www.ystwt.cn/" },
  { src: "/imgs/partners-logos/partner10.webp", alt: "Biosynex logo", width: 488, height: 104, href: "https://www.biosynex.com/?lang=en" },
  { src: "/imgs/partners-logos/partner11.webp", alt: "Eaglenos logo", width: 472, height: 156, href: "https://www.eaglenos.com/en/" },
];

/** A logo is clickable only once a real manufacturer URL replaces the "#" placeholder. */
export function partnerLogoHref(logo: PartnerLogo): string | undefined {
  return logo.href && logo.href !== "#" ? logo.href : undefined;
}

type PartnersMarqueeProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  logos?: PartnerLogo[];
};

function LogoItem({ logo, hidden }: { logo: PartnerLogo; hidden?: boolean }) {
  const href = partnerLogoHref(logo);
  const image = (
    <Image
      src={logo.src}
      alt={hidden ? "" : logo.alt}
      width={logo.width}
      height={logo.height}
      loading="lazy"
      sizes="200px"
      className="h-9 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-11"
    />
  );
  return (
    <li className="flex shrink-0 items-center justify-center px-8 sm:px-12" aria-hidden={hidden}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${logo.alt} — sajt proizvođača`}
          tabIndex={hidden ? -1 : undefined}
          className="flex items-center"
        >
          {image}
        </a>
      ) : (
        image
      )}
    </li>
  );
}

/**
 * Reusable infinite logo marquee. White background (logos keep their own white
 * backgrounds), seamless CSS scroll, edge fade, and pause-on-hover. No JS — the
 * track is duplicated and the second copy is hidden from assistive tech.
 */
export function PartnersMarquee({
  id = "partneri",
  eyebrow = "Partneri",
  title = "Brendovi i proizvođači sa kojima sarađujemo",
  logos = partnerLogos,
}: PartnersMarqueeProps) {
  return (
    <section id={id} aria-label={title} className="w-full bg-background py-16 sm:py-20">
      {(eyebrow || title) && (
        <Reveal className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-3 px-6 text-center sm:mb-12">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          {title ? (
            <h2 className="font-heading text-xl font-semibold text-ink sm:text-2xl">{title}</h2>
          ) : null}
        </Reveal>
      )}

      <div
        className={cn(
          "group relative w-full overflow-hidden",
          "[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
        )}
      >
        <ul className="flex w-max animate-marquee items-center motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          {logos.map((logo, i) => (
            <LogoItem key={`a-${i}`} logo={logo} />
          ))}
          {logos.map((logo, i) => (
            <LogoItem key={`b-${i}`} logo={logo} hidden />
          ))}
        </ul>
      </div>
    </section>
  );
}
