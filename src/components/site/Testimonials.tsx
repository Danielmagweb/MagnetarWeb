import { Reveal } from "./Reveal";

const items = [
  {
    quote: "honestly i was scared to do a website cause every guy i talked to wanted like 2k upfront. these guys just made it and said pay if u like it. i liked it lol. now my customers actually find me on google",
    name: "Marco R.",
    role: "Owner, Marco's Tire & Auto",
  },
  {
    quote: "Was super easy. I sent them photos of our pastries and a list of what we sell, in like a week the site was done. When i needed to add a new croissant to the menu i just texted them and it was up the same day. Couldnt do that myself for sure",
    name: "Elena P.",
    role: "Owner, Sunrise Bakery",
  },
  {
    quote: "I run a small barbershop, didnt think i needed a website but my son kept saying do it. Booking went up almost double after google started showing us. The fact that i didnt pay anything until i saw it was a big deal for me, i don't trust internet stuff much",
    name: "Dimitri K.",
    role: "Owner, Classic Cuts Barbershop",
  },
  {
    quote: "We had an old site from like 2017, looked terrible on phones. New one looks really clean and i can just message them when prices change for the season. No more calling the kid who built the first one and waiting 3 weeks haha",
    name: "Sandra M.",
    role: "Owner, Green Valley Landscaping",
  },
];

const stats = [
  { v: "4.9/5", l: "Average rating" },
  { v: "120+", l: "Projects delivered" },
  { v: "98%", l: "Client satisfaction" },
  { v: "24/7", l: "Project intake" },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-primary">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              Loved by founders
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              <span className="text-gradient">Trusted by teams </span>
              <span className="text-gradient-brand">that care about craft</span>
            </h2>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Stars />
              <span className="font-medium text-foreground">4.9/5</span>
              <span>· based on client reviews</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <figure className="h-full rounded-3xl border border-white/10 bg-card/40 p-6 backdrop-blur-xl transition-all hover:border-primary/30 hover:shadow-elegant">
                <Stars />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand text-sm font-semibold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 grid gap-4 rounded-3xl border border-white/10 bg-card/40 p-8 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-semibold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}