import type { Locale } from '@/lib/i18n';
import type { Dict } from '@/dictionaries';
import { GOOGLE_MAPS_EMBED, GOOGLE_MAPS_LINK, LINE_URL } from '@/lib/site';
import { FadeUp } from './motion/Reveal';
import { LineIcon } from './LineIcon';

/** Location block: address + Google Maps embed. */
export function MapSection({ locale: _locale, dict }: { locale: Locale; dict: Dict }) {
  const a = dict.about;

  return (
    <section aria-labelledby="location-title" className="bg-cream-dim/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <FadeUp>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-mori">
            {a.locationKicker}
          </p>
          <h2 id="location-title" className="mt-4 font-heading text-2xl text-ink md:text-3xl">
            {a.locationTitle}
          </h2>
        </FadeUp>

        {/* address + contact */}
        <FadeUp delay={0.1} className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft/70">{a.addressLabel}</p>
            <p className="mt-2 text-lg leading-8 text-ink md:text-xl">{a.address}</p>
            <p className="mt-1 text-sm text-mori-deep">{a.mapNote}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-mori/50 px-6 py-2.5 text-sm text-mori-deep transition-all duration-500 hover:-translate-y-0.5 hover:bg-mori hover:text-cream"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
              {a.openMap}
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-mori px-6 py-2.5 text-sm text-cream transition-all duration-500 hover:-translate-y-0.5 hover:bg-mori-deep"
            >
              <LineIcon className="h-4 w-4" />
              {dict.cta.lineContact}
            </a>
          </div>
        </FadeUp>

        {/* google embed */}
        <FadeUp delay={0.12} className="mt-12 overflow-hidden border border-mori/15 shadow-[0_20px_50px_-30px_rgba(36,33,33,0.35)]">
          <iframe
            src={GOOGLE_MAPS_EMBED}
            title="Google Maps — Mori Pilates"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full border-0 saturate-[0.82] md:h-[420px]"
          />
        </FadeUp>
      </div>
    </section>
  );
}
