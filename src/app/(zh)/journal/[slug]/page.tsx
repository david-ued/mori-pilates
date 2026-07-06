import { notFound } from 'next/navigation';
import { JournalPostPage } from '@/components/pages/JournalPostPage';
import { JsonLd } from '@/components/JsonLd';
import { getPost, getPostSlugs, getPostLocales } from '@/lib/journal';
import { articleJsonLd, buildMetadata } from '@/lib/seo';
import { locales } from '@/lib/i18n';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs('zh-TW').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost('zh-TW', slug);
  if (!post) return {};
  return buildMetadata({
    locale: 'zh-TW',
    path: `/journal/${slug}`,
    title: `${post.title}|Mori Pilates`,
    description: post.description,
    availableLocales: getPostLocales(slug, locales),
    ogType: 'article',
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost('zh-TW', slug);
  if (!post) notFound();
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          locale: 'zh-TW',
          slug,
          title: post.title,
          description: post.description,
          date: post.date,
          author: post.author,
        })}
      />
      <JournalPostPage locale="zh-TW" post={post} />
    </>
  );
}
