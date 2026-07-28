import { motion } from 'framer-motion';

const particles = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: `${(index * 43 + 11) % 100}%`,
  top: `${(index * 61 + 7) % 100}%`,
  size: 1.5 + (index % 3),
  delay: (index % 6) * 0.5,
  duration: 10 + (index % 5) * 2,
}));

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle grid */}
      <div className="grid-mask absolute inset-0 opacity-40" />

      {/* Aurora mesh - primary */}
      <motion.div
        animate={{
          transform: [
            'translate(0%, 0%) rotate(0deg) scale(1)',
            'translate(5%, 3%) rotate(2deg) scale(1.05)',
            'translate(-3%, 5%) rotate(-1deg) scale(0.97)',
            'translate(3%, -2%) rotate(1deg) scale(1.02)',
            'translate(0%, 0%) rotate(0deg) scale(1)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-[20%] -top-[10%] h-[60vh] w-[60vw] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(ellipse at center, #00FF88 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Aurora mesh - secondary */}
      <motion.div
        animate={{
          transform: [
            'translate(0%, 0%) rotate(0deg) scale(1)',
            'translate(-4%, -3%) rotate(-2deg) scale(1.03)',
            'translate(5%, -5%) rotate(1deg) scale(0.96)',
            'translate(-2%, 4%) rotate(-0.5deg) scale(1.01)',
            'translate(0%, 0%) rotate(0deg) scale(1)',
          ],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-[15%] top-[20%] h-[50vh] w-[50vw] rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(ellipse at center, #3CFFB0 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Aurora mesh - tertiary warm */}
      <motion.div
        animate={{
          transform: [
            'translate(0%, 0%) scale(1)',
            'translate(3%, 5%) scale(1.04)',
            'translate(-5%, 2%) scale(0.98)',
            'translate(0%, 0%) scale(1)',
          ],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-[10%] left-[20%] h-[40vh] w-[40vw] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(ellipse at center, #00FF88 0%, transparent 65%)',
          filter: 'blur(120px)',
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            background: 'rgba(0, 255, 136, 0.6)',
            boxShadow: '0 0 12px rgba(0, 255, 136, 0.4)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            delay: particle.delay,
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
