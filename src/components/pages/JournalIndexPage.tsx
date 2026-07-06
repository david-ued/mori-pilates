import type { Locale } from '@/lib/i18n';
import { getDict } from '@/dictionaries';
import { getAllPosts } from '@/lib/journal';
import { FadeUp } from '@/components/motion/Reveal';
import { JournalGrid } from '@/components/pages/JournalGrid';

export function JournalIndexPage({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.journal;
  const posts = getAllPosts(locale).map(({ content: _content, ...meta }) => meta);

  return (
    <>
      <section className="pt-36 pb-14 md:pt-48 md:pb-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeUp>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-mori">{t.kicker}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-5 font-heading text-4xl leading-snug text-ink md:text-5xl">{t.title}</h1>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="mt-6 max-w-2xl leading-8 text-ink-soft">{t.intro}</p>
          </FadeUp>
        </div>
      </section>

      <section aria-label={t.title} className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <JournalGrid
            posts={posts}
            locale={locale}
            labels={{
              filterAll: t.filterAll,
              categories: t.categories,
              readMore: t.readMore,
              empty: t.empty,
            }}
          />
        </div>
      </section>
    </>
  );
}
