import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/SiteShell';
import { prefixedLocales, isLocale } from '@/lib/i18n';

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

/** Prefixed-locale tree (/en, /ja). */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'zh-TW') notFound();
  return <SiteShell locale={locale}>{children}</SiteShell>;
}
