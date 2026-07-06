'use client';

import { useEffect } from 'react';

/**
 * Dev-time helper: static export rewrites <html lang> at build time
 * (scripts/fix-lang.mjs); this keeps `next dev` correct too.
 */
export function LangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
