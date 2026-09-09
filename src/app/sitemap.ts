import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aussichtspunkthallstatt.com';
  const locales = ['de', 'zh', 'en'];
  const routes = ['', '/privacy-policy', '/terms-of-service', '/cookie-settings'];
  const lastModified = new Date('2026-09-09');

  const buildAlternates = (route: string) => {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = `${baseUrl}/${locale}${route}`;
    }
    languages['x-default'] = `${baseUrl}/de${route}`;
    return languages;
  };

  const sitemap: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.5,
        alternates: {
          languages: buildAlternates(route),
        },
      });
    }
  }

  return sitemap;
}
