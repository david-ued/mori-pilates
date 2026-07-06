import type { Locale } from '@/lib/i18n';
import { getDict } from '@/dictionaries';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { FadeUp, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { LineButton } from '@/components/LineButton';

export function InstructorsPage({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.instructors;

  return (
    <>
      <section className="pt-36 pb-14 md:pt-48 md:pb-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeUp>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-mori">{t.kicker}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-5 font-heading text-4xl leading-snug text-ink md:text-5xl">{t.title}</h1>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="mt-6 max-w-2xl leading-8 text-ink-soft">{t.intro}</p>
          </FadeUp>
        </div>
      </section>

      <section aria-label={t.title} className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Stagger className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {t.list.map((person, i) => (
              <StaggerItem key={person.name} as="article" className="group flex flex-col">
                <div className="relative overflow-hidden rounded-2xl">
                  <PlaceholderImage
                    src={`/images/placeholders/instructor-${i + 1}.svg`}
                    alt={`${person.name} — ${person.title}`}
                    label={dict.common.imagePlaceholder}
                    className="aspect-[4/3]"
                    imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                    sizes="(min-width: 768px) 45vw, 100vw"
                  />
                  {/* oversized name, IG-poster style */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-5 top-4 font-heading text-4xl uppercase tracking-[0.18em] text-mori-deep/25 transition-colors duration-700 group-hover:text-mori-deep/45 md:text-5xl"
                  >
                    {person.name}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h2 className="font-heading text-2xl text-ink transition-colors duration-500 group-hover:text-mori-deep">
                    {person.name}
                  </h2>
                  <p className="text-sm tracking-[0.1em] text-mori-deep">{person.title}</p>
                </div>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {person.specialties.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-mori-mist px-3 py-1 text-[11px] tracking-wide text-mori-deep transition-colors duration-500 group-hover:bg-mori group-hover:text-cream"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-sm leading-7 text-ink-soft">{person.bio}</p>

                <div className="mt-5 rounded-xl border border-mori/15 bg-cream-dim/50 p-5">
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.28em] text-ink-soft/70">
                    {t.certsLabel}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {person.certifications.map((c) => (
                      <li key={c} className="flex gap-2.5 text-[13px] leading-6 text-ink-soft">
                        <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-mori" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  {person.languages ? (
                    <p className="mt-4 border-t border-mori/10 pt-3 text-[13px] text-mori-deep">
                      <span className="mr-2 text-[10px] font-medium uppercase tracking-[0.28em] text-ink-soft/70">
                        {t.languagesLabel}
                      </span>
                      {person.languages}
                    </p>
                  ) : null}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={0.1} className="mt-20 rounded-2xl bg-mori-mist/60 px-8 py-10 text-center md:py-12">
            <p className="mx-auto max-w-xl leading-8 text-ink-soft">{t.joinNote}</p>
            <div className="mt-7 flex justify-center">
              <LineButton label={dict.cta.lineTrial} />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
