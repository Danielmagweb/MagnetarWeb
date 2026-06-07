export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/magnetar-logo-real.jpg"
        alt="MagnetarWeb"
        width={32}
        height={32}
        className="h-8 w-8 rounded-[9px] object-cover ring-1 ring-white/10 shadow-[0_0_18px_rgba(74,142,255,0.45)]"
      />
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Magnetar<span className="text-gradient-brand">Web</span>
      </span>
    </div>
  );
}