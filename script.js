// ===== MENU OVERLAY (apre solo al tap, chiude con X) =====
const hamb = document.getElementById("hamb");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("closeMenu");

function openMenu() {
  overlay.hidden = false;
  hamb.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeM() {
  overlay.hidden = true;
  hamb.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

hamb.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeM);

// chiudi menu al click su link
overlay?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", closeM);
});

// chiudi con ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay && !overlay.hidden) closeM();
});

// ===== LINGUA DROPDOWN =====
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const langLabel = document.getElementById("langLabel");

langBtn.addEventListener("click", () => {
  const open = langBtn.getAttribute("aria-expanded") === "true";
  langBtn.setAttribute("aria-expanded", String(!open));
  langMenu.hidden = open;
});

document.addEventListener("click", (e) => {
  if (!langMenu.contains(e.target) && !langBtn.contains(e.target)) {
    langBtn.setAttribute("aria-expanded", "false");
    langMenu.hidden = true;
  }
});

// ===== TESTI IT/EN (demo struttura) =====
const i18n = {
  it: {
    nav_welcome: "Benvenuti",
    nav_coast: "Costa",
    nav_exp: "Esperienza",
    nav_contact: "Contatti",
    btn_info: "INFO",
    welcome_caps: "BENVENUTI AL",
    welcome_text:
      "Respira profondamente e immergiti nella bellezza della tua costa. Ammira la sabbia e le acque scintillanti. Assapora i prodotti locali, dal tuo lettino in spiaggia o nel nostro ristorante in riva al mare.",
    welcome_cta: "PRENOTA LA TUA POSTAZIONE",
    coast_caps: "SULLA COSTA",
    coast_script: "Pugliese",
    coast_lead: "Goditi l’intera giornata sulla nostra spiaggia.",
    coast_text:
      "Il nostro beach club è situato in una parte naturale della costa. Esperienze e atmosfera riflettono un’anima libera, curiosa e moderna.",
    coast_ctaTitle: "SCEGLI LA TUA POSTAZIONE IN RIVA AL MARE",
    coast_cta: "PRENOTA",
    exp_caps: "UN’ESPERIENZA COMPLETA",
    exp_script: "per tutta la giornata",
    exp_1_t: "LIDO",
    exp_1_d: "Il luogo ideale per vivere la tua estate.",
    exp_2_t: "RISTORANTE",
    exp_2_d: "Cucina e prodotti locali in riva al mare.",
    exp_3_t: "LOUNGE BAR",
    exp_3_d: "Drink e aperitivi dall’alba al tramonto.",
    exp_4_t: "EVENTI",
    exp_4_d: "Live music, DJ set ed eventi privati."
  },
  en: {
    nav_welcome: "Welcome",
    nav_coast: "Coast",
    nav_exp: "Experience",
    nav_contact: "Contacts",
    btn_info: "INFO",
    welcome_caps: "WELCOME TO",
    welcome_text:
      "Breathe deeply and dive into the beauty of the coast. Enjoy sand and sparkling waters. Taste local products, from your sunbed on the beach or in our seaside restaurant.",
    welcome_cta: "BOOK YOUR SPOT",
    coast_caps: "ON THE",
    coast_script: "Coast",
    coast_lead: "Enjoy the whole day on our beach.",
    coast_text:
      "Our beach club sits in a natural area of the coastline. The atmosphere reflects a free, curious and modern soul.",
    coast_ctaTitle: "CHOOSE YOUR SEASIDE SPOT",
    coast_cta: "BOOK",
    exp_caps: "A COMPLETE EXPERIENCE",
    exp_script: "all day long",
    exp_1_t: "BEACH",
    exp_1_d: "The perfect place for your summer.",
    exp_2_t: "RESTAURANT",
    exp_2_d: "Local cuisine by the sea.",
    exp_3_t: "LOUNGE BAR",
    exp_3_d: "Drinks and aperitifs from dawn to sunset.",
    exp_4_t: "EVENTS",
    exp_4_d: "Live music, DJ sets and private events."
  }
};

function applyLang(lang){
  langLabel.textContent = lang.toUpperCase();
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang]?.[key]) el.textContent = i18n[lang][key];
  });
  localStorage.setItem("lang", lang);
}

langMenu.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    applyLang(lang);
    langBtn.setAttribute("aria-expanded","false");
    langMenu.hidden = true;
  });
});

// default lingua
applyLang(localStorage.getItem("lang") === "en" ? "en" : "it");

// accordion (menu + blue)
document.querySelectorAll(".acc__btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.parentElement.querySelector(".acc__panel");
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
  });
});

document.querySelectorAll(".blueAcc__btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const next = btn.nextElementSibling;
    if (!next || !next.classList.contains("blueAcc__panel")) return;
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    next.hidden = open;
    const arrow = btn.querySelector(".blueAcc__i");
    if (arrow) arrow.textContent = open ? "v" : "^";
  });
});


// Partners slider (demo)
const partners = [
  "https://dummyimage.com/520x260/bba27c/ffffff&text=RADIO+NORBA",
  "https://dummyimage.com/520x260/86a0b2/ffffff&text=PARTNER+2",
  "https://dummyimage.com/520x260/a48e6a/ffffff&text=PARTNER+3"
];

let pIndex = 0;
const pImg = document.getElementById("pImg");
const pPrev = document.getElementById("pPrev");
const pNext = document.getElementById("pNext");

function renderPartner(){
  if(!pImg) return;
  pImg.src = partners[pIndex];
}
pPrev?.addEventListener("click", () => {
  pIndex = (pIndex - 1 + partners.length) % partners.length;
  renderPartner();
});
pNext?.addEventListener("click", () => {
  pIndex = (pIndex + 1) % partners.length;
  renderPartner();
});
renderPartner();

// Newsletter (demo)
document.querySelector(".newsForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Iscrizione inviata! (demo)");
  e.target.reset();
});

// Reveal leggero su testi, titoli, immagini e blocchi
const revealItems = document.querySelectorAll(`
  .welcome__title,
  .welcome__text,
  .link,
  .panel__title,
  .panel__lead,
  .panel__text,
  .panel__ctaTitle,
  .panel__cta,
  .photos__inner img,
  .exp__item,
  .hero2__content,
  .box,
  .bigTitle__h,
  .bigTitle__s,
  .bigTitle__p,
  .photoFrame,
  .menuBlock,
  .blueAcc,
  .formTitle,
  .form,
  .galleryHero__title,
  .gItem,
  .partners__title,
  .partnerSlider,
  .footerBrand__logo,
  .footerBrand__text,
  .follow,
  .newsletter__title,
  .newsForm,
  .addr__title,
  .addr__text,
  .addr__map
`);

revealItems.forEach((item) => {
  item.classList.add("reveal-item");
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: "0px 0px -40px 0px"
});

revealItems.forEach((item) => {
  revealObserver.observe(item);
});
