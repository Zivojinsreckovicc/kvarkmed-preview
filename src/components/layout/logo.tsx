import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Render light (white) version for dark / accent backgrounds. */
  tone?: "dark" | "light";
  className?: string;
  onClick?: () => void;
};

/**
 * Brand lockup. Both variants use the full Kvark Med logo artwork (mark +
 * wordmark + tagline already baked in), so no extra text is rendered
 * alongside it.
 */
export function Logo({ tone = "dark", className, onClick }: LogoProps) {
  const light = tone === "light";

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Kvark Med — početna"
      className={cn(
        "group inline-flex items-center transition-transform duration-300 ease-out hover:scale-105",
        className,
      )}
    >
      {light ? (
        <Image
          src="/imgs/logowhite.webp"
          alt="Kvark Med — Health is Wealth"
          width={508}
          height={491}
          className="h-28 w-auto object-contain"
        />
      ) : (
        <Image
          src="/imgs/logo.png"
          alt="Kvark Med — Health is Wealth"
          width={387}
          height={400}
          priority
          className="h-25 pt-5 pb-5 w-auto object-contain"
        />
      )}
    </Link>
  );
}
