import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import useScrollDirection from '../../hooks/useScrollDirection.js';
import useActiveSection from '../../hooks/useActiveSection.js';
import { emailUrl } from '../../data/links.js';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
];

function NavLink({ item, isActive, onClick }) {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className="group relative px-4 py-2 text-xs font-semibold tracking-wider transition-colors duration-300 sm:text-sm"
      style={{ color: isActive ? '#ffffff' : '#A0A0A0' }}
    >
      <span className="transition-colors duration-200 group-hover:text-white">{item.label}</span>

      {/* Active Section Animated Underline */}
      {isActive ? (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full bg-neon shadow-neon"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      ) : (
        /* Hover Underline Animation */
        <span className="absolute bottom-0 left-3 right-3 h-[2px] w-0 rounded-full bg-neon/70 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]" />
      )}
    </a>
  );
}

export default function Navbar() {
  const { scrollDirection, scrollY } = useScrollDirection();
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHidden = scrollDirection === 'down' && scrollY > 200;
  const isScrolled = scrollY > 50;

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-50"
        style={{
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          background: isScrolled ? 'rgba(5,5,5,0.85)' : 'rgba(5,5,5,0)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                isActive={activeSection === item.href.slice(1)}
                onClick={handleNavClick}
              />
            ))}
          </div>

          {/* Contact me green pill button */}
          <div className="hidden md:block">
            <a
              href={emailUrl}
              className="btn-magnetic inline-flex items-center justify-center rounded-full bg-neon px-6 py-2.5 text-sm font-bold text-void shadow-neon transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              Contact me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-neon/30 hover:text-neon md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: 'rgba(5,5,5,0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            <nav className="flex h-full flex-col items-center justify-center gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative text-xl font-bold text-white transition-colors duration-200 hover:text-neon"
                  style={{ color: activeSection === item.href.slice(1) ? '#00FF88' : '#ffffff' }}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-neon shadow-neon" />
                  )}
                </motion.a>
              ))}
              <a
                href={emailUrl}
                onClick={handleNavClick}
                className="mt-4 rounded-full bg-neon px-8 py-3 text-base font-bold text-void shadow-neon"
              >
                Contact me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
