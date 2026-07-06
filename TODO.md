# Mori Pilates 開發 TODO

> 依據 PRD 開發,語言為 **zh-TW / en / ja**(韓文已改為日文)。
> 照片先以 placeholder 呈現,待正式照片提供後替換(見下方「待補素材」)。

## 進度總覽

### Phase 1 — 專案初始化 ✅
- [x] Next.js 15 (App Router) + TypeScript + 靜態輸出 (`output: 'export'`)
- [x] Tailwind CSS v4 + 品牌色變數 (`#57805C` / `#FCFCF0` / `#242121`)
- [x] Framer Motion 安裝
- [x] 字型設定(標題:Cormorant Garamond + Noto Serif TC;內文:Montserrat + Noto Sans TC;日文以系統字型 fallback)
- [x] i18n 路由(zh-TW 在根路徑;`/en`、`/ja` 有前綴)+ 三語字典 (`src/dictionaries/`)

### Phase 2 — 全站 Layout ✅
- [x] Navbar(語言切換、捲動變色、進場動畫、手機選單)
- [x] Footer(地址、LINE、網站導覽)
- [x] Floating LINE CTA(捲動後浮現,hover 展開文字)
- [x] 動畫元件庫(FadeUp / Stagger / Parallax / HeroReveal / 頁面轉場 template)

### Phase 3 — 頁面開發 ✅
- [x] Home(全螢幕 Hero + 核心文案動畫 + About/Services/見證/Before-After/CTA)
- [x] About(品牌故事、理念、**自製 SVG 導引地圖 + Google Maps 嵌入 + 四項交通指引**、教室規則三卡)
- [x] Classes(皮拉提斯 3 方案 + 日式整體 3 方案,每卡片附 LINE CTA、16 堂 highlight、整體折 $100 說明)
- [x] Instructors(**真實四位師資 Tidus / Ivy / Claire / Aaron**,2×2 卡片、IG 海報式大名字、專長 tags、證照清單、授課語言,三語同步)
- [x] Journal(MDX 部落格,三語 × 4 篇範例文章,分類:最新消息/知識分享/人物專訪 + 分類 filter)

### Phase 4 — SEO ✅
- [x] 每頁動態 Meta(title / description / OG / Twitter)
- [x] hreflang alternate links(zh-Hant-TW / en / ja / x-default)
- [x] JSON-LD:LocalBusiness(全站)、Course ×4(Classes)、Article(每篇文章)
- [x] sitemap.xml(24 條,含三語與所有文章)+ robots.txt
- [x] `<html lang>` 修正(build 後 scripts/fix-lang.mjs 改寫 /en /ja)
- [x] 語意化 HTML(header/main/section/article/h1-h6)

### Phase 5 — 收尾 ✅
- [x] `npm run build` 通過:29 頁全靜態輸出
- [x] README(新增文章教學、照片替換教學、Zeabur + Cloudflare 部署)
- [x] CI(GitHub Actions:push/PR 自動 build 驗證)
- [ ] git commit + push(待確認後執行)

## 素材狀態
已上線的真實素材(來源 `public/assets/`,壓縮版在 `public/images/photos/`):
- [x] Hero 主視覺 → `photos/hero.jpg`(Ladder Barrel 鏡像照)
- [x] 首頁 About 直式照 → `photos/stretch-portrait.jpg`
- [x] About 品牌故事照 → `photos/cadillac.jpg`(窗邊 Cadillac 剪影)
- [x] About 教室區塊 → `photos/teaching.jpg`(一對一教學)+ `photos/forest-walk.jpg`(品牌情境)
- [x] Classes 皮拉提斯照 → `photos/reformer.jpg`
- [x] Logo(綠/白)→ Navbar 與 Footer(`/assets/mori-logo-*.png`);綠色 logo 另產生 favicon(`src/app/icon.png`,256×256 奶油底)並補 JSON-LD LocalBusiness 的 logo 欄位

仍為 placeholder,待補:
- [ ] 老師個人照 ×4(instructor-1~4.svg;IG 海報上的個人照若有原檔可直接換)
- [ ] 功能性恢復 Before/After 照(before-after.svg)
- [ ] 日式整體情境照(seitai.svg)
- [ ] Journal 三分類封面照(journal-news / knowledge / interview.svg)
- [ ] OG 分享圖 1200×630(`public/images/og.svg`,建議用 hero 照 + logo 重做)

## 待確認事項
- [ ] 正式網域:上線前修改 `src/lib/site.ts` 的 `SITE_URL`(現為 `https://moripilates.com`)
- [ ] 英/日文文案是否需母語者潤稿(目前為初稿)
- [ ] 見證(testimonials)目前為示意文案,需換成真實學員回饋
- [x] 交通指引:已依 IG 官方資訊確認為「東門站 3 號出口・步行約 2 分鐘」(字典與自製地圖已同步)
- [ ] PRD 指定 Nextra:因需與全站 `[locale]` 靜態輸出路由、品牌視覺完全整合,Journal 改以「MDX 檔案 + next-mdx-remote」實作(內容管理方式相同:資料夾放 .mdx 即發佈)。若仍堅持 Nextra 可再遷移。

## 更新紀錄
- 2026-07-07:專案啟動,建立 TODO。
- 2026-07-07:全站完成(5 頁 × 3 語 + 3 篇文章 = 29 靜態頁),build 通過,SEO 產物驗證完成。
- 2026-07-07:About 頁依官方品牌文案優化——品牌故事加入 logo 意象(山=樹組成的森林、葉子的守護),新增「一對一獨立教室 Private Studio」區塊(三語同步,含結語「專注在身體,讓心也一起安靜下來」)。
- 2026-07-07:Journal 新增分類 filter(全部/最新消息/知識分享/人物專訪),分類新增 interview、zh 的 knowledge 改名「知識分享」;新增三語人物專訪範例文章(interview-tidus)與 journal-interview.svg placeholder,build 通過(32 靜態頁)。
- 2026-07-07:師資頁依 IG 官方貼文改為真實四位老師(Tidus/Ivy/Claire/Aaron):三語簡介、專長 tags、完整證照清單(STOTT/Polestar/ACE/Cube/Oov 等)、授課語言(Ivy 中英;Claire 中英日韓);Claire 職稱含日式整體師;師資頁 meta 加入老師名字。步行時間依 IG 修正為 2 分鐘。JournalGrid 抽出 client-safe 的 journal-shared.ts 修復 fs 打包錯誤;production build 改可用 NEXT_DIST_DIR 隔離,避免與 dev server 互相寫壞 .next。真實照片(hero/cadillac/teaching/reformer/stretch)與 logo 已接入各版位。
