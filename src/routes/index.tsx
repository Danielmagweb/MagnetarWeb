import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { Process } from "@/components/site/Process";
import { Pricing } from "@/components/site/Pricing";
import { CarePlans } from "@/components/site/CarePlans";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MagnetarWeb — Modern Websites That Help Businesses Grow" },
      { name: "description", content: "Custom web development agency. We design and develop fast, beautiful, conversion-focused websites for businesses across the US." },
      { property: "og:title", content: "MagnetarWeb — Modern Websites That Help Businesses Grow" },
      { property: "og:description", content: "Custom web development agency. Fast, beautiful, conversion-focused websites built with modern technologies." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Pricing />
      <CarePlans />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
      <Toaster theme="dark" position="top-center" />
    </main>
  );
}
