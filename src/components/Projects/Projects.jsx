import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Layers3, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../GlassCard/GlassCard.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import { projectIcon as ProjectIcon, projects } from '../../data/portfolio.js';
import { revealContainer, revealItem } from '../../hooks/useScrollReveal.js';

function ProjectActions({ featured, slug }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <Link
        to={`/projects/${slug}`}
        className="btn-magnetic glass-button group/btn inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-bold text-neon"
      >
        View Details
        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
      </Link>
      <a
        href="https://github.com/"
        className="btn-magnetic glass-button inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-bold text-secondary hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={14} aria-hidden="true" />
        GitHub
      </a>
      {featured ? (
        <Link
          to={`/projects/${slug}`}
          className="btn-magnetic glass-button inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-bold text-electric"
        >
          System Overview
        </Link>
      ) : null}
    </div>
  );
}

function ProjectCard({ project }) {
  const isFeatured = project.featured;

  return (
    <motion.div
      variants={revealItem}
      className={isFeatured ? 'lg:col-span-2' : ''}
    >
      <GlassCard
        className={`gradient-border group relative h-full overflow-hidden p-6 sm:p-8 ${
          isFeatured ? 'border-neon/20' : ''
        }`}
      >
        <div className="relative">
          {/* Badges */}
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className="glass-pill inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-secondary">
              <Layers3 size={12} aria-hidden="true" />
              {project.category}
            </span>
            <span className="glass-pill rounded-lg px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-neon">
              {project.status}
            </span>
            {isFeatured ? (
              <span className="glass-pill inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-neon shadow-neon">
                <Star size={11} aria-hidden="true" />
                Featured
              </span>
            ) : null}
          </div>

          {/* Title */}
          <div className="flex items-start gap-4">
            <span className="glass-pill mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-neon/70 shadow-neon">
              <ProjectIcon size={20} aria-hidden="true" />
            </span>
            <div>
              <h3 className={`${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-black leading-tight text-white`}>
                {project.title}
              </h3>
              {project.priority ? (
                <p className="mt-2 text-xs font-bold text-electric">{project.priority}</p>
              ) : null}
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 text-sm leading-7 text-secondary">{project.description}</p>

          {/* Features */}
          <div className={`mt-6 grid gap-2.5 ${isFeatured ? 'sm:grid-cols-2' : ''}`}>
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-sm text-secondary">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon shadow-neon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="glass-pill rounded-lg px-3 py-1.5 text-[0.65rem] font-semibold text-muted group-hover:text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          <ProjectActions featured={isFeatured} slug={project.slug} />

          {project.note ? (
            <p className="mt-5 text-sm font-medium text-muted">{project.note}</p>
          ) : null}
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Work"
          title="Featured Projects"
          description="A collection of real-world projects focused on AI, automation, analytics, and smart systems."
        />

        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
