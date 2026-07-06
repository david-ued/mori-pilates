import { InstructorsPage } from '@/components/pages/InstructorsPage';
import { pageMetadata } from '@/lib/pageMeta';
import type { Locale } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata(locale, 'instructors');
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <InstructorsPage locale={locale} />;
}
