import type { ProductCard } from "@/lib/products";
import { cn } from "@/lib/utils";

/**
 * Small product card: name + description. Dimensional layering — a quiet border
 * that warms to accent on hover, a soft lift, and an animated left rule that
 * fills in — gives the grid a premium, tactile rhythm without heavy shadows.
 */
export function ProductInfoCard({ product, className }: { product: ProductCard; className?: string }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-2.5 overflow-hidden rounded-card border border-border bg-background p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-accent-200 hover:shadow-card-hover sm:p-7",
        className,
      )}
    >
      {/* Animated accent rule on the left edge */}
      <span className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-accent-600 transition-transform duration-300 ease-premium group-hover:scale-y-100" />
      {/* Faint accent wash that fades in on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-50/0 to-accent-50/0 opacity-0 transition-opacity duration-300 group-hover:from-accent-50/60 group-hover:opacity-100"
      />

      <h4 className="relative font-heading text-base font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-accent-700">
        {product.name}
      </h4>
      <p className="relative text-sm leading-relaxed text-muted">{product.description}</p>
    </article>
  );
}
