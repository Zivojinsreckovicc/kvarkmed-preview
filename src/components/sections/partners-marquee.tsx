import Image from "next/image";
import { Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export type PartnerLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const partnerLogos: PartnerLogo[] = [
  { src: "/imgs/partners-logos/partner1.webp", alt: "Logo partnera", width: 272, height: 374 },
  { src: "/imgs/partners-logos/partner2.webp", alt: "Logo partnera", width: 434, height: 144 },
  { src: "/imgs/partners-logos/partner3.webp", alt: "Logo partnera", width: 378, height: 392 },
  { src: "/imgs/partners-logos/partner4.webp", alt: "Logo partnera", width: 536, height: 186 },
  { src: "/imgs/partners-logos/partner5.webp", alt: "Logo partnera", width: 486, height: 190 },
  { src: "/imgs/partners-logos/partner6.webp", alt: "Logo partnera", width: 418, height: 176 },
  { src: "/imgs/partners-logos/partner7.webp", alt: "Logo partnera", width: 546, height: 172 },
  { src: "/imgs/partners-logos/partner8.webp", alt: "Logo partnera", width: 466, height: 192 },
  { src: "/imgs/partners-logos/partner9.webp", alt: "Logo partnera", width: 530, height: 156 },
  { src: "/imgs/partners-logos/partner10.webp", alt: "Logo partnera", width: 488, height: 104 },
  { src: "/imgs/partners-logos/partner11.webp", alt: "Logo partnera", width: 472, height: 156 },
  { src: "/imgs/partners-logos/partner12.webp", alt: "Logo partnera", width: 400, height: 74 },
];

type PartnersMarqueeProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  logos?: PartnerLogo[];
};

function LogoItem({ logo, hidden }: { logo: PartnerLogo; hidden?: boolean }) {
  return (
    <li className="flex shrink-0 items-center justify-center px-8 sm:px-12" aria-hidden={hidden}>
      <Image
        src={logo.src}
        alt={hidden ? "" : logo.alt}
        width={logo.width}
        height={logo.height}
        loading="lazy"
        sizes="200px"
        className="h-9 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-11"
      />
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
