import { JournalIndexPage } from '@/components/pages/JournalIndexPage';
import { pageMetadata } from '@/lib/pageMeta';

export const metadata = pageMetadata('zh-TW', 'journal');

export default function Page() {
  return <JournalIndexPage locale="zh-TW" />;
}
