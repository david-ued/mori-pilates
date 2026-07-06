import { ClassesPage } from '@/components/pages/ClassesPage';
import { JsonLd } from '@/components/JsonLd';
import { coursesJsonLd } from '@/lib/seo';
import { pageMetadata } from '@/lib/pageMeta';

export const metadata = pageMetadata('zh-TW', 'classes');

export default function Page() {
  return (
    <>
      <JsonLd data={coursesJsonLd('zh-TW')} />
      <ClassesPage locale="zh-TW" />
    </>
  );
}
