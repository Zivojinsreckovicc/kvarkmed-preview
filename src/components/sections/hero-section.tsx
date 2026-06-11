import { Button, Container, Eyebrow, Heading, Lead } from "@/components/ui";
import { Reveal } from "@/components/motion/reveal";

/**
 * Full-bleed video hero. The clip is dark, so a light gradient overlay keeps
 * it from washing out while the white copy stays readable everywhere.
 * `poster` paints instantly while the (already compressed) video streams in.
 */
export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[90vh] w-full items-center overflow-hidden bg-ink">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/imgs/homebg-poster.webp"
        aria-hidden="true"
      >
        <source src="/imgs/homebg.webm" type="video/webm" />
        <source src="/imgs/homebg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/20" />

      <Container className="py-24 sm:py-32">
        <div className="flex max-w-3xl flex-col gap-6">
          <Reveal>
            <Eyebrow tone="light">Medicinska dijagnostika i laboratorijska oprema</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <Heading level="display" className="text-white">
              Pouzdana rešenja za laboratorije i zdravstvene ustanove
            </Heading>
          </Reveal>
          <Reveal delay={200}>
            <Lead className="text-white/80">
              Kvark Med je distributer medicinske dijagnostike, laboratorijske opreme i
              farmaceutskih proizvoda, namenjen laboratorijama, klinikama, bolnicama i
              apotekama.
            </Lead>
          </Reveal>
          <Reveal delay={300} className="flex flex-wrap gap-3 pt-2">
            <Button href="/proizvodi" variant="primary" size="lg">
              Naši proizvodi
            </Button>
            <Button
              href="#kontakt"
              variant="outline"
              size="lg"
              className="border-white/30 bg-transparent text-white hover:border-white hover:text-white"
            >
              Kontaktirajte nas
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
