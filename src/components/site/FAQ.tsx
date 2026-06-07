import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const groups: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "General",
    items: [
      { q: "How long does a website project take?", a: "Depending on the package, Starter websites take 2–4 days, Business websites take 4–7 days, and Premium websites take 1–3 weeks." },
      { q: "Do I need to provide content?", a: "Yes. You can provide text and images, or we can help organize existing content." },
      { q: "Can you redesign my existing website?", a: "Yes. Existing websites can be redesigned and modernized." },
      { q: "Will my website work on mobile devices?", a: "Yes. Every website is fully responsive." },
      { q: "Will my website be optimized for Google?", a: "Basic SEO setup is included with every package." },
    ],
  },
  {
    title: "Domain & Hosting",
    items: [
      { q: "Who owns the domain name?", a: "You always own your domain name." },
      { q: "Can I use my existing domain?", a: "Yes." },
      { q: "Can I use my current hosting provider?", a: "Yes, if it supports the website requirements." },
      { q: "Do I need to buy hosting separately?", a: "You can either purchase hosting yourself or choose the Website Care Plan." },
      { q: "What is included in the Website Care Plan?", a: "Hosting, maintenance, backups, monitoring, and support." },
      { q: "Can I cancel the Website Care Plan anytime?", a: "Yes." },
      { q: "What happens if I cancel the Website Care Plan?", a: "Your website can be transferred to your own hosting provider." },
      { q: "Is the domain included in the website price?", a: "It depends on the package. Our Core plan includes domain registration, while others may require you to purchase it separately." },
    ],
  },
  {
    title: "Revisions",
    items: [
      { q: "How many revisions are included?", a: "Each package includes a specific number of revision rounds." },
      { q: "What if I need additional revisions?", a: "Additional revisions are billed separately." },
      { q: "What if I don't like the design?", a: "Feedback is collected throughout the project to ensure the final website meets expectations." },
      { q: "What happens after all revision rounds are used?", a: "Additional changes can be requested at the standard hourly rate." },
    ],
  },
  {
    title: "Payments",
    items: [
      { q: "Do you require a deposit?", a: "No. We do not take any upfront payments. You only pay after you see and approve the website." },
      { q: "What payment methods do you accept?", a: "Bank transfer, Stripe, PayPal, and major credit cards." },
      { q: "Are there any hidden fees?", a: "No." },
      { q: "Do you offer refunds?", a: "Due to the custom nature of web design, refunds are generally not available after work has begun." },
    ],
  },
  {
    title: "Ownership",
    items: [
      { q: "Who owns the website after completion?", a: "You own the website after final payment." },
      { q: "Will I have access to my website?", a: "Yes." },
      { q: "Can I move the website to another provider later?", a: "Yes." },
      { q: "Are there any long-term contracts?", a: "No." },
    ],
  },
  {
    title: "Support",
    items: [
      { q: "Can I update the website myself?", a: "Yes, depending on the platform and setup." },
      { q: "Do you provide ongoing support?", a: "Yes. Support plans are available." },
      { q: "What if my website goes down?", a: "Website Care Plan clients receive priority assistance." },
      { q: "Do you provide emergency support?", a: "Yes, for maintenance clients." },
    ],
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              FAQ
            </div>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              <span className="text-gradient">Everything you might </span>
              <span className="text-gradient-brand">want to ask</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10">
          {groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.05}>
              <div className="rounded-3xl border border-white/10 bg-card/40 p-6 backdrop-blur-xl md:p-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gradient-brand">
                  {group.title}
                </h3>
                <Accordion type="single" collapsible className="mt-4">
                  {group.items.map((item, i) => (
                    <AccordionItem key={item.q} value={`${gi}-${i}`} className="border-white/10">
                      <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}