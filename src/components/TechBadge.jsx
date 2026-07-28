export default function TechBadge({ children }) {
  return (
    <span className="rounded-lg border border-white/8 bg-white/[0.04] px-3 py-2 text-xs font-bold text-white/80 transition-all duration-300 hover:border-neon/30 hover:text-neon hover:shadow-neon">
      {children}
    </span>
  );
}
