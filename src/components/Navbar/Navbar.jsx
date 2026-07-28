import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import useScrollDirection from '../../hooks/useScrollDirection.js';
import useActiveSection from '../../hooks/useActiveSection.js';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function NavLink({ item, isActive, onClick }) {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className="group relative px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-300 lg:text-[0.7rem]"
      style={{ color: isActive ? '#00FF88' : '#BFBFBF' }}
    >
      {item.label}
      {/* Active indicator */}
      <motion.span
        className="absolute -bottom-1 left-1/2 h-[2px] rounded-full bg-neon"
        initial={false}
        animate={{
          width: isActive ? '60%' : '0%',
          x: '-50%',
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ boxShadow: isActive ? '0 0 8px rgba(0,255,136,0.5)' : 'none' }}
      />
      {/* Hover underline */}
      {!isActive && (
        <span className="absolute -bottom-1 left-1/2 h-[1px] w-0 -translate-x-1/2 rounded-full bg-white/30 transition-all duration-300 group-hover:w-[40%]" />
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
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          background: isScrolled ? 'rgba(5,5,5,0.7)' : 'rgba(5,5,5,0)',
          backdropFilter: isScrolled ? 'blur(20px) saturate(1.2)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(1.2)' : 'none',
          transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo / Name */}
          <a href="#home" className="group flex items-center gap-2" aria-label="Harish Pranav V home">
            <span className="text-sm font-black tracking-[0.08em] text-white transition-colors duration-300 group-hover:text-neon">
              H<span className="text-neon">.</span>P
            </span>
          </a>

          {/* Desktop nav */}
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
              background: 'rgba(5,5,5,0.9)',
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
                  className="text-xl font-bold text-white transition-colors duration-200 hover:text-neon"
                  style={{ color: activeSection === item.href.slice(1) ? '#00FF88' : '#ffffff' }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
