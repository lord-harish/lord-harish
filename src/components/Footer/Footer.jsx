import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { emailAddress, emailUrl, githubUrl, linkedinUrl } from '../../data/links.js';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { href: githubUrl, icon: Github, label: 'GitHub profile' },
  { href: linkedinUrl, icon: Linkedin, label: 'LinkedIn profile' },
  { href: emailUrl, icon: Mail, label: 'Send email' },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/6">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Animated gradient divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-full origin-center bg-gradient-to-r from-transparent via-neon/40 to-transparent"
          style={{ boxShadow: '0 0 20px rgba(0,255,136,0.15)' }}
        />

        <div className="grid gap-8 py-12 lg:grid-cols-[1fr_1.2fr_auto] lg:items-start">
          {/* Brand */}
          <div>
            <p className="text-xl font-black text-white">
              Harish Pranav <span className="text-neon">V</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
              Building intelligent systems for a smarter future.
            </p>
            <a
              href={emailUrl}
              className="mt-4 inline-flex text-sm font-semibold text-neon/70 transition-colors duration-300 hover:text-neon"
            >
              {emailAddress}
            </a>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-2 sm:grid-cols-4" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="glass-pill rounded-lg px-3 py-2 text-sm font-semibold text-muted hover:text-neon"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social & Back to top */}
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="glass-button flex h-10 w-10 items-center justify-center rounded-lg text-muted hover:text-neon"
                  aria-label={social.label}
                  target={social.label !== 'Send email' ? '_blank' : undefined}
                  rel={social.label !== 'Send email' ? 'noopener noreferrer' : undefined}
                >
                  <social.icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="btn-magnetic glass-button flex h-10 items-center gap-2 rounded-lg px-4 text-xs font-bold uppercase tracking-[0.15em] text-muted hover:text-neon"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={14} aria-hidden="true" />
              Back to Top
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/6 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Harish Pranav V. All Rights Reserved.</p>
          <p className="font-medium text-secondary/60">AI/ML Student · IoT Innovator · Full Stack Learner</p>
        </div>
      </div>
    </footer>
  );
}
