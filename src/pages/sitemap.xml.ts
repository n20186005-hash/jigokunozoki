import type { APIRoute } from 'astro';

const routes = ['/', '/photo-credits', '/privacy'];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://jigokunozoki.com';
  const urls = routes.map((path) => `<url><loc>${base}${path}</loc><changefreq>${path === '/' ? 'weekly' : 'yearly'}</changefreq><priority>${path === '/' ? '1.0' : '0.3'}</priority></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
