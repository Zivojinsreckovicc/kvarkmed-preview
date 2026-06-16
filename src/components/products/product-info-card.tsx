import type { ProductCard } from "@/lib/products";
import { cn } from "@/lib/utils";

function ExternalArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-3.5 w-3.5">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Small product card: name + description. Dimensional layering — a quiet border
 * that warms to accent on hover, a soft lift, and an animated left rule that
 * fills in — gives the grid a premium, tactile rhythm without heavy shadows.
 *
 * When the product carries an `href`, the whole card becomes an external link to
 * the manufacturer's product page with a clear affordance in the footer.
 */
export function ProductInfoCard({ product, className }: { product: ProductCard; className?: string }) {
  const cardClass = cn(
    "group relative flex flex-col gap-2.5 overflow-hidden rounded-card border border-border bg-background p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-accent-200 hover:shadow-card-hover sm:p-7",
    className,
  );

  const decoration = (
    <>
      {/* Animated accent rule on the left edge */}
      <span className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-accent-600 transition-transform duration-300 ease-premium group-hover:scale-y-100" />
      {/* Faint accent wash that fades in on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-50/0 to-accent-50/0 opacity-0 transition-opacity duration-300 group-hover:from-accent-50/60 group-hover:opacity-100"
      />
    </>
  );

  const title = (
    <h4 className="relative font-heading text-base font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-accent-700">
      {product.name}
    </h4>
  );

  const description = (
    <p className="relative text-sm leading-relaxed text-muted">{product.description}</p>
  );

  if (product.href) {
    return (
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
      >
        {decoration}
        {title}
        {description}
        <span className="relative mt-auto inline-flex items-center gap-1.5 pt-2 font-body text-sm font-medium text-accent-700">
          Pogledajte proizvod
          <span className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ExternalArrow />
          </span>
        </span>
      </a>
    );
  }

  return (
    <article className={cardClass}>
      {decoration}
      {title}
      {description}
    </article>
  );
}
