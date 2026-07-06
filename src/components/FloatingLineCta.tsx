'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LINE_URL } from '@/lib/site';
import { LineIcon } from './LineIcon';

/** Floating LINE booking button — appears once the visitor scrolls past the hero. */
export function FloatingLineCta({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="line-cta"
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-6 right-6 z-50 flex items-center gap-0 rounded-full bg-mori text-cream shadow-[0_14px_38px_-10px_rgba(36,33,33,0.45)] transition-colors duration-500 hover:bg-mori-deep md:bottom-8 md:right-8"
        >
          <span className="flex h-14 w-14 items-center justify-center">
            <LineIcon className="h-7 w-7" />
          </span>
          <span className="hidden max-w-0 overflow-hidden whitespace-nowrap pr-0 text-sm tracking-wide transition-all duration-700 ease-out group-hover:max-w-56 group-hover:pr-6 md:block">
            {label}
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
