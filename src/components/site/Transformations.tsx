import { useState } from 'react';
import BeforeAfter from './BeforeAfter';
import { Reveal } from './Reveal';

export function Transformations() {
  const [showMore, setShowMore] = useState(false);

  const transformations = [
    {
      title: "Creative Agency Redesign",
      desc: "From a bland 2012 corporate template to a clean, highly artistic digital presence.",
      before: "/images/portfolio/agency_before.png",
      after: "/images/portfolio/agency_after.png"
    },
    {
      title: "Local Bakery Modernization",
      desc: "From a chaotic, cluttered Web 1.0 layout to a warm, appetizing online storefront.",
      before: "/images/portfolio/bakery_before.png",
      after: "/images/portfolio/bakery_after.png"
    },
    {
      title: "Tech Brand Refresh",
      desc: "Replaced an outdated, neon-heavy design with a sleek, vibrant liquid dark mode.",
      before: "/images/portfolio/tech_before.png",
      after: "/images/portfolio/tech_after.png"
    },
    {
      title: "B2B Partnership Platform",
      desc: "Transformed walls of unreadable text into a premium, conversion-focused landing page.",
      before: "/images/portfolio/corp_before.png",
      after: "/images/portfolio/corp_after.png"
    }
  ];

  const visibleTransformations = showMore ? transformations : transformations.slice(0, 2);

  return (
    <section id="transformations" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Before & After <span className="text-indigo-400">Transformations</span>
            </h2>
            <p className="text-lg text-gray-400">
              Drag the slider to see how we turn outdated, clunky websites into modern, high-converting digital experiences.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 max-w-5xl mx-auto">
          {visibleTransformations.map((t, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">{t.title}</h3>
                <p className="text-gray-400 max-w-2xl">{t.desc}</p>
                <BeforeAfter 
                  beforeImage={t.before}
                  afterImage={t.after}
                />
              </div>
            </Reveal>
          ))}
        </div>

        {!showMore && (
          <Reveal delay={0.3}>
            <div className="mt-16 text-center">
              <button
                onClick={() => setShowMore(true)}
                className="inline-flex items-center justify-center rounded-full bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:scale-105"
              >
                Show more examples
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
