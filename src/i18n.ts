export const locales = ['ja', 'en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ja';

export const localeMeta = {
  ja: {
    htmlLang: 'ja',
    ogLocale: 'ja_JP',
    hreflang: 'ja',
    label: '日本語',
    short: 'JA',
    numberLocale: 'ja-JP',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    hreflang: 'en',
    label: 'English',
    short: 'EN',
    numberLocale: 'en-US',
  },
  zh: {
    htmlLang: 'zh-Hant',
    ogLocale: 'zh_TW',
    hreflang: 'zh-Hant',
    label: '繁體中文',
    short: '繁',
    numberLocale: 'zh-TW',
  },
} as const satisfies Record<Locale, Record<string, string>>;

/**
 * 带语言前缀的路径。ja 在根目录，en/zh 在 /en、/zh。
 * 例：pagePath('ja') → '/'、pagePath('en', 'access') → '/en/access'
 */
export function pagePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  if (!clean) return prefix || '/';
  return `${prefix}/${clean}`;
}

/** 生成 hreflang（含 x-default，指向默认语言版） */
export function hreflangAlternates(site: string | URL, path = ''): { lang: string; href: string }[] {
  const base = String(site).replace(/\/$/, '');
  const list = locales.map((locale) => ({
    lang: localeMeta[locale].hreflang,
    href: `${base}${pagePath(locale, path)}`,
  }));
  list.push({ lang: 'x-default', href: `${base}${pagePath(defaultLocale, path)}` });
  return list;
}

export interface UiStrings {
  skipLink: string;
  nav: {
    highlights: string;
    access: string;
    course: string;
    info: string;
    faq: string;
  };
  openMap: string;
  menuOpen: string;
  menuClose: string;
  sectionNav: string;
  mobileNav: string;
  ratingLabel: string;
  ratingCountUnit: string;
  plusCodeLabel: string;
  phoneLabel: string;
  languageLabel: string;
  homeLink: string;
  accessLink: string;
  guideLink: string;
  backHome: string;
  footer: {
    photoCredits: string;
    privacy: string;
    home: string;
    access: string;
    guide: string;
    official: string;
    ropeway: string;
    map: string;
    explore: string;
    update: string;
  };
  notFound: {
    label: string;
    title: string;
    text: string;
    back: string;
  };
}

export const ui: Record<Locale, UiStrings> = {
  ja: {
    skipLink: '本文へ移動',
    nav: {
      highlights: '見どころ',
      access: '行き方',
      course: 'モデルコース',
      info: '拝観案内',
      faq: 'よくある質問',
    },
    openMap: '地図を開く',
    menuOpen: 'メニューを開く',
    menuClose: 'メニューを閉じる',
    sectionNav: 'セクションナビゲーション',
    mobileNav: 'モバイルナビゲーション',
    ratingLabel: 'Google マップの評価（参考値）',
    ratingCountUnit: '件',
    plusCodeLabel: 'Plus Code',
    phoneLabel: '電話番号',
    languageLabel: '言語を選択',
    homeLink: 'ホーム',
    accessLink: '行き方・交通',
    guideLink: '拝観ガイド',
    backHome: 'トップへ戻る',
    footer: {
      photoCredits: '写真クレジット',
      privacy: 'プライバシー',
      home: 'ホーム',
      access: '行き方・交通',
      guide: '拝観ガイド',
      official: '日本寺 公式 ↗',
      ropeway: '鋸山ロープウェー ↗',
      map: 'Google マップ',
      explore: 'ガイドを読む',
      update: '情報更新',
    },
    notFound: {
      label: '404 / NOT FOUND',
      title: '道に迷ったようです。',
      text: 'この先にページはありません。山頂へ戻り、もう一度歩き始めましょう。',
      back: 'トップへ戻る',
    },
  },
  en: {
    skipLink: 'Skip to content',
    nav: {
      highlights: 'Highlights',
      access: 'Getting here',
      course: 'Model course',
      info: 'Visitor info',
      faq: 'FAQ',
    },
    openMap: 'Open map',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    sectionNav: 'Section navigation',
    mobileNav: 'Mobile navigation',
    ratingLabel: 'Google Maps rating (indicative)',
    ratingCountUnit: 'reviews',
    plusCodeLabel: 'Plus Code',
    phoneLabel: 'Phone',
    languageLabel: 'Select language',
    homeLink: 'Home',
    accessLink: 'Getting here',
    guideLink: 'Visitor guide',
    backHome: 'Back to top',
    footer: {
      photoCredits: 'Photo credits',
      privacy: 'Privacy',
      home: 'Home',
      access: 'Getting here',
      guide: 'Visitor guide',
      official: 'Nihon-ji official ↗',
      ropeway: 'Nokogiriyama Ropeway ↗',
      map: 'Google Maps',
      explore: 'Read the guides',
      update: 'Information updates',
    },
    notFound: {
      label: '404 / NOT FOUND',
      title: 'You seem to have lost the trail.',
      text: 'There is no page here. Head back to the summit and start walking again.',
      back: 'Back to top',
    },
  },
  zh: {
    skipLink: '跳至主要內容',
    nav: {
      highlights: '景點亮點',
      access: '交通方式',
      course: '建議路線',
      info: '參拜資訊',
      faq: '常見問題',
    },
    openMap: '開啟地圖',
    menuOpen: '開啟選單',
    menuClose: '關閉選單',
    sectionNav: '區塊導覽',
    mobileNav: '行動版導覽',
    ratingLabel: 'Google 地圖評分（參考值）',
    ratingCountUnit: '則',
    plusCodeLabel: 'Plus Code',
    phoneLabel: '電話',
    languageLabel: '選擇語言',
    homeLink: '首頁',
    accessLink: '交通方式',
    guideLink: '參拜指南',
    backHome: '回到首頁',
    footer: {
      photoCredits: '圖片版權',
      privacy: '隱私權政策',
      home: '首頁',
      access: '交通方式',
      guide: '參拜指南',
      official: '日本寺官方網站 ↗',
      ropeway: '鋸山纜車 ↗',
      map: 'Google 地圖',
      explore: '閱讀指南',
      update: '資訊更新',
    },
    notFound: {
      label: '404 / NOT FOUND',
      title: '似乎走錯路了。',
      text: '這裡沒有頁面。請回到山頂，重新起步。',
      back: '回到首頁',
    },
  },
};
