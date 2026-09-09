/* OrbGSS — minimal vanilla JS: navigation, Solutions dropdown, EN/TR language switch. */

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
    'meta.description': 'OrbGSS turns Earth observation and geoscience data into actionable geospatial intelligence for exploration and environmental decision-making.',
    'meta.ogDescription': 'From Earth observation to actionable geospatial intelligence.',
    'a11y.skip': 'Skip to content',
    'nav.brand': 'OrbGSS home',
    'nav.primary': 'Primary navigation',
    'nav.footer': 'Footer navigation',
    'nav.open': 'Open navigation',
    'nav.close': 'Close navigation',
    'nav.language': 'Language',
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.partner': 'Partner With Us',
    'nav.contact': 'Contact',
    'nav.geothermal': 'Geothermal',
    'nav.mining': 'Mining',
    'nav.marine': 'Marine',
    'mail.partner': MAIL_EN,
    'hero.eyebrow': 'Earth data.<br />Real opportunities.',
    'hero.title': 'From Earth Observation<br />to Actionable<br />Geospatial Intelligence',
    'hero.copy': 'OrbGSS combines satellite imagery, terrain, geology and domain-specific analysis to identify, prioritize and evaluate areas of interest.',
    'hero.cta': 'Partner With Us',
    'beam.geothermal.title': 'Geothermal Exploration',
    'beam.geothermal.tagline': 'Clean energy beneath the surface',
    'beam.mineral.title': 'Mineral Exploration',
    'beam.mineral.tagline': 'Critical resources for a changing world',
    'beam.environment.title': 'Environmental & Land Intelligence',
    'beam.environment.tagline': 'A more resilient tomorrow',
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
    'meta.description': 'OrbGSS, yer gözlem ve yer bilimi verilerini arama faaliyetleri ve çevresel karar süreçleri için karar destekleyen coğrafi zekâya dönüştürür.',
    'meta.ogDescription': 'Yer gözleminden karar destekleyen coğrafi zekâya.',
    'a11y.skip': 'İçeriğe geç',
    'nav.brand': 'OrbGSS ana sayfa',
    'nav.primary': 'Ana gezinme',
    'nav.footer': 'Alt bilgi gezinmesi',
    'nav.open': 'Menüyü aç',
    'nav.close': 'Menüyü kapat',
    'nav.language': 'Dil',
    'nav.home': 'Ana Sayfa',
    'nav.solutions': 'Çözümler',
    'nav.about': 'Hakkımızda',
    'nav.partner': 'İş Birliği',
    'nav.contact': 'İletişim',
    'nav.geothermal': 'Jeotermal',
    'nav.mining': 'Madencilik',
    'nav.marine': 'Deniz',
    'mail.partner': MAIL_TR,
    'hero.eyebrow': 'Dünya verisi.<br />Gerçek fırsatlar.',
    'hero.title': 'Yer Gözleminden<br />Karar Destekleyen<br />Coğrafi Zekâya',
    'hero.copy': 'OrbGSS; uydu görüntülerini, topoğrafyayı, jeolojiyi ve alana özgü analizleri bir araya getirerek ilgi alanlarını belirler, önceliklendirir ve değerlendirir.',
    'hero.cta': 'İş Birliği Kurun',
    'beam.geothermal.title': 'Jeotermal Arama',
    'beam.geothermal.tagline': 'Yüzeyin altındaki temiz enerji',
    'beam.mineral.title': 'Maden Arama',
    'beam.mineral.tagline': 'Değişen bir dünya için kritik kaynaklar',
    'beam.environment.title': 'Çevre ve Arazi Zekâsı',
    'beam.environment.tagline': 'Daha dirençli bir gelecek',
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
document.querySelectorAll('.panel-image, .satellite-figure > img').forEach((image) => {
  image.addEventListener('error', () => {
    image.style.visibility = 'hidden';
  }, { once: true });
});
