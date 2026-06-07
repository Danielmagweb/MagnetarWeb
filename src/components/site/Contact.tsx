import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { useServerFn } from "@tanstack/react-start";
import { sendContactInquiry } from "@/lib/contact.functions";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  company: z.string().trim().max(120).optional(),
  details: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

export function Contact() {
  const [loading, setLoading] = useState(false);
  const sendInquiry = useServerFn(sendContactInquiry);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company") || undefined,
      details: fd.get("details"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    setLoading(true);
    try {
      await sendInquiry({ data: parsed.data });
      toast.success("Thanks! We'll get back to you within one business day.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send your message. Please email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              Contact
            </div>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              <span className="text-gradient">Let's build </span>
              <span className="text-gradient-brand">something exceptional</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Share a few details about your project and we'll get back to you with a tailored proposal.
            </p>
            <a
              href="mailto:daniel@magnetarweb.com"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl glass-strong px-5 py-4 transition-all hover:scale-[1.01] hover:shadow-elegant"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Email us directly</div>
                <div className="text-sm font-medium text-foreground">daniel@magnetarweb.com</div>
              </div>
            </a>
            <p className="mt-6 text-xs text-muted-foreground">
              We accept project requests 24/7 and usually respond within one business day.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/10 bg-card/40 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
              <div className="sm:col-span-2">
                <Field label="Company" name="company" placeholder="Your company (optional)" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-muted-foreground">
                  Project Details
                </label>
                <textarea
                  name="details"
                  rows={5}
                  required
                  maxLength={2000}
                  placeholder="Tell us about your project, goals and timeline…"
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/60 focus:bg-background/70 focus:ring-3 focus:ring-primary/30"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-brand px-6 py-4 text-sm font-medium text-white transition-all hover:scale-[1.01] hover:shadow-elegant disabled:opacity-60"
            >
              {loading ? "Sending…" : "Request a Free Consultation"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={200}
        className="mt-2 w-full rounded-xl border border-white/10 bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/60 focus:bg-background/70 focus:ring-3 focus:ring-primary/30"
      />
    </div>
  );
}