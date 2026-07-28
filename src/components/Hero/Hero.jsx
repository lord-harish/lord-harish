import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import GlassCard from '../GlassCard/GlassCard.jsx';
import { focusItems, roles, signals } from '../../data/profile.js';
import { emailUrl, githubUrl, linkedinUrl } from '../../data/links.js';

/* ── Split-text character animation ───────────────────────────────── */
function SplitText({ text, className }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.5,
            delay: 0.3 + i * 0.035,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Animated role text ───────────────────────────────────────────── */
function AnimatedRoles() {
  const roleList = roles.split(' • ');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % roleList.length), 3000);
    return () => clearInterval(timer);
  }, [roleList.length]);

  return (
    <div className="relative h-8 overflow-hidden">
      {roleList.map((role, i) => (
        <motion.span
          key={role}
          className="absolute left-0 top-0 whitespace-nowrap text-lg font-semibold text-electric sm:text-xl"
          initial={false}
          animate={{
            y: i === current ? 0 : i < current ? -32 : 32,
            opacity: i === current ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {role}
        </motion.span>
      ))}
    </div>
  );
}

/* ── Spotlight effect following cursor ────────────────────────────── */
function useSpotlight(ref) {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      setPosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    el.addEventListener('mousemove', handleMove);
    return () => el.removeEventListener('mousemove', handleMove);
  }, [ref]);

  return position;
}

/* ── Social icons ─────────────────────────────────────────────────── */
const socialLinks = [
  { href: githubUrl, icon: Github, label: 'GitHub' },
  { href: linkedinUrl, icon: Linkedin, label: 'LinkedIn' },
  { href: emailUrl, icon: Mail, label: 'Email' },
];

/* ── Container / item reveal variants ─────────────────────────────── */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.6 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative z-10 flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ── Left: Content ──────────────────────────────────────── */}
        <div className="max-w-3xl">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-pill mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Name — split text animation */}
          <h1 className="text-balance text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <SplitText text="Harish Pranav V" className="neon-text" />
          </h1>

          {/* Animated rotating roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6"
          >
            <AnimatedRoles />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-base leading-8 text-secondary sm:text-lg"
          >
            Diploma graduate transitioning into a lateral B.E/B.Tech journey, passionate about building intelligent
            systems using AI, Machine Learning, IoT, Automation, and Data Analytics to solve real-world problems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#projects"
              className="btn-magnetic group inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-neon px-6 text-sm font-bold text-void shadow-neon transition-all duration-300 hover:shadow-neon-lg"
            >
              Explore My Projects
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={emailUrl}
              className="btn-magnetic glass-button inline-flex h-12 items-center justify-center gap-2.5 rounded-lg px-6 text-sm font-bold text-white"
            >
              <Mail size={16} aria-hidden="true" />
              Contact Me
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-8 flex items-center gap-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="glass-button flex h-10 w-10 items-center justify-center rounded-lg text-muted hover:text-neon"
                aria-label={social.label}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
              >
                <social.icon size={17} aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Profile Card ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <GlassCard className="gradient-border relative overflow-hidden p-6 sm:p-8">
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />

              {/* Profile image */}
              <div className="mb-7">
                <div className="glass-pill relative mx-auto aspect-square w-44 overflow-hidden rounded-xl sm:w-52">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon/8 via-transparent to-electric/10" />
                  <img
                    src={`${import.meta.env.BASE_URL}assets/me.png`}
                    alt="Portrait of Harish Pranav V"
                    className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                    width={208}
                    height={208}
                  />
                </div>
              </div>

              {/* Status */}
              <div className="mb-7">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-neon/70">Status</p>
                <h2 className="mt-2 text-xl font-black uppercase tracking-[0.1em] text-white sm:text-2xl">
                  Building The Future
                </h2>
              </div>

              {/* Signal cards */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="mb-7 grid gap-3 sm:grid-cols-2"
              >
                {signals.map(({ label, icon: Icon }) => (
                  <motion.div
                    key={label}
                    variants={item}
                    className="glass-pill rounded-xl p-4"
                  >
                    <Icon className="mb-3 text-neon/70" size={20} aria-hidden="true" />
                    <p className="text-sm font-semibold text-secondary">{label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Focus items */}
              <div>
                <p className="mb-4 text-sm font-bold text-white">Current Focus:</p>
                <ul className="space-y-2.5">
                  {focusItems.map((focusItem) => (
                    <li key={focusItem} className="flex items-center gap-3 text-sm font-medium text-secondary">
                      <span className="h-1 w-1 rounded-full bg-neon shadow-neon" aria-hidden="true" />
                      {focusItem}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted transition-colors duration-300 hover:text-neon"
          aria-label="Scroll to about section"
        >
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
