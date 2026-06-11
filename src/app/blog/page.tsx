import type { Metadata } from "next";
import Image from "next/image";
import {
  Badge,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardTitle,
  Eyebrow,
  Heading,
  Lead,
  Section,
} from "@/components/ui";
import { ContactSection } from "@/components/sections/contact-section";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stručni tekstovi i novosti iz oblasti medicinske dijagnostike, laboratorijske opreme i farmaceutskih proizvoda.",
  alternates: { canonical: "/blog" },
};

type Post = {
  category: "Dijagnostika" | "Laboratorija" | "Edukacija" | "Saveti";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

const featured: Post = {
  category: "Dijagnostika",
  title: "Značaj POCT dijagnostike u savremenim zdravstvenim ustanovama",
  excerpt:
    "POCT (Point-of-Care Testing) omogućava bržu obradu uzoraka na mestu pružanja zdravstvene zaštite. U ovom tekstu razmatramo prednosti, primenu i kriterijume za izbor POCT rešenja u laboratorijskoj praksi.",
  date: "28. maj 2026.",
  readTime: "6 min čitanja",
};

const posts: Post[] = [
  {
    category: "Laboratorija",
    title: "Kako odabrati POCT analizator za vašu ustanovu",
    excerpt:
      "Pregled ključnih parametara koje treba uzeti u obzir pri izboru analizatora — od propusnosti do tipova uzoraka.",
    date: "21. maj 2026.",
    readTime: "5 min čitanja",
  },
  {
    category: "Dijagnostika",
    title: "PCR dijagnostika: osnovni principi i primena",
    excerpt:
      "Kratak uvod u molekularnu dijagnostiku i ulogu RT-PCR testova u otkrivanju respiratornih i drugih infekcija.",
    date: "14. maj 2026.",
    readTime: "7 min čitanja",
  },
  {
    category: "Dijagnostika",
    title: "Brzi antigenski testovi u rutinskoj dijagnostici",
    excerpt:
      "Kada se koriste imunohromatografski brzi testovi i na šta obratiti pažnju pri tumačenju rezultata.",
    date: "6. maj 2026.",
    readTime: "4 min čitanja",
  },
  {
    category: "Saveti",
    title: "Pravilno čuvanje i rukovanje dijagnostičkim testovima",
    excerpt:
      "Praktične smernice za skladištenje testova i reagenasa radi očuvanja pouzdanosti rezultata.",
    date: "27. april 2026.",
    readTime: "5 min čitanja",
  },
  {
    category: "Edukacija",
    title: "Uloga serologije u praćenju imunog odgovora",
    excerpt:
      "Osnovni pojmovi serološke dijagnostike i njena primena u kliničkoj i laboratorijskoj praksi.",
    date: "18. april 2026.",
    readTime: "6 min čitanja",
  },
  {
    category: "Laboratorija",
    title: "Trendovi u laboratorijskoj opremi",
    excerpt:
      "Pregled pravaca razvoja laboratorijskih uređaja i kako oni utiču na svakodnevni rad ustanova.",
    date: "9. april 2026.",
    readTime: "5 min čitanja",
  },
];

const categoryTone: Record<Post["category"], string> = {
  Dijagnostika: "from-accent-700 via-accent-600 to-accent-500",
  Laboratorija: "from-accent-900 via-accent-800 to-accent-700",
  Edukacija: "from-accent-600 via-accent-500 to-accent-400",
  Saveti: "from-ink via-accent-900 to-accent-800",
};

const categories = ["Sve", "Dijagnostika", "Laboratorija", "Edukacija", "Saveti"] as const;

function Meta({ post, light = false }: { post: Post; light?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2 font-body text-xs", light ? "text-white/70" : "text-faint")}>
      <span>{post.date}</span>
      <span aria-hidden>•</span>
      <span>{post.readTime}</span>
    </div>
  );
}

/** Gradient thumbnail used as a placeholder until real cover images are added. */
function PostMedia({ category, className }: { category: Post["category"]; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-gradient-to-br", categoryTone[category], className)}>
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-6 select-none font-heading text-[9rem] font-bold leading-none text-white/10"
      >
        {category[0]}
      </span>
      <div className="absolute left-5 top-5">
        <Badge variant="solid" className="bg-white/15 text-white backdrop-blur-sm">
          {category}
        </Badge>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <Section tone="surface" spacing="lg">
        <div className="flex max-w-3xl flex-col gap-6">
          <Reveal>
            <Eyebrow>Blog</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <Heading level="display">Novosti i stručni sadržaj</Heading>
          </Reveal>
          <Reveal delay={200}>
            <Lead>
              Tekstovi iz oblasti medicinske dijagnostike, laboratorijske opreme i
              farmaceutskih proizvoda — namenjeni laboratorijama, klinikama i zdravstvenim
              ustanovama.
            </Lead>
          </Reveal>
        </div>
      </Section>

      {/* Featured + categories */}
      <Section spacing="lg">
        <div className="flex flex-col gap-10">
          <Reveal className="flex flex-wrap gap-2">
            {categories.map((category, i) => (
              <span
                key={category}
                className={cn(
                  "rounded-full px-4 py-2 font-body text-xs font-medium uppercase tracking-wider",
                  i === 0
                    ? "bg-accent-600 text-white"
                    : "border border-border text-muted",
                )}
              >
                {category}
              </span>
            ))}
          </Reveal>

          {/* Featured post */}
          <Reveal delay={100} as="article" className="group grid overflow-hidden rounded-card border border-border bg-background transition-shadow duration-300 hover:shadow-card lg:grid-cols-2">
            <div className="relative aspect-16/10 lg:aspect-auto">
              <Image
                src="/imgs/counters-bg.webp"
                alt="Naučni prikaz molekularne dijagnostike"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute left-5 top-5">
                <Badge variant="solid">{featured.category}</Badge>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 sm:p-10 lg:p-12">
              <Meta post={featured} />
              <h2 className="font-heading text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                {featured.title}
              </h2>
              <p className="font-body text-sm leading-relaxed text-muted sm:text-base">
                {featured.excerpt}
              </p>
              <span className="mt-2 inline-flex items-center gap-2 font-body text-sm font-medium text-accent-700">
                Pročitajte više
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.title} delay={(i % 3) * 90} className="flex">
                <Card variant="outline" interactive className="h-full w-full">
                  <PostMedia category={post.category} className="aspect-16/10 w-full" />
                  <CardBody>
                    <Meta post={post} />
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                    <CardFooter>
                      <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-accent-700">
                        Pročitajte više
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <ContactSection />
    </main>
  );
}
