import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/site';
import { hreflangAlternates, locales, pagePath } from '../i18n';
import { topicSlugs } from '../content/topics';
import { nearbySlugs } from '../content/nearby';

/** 三语都有的页面（首页 + 专题页） */
const localizedPaths = ['', ...topicSlugs, ...nearbySlugs.map(slug => `nearby/${slug}`), 'privacy-policy', 'terms-of-service', 'cookie-settings', 'sources'];
/** 只有日语的页面 */
const singleLocalePaths = ['privacy', 'photo-credits'];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() || SITE_URL).replace(/\/$/, '');
  const urls: string[] = [];

  localizedPaths.forEach((path) => {
    locales.forEach((locale) => {
      const loc = `${base}${pagePath(locale, path)}`;
      const alternates = hreflangAlternates(base, path)
        .map((alternate) => `<xhtml:link rel="alternate" hreflang="${alternate.lang}" href="${alternate.href}" />`)
        .join('');
      const priority = path === '' ? '1.0' : '0.7';
      urls.push(`<url><loc>${loc}</loc>${alternates}<changefreq>weekly</changefreq><priority>${priority}</priority></url>`);
    });
  });

  singleLocalePaths.forEach((path) => {
    urls.push(`<url><loc>${base}/${path}</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
