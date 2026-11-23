const sketches = {
  arm: "M34 92h28l22-34 26 10 18-28M62 92a4 4 0 1 1 0-0.1M84 58a4 4 0 1 1 0-0.1M110 68a4 4 0 1 1 0-0.1M128 40l10 7-7 9",
  rover: "M48 48h78a8 8 0 0 1 8 8v16H40V56a8 8 0 0 1 8-8zM58 78a10 10 0 1 1 0-0.1M112 78a10 10 0 1 1 0-0.1M86 48V34h18M100 30a5 5 0 1 1 0-0.1",
  gears: "M70 70a16 16 0 1 1 32 0 16 16 0 0 1-32 0zM118 46a12 12 0 1 1 18 10M78 54l-8-14M102 54l10-12M78 86l-6 12M104 88l8 10",
  hydro: "M40 88h90M58 88V58h18v30M96 88V42h16v46M112 50h28M112 50c8-16 22-16 28 0M70 46h10M74 46v-12",
  belt: "M46 78h108M46 58h108M46 58a10 10 0 0 0 0 20M154 58a10 10 0 0 1 0 20M96 46h22v12H96z",
  wind: "M100 92V46M100 46c18-2 22-20 8-28-16 6-22 18-8 28zM100 46c-4-20 12-30 24-22-12 2-18 14-24 22zM100 46c2 16-16 24-26 14 10-2 20-8 26-14zM78 92h44",
  house: "M40 78V46L100 24l60 22v32H40zM78 78V58h18v20M62 52h14v12H62zM124 52h14v12h-14z",
  plant: "M48 86h104M70 86V60h60v26M78 60c0-16 10-24 22-24s22 8 22 24M100 36V24M92 28h16M150 70c10 0 16-8 16-16",
  weather: "M58 78V42M58 42a16 16 0 1 1 22 14M96 70l8-20 8 12 8-16 8 24M132 48v30M124 86h70",
  rfid: "M70 36h46a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6H70a6 6 0 0 1-6-6V42a6 6 0 0 1 6-6zM78 50h30M78 62h18M132 48c10 6 10 22 0 28M144 40c16 10 16 36 0 46",
  hand: "M86 90V58M74 90V64M98 90V52M110 90V60M74 64c0-10 24-10 36-4M70 90h48M58 96h84",
  monitor: "M52 40h96v44H52zM70 96h60M100 84v12M66 54h28M66 66h18M112 52h22v16h-22z",
  pills: "M64 40h72v44H64zM64 54h72M80 68h10M100 68h10M120 68h10M86 86v10M114 86v10",
  heart: "M100 86c-28-16-40-32-40-46a16 16 0 0 1 28-10 16 16 0 0 1 28 10c0 14-12 30-16 46z",
  bone: "M70 70c-12-12-8-28 6-28s16 10 10 20c8-8 24-6 28 8s-8 24-20 16c4 12-6 24-18 20s-14-16-6-36z",
  bridge: "M36 78h128M48 78V58h104v20M48 58c16-20 32-20 48 0M96 58c16-20 32-20 56 0M60 78v12M140 78v12",
  tower: "M78 96V36h44v60M78 52h44M78 70h44M90 36V24h20v12M70 96h60",
  pipes: "M40 70h40v16H40zM80 78h30M110 48v30M110 48h36v16h-36M126 64v28M40 86h120",
  line: "M36 86c30-8 40 8 70 0s40 8 62-4M70 70h60v-8H70zM78 78a8 8 0 1 1 0-0.1M122 78a8 8 0 1 1 0-0.1M92 62V48h16",
  sort: "M48 40h28v40H48zM84 40h28v40H84zM120 40h28v40h-28zM58 58h8M94 58h8M130 58h8M150 36c10 8 10 24 0 32",
  green: "M46 90V48h108v42M46 48l54-22 54 22M70 66h22v14H70zM108 66h22v14h-22zM150 70h16v10h-16z",
  gas: "M100 96V54M100 54a22 22 0 1 0-16-37M86 28c6 8 22 8 28 0M78 96h44M126 72h22M148 64v16",
  solar: "M92 96V58M70 96h44M78 58h28v-16H78zM74 42h36M82 34h20M118 70a14 14 0 1 1 8-8",
  wheel: "M46 78a22 22 0 1 1 0-0.1M150 78a22 22 0 1 1 0-0.1M64 74h70l16-28H96L78 74M108 46h28M120 46v-14",
  engine: "M48 70h24V50h56v20h24M72 50V36h56v14M86 36V24M114 36V24M48 80h104M64 80v12M136 80v12"
};

const chapters = [
  {
    id: "mech",
    title: "ميكانيك وميكاترونكس",
    lead: "حركة، نقل، ورفع. اللوحة توضّح شكل الفكرة قبل التصنيع.",
    items: [
      ["01", "كتالوج", "arm", "ذراع روبوتية 5 محاور", "ذراع تتحرك في خمسة اتجاهات فوق قاعدة ثابتة."],
      ["02", "كتالوج", "rover", "روبوت متحرك", "هيكل بعجلات وحساس أمامي لتجنّب العوائق."],
      ["03", "كتالوج", "gears", "ناقل حركة", "ترس كبير مع ترس أصغر لشرح نقل الحركة."],
      ["04", "كتالوج", "hydro", "نظام هيدروليكي", "أسطوانتان وخط زيت لرفع حمل صغير."],
      ["05", "كتالوج", "belt", "سير ناقل ذكي", "سير بين بكرتين مع صندوق يمر فوق الحساس."],
      ["06", "كتالوج", "wind", "توربين رياح", "عمود وشفرات لتوليد حركة من الهواء."],
      ["20", "تصميم جديد", "line", "روبوت تتبع خط", "هيكل منخفض وحساسان تحت القاعدة يتبعان خطاً أسود."],
      ["21", "تصميم جديد", "sort", "ذراع فرز لوني", "ثلاثة صناديق وحساس لون يوجّه القطعة لمسارها."]
    ]
  },
  {
    id: "electro",
    title: "إلكترونيات وأنظمة ذكية",
    lead: "الحساس يقرأ، والمتحكم يقرر، والمخرج ينفّذ.",
    items: [
      ["07", "كتالوج", "house", "منزل ذكي", "إضاءة وباب يُتحكّم بهما من هاتف مقابل البيت."],
      ["08", "كتالوج", "plant", "ريّ ذكي", "حوض نبات ومضخة تعمل حسب رطوبة التربة."],
      ["09", "كتالوج", "weather", "محطة طقس", "حساسات حرارة ورطوبة ورياح على سارية."],
      ["10", "كتالوج", "rfid", "نظام أمن ببطاقة", "بطاقة وقارئ يفتح القفل عند المطابقة."],
      ["22", "تصميم جديد", "green", "دفيئة صغيرة", "غطاء شفاف، حرارة، رطوبة، وري في صندوق واحد."],
      ["23", "تصميم جديد", "gas", "إنذار تسرب غاز", "حساس وصفارة ومروحة تشتغل عند ارتفاع القراءة."],
      ["24", "تصميم جديد", "solar", "إضاءة شارع شمسية", "لوح، عمود، ومصباح يضيء عند غياب الضوء."]
    ]
  },
  {
    id: "medical",
    title: "طب وصحة",
    lead: "نماذج تعليمية وأجهزة بسيطة للشرح والمراقبة.",
    items: [
      ["12", "كتالوج", "hand", "طرف صناعي تعليمي", "أصابع تُغلق وتُفتح بمحركات صغيرة."],
      ["13", "كتالوج", "monitor", "مراقبة مريض", "شاشة تعرض النبض والحرارة ونسبة الأكسجين."],
      ["14", "كتالوج", "pills", "موزع دواء", "خانات جرعات تُفتح في وقتها مع تنبيه."],
      ["15", "كتالوج", "heart", "نموذج قلب", "مجسم للشرح، يمكن طباعته أجزاءً."],
      ["16", "كتالوج", "bone", "عظام ومفاصل", "مجسم تعليمي لمفصل وطرف عظمي."],
      ["25", "تصميم جديد", "wheel", "كرسي بحساسات عوائق", "الكرسي يبقى يدوياً، والحساسات تنبّه قبل الاصطدام."]
    ]
  },
  {
    id: "models",
    title: "نماذج هندسية وتعليمية",
    lead: "مجسمات شرح: أحمال، هيكل، مياه، ومحرك.",
    items: [
      ["17", "كتالوج", "bridge", "نموذج جسر", "بحر وجسر لتحميل أوزان وملاحظة الانحناء."],
      ["18", "كتالوج", "tower", "هيكل مبنى", "طوابق ظاهرة لتوضيح نقل الأحمال."],
      ["19", "كتالوج", "pipes", "شبكة مياه", "خزان وخطوط وصمامات لمسار الماء."],
      ["26", "تصميم جديد", "engine", "محرك رباعي الأشواط", "مقطع يوضّح السحب والضغط والاشتعال والعادم."]
    ]
  }
];

function plate(key) {
  const d = sketches[key] || sketches.arm;
  return `<svg viewBox="0 0 200 120" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 16h18M16 16v18M184 104h-18M184 104v-18" stroke-width="1.2"/><path d="${d}"/></svg>`;
}

const chaptersEl = document.querySelector("#chapters");
chaptersEl.innerHTML = chapters.map((chapter) => `
  <section class="chapter" id="${chapter.id}">
    <header class="chapter-head">
      <h3>${chapter.title}</h3>
      <p>${chapter.lead}</p>
    </header>
    <div class="design-grid">
      ${chapter.items.map(([no, origin, sketch, title, text]) => `
        <article class="design-card">
          <div class="plate">${plate(sketch)}</div>
          <div class="design-body">
            <div class="design-top">
              <span class="idea-no">${no}</span>
              <span class="pill ${origin === "كتالوج" ? "is-old" : "is-new"}">${origin === "كتالوج" ? "من المنشور" : "مقترح"}</span>
            </div>
            <h4>${title}</h4>
            <p>${text}</p>
          </div>
        </article>
      `).join("")}
    </div>
  </section>
`).join("");

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".clip").forEach((clip) => {
  const button = clip.querySelector(".play");
  button.addEventListener("click", () => {
    const on = clip.classList.toggle("is-playing");
    button.setAttribute("aria-pressed", on ? "true" : "false");
    button.textContent = on ? "إيقاف" : "تشغيل";
  });
});

const shotView = document.querySelector("#shot-view");
const shotImg = document.querySelector("#shot-img");
document.querySelectorAll(".work-shot").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const image = link.querySelector("img");
    shotImg.src = image.currentSrc || image.src;
    shotImg.alt = image.alt;
    shotView.showModal();
  });
});

const heroVideo = document.querySelector("#hero-video");
heroVideo.addEventListener("error", () => {
  heroVideo.closest(".hero-reel").classList.add("is-missing");
});

const aide = {
  kind: "مشروع تخرج",
  system: "أندرويد"
};
const aideOut = document.querySelector("#aide-out");
const aideCopy = document.querySelector("#aide-copy");

function aideMessage() {
  const name = document.querySelector("#aide-name").value.trim() || "سأذكر الاسم في الرسالة";
  const time = document.querySelector("#aide-time").value.trim() || "سأحدد المهلة لاحقاً";
  return `السلام عليكم\nأريد ${aide.kind}: ${name}\nالنظام: ${aide.system}\nالمهلة: ${time}\n@sv0_9`;
}

function renderAide() {
  aideOut.replaceChildren();
  aideMessage().split("\n").forEach((line, index) => {
    if (index) aideOut.appendChild(document.createElement("br"));
    const span = document.createElement("span");
    if (line.startsWith("@")) {
      span.dir = "ltr";
      span.style.unicodeBidi = "isolate";
    }
    span.textContent = line;
    aideOut.appendChild(span);
  });
}

document.querySelectorAll(".aide .chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    const group = chip.dataset.group;
    aide[group] = chip.dataset.value;
    document.querySelectorAll(`.aide .chip[data-group="${group}"]`).forEach((item) => {
      item.classList.toggle("is-on", item === chip);
    });
    renderAide();
  });
});
document.querySelector("#aide-name").addEventListener("input", renderAide);
document.querySelector("#aide-time").addEventListener("input", renderAide);
aideCopy.addEventListener("click", async () => {
  const text = aideMessage();
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  aideCopy.textContent = "تم النسخ";
  setTimeout(() => { aideCopy.textContent = "نسخ الرسالة"; }, 1600);
});
renderAide();
