import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { locales, localePath, htmlLang } from '@/lib/i18n';
import { getAllPosts } from '@/lib/journal';

export const dynamic = 'force-static';

const STATIC_PATHS = ['/', '/about', '/classes', '/instructors', '/journal'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_PATHS) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}${localePath(locale, path)}`,
        lastModified: new Date(),
        changeFrequency: path === '/journal' ? 'weekly' : 'monthly',
        priority: path === '/' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [htmlLang[l], `${SITE_URL}${localePath(l, path)}`])
          ),
        },
      });
    }
  }

  for (const locale of locales) {
    for (const post of getAllPosts(locale)) {
      entries.push({
        url: `${SITE_URL}${localePath(locale, `/journal/${post.slug}`)}`,
        lastModified: new Date(post.date),
        changeFrequency: 'yearly',
        priority: 0.6,
      });
    }
  }

  return entries;
}
