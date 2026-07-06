import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="font-heading text-sm italic tracking-[0.3em] text-mori">404</p>
      <h1 className="mt-4 font-heading text-2xl text-ink md:text-3xl">找不到頁面|Page not found</h1>
      <p className="mt-4 max-w-md leading-8 text-ink-soft">
        這個頁面可能已被移動或不存在。讓我們回到安靜的地方。
      </p>
      <Link
        href="/"
        className="mt-8 bg-mori px-7 py-3 text-sm text-cream transition-colors duration-500 hover:bg-mori-deep"
      >
        回首頁|Back to home
      </Link>
    </main>
  );
}
