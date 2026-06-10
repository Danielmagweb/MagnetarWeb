import { Reveal } from "./Reveal";

const features = [
  {
    title: "Modern Design",
    desc: "Beautiful interfaces inspired by the latest design trends.",
    icon: (
      <path d="M4 18 L12 6 L20 18 M7.5 13 H16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Lightning Fast",
    desc: "Optimized for performance, SEO and user experience.",
    icon: (
      <path d="M13 3 L5 14 H11 L10 21 L19 9 H13 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    ),
  },
  {
    title: "Mobile First",
    desc: "Perfect on every screen size and device.",
    icon: (
      <>
        <rect x="8" y="3" width="8" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="18" r="0.8" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Built for Results",
    desc: "Focused on conversions, credibility and business growth.",
    icon: (
      <path d="M3 17 L9 11 L13 15 L21 6 M21 6 H16 M21 6 V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              What you get
            </div>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              <span className="text-gradient">Built for the next era</span>{" "}
              <span className="text-gradient-brand">of the web</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every detail is engineered to make your product feel premium, fast and worth remembering.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-card/40 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/60 hover:shadow-elegant">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-[0_0_20px_rgba(0,80,216,0.4)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      {f.icon}
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}