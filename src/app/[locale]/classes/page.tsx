import { ClassesPage } from '@/components/pages/ClassesPage';
import { JsonLd } from '@/components/JsonLd';
import { coursesJsonLd } from '@/lib/seo';
import { pageMetadata } from '@/lib/pageMeta';
import type { Locale } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return pageMetadata(locale, 'classes');
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <>
      <JsonLd data={coursesJsonLd(locale)} />
      <ClassesPage locale={locale} />
    </>
  );
}
