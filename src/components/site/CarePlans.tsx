import { Reveal } from "./Reveal";

const updates = [
  { label: "Text changes", price: "from $30" },
  { label: "New section", price: "from $50" },
  { label: "New page", price: "from $100" },
];

const carePlans = [
  { name: "Hosting only", price: "$29", desc: "Reliable hosting handled for you." },
  { name: "Hosting + Updates", price: "$49", desc: "Hosting plus regular content updates.", highlight: true },
  { name: "Priority Support", price: "$99", desc: "Everything, plus priority response times." },
];

const careFeatures = [
  "Hosting",
  "Technical maintenance",
  "Security monitoring",
  "Website backups",
  "Priority support",
  "Minor content updates",
];

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-primary">
      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CarePlans() {
  return (
    <section id="care" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              How we work after launch
            </div>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              <span className="text-gradient">Two ways </span>
              <span className="text-gradient-brand">to keep your site running</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Pick the model that fits your business — flexible pay-as-needed, or a fully managed care plan.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Option 1 */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-card/40 p-8 backdrop-blur-xl transition-all hover:border-primary/30">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Option 1</div>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">Pay As Needed</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Best for businesses that rarely update their website.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "You own your domain",
                  "You pay hosting directly",
                  "Website updates available on request",
                  "No monthly commitment",
                  "Changes billed individually",
                ].map((f) => (
                  <li key={f} className="flex gap-2 text-foreground/85">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-white/10 bg-background/40 p-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Typical updates</div>
                <ul className="mt-3 space-y-2 text-sm">
                  {updates.map((u) => (
                    <li key={u.label} className="flex items-center justify-between text-foreground/85">
                      <span>{u.label}</span>
                      <span className="text-gradient-brand font-medium">{u.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Option 2 */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col rounded-3xl border border-primary/50 bg-card/60 p-8 shadow-elegant backdrop-blur-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                Most Popular
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Option 2</div>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">Website Care Plan</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-gradient">Starting at $29</span>
                <span className="text-xs text-muted-foreground">/month</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Best for businesses that want a hands-off experience.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {carePlans.map((p) => (
                  <div
                    key={p.name}
                    className={`rounded-2xl border p-4 text-center ${
                      p.highlight ? "border-primary/50 bg-primary/5" : "border-white/10 bg-background/40"
                    }`}
                  >
                    <div className="text-2xl font-semibold text-gradient-brand">{p.price}</div>
                    <div className="mt-1 text-xs font-medium text-foreground">{p.name}</div>
                    <div className="mt-1 text-[11px] leading-snug text-muted-foreground">{p.desc}</div>
                  </div>
                ))}
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {careFeatures.map((f) => (
                  <li key={f} className="flex gap-2 text-foreground/85">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                No need to manage hosting accounts or website infrastructure. Cancel anytime.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}