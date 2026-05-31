import { motion } from 'framer-motion';
import { Image, ScanSearch } from 'lucide-react';

function getAssetUrl(path) {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

export default function OutputGallery({ outputs }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {outputs.map((output, index) => (
        <motion.div
          key={output.path}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className={`group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] ${
            output.featured ? 'md:col-span-2' : ''
          }`}
        >
          <div
            className={`relative overflow-hidden bg-gradient-to-br from-neon/10 via-void to-electric/10 ${
              output.aspect === 'video' ? 'aspect-video' : 'aspect-square'
            }`}
          >
            <img
              src={getAssetUrl(output.path)}
              alt={`${output.title} output preview`}
              className={`h-full w-full transition duration-500 group-hover:scale-105 ${
                output.aspect === 'video' ? 'object-contain' : 'object-cover'
              }`}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.classList.add('hidden');
                event.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="absolute inset-0 hidden place-items-center p-5 text-center transition duration-300 group-hover:scale-105">
              <div>
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-md border border-electric/30 bg-electric/10 text-electric shadow-electric">
                  <Image size={25} aria-hidden="true" />
                </span>
                <p className="mt-4 text-sm font-black text-white">{output.title}</p>
                <p className="mt-2 break-all text-xs leading-5 text-slate-400">{getAssetUrl(output.path)}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-white/10 p-4">
            <div>
              <p className="text-sm font-black text-white">{output.title}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-neon">{output.type}</p>
            </div>
            <ScanSearch className="shrink-0 text-electric" size={19} aria-hidden="true" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
