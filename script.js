
/*
  核心概念：
  未來只維護 profileData。
  網站與履歷都從同一份資料生成。
*/
const profileData = {
  experience: [
    {
      period:"2021.09 — PRESENT",
      schoolTerm:"",
      type:"Private Tutoring",
      zhTitle:"個別家教",
      enTitle:"Private Mathematics Tutoring",
      zhRole:"國小至高中數學",
      enRole:"Elementary to Senior High School Mathematics",
      zh:"2021 年起持續從事個別家教，授課範圍涵蓋國小至高中數學。",
      en:"Individualized mathematics instruction across elementary to senior high school, including school curriculum, exam preparation, learning diagnosis, and tailored materials."
    },
    {
      period:"2024.01 — 2025.02",
      schoolTerm:"",
      type:"Individual Instruction",
      zhTitle:"明光義塾",
      enTitle:"Meiko Individualized Learning Center",
      zhRole:"數學科個別指導教師",
      enRole:"Individual Mathematics Instructor",
      zh:"於明光義塾擔任數學科個別指導教師。",
      en:"Provided individualized mathematics instruction with pacing, explanations, and practice adapted to each student's learning needs."
    },
    {
      period:"2025.08 — 2026.01",
      schoolTerm:"114-1",
      type:"Teaching Practicum",
      zhTitle:"臺北市立第一女子高級中學",
      enTitle:"Taipei First Girls High School",
      zhRole:"數學科教育實習｜114-1",
      enRole:"Mathematics Teaching Practicum",
      zh:"114-1 學期於臺北市立第一女子高級中學進行數學科教育實習。",
      en:"Completed a secondary mathematics teaching practicum involving classroom observation, lesson planning, instructional materials, teaching practice, and school-based experience."
    },
    {
      period:"2026.02 — 2026.05",
      schoolTerm:"114-2",
      type:"High School Teaching",
      zhTitle:"治平高級中等學校",
      enTitle:"Chih Ping Senior High School",
      zhRole:"數學科兼課教師｜114-2",
      enRole:"Part-time Mathematics Teacher",
      zh:"114-2 學期於治平高級中等學校擔任數學科兼課教師。",
      en:"Taught senior high school mathematics courses, with experience in course pacing, classroom instruction, and student interaction."
    },
    {
      period:"2026.04 — PRESENT",
      schoolTerm:"",
      type:"Group Instruction",
      zhTitle:"興儒補習班",
      enTitle:"Xingru Cram School",
      zhRole:"數學科團班教師",
      enRole:"Group Mathematics Instructor",
      zh:"2026 年 4 月起於興儒補習班擔任數學科團班教師。",
      en:"Teach junior high group mathematics and advanced courses, including science-program preparation, instructional materials, and assessment design."
    }
  ]
};

const siteExperience=document.querySelector("#siteExperience");
if(siteExperience) siteExperience.innerHTML=profileData.experience.map(x=>`
  <article>
    <div class="k">${x.period}</div>
    <div>
      <h3>${x.zhTitle}</h3>
      <div class="role">${x.zhRole}</div>
      <p>${x.zh}</p>
    </div>
  </article>
`).join("");

const resumeTeaching=document.querySelector("#resumeTeaching");
if(resumeTeaching) resumeTeaching.innerHTML=profileData.experience.map(x=>`
  <div class="r-item">
    <div class="r-date">${x.period}</div>
    <div>
      <h3 class="zh-only">${x.zhTitle}</h3>
      <h3 class="en-only">${x.enTitle}</h3>
      <p class="zh-only"><strong>${x.zhRole}</strong><br>${x.zh}</p>
      <p class="en-only"><strong>${x.enRole}</strong><br>${x.en}</p>
    </div>
  </div>
`).join("");

function openResume(){
  document.getElementById("resumeLayer")?.classList.add("open");
  document.body.style.overflow="hidden";
}
function closeResume(){
  document.getElementById("resumeLayer")?.classList.remove("open");
  document.body.style.overflow="";
}
function setResumeLang(lang){
  document.body.classList.toggle("resume-en",lang==="en");
}

function applyPreset(type){
  const presets={
    general:{lang:"zh",sections:["education","teaching","projects","growth","skills"]},
    abroad:{lang:"en",sections:["education","teaching","projects","growth","skills"]},
    teacher:{lang:"zh",sections:["education","teaching","projects","growth","skills"]},
    tutoring:{lang:"zh",sections:["education","teaching","projects","skills","services"]}
  };
  const p=presets[type];
  if(!p) return;
  setResumeLang(p.lang);
  document.querySelectorAll("[data-toggle]").forEach(cb=>{
    cb.checked=p.sections.includes(cb.dataset.toggle);
    const section=document.querySelector(`[data-section="${cb.dataset.toggle}"]`);
    if(section) section.classList.toggle("hidden",!cb.checked);
  });
}
document.querySelectorAll("[data-toggle]").forEach(cb=>{
  cb.addEventListener("change",()=>{
    const section=document.querySelector(`[data-section="${cb.dataset.toggle}"]`);
    if(section) section.classList.toggle("hidden",!cb.checked);
  });
});
document.getElementById("resumeLayer")?.addEventListener("click",e=>{
  if(e.target.id==="resumeLayer") closeResume();
});

const resourceData=[
{id:"triangle-area",title:"三角形面積與面積比",level:"國三科學班",categories:["junior","advanced"],type:"幾何專題講義",symbol:"△",version:"2026.09",description:"從三角形面積基本公式出發，整理作高、海龍公式、內點切割、等高、等底、全等、相似，並延伸至平面與空間的綜合問題。",tags:["國三","科學班","幾何","面積比"],contents:"22 個例題、六大核心關係、延伸綜合與一頁總整理",files:"18 頁學生版 PDF",page:"resources/triangle-area/",student:"resources/triangle-area/triangle-area-student.pdf",solution:""}
];
let currentResourceFilter="all";
function renderResources(){
 const grid=document.getElementById("resourceGrid"); if(!grid)return;
 const q=(document.getElementById("resourceSearch")?.value||"").trim().toLowerCase();
 const items=resourceData.filter(r=>{const f=currentResourceFilter==="all"||r.categories.includes(currentResourceFilter);const hay=[r.title,r.level,r.type,r.description,...r.tags].join(" ").toLowerCase();return f&&(!q||hay.includes(q));});
 grid.innerHTML=items.map(r=>`<article class="resource-card"><div class="resource-cover"><span class="level">${r.level}</span><span class="symbol">${r.symbol}</span></div><div class="resource-body"><div class="resource-meta"><span>${r.type}</span><span>${r.version}</span></div><h3>${r.title}</h3><p>${r.description}</p><div class="resource-tags">${r.tags.map(t=>`<span class="resource-tag">${t}</span>`).join("")}</div><div class="resource-actions">${r.page?`<a class="resource-link primary" href="${r.page}">查看教材</a>`:`<button class="resource-link primary" onclick="openResource('${r.id}')">查看教材</button>`}<a class="resource-link ${r.student?'':'disabled'}" ${r.student?`href="${r.student}" target="_blank"`:""}>學生版 PDF</a><a class="resource-link ${r.solution?'':'disabled'}" ${r.solution?`href="${r.solution}" target="_blank"`:""}>詳解版</a></div></div></article>`).join("");
 document.getElementById("resourceCount").textContent=`目前顯示 ${items.length} 份教材／資料`;
}
function openResource(id){
 const r=resourceData.find(x=>x.id===id); if(!r)return;
 document.getElementById("resourceModalType").textContent=`${r.type} · ${r.version}`;
 document.getElementById("resourceModalTitle").textContent=r.title;
 document.getElementById("resourceModalDesc").textContent=r.description;
 document.getElementById("resourceModalLevel").textContent=r.level;
 document.getElementById("resourceModalVersion").textContent=r.version;
 document.getElementById("resourceModalContents").textContent=r.contents;
 document.getElementById("resourceModalFiles").textContent=r.files;
 document.getElementById("resourceModal").classList.add("open");
 document.body.style.overflow="hidden";
}
function closeResource(){document.getElementById("resourceModal")?.classList.remove("open");document.body.style.overflow="";}
document.addEventListener("DOMContentLoaded",()=>{
 renderResources();
 document.getElementById("resourceSearch")?.addEventListener("input",renderResources);
 document.querySelectorAll("#resourceFilters .filter-btn").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("#resourceFilters .filter-btn").forEach(x=>x.classList.remove("active"));btn.classList.add("active");currentResourceFilter=btn.dataset.filter;renderResources();}));
 document.getElementById("resourceModal")?.addEventListener("click",e=>{if(e.target.id==="resourceModal")closeResource();});
});

