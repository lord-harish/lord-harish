import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function GlassCard({ children, className = '', delay = 0, disableTilt = false }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [3, -3]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-3, 3]), { stiffness: 200, damping: 30 });

  const spotlightX = useTransform(mouseX, (v) => `${v * 100}%`);
  const spotlightY = useTransform(mouseY, (v) => `${v * 100}%`);

  const handleMouseMove = (e) => {
    if (disableTilt) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: disableTilt ? 0 : rotateX,
        rotateY: disableTilt ? 0 : rotateY,
        transformPerspective: 800,
      }}
      className={`glass-panel rounded-xl ${className}`}
    >
      {/* Cursor spotlight */}
      {isHovered && !disableTilt && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 rounded-xl opacity-0 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.6 : 0,
            background: `radial-gradient(400px circle at ${spotlightX.get()} ${spotlightY.get()}, rgba(0,255,136,0.06), transparent 60%)`,
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </motion.div>
  );
}
