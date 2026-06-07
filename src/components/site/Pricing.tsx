import { Reveal } from "./Reveal";

const tiers = [
  {
    name: "Starter",
    price: "$499",
    tagline: "Perfect for new and small local businesses just getting online.",
    highlight: false,
    delivery: "2–4 days",
    features: [
      "1-page website (landing page)",
      "Mobile-responsive design",
      "Contact form",
      "Google Maps integration",
      "Basic SEO setup",
      "Social media links",
      "SSL security",
    ],
  },
  {
    name: "Business",
    price: "$799",
    tagline: "Our most popular option — ideal for established local businesses.",
    highlight: true,
    delivery: "4–7 days",
    features: [
      "Everything in Starter",
      "Up to 5 pages",
      "Custom layout for each page",
      "Dedicated service pages",
      "Testimonials section",
      "FAQ section",
      "Advanced contact forms",
      "Enhanced on-page SEO",
      "Speed optimization",
    ],
  },
  {
    name: "Premium",
    price: "$1,299",
    tagline: "For companies actively bringing in customers through the web.",
    highlight: false,
    delivery: "1–3 weeks",
    features: [
      "Everything in Business",
      "Up to 10 pages",
      "Fully custom design",
      "Blog setup",
      "Online booking integration",
      "Lead generation forms",
      "Conversion-focused layout",
      "Advanced + Local SEO",
      "Analytics integration",
      "Monthly performance report (first month)",
      "Priority support",
    ],
  },
];

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-primary">
      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/12 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              Pricing
            </div>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              <span className="text-gradient">Simple, honest pricing — </span>
              <span className="text-gradient-brand">pay only if you love it</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              No upfront payment. We build your website first — you only pay after you see it and approve it.
              All future updates (prices, hours, products, photos) are handled by us for free.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 backdrop-blur-xl transition-all ${
                  t.highlight
                    ? "border-primary/50 bg-card/60 shadow-elegant"
                    : "border-white/10 bg-card/40 hover:border-primary/30"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{t.name} Website</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-5xl font-semibold text-gradient">{t.price}</span>
                    <span className="text-xs text-muted-foreground">one-time</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{t.tagline}</p>
                </div>

                <ul className="mt-6 space-y-3 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2 text-foreground/85">
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                  <li className="flex gap-2 text-foreground/85">
                    <Check />
                    <span>Delivery in {t.delivery}</span>
                  </li>
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium transition-all hover:scale-[1.01] ${
                    t.highlight
                      ? "bg-gradient-brand text-white hover:shadow-elegant"
                      : "glass-strong text-foreground hover:bg-white/10"
                  }`}
                >
                  Start with {t.name}
                  <span>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-xs text-muted-foreground">
            Not sure which one fits? Just message us — we'll recommend the right tier for your business, free of charge.
          </p>
        </Reveal>
      </div>
    </section>
  );
}