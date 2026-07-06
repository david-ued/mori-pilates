import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n';
import { getDict } from '@/dictionaries';
import { buildMetadata } from '@/lib/seo';

const PATHS = {
  home: '/',
  about: '/about',
  classes: '/classes',
  instructors: '/instructors',
  journal: '/journal',
} as const;

export function pageMetadata(locale: Locale, page: keyof typeof PATHS): Metadata {
  const meta = getDict(locale).meta[page];
  return buildMetadata({
    locale,
    path: PATHS[page],
    title: meta.title,
    description: meta.description,
  });
}
