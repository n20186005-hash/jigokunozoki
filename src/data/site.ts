/**
 * 语言中立的景点事实（唯一来源）。
 * 价格、时间、评价等会变动的数字请只改这里。
 */

export const SITE_URL = 'https://jigokunozoki.com';

/**
 * SEO 站点名：景点名称 + 城市 + 旅游指南
 */
export const siteNames = {
  ja: '地獄のぞき（鋸山 日本寺）｜千葉 観光ガイド',
  en: 'Jigoku Nozoki (View of Hell), Nokogiriyama — Chiba Travel Guide',
  zh: '地獄窺視（鋸山 日本寺）｜千葉 旅遊指南',
} as const;

/** 页头 / 页脚使用的短品牌名 */
export const shortBrand = {
  ja: '地獄のぞき',
  en: 'Jigoku Nozoki',
  zh: '地獄窺視',
} as const;

/** 子页标题：页面名 + ' | ' + 站点名 */
export function withSiteName(suffix: string, locale: keyof typeof siteNames = 'ja'): string {
  return `${suffix} | ${siteNames[locale]}`;
}

/** og:site_name */
export const ogSiteNames = {
  ja: '地獄のぞき｜鋸山旅案内',
  en: 'Jigoku Nozoki | Nokogiriyama Guide',
  zh: '地獄窺視｜鋸山旅案內',
} as const;

export const jigokuNozokiLocation = {
  name: '地獄のぞき',
  nameEn: 'Jigoku Nozoki (View of Hell)',
  nameZh: '地獄窺視',
  alternateNames: ['地獄覗き', 'じごくのぞき', 'じごくのぞき展望台', 'Jigoku Nozoki', 'View of Hell'],
  postalCode: '299-1901',
  addressRegion: '千葉県',
  addressLocality: '安房郡鋸南町',
  streetAddress: '元名184-4 日本寺内',
  fullAddress: '〒299-1901 千葉県安房郡鋸南町元名184-4 日本寺内',
  fullAddressEn: '184-4 Motona, Kyonan, Awa District, Chiba 299-1901, Japan',
  locationNote: '鋸山 日本寺境内・山頂エリア',
  latitude: 35.1592647,
  longitude: 139.8331931,
  plusCode: '5R5M+P7 鋸南町 千葉県',
  telephone: '+81 470-55-1103',
  telephoneDisplay: '+81 470-55-1103（日本寺）',
  googleMapsUrl: 'https://maps.app.goo.gl/5qysmMBkLXvPibXQ7',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.8939819944367!2d139.8331931!3d35.15926470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60181b1f196494a7%3A0x48209df71f2df7bc!2sJigoku%20Nozoki%20(View%20of%20Hell)!5e0!3m2!1sja!2sjp!4v1785298082142!5m2!1sja!2sjp',
  officialUrl: 'https://www.nihonji.jp/',
  officialHoursUrl: 'https://www.nihonji.jp/%E6%8B%9D%E8%A6%B3%E6%99%82%E9%96%93-%E6%96%99%E9%87%91/',
  ropewayUrl: 'https://www.mt-nokogiri.co.jp/',
  ropewayFareUrl: 'https://www.mt-nokogiri.co.jp/pc/p040000.php',
} as const;

/** Google 地图评分快照（非官方，仅作参考） */
export const ratingSnapshot = {
  value: 4.3,
  count: 2097,
  asOf: '2026-09',
  source: 'Google マップの掲載情報を参照（2026年9月時点・参考値）',
  sourceEn: 'Based on Google Maps listing (September 2026, indicative)',
  sourceZh: '參考 Google 地圖資訊（2026 年 9 月・參考值）',
} as const;

/** 日本寺拝観（-hours / fee） */
export const templeFacts = {
  openingHours: '9:00–16:00',
  lastEntry: '15:00',
  admissionAdult: 700,
  admissionChild: 400,
  ropewayAdultOneWay: 650,
  ropewayAdultRound: 1200,
  ropewayChildOneWay: 320,
  ropewayChildRound: 600,
  ropewayHours: '通常期 9:00–17:00／冬季 9:00–16:00',
} as const;
