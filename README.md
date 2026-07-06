# Mori Pilates 官方網站

全台首創日式整體 × 器械皮拉提斯 — Mori Pilates 官網。

**技術棧**:Next.js 15(App Router,靜態輸出)+ Tailwind CSS v4 + Framer Motion + MDX(Journal)
**語言**:繁體中文(預設,根路徑)、English(`/en`)、日本語(`/ja`)

## 開發

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 靜態輸出到 out/(含 sitemap、robots、lang 修正)
npx serve out    # 本地預覽建置結果
```

## 專案結構

```
src/
  app/(zh)/            # 中文頁面(根路徑 /、/about、/classes …)
  app/[locale]/        # 英文/日文頁面(/en/…、/ja/…)
  app/sitemap.ts       # 自動產生 sitemap.xml(三語 + 所有文章)
  app/robots.ts        # robots.txt
  components/          # UI 元件(Navbar、Footer、MapSection、動畫元件 …)
  components/pages/    # 五大頁面主體(三語共用,吃字典)
  dictionaries/        # 三語文案字典(zh-TW.ts / en.ts / ja.ts)
  lib/                 # site 設定、i18n、SEO helper、journal 讀取
content/journal/       # Journal 文章(.mdx,依語言分資料夾)
public/images/         # 圖片(目前為 placeholder)
scripts/fix-lang.mjs   # build 後修正 /en /ja 的 <html lang>
```

## 如何新增 Journal 文章

在 `content/journal/` 的**三個語言資料夾**各放一個**同名** `.mdx` 檔(檔名即網址 slug):

```
content/journal/zh-TW/my-post.mdx   → /journal/my-post/
content/journal/en/my-post.mdx     → /en/journal/my-post/
content/journal/ja/my-post.mdx     → /ja/journal/my-post/
```

每個檔案開頭需要 frontmatter:

```mdx
---
title: 文章標題
description: 一句話摘要(會用於 SEO meta 與列表頁)
date: 2026-07-07
category: news        # news(最新消息)或 knowledge(皮拉提斯知識)
---

內文支援 Markdown/MDX:標題、清單、表格、連結、引用等。
```

重新 `npm run build` 後,文章會自動出現在列表、sitemap,並帶有 Article JSON-LD 與 hreflang。
(若某語言暫無翻譯,可先只放部分語言;hreflang 會自動只列出存在的版本。)

## 如何替換 Placeholder 照片

照片目前都是品牌色 SVG 佔位圖,位於 `public/images/placeholders/`。替換方式二選一:

1. **同名覆蓋**(最快):把真實照片存成同名檔案(需同為該路徑),或
2. **改路徑**:把照片放進 `public/images/`,再修改對應元件中 `PlaceholderImage` 的 `src`
   (各頁面元件在 `src/components/pages/`,搜尋 `placeholders/` 即可找到所有引用)。

建議尺寸:Hero 2560×1440+、教室照 1200×900、老師照 900×1200(3:4)、OG 圖 1200×630(`public/images/og.svg`)。

## 上線前 checklist

- [ ] 將 `src/lib/site.ts` 的 `SITE_URL` 改為正式網域(影響 canonical/hreflang/sitemap/OG)
- [ ] 替換全部 placeholder 照片與 `public/images/og.svg`
- [ ] 補上真實師資(`src/dictionaries/*.ts` 的 `instructors.list`)

## 部署(Zeabur + Cloudflare)

1. **Zeabur**:連接此 GitHub repo,框架選 Next.js;build 指令 `npm run build`,輸出目錄 `out/`(靜態網站)。
2. **Cloudflare**:網域 DNS 指向 Zeabur,開啟 Proxy(橘雲)即獲得 CDN 與快取;建議 SSL 模式 Full (strict)。
3. push 到 `main` 即自動部署;GitHub Actions 會先跑 build 驗證(`.github/workflows/ci.yml`)。
