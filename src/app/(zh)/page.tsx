import { HomePage } from '@/components/pages/HomePage';
import { pageMetadata } from '@/lib/pageMeta';

export const metadata = pageMetadata('zh-TW', 'home');

export default function Page() {
  return <HomePage locale="zh-TW" />;
}
