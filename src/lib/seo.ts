import type { Metadata } from 'next';
import { SITE_URL, BRAND, LINE_URL, GOOGLE_MAPS_LINK } from '@/lib/site';
import { locales, localePath, htmlLang, type Locale } from '@/lib/i18n';

const OG_LOCALE: Record<Locale, string> = {
  'zh-TW': 'zh_TW',
  en: 'en_US',
  ja: 'ja_JP',
};

/**
 * Build page metadata with canonical + hreflang alternates across all locales.
 * `path` is the locale-less path, e.g. '/about'.
 */
export function buildMetadata(opts: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  availableLocales?: readonly Locale[];
  ogType?: 'website' | 'article';
}): Metadata {
  const { locale, path, title, description, ogType = 'website' } = opts;
  const available = opts.availableLocales ?? locales;
  const canonical = `${SITE_URL}${localePath(locale, path)}`;

  const languages: Record<string, string> = {};
  for (const l of available) {
    languages[htmlLang[l]] = `${SITE_URL}${localePath(l, path)}`;
  }
  if (available.includes('zh-TW')) {
    languages['x-default'] = `${SITE_URL}${localePath('zh-TW', path)}`;
  }

  return {
    title: { absolute: title },
    description,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: BRAND.name,
      locale: OG_LOCALE[locale],
      type: ogType,
      images: [{ url: `${SITE_URL}/images/og.svg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

/** LocalBusiness JSON-LD — phone intentionally omitted; contact goes to LINE. */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['HealthClub', 'LocalBusiness'],
    name: BRAND.name,
    alternateName: '森皮拉提斯',
    description:
      '全台首創日式整體×器械皮拉提斯。私人全器械課程、精緻小班團體課程,專注功能性恢復。',
    slogan: BRAND.tagline,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/mori-logo-green.png`,
    image: `${SITE_URL}/images/og.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '金山南路二段2號8樓',
      addressLocality: '大安區',
      addressRegion: '臺北市',
      postalCode: '106',
      addressCountry: 'TW',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BRAND.geo.lat,
      longitude: BRAND.geo.lng,
    },
    hasMap: GOOGLE_MAPS_LINK,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'reservations',
      url: LINE_URL,
    },
    sameAs: [LINE_URL],
    priceRange: 'NT$600 - NT$57,600',
  };
}

export function coursesJsonLd(locale: Locale) {
  const courses = [
    {
      name:
        locale === 'ja'
          ? 'プライベートピラティス 1:1'
          : locale === 'en'
            ? 'Private Pilates 1:1'
            : '私人皮拉提斯課程 1:1',
      description:
        locale === 'ja'
          ? 'フルマシンを使用した完全オーダーメイドのプライベートレッスン(60分)。'
          : locale === 'en'
            ? 'Fully tailored private sessions on the complete Pilates apparatus (60 min).'
            : '使用全套器械、完全量身設計的私人課程(60 分鐘)。',
      price: '2000',
    },
    {
      name:
        locale === 'ja'
          ? 'デュエットピラティス 1:2'
          : locale === 'en'
            ? 'Duet Pilates 1:2'
            : '雙人皮拉提斯課程 1:2',
      description:
        locale === 'ja'
          ? '2名少人数制のマシンピラティスレッスン(60分)。'
          : locale === 'en'
            ? 'Semi-private machine Pilates for two (60 min).'
            : '兩人小班器械皮拉提斯課程(60 分鐘)。',
      price: '2600',
    },
    {
      name:
        locale === 'ja'
          ? 'トリオピラティス 1:3'
          : locale === 'en'
            ? 'Trio Pilates 1:3'
            : '三人皮拉提斯課程 1:3',
      description:
        locale === 'ja'
          ? '3名少人数制のマシンピラティスレッスン(60分)。'
          : locale === 'en'
            ? 'Small-group machine Pilates for three (60 min).'
            : '三人小班器械皮拉提斯課程(60 分鐘)。',
      price: '3000',
    },
    {
      name:
        locale === 'ja' ? '日式整体' : locale === 'en' ? 'Japanese Seitai' : '日式整體',
      description:
        locale === 'ja'
          ? '骨格と筋膜をやさしく整える手技療法(20〜60分)。'
          : locale === 'en'
            ? 'Gentle hands-on bodywork realigning frame and fascia (20–60 min).'
            : '溫和調整骨架與筋膜的徒手整復(20-60 分鐘)。',
      price: '600',
    },
  ];

  return courses.map((c) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: c.name,
    description: c.description,
    provider: {
      '@type': 'Organization',
      name: BRAND.name,
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      price: c.price,
      priceCurrency: 'TWD',
      availability: 'https://schema.org/InStock',
      url: LINE_URL,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Onsite',
      location: {
        '@type': 'Place',
        name: BRAND.name,
        address: BRAND.addressZh,
      },
    },
  }));
}

export function articleJsonLd(opts: {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    inLanguage: htmlLang[opts.locale],
    author: {
      '@type': 'Organization',
      name: opts.author ?? BRAND.name,
    },
    publisher: {
      '@type': 'Organization',
      name: BRAND.name,
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}${localePath(opts.locale, `/journal/${opts.slug}`)}`,
    image: `${SITE_URL}/images/og.svg`,
  };
}
