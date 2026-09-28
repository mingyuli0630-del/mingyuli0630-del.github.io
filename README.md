# 李明諭個人網站｜V28 多頁版

這一版已改為真正的多頁網站，不再用同一份 HTML 隱藏其他區塊。

## 頁面
- `index.html`：首頁／教學框架／教學經歷／課堂紀錄
- `about.html`：關於我／教學觀／履歷產生器
- `resources.html`：公開教材
- `career.html`：數學教師職涯參考
- `courses.html`：課程與收費
- `404.html`：找不到頁面
- `style.css`：全站共用樣式
- `script.js`：全站共用互動與資料

## GitHub Pages 上傳
把上述檔案放在 repository 根目錄。

網站仍會使用既有圖片檔名：
- `profile.jpg`
- `teaching-01.jpg` ～ `teaching-06.jpg`

如果這些圖片已在 GitHub repository 根目錄，不需要重新上傳。

公開教材仍沿用：`resources/triangle-area/`。若 repository 已有該資料夾，請保留。


V31：取消 about-deck 的 720px 最大寬度限制；桌面版有足夠空間時維持單行，窄螢幕自然換行。


V32：短標語、引言與說明文字取消不必要的固定最大寬度，改為依實際螢幕寬度自然換行；收費頁引言亦取消手動斷行。


## V33 調整
- 首頁改為精簡 landing page：個人主視覺、短版介紹、入口卡片與課堂紀錄。
- 完整教學框架、教學經歷與目前關注移至「關於我」。
- 首頁與關於我的角色明確分工，避免內容重複。


## V37
- 重新設計全站頂部導覽：參考教育網站的清楚左右分區。
- 左側品牌、右側主選單，課程與收費獨立為深色 CTA。
- 目前頁面以淡色底與細線提示，不使用厚重膠囊按鈕。
- 手機版新增可展開選單。


## V38 Responsive layout
- Desktop: 1200px+
- iPad landscape: 1024–1199px
- iPad portrait / small tablet: 768–1023px
- Phone: <=767px
- Very small phone refinements: <=420px

Tables on tablets/phones remain horizontally scrollable rather than compressing text.


## V39
- 將聯絡方式整合至「課程與收費」頁底部，不另增獨立導覽頁。
- 電話：0905-539-601（可直接點擊撥號）
- Gmail：mingyuli0630@gmail.com（可直接點擊寄信）
- 手機／iPad／電腦皆採響應式聯絡卡片。


## V40
- Added Open Graph / Twitter Card metadata to all HTML pages.
- Added `og-cover.png` (1200 × 630) as the social sharing preview image.
- Fixed the course pricing table so it has a dedicated touch horizontal scroller on iPad and phones.
- Added a visible horizontal-swipe hint below the pricing table on screens below 1024px.


## V41 — Editorial Burgundy redesign
- 全站視覺改為米白、炭黑、酒紅的編輯式教育品牌配色。
- Logo 改為酒紅 serif M 字標＋李明諭＋「數學 × 教育 × 教學」。
- 導覽、按鈕、標題、卡片、表格與手機版同步重設。
- 首頁主文案改為「用數學，陪學生走好每一步學習路。」並加入家教課程／公開教材／教師職涯參考三個入口。
- 保留 V40 Open Graph 與課程表格左右滑動修正。


## V42
- 調整「關於我」頁面開場文字，使語氣更正式、凝練。


## V43 真正可用的 Open Graph
- 修正先前 og-cover.png 為 0 bytes 的問題。
- 新增實際 1200×630 PNG：og-cover-v43.png。
- 全站 og:image / twitter:image 改指向新檔名以避開社群平台舊快取。
- 補上 og:image:secure_url 與 og:image:type。


## V44
- Move canonical / Open Graph / Twitter Card metadata to the beginning of `<head>`, immediately after the page description.
- Use `og-cover-v44.png` to avoid stale social-preview image caches.
- Validate all six HTML pages contain exactly one OG metadata set.


## V45
- 修正手機版導覽列「課程與收費」按鈕被早期 media query 隱藏的問題。
- 767px 以下強制保留 CTA；420px 以下縮小按鈕並隱藏箭頭，避免擠壓品牌與選單按鈕。


## V46 — Front-end cleanup & QA
- Consolidated each page to one CSS block and one responsive system.
- Removed accumulated V38/V41/V45 media-query conflicts.
- Course CTA remains visible on phone, tablet and desktop.
- Preserved self-contained HTML previews while also mirroring shared CSS/JS.
- Kept dedicated horizontal scrolling for tuition/career tables.
- Moved/kept OG metadata near the top of `<head>` and bumped image to `og-cover-v46.png`.
- Restored `favicon.svg` to the deployment package.
- Added image loading/decoding hints and mobile overflow safeguards.

## V47 — About content revision
- Reworked About page for consistency, tone, and completeness.
- Clarified the role of grades: not the goal of education, but a practical requirement when tied to a student's chosen path.
- Added first-learning pacing, context → concept → problem solving → summary, and teacher–student mutual adjustment.
- Added a clearer teaching-experience arc and current material-development goals.
- Preserved the three-chapter structure and baseball section; no fourth "teaching practice" chapter was added.
