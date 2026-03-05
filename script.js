// menu hamburger
const hamb = document.getElementById("hamb");
const menu = document.getElementById("menu");

hamb.addEventListener("click", () => {
  const isOpen = hamb.getAttribute("aria-expanded") === "true";
  hamb.setAttribute("aria-expanded", String(!isOpen));
  menu.hidden = isOpen;
});

// chiudi menu al click
menu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    hamb.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  });
});

// lingua dropdown (demo)
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

// testi minimi IT/EN (solo per demo struttura)
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

applyLang(localStorage.getItem("lang") === "en" ? "en" : "it");