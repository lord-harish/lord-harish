import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { focusItems, signals } from '../../data/profile.js';
import { emailUrl, githubUrl, linkedinUrl } from '../../data/links.js';

const socialLinks = [
  { href: githubUrl, icon: Github, label: 'GitHub' },
  { href: linkedinUrl, icon: Linkedin, label: 'LinkedIn' },
  { href: emailUrl, icon: Mail, label: 'Email' },
];

const typeWords = [
  'Full Stack Builder',
  'AI Developer',
  'Data Analyst',
  'IoT Innovator',
  'AI-Powered Trader',
  'Automation Builder',
  'UI/UX Developer',
];

function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [phase, setPhase] = useState('TYPING'); // 'TYPING' | 'PAUSED' | 'DELETING' | 'WAIT_NEXT'

  useEffect(() => {
    const targetWord = typeWords[wordIndex];

    switch (phase) {
      case 'TYPING': {
        if (currentText.length < targetWord.length) {
          const timer = setTimeout(() => {
            setCurrentText(targetWord.slice(0, currentText.length + 1));
          }, 75);
          return () => clearTimeout(timer);
        }
        setPhase('PAUSED');
        break;
      }

      case 'PAUSED': {
        // Smooth 2-second pause when title finishes typing
        const timer = setTimeout(() => {
          setPhase('DELETING');
        }, 2000);
        return () => clearTimeout(timer);
      }

      case 'DELETING': {
        if (currentText.length > 0) {
          const timer = setTimeout(() => {
            setCurrentText(targetWord.slice(0, currentText.length - 1));
          }, 35);
          return () => clearTimeout(timer);
        }
        setPhase('WAIT_NEXT');
        break;
      }

      case 'WAIT_NEXT': {
        const timer = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % typeWords.length);
          setPhase('TYPING');
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [currentText, phase, wordIndex]);

  return (
    <span className="inline-flex items-center text-neon">
      <span>{currentText}</span>
      <span className="ml-1 inline-block h-[0.85em] w-[3px] animate-pulse rounded-full bg-neon shadow-neon" />
    </span>
  );
}

function AnimatedName({ text }) {
  const letters = text.split('');

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className="inline-flex flex-wrap items-baseline gap-[0.01em] text-xl font-black tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
    >
      {letters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 16, filter: 'blur(4px)', scale: 0.9 },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              scale: 1,
              transition: {
                duration: 0.4,
                delay: 0.1 + i * 0.035,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          animate={{
            color: ['#00FF88', '#3CFFB0', '#70FFC2', '#00FF88'],
            textShadow: [
              '0 0 12px rgba(0,255,136,0.6)',
              '0 0 24px rgba(60,255,176,0.85)',
              '0 0 12px rgba(0,255,136,0.6)',
            ],
          }}
          transition={{
            color: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 },
            textShadow: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 },
          }}
          whileHover={{
            y: -4,
            scale: 1.12,
            transition: { duration: 0.15 },
          }}
          className="inline-block cursor-default select-none font-black"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Column: 3 Texts + Signals & Socials */}
        <div className="text-center lg:text-left">
          {/* Greeting Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-baseline justify-center gap-2 text-sm font-medium text-secondary/90 sm:text-base lg:justify-start"
          >
            <span>Hi! I&apos;m</span>
            <AnimatedName text="Harish Pranav V" />
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight"
          >
            <span className="block text-white">Student &</span>
            <span className="mt-1 block min-h-[1.2em]">
              <TypingText />
            </span>
          </motion.h1>

          {/* Short Two-Line Subtext Intro */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-secondary/80 sm:text-sm md:text-base lg:mx-0"
          >
            I build intelligent systems, IoT innovations, and data-driven web applications that solve real-world problems.
          </motion.p>

          {/* Signals & Focus Info Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-2.5 lg:justify-start"
          >
            {signals.map(({ label, icon: Icon }) => (
              <div key={label} className="glass-pill flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-white/90 sm:px-3.5">
                <Icon size={14} className="text-neon" />
                <span>{label}</span>
              </div>
            ))}
            {focusItems.map((focusItem) => (
              <div key={focusItem} className="glass-pill flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-secondary sm:px-3.5">
                <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-neon" />
                <span>{focusItem}</span>
              </div>
            ))}
          </motion.div>

          {/* Social links row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="glass-button flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-neon"
                aria-label={social.label}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
              >
                <social.icon size={17} aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Normal Formal Stylish Portrait Picture Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[210px] sm:max-w-[260px] lg:mr-0 lg:max-w-[320px]"
        >
          {/* Outer Subtle Glow Rim */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-neon/30 via-neon/10 to-transparent blur-md opacity-50" />

          {/* Main Formal Stylish Glass Frame */}
          <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/20 p-3 sm:p-3.5 shadow-2xl">
            {/* Top Accent Specular Line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />

            {/* Picture Container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neon/15 via-void to-void">
              <img
                src={`${import.meta.env.BASE_URL}assets/me.png`}
                alt="Portrait of Harish Pranav V"
                className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
              />

              {/* Bottom Shadow Overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-void via-void/30 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
