import { SiteShell } from '@/components/SiteShell';

/** Default locale (zh-TW) tree — served at the site root. */
export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="zh-TW">{children}</SiteShell>;
}
