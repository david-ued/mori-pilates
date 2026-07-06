import { AboutPage } from '@/components/pages/AboutPage';
import { pageMetadata } from '@/lib/pageMeta';

export const metadata = pageMetadata('zh-TW', 'about');

export default function Page() {
  return <AboutPage locale="zh-TW" />;
}
