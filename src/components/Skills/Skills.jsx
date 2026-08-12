import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import ScrollStack, { ScrollStackItem } from '../ScrollStack/ScrollStack.jsx';
import { skillCategories } from '../../data/portfolio.js';
import { Sparkles, Layers } from 'lucide-react';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categoryNames = ['All', ...skillCategories.map((c) => c.title)];

  const filteredCategories =
    activeFilter === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeFilter);

  return (
    <section id="skills" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Stack & Expertise"
          title="Skills & Technologies"
          description="Interactive stacked overview of technologies, tools, frameworks, and domain expertise I use to build intelligent and scalable systems."
        />

        {/* Filter / Category Selector tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {categoryNames.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setActiveFilter(name)}
              className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                activeFilter === name
                  ? 'glass-pill border-neon/50 text-neon shadow-neon'
                  : 'glass-button text-muted hover:text-white'
              }`}
            >
              {name}
            </button>
          ))}
        </motion.div>

        {/* Scrolling Stack Animation Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ScrollStack
              useWindowScroll={true}
              itemDistance={90}
              itemStackDistance={28}
              stackPosition="18%"
              scaleEndPosition="10%"
              baseScale={0.88}
              itemScale={0.025}
              blurAmount={1.2}
              rotationAmount={0}
              className="w-full"
            >
              {filteredCategories.map(({ title, description, skills, icon: Icon }, index) => (
                <ScrollStackItem key={title} itemClassName="w-full">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#121726]/95 via-[#0B0E18]/95 to-[#06080E]/98 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-neon/40 hover:shadow-neon/20 sm:rounded-3xl sm:p-8 md:p-9">
                    {/* Glowing background ambient blob */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-neon/10 blur-3xl transition-opacity duration-500 group-hover:bg-neon/20" />
                    <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-electric/5 blur-3xl" />

                    {/* Corner Cyberpunk Tag */}
                    <div className="pointer-events-none absolute bottom-4 right-5 hidden font-mono text-[0.65rem] tracking-widest text-white/20 sm:block">
                      STACK_NODE // 0{index + 1}
                    </div>

                    {/* Card Header */}
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 rounded-full border border-neon/30 bg-neon/10 px-2.5 py-0.5 font-mono text-[0.65rem] font-bold tracking-wider text-neon">
                            <Layers size={11} />
                            0{index + 1} // DOMAIN
                          </span>
                        </div>
                        <h3 className="mt-2 text-xl font-black tracking-tight text-white sm:text-2xl md:text-3xl">
                          {title}
                        </h3>
                      </div>

                      {/* Icon Badge */}
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.2,
                        }}
                        className="glass-pill flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 text-neon shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:border-neon/40 group-hover:shadow-neon sm:h-14 sm:w-14 sm:rounded-2xl"
                      >
                        <Icon size={24} aria-hidden="true" />
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="max-w-3xl text-sm leading-relaxed text-secondary sm:text-base">
                      {description}
                    </p>

                    {/* Skills Tags */}
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <div className="mb-3 flex items-center justify-between font-mono text-xs text-muted">
                        <span className="flex items-center gap-1.5 uppercase tracking-wider text-secondary/80">
                          <Sparkles size={12} className="text-neon" />
                          Core Tools & Frameworks
                        </span>
                        <span className="text-neon/80">{skills.length} Items</span>
                      </div>

                      <div className="flex flex-wrap gap-2 sm:gap-2.5">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="glass-pill rounded-lg px-3 py-1.5 text-xs font-semibold text-secondary/90 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-neon/40 hover:text-white hover:shadow-neon/20 sm:text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
