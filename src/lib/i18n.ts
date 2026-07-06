export const locales = ['zh-TW', 'en', 'ja'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh-TW';

/** Locales that live under a URL prefix (default locale lives at the root). */
export const prefixedLocales = locales.filter((l) => l !== defaultLocale) as Locale[];

export const htmlLang: Record<Locale, string> = {
  'zh-TW': 'zh-Hant-TW',
  en: 'en',
  ja: 'ja',
};

export const localeLabel: Record<Locale, string> = {
  'zh-TW': '中文',
  en: 'EN',
  ja: '日本語',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Build a locale-aware path. zh-TW lives at the root; en/ja are prefixed. */
export function localePath(locale: Locale, path: string = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const joined = `${prefix}${clean === '/' ? (prefix ? '' : '/') : clean}`;
  // trailingSlash: true — keep URLs consistent for hreflang/sitemap
  if (joined === '') return '/';
  return joined.endsWith('/') ? joined : `${joined}/`;
}
