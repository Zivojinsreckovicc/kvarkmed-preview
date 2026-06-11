import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Register the custom heading font-size scale (text-display, text-h1, text-h2,
// text-h3 from globals.css) as font-size values. Without this, tailwind-merge
// treats e.g. "text-display" as a text-color utility and drops it whenever a
// color class like "text-white" is also present.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display", "h1", "h2", "h3"],
    },
  },
});

/**
 * Merge conditional class names and resolve Tailwind conflicts.
 * Use this in every component that accepts a `className` prop so consumers
 * can always override design-system defaults predictably.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
