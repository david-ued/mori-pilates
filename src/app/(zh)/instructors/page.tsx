import { InstructorsPage } from '@/components/pages/InstructorsPage';
import { pageMetadata } from '@/lib/pageMeta';

export const metadata = pageMetadata('zh-TW', 'instructors');

export default function Page() {
  return <InstructorsPage locale="zh-TW" />;
}
