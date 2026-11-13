/*
 * 李明諭個人網站｜公開作品資料
 * 新增教材：複製 materials 中的一組 { ... }，填寫欄位並上傳對應 PDF。
 * 新增文章：複製 articles 中的一組 { ... }。
 * 所有 file、page 路徑皆以網站根目錄為基準，大小寫必須一致。
 * tags 使用陣列，categories 可用 junior / senior / advanced。
 * 未提供的連結請填空字串 ""，不要填入不存在的 PDF。
 */
window.siteContent = {
  materials: [
    {
      id: "triangle-area",
      title: "三角形面積與面積比",
      level: "國三科學班",
      categories: ["junior", "advanced"],
      type: "幾何專題講義",
      symbol: "△",
      date: "2026.09",
      description: "從三角形面積基本公式出發，整理作高、海龍公式、內點切割、等高、等底、全等、相似，並延伸至平面與空間的綜合問題。",
      tags: ["國三", "科學班", "幾何", "面積比"],
      page: "resources/triangle-area/",
      pdf: "resources/triangle-area/triangle-area-student.pdf",
      solution: ""
    }
    // 新教材請加在這裡；前一筆的結尾需要逗號。
  ],
  articles: [
    {
      id: "rule-72",
      number: "001",
      title: "財富加速器：資產翻倍的「72 法則」",
      category: "生活數學 · 複利 · 近似估算",
      date: "2026.10",
      description: "如果一筆資產以固定報酬率成長，大約多久能翻倍？從單利與複利的差異出發，認識 72 法則如何快速估算翻倍時間，並了解它的數學推導、近似誤差與使用限制。",
      tags: ["數學科普", "72 法則", "複利", "理財數學"],
      pdf: "articles/72_rule_final.pdf"
    }
    // 新文章請加在這裡；前一筆的結尾需要逗號。
  ]
};
