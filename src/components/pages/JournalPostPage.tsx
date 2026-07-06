import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import type { Locale } from '@/lib/i18n';
import { localePath, htmlLang } from '@/lib/i18n';
import { getDict } from '@/dictionaries';
import type { Post } from '@/lib/journal';
import { FadeUp } from '@/components/motion/Reveal';
import { LineButton } from '@/components/LineButton';

function formatDate(date: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(htmlLang[locale], { dateStyle: 'long' }).format(
      new Date(`${date}T00:00:00`)
    );
  } catch {
    return date;
  }
}

export function JournalPostPage({ locale, post }: { locale: Locale; post: Post }) {
  const dict = getDict(locale);
  const t = dict.journal;

  return (
    <article className="pt-36 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <FadeUp>
          <Link
            href={localePath(locale, '/journal')}
            className="group inline-flex items-center gap-2 text-xs tracking-[0.16em] text-mori-deep"
          >
            <span aria-hidden className="transition-transform duration-500 group-hover:-translate-x-1">←</span>
            <span className="border-b border-mori/30 pb-0.5">{t.backToList}</span>
          </Link>
        </FadeUp>

        <FadeUp delay={0.08}>
          <header className="mt-8">
            <div className="flex items-center gap-3 text-[11px] tracking-[0.14em]">
              <span className="rounded-full bg-mori-mist px-3 py-1 text-mori-deep">
                {t.categories[post.category]}
              </span>
              <time dateTime={post.date} className="text-ink-soft/70">
                {formatDate(post.date, locale)}
              </time>
            </div>
            <h1 className="text-balance-cjk mt-5 font-heading text-3xl leading-snug text-ink md:text-4xl md:leading-[1.4]">
              {post.title}
            </h1>
            {post.description ? (
              <p className="mt-4 leading-8 text-ink-soft">{post.description}</p>
            ) : null}
          </header>
        </FadeUp>

        <FadeUp delay={0.16}>
          <hr className="mt-10 border-mori/15" />
          <div className="prose-mori mt-10">
            <MDXRemote
              source={post.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <footer className="mt-16 rounded-2xl bg-mori-mist/60 px-8 py-10 text-center">
            <p className="font-heading text-lg text-mori-deep">{dict.home.finalCtaTitle}</p>
            <div className="mt-6 flex justify-center">
              <LineButton label={dict.cta.lineTrial} />
            </div>
          </footer>
        </FadeUp>
      </div>
    </article>
  );
}
