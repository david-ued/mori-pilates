import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Montserrat, Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google';
import { SITE_URL, BRAND } from '@/lib/site';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

const notoSerifTC = Noto_Serif_TC({
  weight: ['400', '500', '600'],
  variable: '--font-noto-serif-tc',
  display: 'swap',
  preload: false,
});

const notoSansTC = Noto_Sans_TC({
  weight: ['300', '400', '500'],
  variable: '--font-noto-sans-tc',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.name}|${BRAND.tagline}`,
    template: `%s|${BRAND.name}`,
  },
};

export const viewport: Viewport = {
  themeColor: '#FCFCF0',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Default-locale (zh-TW) pages live at the root; /en and /ja subtrees
    // correct the lang attribute at build time (scripts/fix-lang.mjs) and at runtime.
    <html
      lang="zh-Hant-TW"
      suppressHydrationWarning
      className={`${cormorant.variable} ${montserrat.variable} ${notoSerifTC.variable} ${notoSansTC.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
