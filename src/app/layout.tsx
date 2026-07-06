import type { Metadata, Viewport } from 'next';
import { Inter, Noto_Sans_TC, Noto_Serif_Display } from 'next/font/google';
import { SITE_URL, BRAND } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Logo wordmark only — rendered extra-condensed via `font-stretch: 62.5%` (.font-logo)
const notoSerifDisplay = Noto_Serif_Display({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-noto-serif-display',
  display: 'swap',
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
      className={`${inter.variable} ${notoSerifDisplay.variable} ${notoSansTC.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
