import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Locale } from '@/lib/i18n';

import type { JournalCategory, Post } from './journal-shared';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'journal');

// Server-side only (uses fs). Client components import types/constants from journal-shared.
export { JOURNAL_CATEGORIES } from './journal-shared';
export type { JournalCategory, Post, PostMeta } from './journal-shared';

function localeDir(locale: Locale): string {
  return path.join(CONTENT_DIR, locale);
}

export function getPostSlugs(locale: Locale): string[] {
  const dir = localeDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}

export function getPost(locale: Locale, slug: string): Post | null {
  const dir = localeDir(locale);
  const candidates = [path.join(dir, `${slug}.mdx`), path.join(dir, `${slug}.md`)];
  const file = candidates.find((p) => fs.existsSync(p));
  if (!file) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  // gray-matter parses unquoted YAML dates into Date objects — normalize to YYYY-MM-DD
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date ?? '1970-01-01');
  return {
    slug,
    locale,
    title: data.title ?? slug,
    description: data.description ?? '',
    date,
    category: (data.category as JournalCategory) ?? 'news',
    author: data.author,
    content,
  };
}

export function getAllPosts(locale: Locale): Post[] {
  return getPostSlugs(locale)
    .map((slug) => getPost(locale, slug))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Locales in which a given slug exists (for hreflang alternates). */
export function getPostLocales(slug: string, locales: readonly Locale[]): Locale[] {
  return locales.filter((l) => getPost(l, slug) !== null);
}
