import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localePath } from '@/lib/i18n';
import { getDict } from '@/dictionaries';
import { LineButton } from '@/components/LineButton';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { HeroReveal, FadeUp, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { Parallax } from '@/components/motion/Parallax';

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.home;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative flex min-h-svh items-end overflow-hidden">
        <PlaceholderImage
          src="/images/photos/hero.jpg"
          alt="Mori Pilates studio — ladder barrel stretch"
          priority
          className="absolute inset-0"
          sizes="100vw"
        />
        {/* soft veil so type stays readable on any future photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/35 to-cream/10" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-40 md:px-8 md:pb-32">
          <HeroReveal delay={0.3}>
            <p className="font-heading text-sm italic tracking-[0.32em] text-mori-deep md:text-base">
              {dict.hero.tagline}
            </p>
          </HeroReveal>
          <HeroReveal delay={0.55}>
            <h1 className="text-balance-cjk mt-6 max-w-3xl font-heading text-3xl leading-[1.65] text-ink md:text-4xl md:leading-[1.6]">
              {dict.hero.philosophy}
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.85}>
            <p className="mt-7 max-w-2xl text-sm leading-7 tracking-[0.06em] text-ink-soft md:text-base">
              {dict.hero.slogan}
            </p>
          </HeroReveal>
          <HeroReveal delay={1.1}>
            <div className="mt-10">
              <LineButton label={dict.hero.cta} size="lg" />
            </div>
          </HeroReveal>
        </div>

        {/* scroll hint */}
        <HeroReveal delay={1.5} className="absolute bottom-8 right-6 z-10 hidden md:block">
          <div className="flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ink-soft">
            <span style={{ writingMode: 'vertical-rl' }}>{dict.hero.scroll}</span>
            <span className="relative h-14 w-px overflow-hidden bg-ink/15">
              <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrolldrip_2.2s_ease-in-out_infinite] bg-mori" />
            </span>
          </div>
        </HeroReveal>
      </section>

      {/* ---------- About snippet ---------- */}
      <section aria-labelledby="home-about" className="py-24 md:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-8">
          <Parallax amount={70} className="order-2 md:order-1">
            <FadeUp>
              <PlaceholderImage
                src="/images/photos/stretch-portrait.jpg"
                alt="Reformer side stretch at Mori Pilates"
                className="aspect-[4/5] shadow-[0_30px_60px_-38px_rgba(36,33,33,0.5)]"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </FadeUp>
          </Parallax>
          <div className="order-1 md:order-2">
            <FadeUp>
              <p className="text-xs font-medium uppercase tracking-[0.34em] text-mori">{t.aboutKicker}</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 id="home-about" className="text-balance-cjk mt-5 font-heading text-2xl leading-snug text-ink md:text-3xl">
                {t.aboutTitle}
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-7 leading-9 text-ink-soft">{t.aboutBody}</p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <Link
                href={localePath(locale, '/about')}
                className="group mt-9 inline-flex items-center gap-3 text-sm tracking-[0.14em] text-mori-deep"
              >
                <span className="border-b border-mori/40 pb-1 transition-colors duration-500 group-hover:border-mori">
                  {t.aboutCta}
                </span>
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section aria-labelledby="home-services" className="bg-mori-mist/50 py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeUp>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-mori">{t.servicesKicker}</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 id="home-services" className="text-balance-cjk mt-5 max-w-2xl font-heading text-2xl leading-snug text-ink md:text-3xl">
              {t.servicesTitle}
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="mt-6 max-w-2xl leading-8 text-ink-soft">{t.servicesBody}</p>
          </FadeUp>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {t.services.map((s, i) => (
              <StaggerItem
                key={s.title}
                as="article"
                className="group rounded-2xl border border-mori/15 bg-cream p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-mori/40 hover:shadow-[0_24px_50px_-28px_rgba(87,128,92,0.55)]"
              >
                <span className="font-heading text-lg italic tracking-[0.2em] text-mori/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-medium text-mori-deep">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{s.body}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={0.1} className="mt-12">
            <Link
              href={localePath(locale, '/classes')}
              className="group inline-flex items-center gap-3 text-sm tracking-[0.14em] text-mori-deep"
            >
              <span className="border-b border-mori/40 pb-1 transition-colors duration-500 group-hover:border-mori">
                {t.servicesCta}
              </span>
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ---------- Proof ---------- */}
      <section aria-labelledby="home-proof" className="py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeUp>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-mori">{t.proofKicker}</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 id="home-proof" className="text-balance-cjk mt-5 font-heading text-2xl leading-snug text-ink md:text-3xl">
              {t.proofTitle}
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="mt-6 max-w-2xl leading-8 text-ink-soft">{t.proofBody}</p>
          </FadeUp>

          <div className="mt-14 max-w-4xl">
            <Parallax amount={50}>
              <FadeUp>
                <figure>
                  <PlaceholderImage
                    src="/images/placeholders/before-after.svg"
                    alt="Before and after — functional recovery results"
                    label={dict.common.imagePlaceholder}
                    className="aspect-[14/9] shadow-[0_30px_60px_-38px_rgba(36,33,33,0.5)]"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                  <figcaption className="mt-3 text-xs tracking-wide text-ink-soft/80">
                    {t.beforeAfterNote}
                  </figcaption>
                </figure>
              </FadeUp>
            </Parallax>
          </div>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section aria-labelledby="home-cta" className="relative overflow-hidden bg-mori py-28 md:py-36">
        <div aria-hidden className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-cream/15" />
        <div aria-hidden className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full border border-cream/10" />
        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-8">
          <FadeUp>
            <h2 id="home-cta" className="text-balance-cjk font-heading text-2xl leading-snug text-cream md:text-3xl">
              {t.finalCtaTitle}
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-6 leading-8 text-cream/80">{t.finalCtaBody}</p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="mt-10 flex justify-center">
              <LineButton
                label={dict.cta.lineTrial}
                size="lg"
                className="!bg-cream !text-mori-deep hover:!bg-cream-dim hover:!text-mori-deep"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
