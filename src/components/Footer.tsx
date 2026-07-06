import Image from 'next/image';
import Link from 'next/link';
import { localePath, type Locale } from '@/lib/i18n';
import type { Dict } from '@/dictionaries';
import { LINE_URL, GOOGLE_MAPS_LINK, BRAND } from '@/lib/site';
import { LineIcon } from './LineIcon';

export function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const links = [
    { href: localePath(locale, '/'), label: dict.nav.home },
    { href: localePath(locale, '/about'), label: dict.nav.about },
    { href: localePath(locale, '/classes'), label: dict.nav.classes },
    { href: localePath(locale, '/instructors'), label: dict.nav.instructors },
    { href: localePath(locale, '/journal'), label: dict.nav.journal },
  ];

  const address =
    locale === 'ja' ? BRAND.addressJa : locale === 'en' ? BRAND.addressEn : dict.about.address;

  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8 md:px-8 md:py-20">
        <div>
          <Image
            src="/assets/mori-logo-white.png"
            alt=""
            width={90}
            height={109}
            className="h-14 w-auto"
          />
          <p className="mt-4 font-heading text-2xl tracking-[0.22em] text-cream">
            MORI
            <span className="ml-2 align-middle font-body text-[11px] font-medium tracking-[0.34em] text-cream/60">
              PILATES
            </span>
          </p>
          <p className="mt-3 font-heading text-sm italic tracking-[0.14em] text-mori-soft">
            {BRAND.tagline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-cream/60">{dict.footer.blurb}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-cream/40">
            {dict.footer.linksTitle}
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors duration-300 hover:text-mori-soft">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-cream/40">
            {dict.footer.visitTitle}
          </h2>
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block text-sm leading-7 transition-colors duration-300 hover:text-mori-soft"
          >
            {address}
          </a>

          <h2 className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-cream/40">
            {dict.footer.contactTitle}
          </h2>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-sm transition-all duration-500 hover:border-mori-soft hover:text-mori-soft"
          >
            <LineIcon className="h-4 w-4" />
            {dict.footer.lineLabel}
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cream/40 md:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. {dict.footer.rights}
          </p>
          <p className="tracking-[0.2em]">MOVE · OBSERVE · RECONNECT · INWARD</p>
        </div>
      </div>
    </footer>
  );
}
