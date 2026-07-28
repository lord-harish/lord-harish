import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import { techStack } from '../../data/portfolio.js';

const marqueeItems = [...techStack, ...techStack, ...techStack];

export default function TechStack() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Toolkit"
          title="Technologies I Work With"
          description="Tools and technologies powering my ideas."
        />
      </div>

      {/* Edge-to-edge full-width strip with top and bottom lines */}
      <div className="relative w-full overflow-hidden border-y border-white/10 py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-40 bg-gradient-to-r from-void to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-40 bg-gradient-to-l from-void to-transparent" />
        <div className="marquee-track flex w-max gap-3">
          {marqueeItems.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="glass-pill rounded-lg px-5 py-3 text-sm font-bold text-white/90"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
