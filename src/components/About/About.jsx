import { motion } from 'framer-motion';
import GlassCard from '../GlassCard/GlassCard.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import { interests, stats } from '../../data/profile.js';
import { revealContainer, revealItem } from '../../hooks/useScrollReveal.js';

const aboutParagraphs = [
  "Hi, I'm Harish Pranav V, a passionate technology enthusiast who enjoys transforming ideas into practical solutions.",
  'I recently completed my diploma and am now stepping into my lateral B.E/B.Tech journey, with a strong focus on Artificial Intelligence, Machine Learning, IoT, Data Analytics, and Full Stack Development.',
  'My interest in technology goes beyond theory: I enjoy building real-world systems that solve meaningful problems. From AI-powered face recognition systems and WhatsApp automation bots to IoT-based predictive maintenance solutions using LoRaWAN, I constantly explore ways to combine software and hardware to create impactful innovations.',
  'I am always learning, experimenting, and building projects that push my technical skills forward while solving practical challenges.',
];

/* Bento grid size mapping for visual variety */
const statSizes = ['sm:col-span-1', 'sm:col-span-1', 'sm:col-span-2', 'sm:col-span-2'];

export default function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About"
          title="About Me"
          description="A builder at the intersection of intelligent software, connected hardware, and practical impact."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* About text */}
          <motion.div
            variants={revealContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <GlassCard className="h-full p-6 sm:p-8">
              <div className="space-y-5 text-base leading-8 text-secondary">
                {aboutParagraphs.map((paragraph) => (
                  <motion.p key={paragraph} variants={revealItem}>
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Bento stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <GlassCard
                key={stat.label}
                delay={index * 0.08}
                className={`p-5 ${statSizes[index] || ''}`}
              >
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-muted">{stat.label}</p>
                <p className="mt-3 text-xl font-black text-white sm:text-2xl">{stat.value}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Core Interests */}
        <div className="mt-12">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-xl font-black text-white"
          >
            Core Interests
          </motion.h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map(({ label, icon: Icon }, index) => (
              <GlassCard key={label} delay={index * 0.05} className="group p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-neon/15 bg-neon/[0.06] text-neon/70 transition-all duration-300 group-hover:border-neon/40 group-hover:text-neon group-hover:shadow-neon">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <p className="font-semibold leading-7 text-white/90">{label}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
