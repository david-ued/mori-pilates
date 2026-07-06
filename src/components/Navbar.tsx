'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { locales, localePath, localeLabel, defaultLocale, type Locale } from '@/lib/i18n';
import type { Dict } from '@/dictionaries';
import { LINE_URL } from '@/lib/site';
import { LineIcon } from './LineIcon';

const EASE = [0.22, 1, 0.36, 1] as const;

/** Strip the locale prefix so the language switcher can map the current page. */
function pathWithoutLocale(pathname: string, locale: Locale): string {
  if (locale === defaultLocale) return pathname || '/';
  const prefix = `/${locale}`;
  const rest = pathname.startsWith(prefix) ? pathname.slice(prefix.length) : pathname;
  return rest === '' ? '/' : rest;
}

export function Navbar({ locale, dict }: { locale: Locale; dict: Dict }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const basePath = pathWithoutLocale(pathname, locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = [
    { href: localePath(locale, '/about'), label: dict.nav.about },
    { href: localePath(locale, '/classes'), label: dict.nav.classes },
    { href: localePath(locale, '/instructors'), label: dict.nav.instructors },
    { href: localePath(locale, '/journal'), label: dict.nav.journal },
  ];

  const isActive = (href: string) =>
    pathname === href || (href !== localePath(locale, '/') && pathname.startsWith(href));

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: EASE, delay: 0.15 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled || open
          ? 'bg-cream/90 shadow-[0_1px_0_rgba(87,128,92,0.12)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8"
      >
        {/* Logo + wordmark */}
        <Link
          href={localePath(locale, '/')}
          className="flex items-center gap-2.5 font-heading text-xl tracking-[0.22em] text-mori-deep md:gap-3 md:text-2xl"
        >
          <Image
            src="/assets/mori-logo-green.png"
            alt=""
            width={181}
            height={218}
            priority
            className="h-9 w-auto md:h-10"
          />
          <span>
            MORI
            <span className="ml-2 text-[10px] font-body font-medium tracking-[0.34em] text-ink-soft align-middle md:text-[11px]">
              PILATES
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`group relative text-sm tracking-[0.08em] transition-colors duration-300 ${
                    isActive(l.href) ? 'text-mori-deep' : 'text-ink-soft hover:text-mori-deep'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-mori transition-all duration-500 ease-out ${
                      isActive(l.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <LangSwitcher locale={locale} basePath={basePath} />

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-mori px-5 py-2.5 text-sm text-cream transition-all duration-500 hover:-translate-y-0.5 hover:bg-mori-deep"
          >
            <LineIcon className="h-4 w-4" />
            {dict.nav.book}
          </a>
        </div>

        {/* Mobile toggles */}
        <div className="flex items-center gap-4 lg:hidden">
          <LangSwitcher locale={locale} basePath={basePath} compact />
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="relative flex h-10 w-10 items-center justify-center"
          >
            <span
              className={`absolute h-px w-6 bg-ink transition-all duration-400 ${
                open ? 'rotate-45' : '-translate-y-[5px]'
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-ink transition-all duration-400 ${
                open ? '-rotate-45' : 'translate-y-[5px]'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden border-t border-mori/10 bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
              className="flex flex-col gap-1 px-6 py-6"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, x: -14 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
                  }}
                >
                  <Link
                    href={l.href}
                    className="block py-3 font-heading text-2xl text-ink transition-colors hover:text-mori"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -14 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
                }}
                className="pt-4"
              >
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-mori px-6 py-3 text-cream"
                >
                  <LineIcon className="h-4 w-4" />
                  {dict.nav.book}
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function LangSwitcher({
  locale,
  basePath,
  compact = false,
}: {
  locale: Locale;
  basePath: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-center ${compact ? 'gap-2 text-xs' : 'gap-2.5 text-[13px]'} tracking-wide`}
    >
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2.5">
          {i > 0 && <span className="h-3 w-px bg-ink/20" aria-hidden />}
          <Link
            href={localePath(l, basePath)}
            hrefLang={l}
            className={
              l === locale
                ? 'text-mori-deep underline underline-offset-4 decoration-mori/50'
                : 'text-ink-soft/70 transition-colors hover:text-mori-deep'
            }
          >
            {localeLabel[l]}
          </Link>
        </span>
      ))}
    </div>
  );
}
