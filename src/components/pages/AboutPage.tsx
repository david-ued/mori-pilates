import type { Locale } from '@/lib/i18n';
import { getDict } from '@/dictionaries';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { FadeUp, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { Parallax } from '@/components/motion/Parallax';
import { MapSection } from '@/components/MapSection';
import { LineButton } from '@/components/LineButton';

export function AboutPage({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.about;

  return (
    <>
      {/* header */}
      <section className="pt-36 pb-16 md:pt-48 md:pb-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeUp>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-mori">{t.kicker}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-balance-cjk mt-5 max-w-3xl font-heading text-4xl leading-snug text-ink md:text-5xl md:leading-[1.35]">
              {t.title}
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* story */}
      <section aria-labelledby="about-story" className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1fr_1.1fr] md:gap-20 md:px-8">
          <Parallax amount={70}>
            <FadeUp>
              <PlaceholderImage
                src="/images/photos/cadillac.jpg"
                alt="Inside the Mori Pilates studio — Cadillac by the window"
                className="aspect-[4/3] rounded-2xl shadow-[0_30px_60px_-38px_rgba(36,33,33,0.5)] md:sticky md:top-28"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </FadeUp>
          </Parallax>
          <div>
            <FadeUp>
              <h2 id="about-story" className="font-heading text-3xl text-ink md:text-4xl">
                {t.storyTitle}
              </h2>
            </FadeUp>
            <div className="mt-8 space-y-7">
              {t.storyParagraphs.map((p, i) => (
                <FadeUp key={i} delay={0.06 * i}>
                  <p className={`leading-9 ${i === t.storyParagraphs.length - 1 ? 'font-heading text-lg text-mori-deep' : 'text-ink-soft'}`}>
                    {p}
                  </p>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* studio space */}
      <section aria-labelledby="about-studio" className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeUp>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-mori">{t.studioKicker}</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 id="about-studio" className="mt-5 font-heading text-3xl text-ink md:text-4xl">
              {t.studioTitle}
            </h2>
          </FadeUp>

          <div className="mt-10 grid gap-6 md:grid-cols-[1.5fr_1fr]">
            <Parallax amount={40}>
              <FadeUp>
                <PlaceholderImage
                  src="/images/photos/teaching.jpg"
                  alt="Private one-on-one session at Mori"
                  className="aspect-[16/10] rounded-2xl"
                  sizes="(min-width: 768px) 55vw, 100vw"
                />
              </FadeUp>
            </Parallax>
            <Parallax amount={70}>
              <FadeUp delay={0.1}>
                <PlaceholderImage
                  src="/images/photos/forest-walk.jpg"
                  alt="Barefoot in the grass — the spirit of Mori"
                  className="aspect-[4/5] rounded-2xl md:h-full md:aspect-auto"
                  sizes="(min-width: 768px) 35vw, 100vw"
                />
              </FadeUp>
            </Parallax>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-14">
            {t.studioParagraphs.map((p, i) => (
              <FadeUp key={i} delay={0.06 * i}>
                <p className="leading-9 text-ink-soft">{p}</p>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.15}>
            <p className="mt-10 border-l-2 border-mori/40 pl-6 font-heading text-lg leading-9 text-mori-deep">
              {t.studioClosing}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* values */}
      <section aria-labelledby="about-values" className="bg-mori py-24 text-cream md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeUp>
            <h2 id="about-values" className="font-heading text-3xl md:text-4xl">
              {t.valuesTitle}
            </h2>
          </FadeUp>
          <Stagger className="mt-14 grid gap-10 md:grid-cols-3">
            {t.values.map((v, i) => (
              <StaggerItem key={v.title} className="border-t border-cream/25 pt-7">
                <span className="font-heading text-sm italic tracking-[0.24em] text-cream/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-xl font-medium">{v.title}</h3>
                <p className="mt-3 leading-8 text-cream/75">{v.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* location + custom map + directions */}
      <MapSection locale={locale} dict={dict} />

      {/* studio rules */}
      <section aria-labelledby="about-rules" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeUp>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-mori">{t.rulesKicker}</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 id="about-rules" className="mt-5 font-heading text-3xl text-ink md:text-4xl">
              {t.rulesTitle}
            </h2>
          </FadeUp>

          <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.ruleGroups.map((g) => (
              <StaggerItem
                key={g.title}
                className="rounded-2xl border border-mori/15 bg-cream-dim/50 p-8 transition-all duration-500 hover:border-mori/35"
              >
                <h3 className="font-heading text-xl text-mori-deep">{g.title}</h3>
                <ul className="mt-5 space-y-4">
                  {g.rules.map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-7 text-ink-soft">
                      <span aria-hidden className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-mori" />
                      {r}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={0.1} className="mt-14 flex justify-center">
            <LineButton label={dict.cta.lineContact} variant="outline" />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
