/* OrbGSS — minimal vanilla JS: navigation, Solutions dropdown, EN/TR language switch, image-failure handling. */

/* ------------------------------------------------------------------ */
/* Translations. Keys map to data-i18n* attributes in index.html.      */
/* data-i18n        -> textContent                                     */
/* data-i18n-html   -> innerHTML (static, trusted strings with <br />) */
/* data-i18n-alt / -aria-label / -content / -href -> that attribute     */
/* ------------------------------------------------------------------ */
const MAIL_EN = 'mailto:contact@orbgss.com?subject=OrbGSS%20Partnership%20Inquiry';
const MAIL_TR = 'mailto:contact@orbgss.com?subject=OrbGSS%20%C4%B0%C5%9F%20Birli%C4%9Fi%20Talebi';

const I18N = {
  en: {
    'meta.title': 'OrbGSS — Geospatial Intelligence',
    'meta.description': 'OrbGSS turns Earth observation and geoscience data into evidence-backed spatial priorities that help teams decide where to investigate next.',
    'meta.ogDescription': 'Know where to look next. Earth data, evidence, priority.',
    'a11y.skip': 'Skip to content',
    'nav.brand': 'OrbGSS home',
    'nav.primary': 'Primary navigation',
    'nav.footer': 'Footer navigation',
    'nav.open': 'Open navigation',
    'nav.close': 'Close navigation',
    'nav.language': 'Language',
    'nav.platform': 'Platform',
    'nav.solutions': 'Solutions',
    'nav.pilot': 'Pilot',
    'nav.company': 'Company',
    'nav.contact': 'Contact',
    'nav.geothermal': 'Geothermal Exploration',
    'nav.mineral': 'Mineral Exploration',
    'nav.environment': 'Environmental & Land Intelligence',
    'mail.partner': MAIL_EN,
    'hero.eyebrow': 'Earth data. Evidence. Priority.',
    'hero.title': 'Know where to look next.',
    'hero.copy': 'OrbGSS turns Earth observation and geoscience data into evidence-backed spatial priorities that help teams decide where to investigate next.',
    'hero.cta': 'Explore the Platform',
    'hero.secondary': 'Partner With Us',
    'story.observe.title': 'Observe',
    'story.observe.statement': 'The platform starts from an area of interest. Imagery, terrain and geoscience inputs are brought into one spatial frame, so every later step refers to the same ground.',
    'story.observe.meta': 'Input · Imagery / Terrain / Geoscience',
    'story.terrain.title': 'Terrain',
    'story.terrain.statement': 'Terrain is physical context. Elevation, slope and drainage shape how every other signal is read.',
    'story.terrain.meta': 'Context · Elevation / Slope / Drainage',
    'story.evidence.title': 'Evidence',
    'story.evidence.statement': 'Domain-relevant signals are mapped as spatial evidence: located, documented and traceable to their source data.',
    'story.evidence.meta': 'Signal → Evidence layer',
    'story.structure.title': 'Structure',
    'story.structure.statement': 'Geological and structural context frames interpretation. The same signal means different things in different settings.',
    'story.structure.meta': 'Context · Geology / Structure',
    'story.priority.title': 'Priority',
    'story.priority.statement': 'Evidence is integrated into a spatial priority view: where to investigate next, and why.',
    'story.priority.meta': 'Evidence → Spatial priority',
    'story.geothermal.title': 'Geothermal',
    'story.geothermal.statement': 'Geothermal exploration is OrbGSS\u2019s first active application. The evidence-to-priority workflow is being applied to geothermal targets in a pilot setting.',
    'story.geothermal.meta': 'Status · First active application',
    'scene.kind.naturalColor': 'Natural-color composite',
    'pilot.kicker': 'Pilot',
    'pilot.title': 'Geothermal first.',
    'pilot.copy': 'Geothermal exploration is where OrbGSS is applied first. Mineral exploration and environmental & land intelligence follow the same evidence-to-priority workflow and are expansion directions, not finished products.',
    'pilot.listLabel': 'Applications',
    'app.geothermal.title': 'Geothermal Exploration',
    'app.geothermal.status': 'Active · First application',
    'app.geothermal.copy': 'Evidence-backed prioritization of geothermal exploration areas.',
    'app.mineral.title': 'Mineral Exploration',
    'app.mineral.status': 'Expansion direction',
    'app.mineral.copy': 'The same workflow extended to mineral exploration targets.',
    'app.environment.title': 'Environmental & Land Intelligence',
    'app.environment.status': 'Expansion direction',
    'app.environment.copy': 'Land and environmental change read as spatial evidence.',
    'company.kicker': 'Company',
    'company.title': 'OrbGSS — Orbital Geo-Spatial Solutions',
    'company.copy': 'OrbGSS is a geospatial-intelligence platform built by VirgaSoft. It exists to make exploration and land decisions evidence-based, traceable and easier to prioritize.',
    'trust.kicker': 'How we work',
    'trust.provenance.title': 'Traceable provenance',
    'trust.provenance.copy': 'Every output can be followed back to its source data.',
    'trust.gaps.title': 'Explicit data gaps',
    'trust.gaps.copy': 'Missing or weak inputs are shown, not hidden.',
    'trust.evidence.title': 'Evidence-based outputs',
    'trust.evidence.copy': 'Priorities are derived from mapped evidence, with the reasoning attached.',
    'trust.decision.title': 'Decision support, not replacement',
    'trust.decision.copy': 'OrbGSS helps decide where to investigate. Field investigation remains necessary.',
    'contact.title': 'Contact',
    'contact.copy': 'For pilot, partnership and technical conversations.',
    'contact.cta': 'Partner With Us',
    'scene.crater.place': 'Crater Lake, Oregon, USA',
    'scene.crater.coords': '42.9443° N, 122.1353° W',
    'scene.yellowstone.place': 'Yellowstone National Park, USA',
    'scene.yellowstone.coords': '44.4604° N, 110.8282° W',
    'scene.chuquicamata.place': 'Chuquicamata, Antofagasta, Chile',
    'scene.chuquicamata.coords': '22.3150° S, 68.9010° W',
    'scene.ili.place': 'Ili River Delta & Lake Balkhash, Kazakhstan',
    'scene.ili.coords': '45.0600° N, 74.5200° E',
    'alt.crater': 'Satellite view of Crater Lake and the surrounding landscape in Oregon, United States',
    'alt.yellowstone': 'Satellite view of the geothermal landscape around Yellowstone National Park',
    'alt.chuquicamata': 'Satellite view of the Chuquicamata mining district in northern Chile',
    'alt.ili': 'Satellite view of the Ili River Delta and Lake Balkhash in Kazakhstan',
    'footer.builtBy': 'Built by VirgaSoft',
    'footer.attribution': 'Landsat data courtesy of the U.S. Geological Survey. Scenes are OrbGSS natural-color composites of Landsat Collection 2 surface-reflectance products; full provenance is documented in the production package.',
    'footer.copyright': '© 2026 OrbGSS. All rights reserved.'
  },
  tr: {
    'meta.title': 'OrbGSS — Coğrafi Zekâ',
    'meta.description': 'OrbGSS, yer gözlem ve yer bilimi verilerini kanıta dayalı mekânsal önceliklere dönüştürerek ekiplerin sırada nerenin inceleneceğine karar vermesine yardımcı olur.',
    'meta.ogDescription': 'Sırada nereye bakacağınızı bilin. Dünya verisi, kanıt, öncelik.',
    'a11y.skip': 'İçeriğe geç',
    'nav.brand': 'OrbGSS ana sayfa',
    'nav.primary': 'Ana gezinme',
    'nav.footer': 'Alt bilgi gezinmesi',
    'nav.open': 'Menüyü aç',
    'nav.close': 'Menüyü kapat',
    'nav.language': 'Dil',
    'nav.platform': 'Platform',
    'nav.solutions': 'Çözümler',
    'nav.pilot': 'Pilot',
    'nav.company': 'Şirket',
    'nav.contact': 'İletişim',
    'nav.geothermal': 'Jeotermal Arama',
    'nav.mineral': 'Maden Arama',
    'nav.environment': 'Çevre ve Arazi Zekâsı',
    'mail.partner': MAIL_TR,
    'hero.eyebrow': 'Dünya verisi. Kanıt. Öncelik.',
    'hero.title': 'Sırada nereye bakacağınızı bilin.',
    'hero.copy': 'OrbGSS, yer gözlem ve yer bilimi verilerini kanıta dayalı mekânsal önceliklere dönüştürür; ekiplerin sırada nerenin inceleneceğine karar vermesine yardımcı olur.',
    'hero.cta': 'Platformu Keşfedin',
    'hero.secondary': 'İş Birliği Kurun',
    'story.observe.title': 'Gözlem',
    'story.observe.statement': 'Platform bir ilgi alanından başlar. Görüntü, topoğrafya ve yer bilimi girdileri tek bir mekânsal çerçevede bir araya getirilir; böylece sonraki her adım aynı zemine referans verir.',
    'story.observe.meta': 'Girdi · Görüntü / Topoğrafya / Yer bilimi',
    'story.terrain.title': 'Topoğrafya',
    'story.terrain.statement': 'Topoğrafya fiziksel bağlamdır. Yükselti, eğim ve drenaj, diğer her sinyalin nasıl okunacağını belirler.',
    'story.terrain.meta': 'Bağlam · Yükselti / Eğim / Drenaj',
    'story.evidence.title': 'Kanıt',
    'story.evidence.statement': 'Alana özgü sinyaller mekânsal kanıt olarak haritalanır: konumlandırılmış, belgelenmiş ve kaynak verisine kadar izlenebilir.',
    'story.evidence.meta': 'Sinyal → Kanıt katmanı',
    'story.structure.title': 'Yapı',
    'story.structure.statement': 'Jeolojik ve yapısal bağlam yorumu çerçeveler. Aynı sinyal farklı ortamlarda farklı anlamlar taşır.',
    'story.structure.meta': 'Bağlam · Jeoloji / Yapı',
    'story.priority.title': 'Öncelik',
    'story.priority.statement': 'Kanıtlar mekânsal bir öncelik görünümünde bütünleştirilir: sırada nerenin inceleneceği ve nedeni.',
    'story.priority.meta': 'Kanıt → Mekânsal öncelik',
    'story.geothermal.title': 'Jeotermal',
    'story.geothermal.statement': 'Jeotermal arama, OrbGSS\u2019nin ilk aktif uygulamasıdır. Kanıttan önceliğe uzanan iş akışı, pilot kapsamında jeotermal hedeflere uygulanmaktadır.',
    'story.geothermal.meta': 'Durum · İlk aktif uygulama',
    'scene.kind.naturalColor': 'Doğal renkli kompozit',
    'pilot.kicker': 'Pilot',
    'pilot.title': 'Önce jeotermal.',
    'pilot.copy': 'OrbGSS ilk olarak jeotermal aramada uygulanıyor. Maden arama ile çevre ve arazi zekâsı aynı kanıttan önceliğe iş akışını izler; bunlar tamamlanmış ürünler değil, genişleme yönleridir.',
    'pilot.listLabel': 'Uygulama alanları',
    'app.geothermal.title': 'Jeotermal Arama',
    'app.geothermal.status': 'Aktif · İlk uygulama',
    'app.geothermal.copy': 'Jeotermal arama alanlarının kanıta dayalı önceliklendirilmesi.',
    'app.mineral.title': 'Maden Arama',
    'app.mineral.status': 'Genişleme yönü',
    'app.mineral.copy': 'Aynı iş akışının maden arama hedeflerine genişletilmesi.',
    'app.environment.title': 'Çevre ve Arazi Zekâsı',
    'app.environment.status': 'Genişleme yönü',
    'app.environment.copy': 'Arazi ve çevre değişiminin mekânsal kanıt olarak okunması.',
    'company.kicker': 'Şirket',
    'company.title': 'OrbGSS — Orbital Geo-Spatial Solutions',
    'company.copy': 'OrbGSS, VirgaSoft tarafından geliştirilen bir coğrafi zekâ platformudur. Arama ve arazi kararlarını kanıta dayalı, izlenebilir ve önceliklendirilmesi kolay hâle getirmek için vardır.',
    'trust.kicker': 'Nasıl çalışıyoruz',
    'trust.provenance.title': 'İzlenebilir kaynak',
    'trust.provenance.copy': 'Her çıktı, kaynak verisine kadar takip edilebilir.',
    'trust.gaps.title': 'Açık veri boşlukları',
    'trust.gaps.copy': 'Eksik veya zayıf girdiler gizlenmez, gösterilir.',
    'trust.evidence.title': 'Kanıta dayalı çıktılar',
    'trust.evidence.copy': 'Öncelikler, haritalanmış kanıtlardan gerekçesiyle birlikte türetilir.',
    'trust.decision.title': 'Karar desteği, ikame değil',
    'trust.decision.copy': 'OrbGSS nerenin inceleneceğine karar vermeye yardımcı olur. Saha incelemesi gerekli olmaya devam eder.',
    'contact.title': 'İletişim',
    'contact.copy': 'Pilot, iş birliği ve teknik görüşmeler için.',
    'contact.cta': 'İş Birliği Kurun',
    'scene.crater.place': 'Crater Lake, Oregon, ABD',
    'scene.crater.coords': '42.9443° K, 122.1353° B',
    'scene.yellowstone.place': 'Yellowstone Ulusal Parkı, ABD',
    'scene.yellowstone.coords': '44.4604° K, 110.8282° B',
    // Pre-uppercased: Turkish locale casing would otherwise render the Spanish name as "CHUQUİCAMATA".
    'scene.chuquicamata.place': 'CHUQUICAMATA, ANTOFAGASTA, ŞİLİ',
    'scene.chuquicamata.coords': '22.3150° G, 68.9010° B',
    'scene.ili.place': 'İli Nehri Deltası ve Balkaş Gölü, Kazakistan',
    'scene.ili.coords': '45.0600° K, 74.5200° D',
    'alt.crater': 'Oregon (ABD) Crater Lake ve çevresindeki arazinin uydu görüntüsü',
    'alt.yellowstone': 'Yellowstone Ulusal Parkı çevresindeki jeotermal arazinin uydu görüntüsü',
    'alt.chuquicamata': 'Kuzey Şili Chuquicamata madencilik bölgesinin uydu görüntüsü',
    'alt.ili': 'Kazakistan İli Nehri Deltası ve Balkaş Gölü uydu görüntüsü',
    'footer.builtBy': 'VirgaSoft tarafından geliştirildi',
    'footer.attribution': 'Landsat verileri ABD Jeoloji Araştırmaları Kurumu (USGS) kaynaklıdır. Görüntüler, Landsat Collection 2 yüzey yansıtması ürünlerinden OrbGSS tarafından üretilen doğal renkli kompozitlerdir; kaynak bilgileri üretim paketinde belgelenmiştir.',
    'footer.copyright': '© 2026 OrbGSS. Tüm hakları saklıdır.'
  }
};


const DEFAULT_LANG = 'en';
const LANG_KEY = 'orbgss.lang';
const ATTR_MAP = [
  ['data-i18n-alt', 'alt'],
  ['data-i18n-aria-label', 'aria-label'],
  ['data-i18n-content', 'content'],
  ['data-i18n-href', 'href']
];

let currentLang = DEFAULT_LANG;
const t = (key) => (I18N[currentLang] && I18N[currentLang][key]) || I18N[DEFAULT_LANG][key] || '';

function readStoredLang() {
  try {
    const stored = window.localStorage.getItem(LANG_KEY);
    return stored && I18N[stored] ? stored : DEFAULT_LANG;
  } catch (error) {
    return DEFAULT_LANG;
  }
}

function applyLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  ATTR_MAP.forEach(([dataAttr, target]) => {
    document.querySelectorAll(`[${dataAttr}]`).forEach((el) => {
      el.setAttribute(target, t(el.getAttribute(dataAttr)));
    });
  });

  // The menu toggle label depends on both language and open state.
  syncMenuToggleLabel();

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });

  try {
    window.localStorage.setItem(LANG_KEY, lang);
  } catch (error) {
    /* storage unavailable: language still applies for this page view */
  }
}

/* ------------------------------------------------------------------ */
/* Mobile navigation                                                    */
/* ------------------------------------------------------------------ */
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

function syncMenuToggleLabel() {
  if (!toggle || !nav) return;
  const open = nav.classList.contains('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', t(open ? 'nav.close' : 'nav.open'));
}

function closeNav({ focusToggle = false } = {}) {
  if (!nav || !nav.classList.contains('open')) return;
  nav.classList.remove('open');
  syncMenuToggleLabel();
  if (focusToggle && toggle) toggle.focus();
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    syncMenuToggleLabel();
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeNav()));
}

/* ------------------------------------------------------------------ */
/* Solutions dropdown (disclosure pattern: button + list of links)      */
/* ------------------------------------------------------------------ */
const menuItem = document.querySelector('.has-menu');
const trigger = menuItem ? menuItem.querySelector('.nav-trigger') : null;
const submenuLinks = menuItem ? Array.from(menuItem.querySelectorAll('.submenu a')) : [];
const desktopHover = window.matchMedia('(min-width: 981px) and (hover: hover)');
const desktopLayout = window.matchMedia('(min-width: 981px)');
let openedByFocus = false;
let openedByHover = false;

function setSubmenu(open) {
  if (!menuItem || !trigger) return;
  menuItem.classList.toggle('open', open);
  trigger.setAttribute('aria-expanded', String(open));
}
const submenuOpen = () => Boolean(menuItem && menuItem.classList.contains('open'));

if (menuItem && trigger) {
  // Click / tap toggles (works everywhere, including mobile).
  trigger.addEventListener('click', () => {
    if (openedByFocus || openedByHover) {
      // Hover or focus already opened it during this interaction: a click confirms, not toggles.
      openedByFocus = false;
      openedByHover = false;
      return;
    }
    setSubmenu(!submenuOpen());
  });

  // Hover opens on pointer-capable desktop layouts only.
  menuItem.addEventListener('mouseenter', () => {
    if (desktopHover.matches && !submenuOpen()) {
      setSubmenu(true);
      openedByHover = true;
    }
  });
  menuItem.addEventListener('mouseleave', () => {
    if (desktopHover.matches) {
      setSubmenu(false);
      openedByHover = false;
    }
  });

  // Keyboard focus entering the group opens on desktop; leaving the group closes it.
  // Focus moving within the group (e.g. Escape returning focus to the trigger) must not reopen it.
  menuItem.addEventListener('focusin', (event) => {
    if (desktopLayout.matches && !submenuOpen() && !menuItem.contains(event.relatedTarget)) {
      setSubmenu(true);
      openedByFocus = true;
    }
  });
  menuItem.addEventListener('focusout', (event) => {
    if (!menuItem.contains(event.relatedTarget)) {
      setSubmenu(false);
      openedByFocus = false;
    }
  });
  trigger.addEventListener('blur', () => { openedByFocus = false; });

  // Arrow-key navigation inside the disclosure.
  menuItem.addEventListener('keydown', (event) => {
    const index = submenuLinks.indexOf(document.activeElement);
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!submenuOpen()) setSubmenu(true);
      const next = index === -1 ? 0 : Math.min(index + 1, submenuLinks.length - 1);
      submenuLinks[next].focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (index <= 0) trigger.focus();
      else submenuLinks[index - 1].focus();
    } else if (event.key === 'Home' && index !== -1) {
      event.preventDefault();
      submenuLinks[0].focus();
    } else if (event.key === 'End' && index !== -1) {
      event.preventDefault();
      submenuLinks[submenuLinks.length - 1].focus();
    }
  });

  // Choosing a solution closes the dropdown.
  submenuLinks.forEach((link) => link.addEventListener('click', () => setSubmenu(false)));

  // Click outside closes it.
  document.addEventListener('pointerdown', (event) => {
    if (submenuOpen() && !menuItem.contains(event.target)) setSubmenu(false);
  });
}

/* ------------------------------------------------------------------ */
/* Escape: close dropdown first, then the mobile menu                   */
/* ------------------------------------------------------------------ */
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (submenuOpen()) {
    setSubmenu(false);
    if (menuItem.contains(document.activeElement)) trigger.focus();
    return;
  }
  closeNav({ focusToggle: true });
});

/* ------------------------------------------------------------------ */
/* Language switch                                                      */
/* ------------------------------------------------------------------ */
document.querySelectorAll('.lang-btn').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});
applyLanguage(readStoredLang());

/* ------------------------------------------------------------------ */
/* Graceful failure for self-hosted imagery: hide a scene that fails    */
/* to load so the dark panel background shows, never a broken glyph.    */
/* ------------------------------------------------------------------ */
document.querySelectorAll('.panel-image, .story-panel > img').forEach((image) => {
  image.addEventListener('error', () => {
    image.style.visibility = 'hidden';
  }, { once: true });
});
