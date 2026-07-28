import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import { achievements } from '../../data/portfolio.js';

function getAssetUrl(path) {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

function ImageSlideshow({ achievement }) {
  const images = achievement.images || [achievement.image].filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] || '/assets/achievements/achievement-placeholder.png';

  useEffect(() => {
    if (images.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div className="group/image relative aspect-video overflow-hidden rounded-xl border border-white/8 bg-white/[0.03]">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeImage}
          src={getAssetUrl(activeImage)}
          alt={`${achievement.title} visual ${activeIndex + 1}`}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover transition duration-700 group-hover/image:scale-105"
          onError={(event) => {
            event.currentTarget.classList.add('hidden');
            event.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
      </AnimatePresence>
      {/* Fallback placeholder */}
      <div className="absolute inset-0 hidden place-items-center bg-gradient-to-br from-neon/5 via-void to-electric/5 p-6 text-center">
        <div>
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-neon/70">Image Holder</p>
          <p className="mt-3 text-lg font-black text-white">Add Achievement Image</p>
          <p className="mt-2 break-all text-xs leading-5 text-muted">{activeImage}</p>
        </div>
      </div>
      {/* Overlay gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-transparent" />

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-void/70 text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-neon/30 hover:text-neon focus:outline-none focus:ring-2 focus:ring-neon/60"
            aria-label={`Previous image for ${achievement.title}`}
          >
            <ChevronLeft size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-void/70 text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-neon/30 hover:text-neon focus:outline-none focus:ring-2 focus:ring-neon/60"
            aria-label={`Next image for ${achievement.title}`}
          >
            <ChevronRight size={16} aria-hidden="true" />
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-lg border border-white/8 bg-void/70 px-3 py-2 backdrop-blur-xl">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-5 bg-neon shadow-neon' : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Show image ${index + 1} for ${achievement.title}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function AchievementShowcase({ achievement, index }) {
  const isEven = index % 2 === 1;
  const Icon = achievement.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel gradient-border group relative overflow-hidden rounded-xl p-5 sm:p-6 lg:p-8"
    >
      <div
        className={`relative grid items-center gap-7 lg:grid-cols-[0.92fr_1.08fr] ${
          isEven ? 'lg:grid-cols-[1.08fr_0.92fr]' : ''
        }`}
      >
        <div className={isEven ? 'lg:order-2' : ''}>
          <ImageSlideshow achievement={achievement} />
        </div>

        <div className={isEven ? 'lg:order-1' : ''}>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="glass-pill flex h-11 w-11 items-center justify-center rounded-lg text-neon/70 group-hover:text-neon">
              <Icon size={20} aria-hidden="true" />
            </span>
            <span className="glass-pill rounded-lg px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-neon">
              {achievement.badge}
            </span>
          </div>

          <h3 className="text-xl font-black leading-tight text-white sm:text-2xl lg:text-3xl">{achievement.title}</h3>
          <p className="mt-4 text-sm leading-8 text-secondary sm:text-base">{achievement.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {achievement.highlights.map((highlight) => (
              <span
                key={highlight}
                className="glass-pill rounded-lg px-3 py-1.5 text-xs font-semibold text-secondary group-hover:text-white"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Achievements() {
  return (
    <section className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Milestones"
          title="Achievements & Certifications"
          description="Milestones, research work, and continuous learning."
        />

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <AchievementShowcase key={achievement.title} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
