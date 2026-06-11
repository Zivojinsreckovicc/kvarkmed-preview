import { cn } from "@/lib/utils";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  /** Max-width track. `default` suits most content, `narrow` for prose. */
  size?: "default" | "narrow" | "wide";
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "size" | "className" | "children">;

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

/**
 * Horizontal layout track that keeps content centered with consistent gutters.
 */
export function Container<T extends React.ElementType = "div">({
  as,
  size = "default",
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn("mx-auto w-full px-6 sm:px-8 lg:px-12", sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
