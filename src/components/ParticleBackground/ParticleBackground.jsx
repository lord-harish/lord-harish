import { motion } from 'framer-motion';

const dynamicOrbs = [
  {
    id: 1,
    size: 'h-[350px] w-[350px] sm:h-[500px] sm:w-[500px]',
    color: 'radial-gradient(circle, rgba(0, 255, 136, 0.25) 0%, transparent 70%)',
    blur: 'blur(90px)',
    x: [0, 120, -80, 0],
    y: [0, -100, 60, 0],
    scale: [1, 1.2, 0.85, 1],
    duration: 18,
    position: '-left-[10%] -top-[10%]',
  },
  {
    id: 2,
    size: 'h-[300px] w-[300px] sm:h-[450px] sm:w-[450px]',
    color: 'radial-gradient(circle, rgba(60, 255, 176, 0.2) 0%, transparent 70%)',
    blur: 'blur(100px)',
    x: [0, -100, 70, 0],
    y: [0, 90, -80, 0],
    scale: [1, 0.85, 1.25, 1],
    duration: 22,
    position: '-right-[10%] top-[15%]',
  },
  {
    id: 3,
    size: 'h-[280px] w-[280px] sm:h-[400px] sm:w-[400px]',
    color: 'radial-gradient(circle, rgba(0, 255, 136, 0.18) 0%, transparent 70%)',
    blur: 'blur(110px)',
    x: [0, 90, -110, 0],
    y: [0, -70, 90, 0],
    scale: [0.9, 1.2, 0.95, 0.9],
    duration: 25,
    position: 'left-[20%] top-[45%]',
  },
  {
    id: 4,
    size: 'h-[320px] w-[320px] sm:h-[480px] sm:w-[480px]',
    color: 'radial-gradient(circle, rgba(60, 255, 176, 0.15) 0%, transparent 70%)',
    blur: 'blur(95px)',
    x: [0, -80, 100, 0],
    y: [0, 110, -60, 0],
    scale: [1.1, 0.9, 1.15, 1.1],
    duration: 20,
    position: 'right-[15%] bottom-[10%]',
  },
];

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle grid mask */}
      <div className="grid-mask absolute inset-0 opacity-20" />

      {/* Dynamic Moving Blurred Orbs */}
      {dynamicOrbs.map((orb) => (
        <motion.div
          key={orb.id}
          animate={{
            x: orb.x,
            y: orb.y,
            scale: orb.scale,
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className={`absolute rounded-full ${orb.size} ${orb.position}`}
          style={{
            background: orb.color,
            filter: orb.blur,
          }}
        />
      ))}
    </div>
  );
}
