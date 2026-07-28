import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../GlassCard/GlassCard.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import { skillCategories } from '../../data/portfolio.js';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categoryNames = ['All', ...skillCategories.map((c) => c.title)];

  const filteredCategories = activeFilter === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.title === activeFilter);

  return (
    <section id="skills" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Stack"
          title="Skills & Technologies"
          description="Technologies, tools, and frameworks I use to build intelligent and impactful solutions."
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {categoryNames.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setActiveFilter(name)}
              className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                activeFilter === name
                  ? 'glass-pill border-neon/40 text-neon shadow-neon'
                  : 'glass-button text-muted hover:text-white'
              }`}
            >
              {name}
            </button>
          ))}
        </motion.div>

        {/* Skill cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredCategories.map(({ title, description, skills, icon: Icon }, index) => (
              <GlassCard key={title} delay={index * 0.06} className="group h-full overflow-hidden p-6">
                <div className="mb-5 flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-neon/70">Category</p>
                    <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">{title}</h3>
                  </div>
                  <motion.span
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                    className="glass-pill flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-neon/70 group-hover:text-neon"
                  >
                    <Icon size={22} aria-hidden="true" />
                  </motion.span>
                </div>

                <p className="min-h-[4.5rem] text-sm leading-7 text-secondary">{description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="glass-pill rounded-lg px-3 py-1.5 text-xs font-semibold text-secondary group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
