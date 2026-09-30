import { jigokuNozokiLocation, ratingSnapshot, templeFacts, siteNames, SITE_URL } from '../data/site';
import { getGuide } from '../content/guide';
import { localeMeta, type Locale } from '../i18n';

const localizedName: Record<Locale, string> = {
  ja: jigokuNozokiLocation.name,
  en: jigokuNozokiLocation.nameEn,
  zh: jigokuNozokiLocation.nameZh,
};

const localizedStreetAddress: Record<Locale, string> = {
  ja: jigokuNozokiLocation.streetAddress,
  en: '184-4 Motona',
  zh: '元名184-4',
};

const localizedLocality: Record<Locale, string> = {
  ja: jigokuNozokiLocation.addressLocality,
  en: 'Kyonan, Awa District',
  zh: '安房郡鋸南町',
};

const localizedRegion: Record<Locale, string> = {
  ja: jigokuNozokiLocation.addressRegion,
  en: 'Chiba',
  zh: '千葉縣',
};

const daysOfWeek = [
  'https://schema.org/Monday',
  'https://schema.org/Tuesday',
  'https://schema.org/Wednesday',
  'https://schema.org/Thursday',
  'https://schema.org/Friday',
  'https://schema.org/Saturday',
  'https://schema.org/Sunday',
];

/** TouristAttraction + Place（@id 固定为站点根 #attraction，使三语指向同一实体） */
export function buildAttraction(locale: Locale, url: string, imageUrl: string) {
  const guide = getGuide(locale);
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Place'],
    '@id': `${SITE_URL}#attraction`,
    name: localizedName[locale],
    alternateName: jigokuNozokiLocation.alternateNames,
    description: guide.meta.description,
    url,
    image: imageUrl,
    inLanguage: localeMeta[locale].htmlLang,
    telephone: jigokuNozokiLocation.telephone,
    hasMap: jigokuNozokiLocation.googleMapsUrl,
    address: {
      '@type': 'PostalAddress',
      postalCode: jigokuNozokiLocation.postalCode,
      addressRegion: localizedRegion[locale],
      addressLocality: localizedLocality[locale],
      streetAddress: localizedStreetAddress[locale],
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: jigokuNozokiLocation.latitude,
      longitude: jigokuNozokiLocation.longitude,
    },
    isAccessibleForFree: false,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        opens: '09:00',
        closes: '16:00',
        dayOfWeek: daysOfWeek,
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingSnapshot.value,
      ratingCount: ratingSnapshot.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [jigokuNozokiLocation.googleMapsUrl, jigokuNozokiLocation.officialUrl],
    containedInPlace: {
      '@type': 'TouristAttraction',
      name: locale === 'ja' ? '鋸山 日本寺' : locale === 'en' ? 'Nihon-ji Temple, Mount Nokogiri' : '鋸山 日本寺',
      url: jigokuNozokiLocation.officialUrl,
    },
  };
}

export function buildWebSite(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    url: SITE_URL,
    name: siteNames[locale],
    inLanguage: localeMeta[locale].htmlLang,
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: siteNames[locale],
      url: SITE_URL,
    },
  };
}

export function buildFaq(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function buildBreadcrumb(trail: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.url,
    })),
  };
}

export const templeFactsForSchema = templeFacts;
