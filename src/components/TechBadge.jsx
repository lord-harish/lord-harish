export default function TechBadge({ children }) {
  return (
    <span className="glass-pill inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-bold text-white/90">
      {children}
    </span>
  );
}
