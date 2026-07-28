import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      aria-hidden="true"
    >
      <div
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[left,top] duration-100"
        style={{
          left: position.x,
          top: position.y,
          background: 'radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
}
