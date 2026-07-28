import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow = 'Profile', title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
    >
      {/* Animated accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-6 h-px w-16 origin-center bg-gradient-to-r from-transparent via-neon to-transparent"
        style={{ boxShadow: '0 0 12px rgba(0,255,136,0.3)' }}
      />
      <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.35em] text-neon/80">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-secondary">{description}</p>
      ) : null}
    </motion.div>
  );
}
