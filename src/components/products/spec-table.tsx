import type { SpecRow } from "@/lib/products";
import { cn } from "@/lib/utils";

/**
 * Two-column specification table (Karakteristika / Specifikacija). Used only
 * for analyzer/equipment specs, per the catalog rules — never for prose.
 */
export function SpecTable({ rows, className }: { rows: SpecRow[]; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-card border border-border", className)}>
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">Tehničke specifikacije</caption>
        <thead>
          <tr className="bg-surface-strong">
            <th
              scope="col"
              className="px-5 py-3 font-body text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft"
            >
              Karakteristika
            </th>
            <th
              scope="col"
              className="px-5 py-3 font-body text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft"
            >
              Specifikacija
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.key} className={cn(i % 2 === 1 && "bg-surface/60")}>
              <th
                scope="row"
                className="border-t border-border px-5 py-3 align-top font-body text-sm font-medium text-ink"
              >
                {row.key}
              </th>
              <td className="border-t border-border px-5 py-3 align-top font-body text-sm text-muted">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
