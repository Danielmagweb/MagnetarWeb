import { Reveal } from "./Reveal";

const reasons = [
  {
    title: "Zero Friction, Hands-Off Process",
    problem: "Most agencies require endless meetings, micromanagement, and force you to write your own copy.",
    solution: "We handle everything from strategy and copywriting to design and launch. You give us the vision; we deliver the asset. You focus on your business while we do the heavy lifting.",
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    )
  },
  {
    title: "Engineered for Revenue, Not Just Looks",
    problem: "Beautiful websites are useless if they do not convert visitors into paying customers.",
    solution: "We don't just build pretty pages. Every layout, button, and line of code we write is strategically optimized to turn your online traffic into measurable business growth.",
    icon: (
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    )
  },
  {
    title: "Modern Tech for Maximum Speed",
    problem: "Slow, outdated websites lose customers and rank poorly on Google.",
    solution: "We build lightning-fast, secure, and mobile-optimized websites using cutting-edge technology. Your users get a flawless experience, and your business gets a competitive edge.",
    icon: (
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    )
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              Why MagnetarWeb
            </div>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              <span className="text-white">Why Choose Us</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We eliminate the headaches of traditional web agencies and focus on what actually matters: your growth.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-card/40 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/60 hover:shadow-elegant">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-[0_0_20px_rgba(0,80,216,0.4)]">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      {r.icon}
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-foreground">{r.title}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-red-400/80 mb-1">The Problem</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground/80">{r.problem}</p>
                    </div>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400/80 mb-1">The MagnetarWeb Way</h4>
                      <p className="text-sm leading-relaxed text-foreground/90">{r.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
