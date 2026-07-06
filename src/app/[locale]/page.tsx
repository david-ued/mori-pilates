import { HomePage } from '@/components/pages/HomePage';
import { pageMetadata } from '@/lib/pageMeta';
import type { Locale } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata(locale, 'home');
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <HomePage locale={locale} />;
}
