import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import { techStack } from '../../data/portfolio.js';

const marqueeItems = [...techStack, ...techStack];

export default function TechStack() {
  return (
    <section className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <SectionTitle
          eyebrow="Toolkit"
          title="Technologies I Work With"
          description="Tools and technologies powering my ideas."
        />

        <div className="glass-panel relative overflow-hidden rounded-xl py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0B0B0B] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0B0B0B] to-transparent" />
          <div className="marquee-track flex w-max gap-3">
            {marqueeItems.map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="rounded-lg border border-white/6 bg-white/[0.03] px-5 py-3 text-sm font-bold text-white/80 transition-all duration-300 hover:border-neon/30 hover:text-neon hover:shadow-neon"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
