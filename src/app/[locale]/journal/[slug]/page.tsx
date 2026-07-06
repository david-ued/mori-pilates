import { notFound } from 'next/navigation';
import { JournalPostPage } from '@/components/pages/JournalPostPage';
import { JsonLd } from '@/components/JsonLd';
import { getPost, getPostSlugs, getPostLocales } from '@/lib/journal';
import { articleJsonLd, buildMetadata } from '@/lib/seo';
import { locales, prefixedLocales, type Locale } from '@/lib/i18n';

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.flatMap((locale) =>
    getPostSlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(locale, slug);
  if (!post) return {};
  return buildMetadata({
    locale,
    path: `/journal/${slug}`,
    title: `${post.title}|Mori Pilates`,
    description: post.description,
    availableLocales: getPostLocales(slug, locales),
    ogType: 'article',
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(locale, slug);
  if (!post) notFound();
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          locale,
          slug,
          title: post.title,
          description: post.description,
          date: post.date,
          author: post.author,
        })}
      />
      <JournalPostPage locale={locale} post={post} />
    </>
  );
}
