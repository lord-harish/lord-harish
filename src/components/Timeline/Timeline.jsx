import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from '../GlassCard/GlassCard.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import { education, experience } from '../../data/portfolio.js';

function getAssetUrl(path) {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

function TimelineEntry({ item, mode, index }) {
  const Icon = item.icon;
  const image = item.images?.[0];

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <motion.span
        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 top-7 z-10 h-3.5 w-3.5 rounded-full border border-neon bg-void"
        style={{ boxShadow: '0 0 12px rgba(0,255,136,0.5)' }}
      />
      {/* Timeline line */}
      <span className="absolute left-[6px] top-12 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-neon/50 via-neon/15 to-transparent" />

      <GlassCard className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-neon/15 bg-neon/[0.06] text-neon/70">
              <Icon size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-neon/70">{mode}</p>
              <h3 className="mt-1.5 text-xl font-black text-white sm:text-2xl">{item.company || item.title}</h3>
              {item.role ? <p className="mt-1 text-sm font-semibold text-electric">{item.role}</p> : null}
            </div>
          </div>
          {item.status ? (
            <span className="w-fit rounded-lg border border-neon/20 bg-neon/[0.06] px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-neon">
              {item.status}
            </span>
          ) : null}
        </div>

        <p className="mt-5 text-sm leading-7 text-secondary">{item.description}</p>

        {image ? (
          <div className="mt-6 max-w-56 overflow-hidden rounded-xl border border-white/8 bg-white/[0.03]">
            <div className="relative aspect-[9/16] overflow-hidden">
              <img
                src={getAssetUrl(image)}
                alt={`${item.company || item.title} visual`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-transparent" />
            </div>
          </div>
        ) : null}

        {item.contributions ? (
          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {item.contributions.map((contribution) => (
              <div key={contribution} className="flex items-start gap-3 text-sm text-secondary">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon shadow-neon" />
                <span>{contribution}</span>
              </div>
            ))}
          </div>
        ) : null}
      </GlassCard>
    </motion.div>
  );
}

function AnimatedTimeline({ children, title, eyebrow, description, id }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id={id} className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div ref={containerRef} className="mx-auto max-w-5xl">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="relative space-y-8">
          {children}
        </div>
      </div>
    </section>
  );
}

export function ExperienceTimeline() {
  return (
    <AnimatedTimeline
      id="experience"
      eyebrow="Industry"
      title="Experience & Internship"
      description="Hands-on industry exposure and real-world technical experience."
    >
      {experience.map((item, index) => (
        <TimelineEntry key={item.company} item={item} mode="Experience" index={index} />
      ))}
    </AnimatedTimeline>
  );
}

export function EducationTimeline() {
  return (
    <AnimatedTimeline
      id="education"
      eyebrow="Academics"
      title="Education Journey"
      description="My academic journey and continuous growth in technology."
    >
      {education.map((item, index) => (
        <TimelineEntry key={item.title} item={item} mode="Education" index={index} />
      ))}
    </AnimatedTimeline>
  );
}
