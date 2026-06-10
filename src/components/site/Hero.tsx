import { Reveal } from "./Reveal";
import { HeroVisual } from "./HeroVisual";

const trust = [
  "Orders accepted 24/7",
  "Fast turnaround",
  "Modern technologies",
  "Premium support",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              Accepting new projects · 2026
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-gradient">From Web Traffic</span>{" "}
              <span className="text-white">to</span>{" "}
              <span className="text-gradient-brand">Business Revenue.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-sm font-medium tracking-wide text-gradient-brand uppercase">
              Get a high-converting website now.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We build high-converting websites for US businesses with zero friction. You focus on your growth—we handle the strategy, design, and performance to turn your traffic into revenue.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-elegant"
              >
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">Start Your Project</span>
                <span className="relative transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-white/10"
              >
                View Our Process
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground">
              {trust.map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="flex justify-center lg:justify-end">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}