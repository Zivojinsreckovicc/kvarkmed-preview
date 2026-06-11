/**
 * Root loading state, shown as the Suspense fallback while a route segment
 * loads. Rendered fixed + full-screen so it covers the header/footer too.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-accent"
    >
      {/* Soft drifting glows for depth */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent-400/30 blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-float [animation-delay:-3s]" />
        <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-accent-300/25 blur-3xl animate-float [animation-delay:-6s]" />
      </div>

      {/* Bouncing dots with expanding echo rings */}
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <span className="absolute h-full w-full rounded-full border-2 border-white/30 animate-loader-ring" />
          <span className="absolute h-full w-full rounded-full border-2 border-white/30 animate-loader-ring [animation-delay:0.6s]" />
          <span className="absolute h-full w-full rounded-full border-2 border-white/30 animate-loader-ring [animation-delay:1.2s]" />

          <div className="flex items-center gap-2.5">
            <span className="h-3 w-3 rounded-full bg-white animate-loader-bob" />
            <span className="h-4 w-4 rounded-full bg-accent-200 animate-loader-bob [animation-delay:0.15s]" />
            <span className="h-3 w-3 rounded-full bg-white/80 animate-loader-bob [animation-delay:0.3s]" />
          </div>
        </div>

        <span className="text-xs font-medium tracking-[0.3em] text-white/70 uppercase">
          Učitavanje
        </span>
      </div>

      <span className="sr-only">Stranica se učitava, sačekajte trenutak.</span>
    </div>
  );
}
