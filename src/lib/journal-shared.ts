import type { Locale } from '@/lib/i18n';

/**
 * Client-safe journal types & constants.
 * Keep this module free of Node-only imports (fs/path) — client components import from here,
 * while server-side reading lives in journal.ts.
 */
export const JOURNAL_CATEGORIES = ['news', 'knowledge', 'interview'] as const;
export type JournalCategory = (typeof JOURNAL_CATEGORIES)[number];

export interface PostMeta {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  category: JournalCategory;
  author?: string;
}

export interface Post extends PostMeta {
  content: string;
}
