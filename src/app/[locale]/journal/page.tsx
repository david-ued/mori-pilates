import { JournalIndexPage } from '@/components/pages/JournalIndexPage';
import { pageMetadata } from '@/lib/pageMeta';
import type { Locale } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata(locale, 'journal');
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <JournalIndexPage locale={locale} />;
}
