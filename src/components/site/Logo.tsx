export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 shrink-0 ${className}`}>
      <img
        src="/magnetar-logo-real.jpg"
        alt="MagnetarWeb"
        width={32}
        height={32}
        className="h-7 w-7 sm:h-8 sm:w-8 rounded-[8px] sm:rounded-[9px] object-cover ring-1 ring-white/10 shadow-[0_0_18px_rgba(74,142,255,0.45)]"
      />
      <span className="text-base sm:text-lg font-semibold tracking-tight text-foreground whitespace-nowrap">
        Magnetar<span className="text-gradient-brand">Web</span>
      </span>
    </div>
  );
}