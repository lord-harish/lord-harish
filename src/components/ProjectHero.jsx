import { motion } from 'framer-motion';
import { Layers3 } from 'lucide-react';
import GlassCard from './GlassCard/GlassCard.jsx';
import TechBadge from './TechBadge.jsx';
import BackButton from './BackButton.jsx';
import { revealContainer, revealItem } from '../hooks/useScrollReveal.js';

export default function ProjectHero({ project }) {
  return (
    <section className="relative z-10 px-4 pb-12 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <BackButton />
        <motion.div
          variants={revealContainer}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          <GlassCard className="gradient-border relative overflow-hidden p-6 sm:p-9 lg:p-10" disableTilt>
            {/* Ambient glow */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-[0.08]"
              style={{ background: 'radial-gradient(circle, #3CFFB0, transparent 70%)', filter: 'blur(60px)' }}
              aria-hidden="true"
            />
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1.04, 1, 1.04] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full opacity-[0.06]"
              style={{ background: 'radial-gradient(circle, #00FF88, transparent 65%)', filter: 'blur(80px)' }}
              aria-hidden="true"
            />

            <div className="relative">
              <motion.div variants={revealItem} className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.04] px-3 py-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-secondary">
                  <Layers3 size={13} aria-hidden="true" />
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-neon/20 bg-neon/[0.06] px-3 py-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-neon">
                  {project.status}
                </span>
              </motion.div>

              <motion.h1 variants={revealItem} className="max-w-5xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className="neon-text">{project.title}</span>
              </motion.h1>

              <motion.p variants={revealItem} className="mt-6 max-w-4xl text-base leading-8 text-secondary sm:text-lg">
                {project.summary}
              </motion.p>

              <motion.div variants={revealItem} className="mt-8 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
