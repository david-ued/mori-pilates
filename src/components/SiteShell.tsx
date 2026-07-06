import type { Locale } from '@/lib/i18n';
import { htmlLang } from '@/lib/i18n';
import { getDict } from '@/dictionaries';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingLineCta } from './FloatingLineCta';
import { LangSetter } from './LangSetter';
import { JsonLd } from './JsonLd';
import { localBusinessJsonLd } from '@/lib/seo';

/** Shared chrome for every page: navbar, footer, floating LINE CTA, LocalBusiness JSON-LD. */
export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const dict = getDict(locale);
  return (
    <>
      <LangSetter lang={htmlLang[locale]} />
      <JsonLd data={localBusinessJsonLd()} />
      <Navbar locale={locale} dict={dict} />
      <main>{children}</main>
      <Footer locale={locale} dict={dict} />
      <FloatingLineCta label={dict.cta.floating} />
    </>
  );
}
