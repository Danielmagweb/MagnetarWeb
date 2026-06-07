import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "You tell us what you need", desc: "Share your idea, goals and a few examples you like. No call required, no commitment — just a short message." },
  { n: "02", title: "We build it — zero upfront cost", desc: "We design and develop your website from scratch. You pay nothing until you see the finished result and approve it." },
  { n: "03", title: "You review, you decide", desc: "If you love it — we launch. If it's not the right fit — you walk away, no payment, no awkward conversation." },
  { n: "04", title: "We handle every update for you", desc: "Need to change prices, hours, products or photos later? Just text us — we update it for you. You never touch the code." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              Our Process
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              <span className="text-gradient">A clear path </span>
              <span className="text-gradient-brand">from idea to launch</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* connection line */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 -z-10 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative rounded-3xl border border-white/10 bg-card/40 p-6 backdrop-blur-xl transition-all hover:border-primary/40 hover:shadow-elegant">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background text-xs font-semibold text-gradient-brand">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}