import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <Link
      to="/"
      className="btn-magnetic glass-button inline-flex h-11 items-center gap-2 rounded-lg px-4 text-sm font-bold text-white/90 focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-void"
    >
      <ArrowLeft size={16} aria-hidden="true" />
      Back to Portfolio
    </Link>
  );
}
