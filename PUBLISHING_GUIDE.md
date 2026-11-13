# 新增公開教材與數學科普文章｜操作說明

## 只要記住兩個檔案

- `content.js`：所有教材與科普文章的資料清單。**每次新增作品只要修改這個檔案。**
- `catalog.js`：負責搜尋、篩選與產生卡片。一般不需要修改。

## A. 新增一份公開教材

1. 在 GitHub 進入 `resources/`，例如新增 `resources/senior-high/am-gm.pdf`（先建立資料夾再上傳，或在 Add file → Create new file 的檔名輸入 `resources/senior-high/README.md` 以建立路徑）。
2. 開啟根目錄 `content.js`，點右上角編輯圖示。
3. 在 `materials: [ ... ]` 裡複製一組現有教材資料，**前一組結尾加逗號**，改成新講義資料，例如：

```js
{
  id: "am-gm",
  title: "算幾不等式專題",
  level: "高中數學",
  categories: ["senior", "advanced"],
  type: "專題講義",
  symbol: "≥",
  date: "2026.11",
  description: "從算幾不等式的證明、等號條件到進階應用。",
  tags: ["高中", "不等式", "AM-GM"],
  page: "", // 沒有獨立教材頁就留空
  pdf: "resources/senior-high/am-gm.pdf",
  solution: "" // 沒有詳解 PDF 就留空
}
```

4. 按 **Commit changes**，到 `resources.html` 就能看到新卡片。

**categories 可選**：`junior`（國中）、`senior`（高中）、`advanced`（進階）；可填多個。`all` 會自動顯示全部。

## B. 新增一篇科普文章

1. 將 PDF 上傳到 `articles/`，例如 `articles/history-of-logarithms.pdf`。
2. 在 `content.js` 的 `articles: [ ... ]` 中複製一組文章資料，修改：

```js
{
  id: "history-of-logarithms",
  number: "002",
  title: "對數的歷史與計算尺",
  category: "數學史 · 計算工具",
  date: "2026.11",
  description: "從計算需求出發，認識對數與計算尺的發展。",
  tags: ["數學史", "對數", "計算尺"],
  pdf: "articles/history-of-logarithms.pdf"
}
```

3. 按 **Commit changes**，到 `science.html` 即可看到新文章。

## 重要提醒

- PDF 檔案與 `content.js` 的 `pdf` 路徑必須一致，英文大小寫也要一致。
- 上傳 PDF **不會自動產生卡片**；需同步在 `content.js` 新增資料。
- `content.js`、`catalog.js`、`resources.html`、`science.html` 必須放在網站根目錄。
- `content.js` 使用 JavaScript 陣列，不是 JSON；注意英文逗號、引號與括號。
- 不要刪除 `profile.jpg`、`teaching-01.jpg` 至 `teaching-06.jpg` 或原有 `resources/triangle-area/`。
- 網站目前是靜態 GitHub Pages，沒有登入式後台；但不必再逐頁修改 HTML。
- 若要在首頁額外展示「最新文章」，那屬於下一階段功能，本版先讓教材與科普頁由同一資料來源管理。


## 首頁最新公開作品（V54）

首頁的「最新公開作品」會自動讀取同一份 `content.js`，合併 `materials` 與 `articles`，依 `date` 從新到舊顯示最多 3 筆。**不需要修改 `index.html`**。

- 日期建議統一填 `YYYY.MM`，例如 `2026.11`；若同月需區分先後，可使用 `YYYY.MM.DD`。
- 目前只有 1 份講義、1 篇文章，因此首頁會顯示 2 筆；新增第 3 筆後自動變成 3 筆。
- 新作品請填入實際存在的 `page` 或 `pdf` 路徑。沒有可用連結的作品不會出現在首頁。
- 如果更改了 `content.js` 但首頁沒有更新，請確認檔案已提交到 GitHub 根目錄，再強制重新整理瀏覽器。
- `index.html`、`resources.html`、`science.html` 都需要能載入 `content.js` 與 `catalog.js`；不要在上傳時漏掉這兩個檔案。
