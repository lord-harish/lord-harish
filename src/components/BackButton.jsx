import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <Link
      to="/"
      className="btn-magnetic inline-flex h-11 items-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-4 text-sm font-bold text-secondary transition-all duration-300 hover:border-neon/30 hover:text-neon hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-void"
    >
      <ArrowLeft size={16} aria-hidden="true" />
      Back to Portfolio
    </Link>
  );
}
