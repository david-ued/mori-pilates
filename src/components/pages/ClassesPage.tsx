import type { Locale } from '@/lib/i18n';
import { getDict } from '@/dictionaries';
import type { ClassPlan } from '@/dictionaries/types';
import { LineButton } from '@/components/LineButton';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { FadeUp, Stagger, StaggerItem } from '@/components/motion/Reveal';

function PlanCard({ plan }: { plan: ClassPlan }) {
  return (
    <StaggerItem
      as="article"
      className="border border-mori/15 bg-cream p-8 transition-all duration-500 hover:border-mori/40"
    >
      <p className="font-heading text-sm italic tracking-[0.24em] text-mori/70">{plan.subtitle}</p>
      <h4 className="mt-2 text-xl font-medium text-ink">{plan.name}</h4>
      <p className="mt-3 text-sm leading-7 text-ink-soft">{plan.description}</p>
    </StaggerItem>
  );
}

/** One consolidated price table per category, instead of prices on every card. */
function PriceTable({
  plans,
  title,
  planLabel,
}: {
  plans: ClassPlan[];
  title: string;
  planLabel: string;
}) {
  const tierLabels = plans[0]?.tiers.map((t) => t.label) ?? [];
  return (
    <div>
      <h3 className="font-heading text-xl text-mori-deep">{title}</h3>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[540px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-mori/30 text-left">
              <th scope="col" className="py-3 pr-6 font-medium tracking-wide text-mori-deep">
                {planLabel}
              </th>
              {tierLabels.map((l) => (
                <th key={l} scope="col" className="py-3 pr-6 font-medium tracking-wide text-mori-deep">
                  {l}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plans.map((p) => (
              <tr key={p.name} className="border-b border-mori/10">
                <th scope="row" className="py-4 pr-6 text-left font-normal text-ink">
                  {p.name}
                </th>
                {p.tiers.map((tier) => (
                  <td
                    key={tier.label}
                    className={`py-4 pr-6 ${tier.highlight ? 'font-medium text-mori-deep' : 'text-ink'}`}
                  >
                    {tier.price}
                    {tier.note ? (
                      <span className="mt-0.5 block text-[11px] tracking-wide text-ink-soft/70">
                        {tier.note}
                      </span>
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ClassesPage({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.classes;

  return (
    <>
      {/* header */}
      <section className="pt-36 pb-14 md:pt-48 md:pb-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeUp>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-mori">{t.kicker}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-5 font-heading text-3xl leading-snug text-ink md:text-4xl">{t.title}</h1>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="mt-6 max-w-2xl leading-8 text-ink-soft">{t.intro}</p>
          </FadeUp>
          <FadeUp delay={0.26} className="mt-8">
            <LineButton label={t.trialCta} />
          </FadeUp>
        </div>
      </section>

      {/* Category A: Pilates */}
      <section aria-labelledby="classes-pilates" className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-end gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <FadeUp>
                <span className="font-heading text-sm italic tracking-[0.3em] text-mori/70">A</span>
                <h2 id="classes-pilates" className="mt-3 font-heading text-2xl text-ink md:text-3xl">
                  {t.pilates.title}
                </h2>
                <p className="mt-2 text-sm tracking-[0.12em] text-mori-deep">{t.pilates.subtitle}</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-5 max-w-xl leading-8 text-ink-soft">{t.pilates.intro}</p>
              </FadeUp>
            </div>
            <FadeUp delay={0.15}>
              <PlaceholderImage
                src="/images/photos/reformer.jpg"
                alt="Machine Pilates session at Mori"
                className="aspect-[4/3] md:aspect-[16/9]"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </FadeUp>
          </div>

          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.pilates.plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </Stagger>

          <FadeUp delay={0.1} className="mt-14">
            <PriceTable plans={t.pilates.plans} title={t.priceTableTitle} planLabel={t.planLabel} />
          </FadeUp>
          <FadeUp delay={0.15} className="mt-8">
            <LineButton label={t.bookCta} variant="outline" size="sm" />
          </FadeUp>
        </div>
      </section>

      {/* Category B: Seitai */}
      <section aria-labelledby="classes-seitai" className="bg-mori-mist/50 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-end gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <FadeUp>
                <span className="font-heading text-sm italic tracking-[0.3em] text-mori/70">B</span>
                <h2 id="classes-seitai" className="mt-3 font-heading text-2xl text-ink md:text-3xl">
                  {t.seitai.title}
                </h2>
                <p className="mt-2 text-sm tracking-[0.12em] text-mori-deep">{t.seitai.subtitle}</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-5 max-w-xl leading-8 text-ink-soft">{t.seitai.intro}</p>
              </FadeUp>
            </div>
            <FadeUp delay={0.15}>
              <PlaceholderImage
                src="/images/placeholders/seitai.svg"
                alt="Japanese Seitai bodywork at Mori"
                label={dict.common.imagePlaceholder}
                className="aspect-[4/3] md:aspect-[16/9]"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </FadeUp>
          </div>

          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.seitai.plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </Stagger>

          <FadeUp delay={0.1} className="mt-14">
            <PriceTable plans={t.seitai.plans} title={t.priceTableTitle} planLabel={t.planLabel} />
          </FadeUp>
          <FadeUp delay={0.15} className="mt-8">
            <LineButton label={t.bookCta} variant="outline" size="sm" />
          </FadeUp>

          <FadeUp delay={0.1} className="mt-10">
            <p className="border border-mori/25 bg-cream px-6 py-5 text-sm leading-7 text-mori-deep">
              ✳ {t.seitai.discountNote}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* footnote + CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <FadeUp>
            <p className="text-xs tracking-wide text-ink-soft/70">{t.faqNote}</p>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-8 flex justify-center">
            <LineButton label={t.trialCta} size="lg" />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
