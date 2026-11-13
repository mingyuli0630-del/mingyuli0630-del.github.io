/* 公開作品呈現邏輯；日後只需要編輯 content.js，不必修改這個檔案。 */
(() => {
  "use strict";
  const content = window.siteContent || { materials: [], articles: [] };
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  const safeLink = value => {
    const url = String(value || "").trim();
    if (!url || /^(?:[a-z]+:|\/\/)/i.test(url) || url.includes("..") || url.startsWith("/")) return "";
    return esc(url);
  };
  // Homepage: combine both content types, newest first; never fabricate placeholders.
  const latestGrid = document.getElementById("latestWorksGrid");
  if (latestGrid) {
    const dateKey = value => {
      // Accept YYYY.MM, YYYY-MM or YYYY-MM-DD; unknown dates sort last.
      const match = String(value || "").match(/^(\d{4})[.\/-](\d{1,2})(?:[.\/-](\d{1,2}))?/);
      return match ? Number(match[1]) * 10000 + Number(match[2]) * 100 + Number(match[3] || 0) : 0;
    };
    const entries = [
      ...(content.materials || []).map((item, order) => ({...item, kind: "教材", order, href: item.page || item.pdf, action: "查看教材"})),
      ...(content.articles || []).map((item, order) => ({...item, kind: "科普文章", order, href: item.pdf, action: "閱讀文章"}))
    ].filter(item => safeLink(item.href));
    entries.sort((a, b) => dateKey(b.date) - dateKey(a.date) || a.kind.localeCompare(b.kind, "zh-Hant") || a.order - b.order);
    latestGrid.innerHTML = entries.slice(0, 3).map(item => `
      <article class="home-work-card">
        <div class="home-work-meta"><span>${esc(item.kind)}${item.level ? " · " + esc(item.level) : ""}</span><time>${esc(item.date || "")}</time></div>
        <h3>${esc(item.title)}</h3><p>${esc(item.description || "")}</p>
        <a href="${safeLink(item.href)}" ${item.href.toLowerCase().endsWith(".pdf") ? 'target="_blank" rel="noopener"' : ""}>${esc(item.action)} →</a>
      </article>`).join("") || '<p class="home-latest-empty">公開作品整理中，歡迎稍後再來。</p>';
  }
  const materialGrid = document.getElementById("resourceGrid");
  if (materialGrid) {
    const search = document.getElementById("resourceSearch");
    const filterButtons = [...document.querySelectorAll("#resourceFilters .filter-btn")];
    let active = "all";
    const render = () => {
      const q = (search?.value || "").trim().toLocaleLowerCase();
      const items = (content.materials || []).filter(item => {
        const inCategory = active === "all" || (item.categories || []).includes(active);
        const haystack = [item.title, item.level, item.type, item.description, ...(item.tags || [])].join(" ").toLocaleLowerCase();
        return inCategory && (!q || haystack.includes(q));
      });
      materialGrid.innerHTML = items.map(item => {
        const page = safeLink(item.page), pdf = safeLink(item.pdf), solution = safeLink(item.solution);
        const primary = page || pdf;
        return `<article class="resource-card"><div class="resource-cover"><span class="level">${esc(item.level)}</span><span class="symbol">${esc(item.symbol || "∑")}</span></div><div class="resource-body"><div class="resource-meta"><span>${esc(item.type)}</span><span>${esc(item.date)}</span></div><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><div class="resource-tags">${(item.tags || []).map(t => `<span class="resource-tag">${esc(t)}</span>`).join("")}</div><div class="resource-actions">${primary ? `<a class="resource-link primary" href="${primary}" ${page ? "" : 'target="_blank" rel="noopener"'}>${page ? "查看教材" : "閱讀教材"}</a>` : ""}${pdf ? `<a class="resource-link" href="${pdf}" target="_blank" rel="noopener">學生版 PDF ↗</a>` : ""}${solution ? `<a class="resource-link" href="${solution}" target="_blank" rel="noopener">詳解版 ↗</a>` : ""}</div></div></article>`;
      }).join("") || '<p class="catalog-empty">目前沒有符合條件的教材，請試試其他關鍵字。</p>';
      const count = document.getElementById("resourceCount");
      if (count) count.textContent = `目前顯示 ${items.length} 份教材`;
    };
    search?.addEventListener("input", render);
    filterButtons.forEach(btn => btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active"); active = btn.dataset.filter || "all"; render();
    }));
    render();
  }
  const articleList = document.getElementById("scienceArticleList");
  if (articleList) {
    const search = document.getElementById("scienceSearch");
    const render = () => {
      const q = (search?.value || "").trim().toLocaleLowerCase();
      const items = (content.articles || []).filter(item => [item.title,item.category,item.description,...(item.tags || [])].join(" ").toLocaleLowerCase().includes(q));
      articleList.innerHTML = items.map((item, i) => {
        const pdf = safeLink(item.pdf);
        return `<article class="science-article"><div class="science-article-no">ARTICLE ${esc(item.number || String(i+1).padStart(3,"0"))} <span>${esc(item.date)}</span></div><div><p class="eyebrow">${esc(item.category)}</p><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p><div class="science-tags">${(item.tags || []).map(t => `<span>${esc(t)}</span>`).join("")}</div><div class="science-actions">${pdf ? `<a class="science-primary" href="${pdf}" rel="noopener" target="_blank">閱讀完整文章 ↗</a><a href="${pdf}" download>下載 PDF ↓</a>` : '<span>文章即將公開</span>'}</div></div></article>`;
      }).join("") || '<p class="catalog-empty">目前沒有符合條件的文章。</p>';
      const count = document.getElementById("scienceCount");
      if (count) count.textContent = `目前收錄 ${content.articles.length} 篇文章`;
    };
    search?.addEventListener("input", render);
    render();
  }
})();
