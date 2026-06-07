import BeforeAfter from './BeforeAfter';
import Reveal from './Reveal';

export function Transformations() {
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
          {/* Transformation 1 */}
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Creative Agency Redesign</h3>
              <p className="text-gray-400 max-w-2xl">From a dense wall of text to a clean, minimalistic and highly artistic digital presence.</p>
              <BeforeAfter 
                beforeImage="/images/portfolio/agency_before.png"
                afterImage="/images/portfolio/agency_after.png"
              />
            </div>
          </Reveal>

          {/* Transformation 2 */}
          <Reveal delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Local Bakery Transformation</h3>
              <p className="text-gray-400 max-w-2xl">From a chaotic, web 1.0 layout to a warm, welcoming, and modern online storefront.</p>
              <BeforeAfter 
                beforeImage="/images/portfolio/bakery_before.png"
                afterImage="/images/portfolio/bakery_after.png"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
