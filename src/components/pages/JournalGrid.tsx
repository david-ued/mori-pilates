'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localePath, htmlLang } from '@/lib/i18n';
import { JOURNAL_CATEGORIES, type JournalCategory, type PostMeta } from '@/lib/journal-shared';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { Stagger, StaggerItem } from '@/components/motion/Reveal';

function formatDate(date: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(htmlLang[locale], { dateStyle: 'long' }).format(
      new Date(`${date}T00:00:00`)
    );
  } catch {
    return date;
  }
}

export interface JournalGridLabels {
  filterAll: string;
  categories: Record<JournalCategory, string>;
  readMore: string;
  empty: string;
}

export function JournalGrid({
  posts,
  locale,
  labels,
}: {
  posts: PostMeta[];
  locale: Locale;
  labels: JournalGridLabels;
}) {
  const [active, setActive] = useState<JournalCategory | 'all'>('all');
  const filtered = active === 'all' ? posts : posts.filter((p) => p.category === active);
  const filters: Array<{ key: JournalCategory | 'all'; label: string }> = [
    { key: 'all', label: labels.filterAll },
    ...JOURNAL_CATEGORIES.map((c) => ({ key: c, label: labels.categories[c] })),
  ];

  return (
    <>
      <div role="group" aria-label={labels.filterAll} className="mb-12 flex flex-wrap gap-3">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            aria-pressed={active === key}
            onClick={() => setActive(key)}
            className={`border px-5 py-2 text-xs tracking-[0.14em] transition-colors duration-500 ${
              active === key
                ? 'border-mori bg-mori text-cream'
                : 'border-mori/30 text-mori-deep hover:border-mori hover:bg-mori-mist'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-ink-soft">{labels.empty}</p>
      ) : (
        <Stagger key={active} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <StaggerItem key={post.slug} as="article" className="group">
              <Link href={localePath(locale, `/journal/${post.slug}`)} className="block">
                <div className="overflow-hidden">
                  <PlaceholderImage
                    src={`/images/placeholders/journal-${post.category}.svg`}
                    alt=""
                    className="aspect-[3/2]"
                    imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-[11px] tracking-[0.14em]">
                  <span className="rounded-full bg-mori-mist px-3 py-1 text-mori-deep">
                    {labels.categories[post.category]}
                  </span>
                  <time dateTime={post.date} className="text-ink-soft/70">
                    {formatDate(post.date, locale)}
                  </time>
                </div>
                <h2 className="text-balance-cjk mt-3 font-heading text-xl leading-snug text-ink transition-colors duration-500 group-hover:text-mori-deep">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-7 text-ink-soft">
                  {post.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.14em] text-mori-deep">
                  <span className="border-b border-mori/40 pb-0.5 transition-colors duration-500 group-hover:border-mori">
                    {labels.readMore}
                  </span>
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </>
  );
}
