import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/zh/cookie-settings', '/en/cookie-settings', '/de/cookie-settings'],
    },
    sitemap: 'https://aussichtspunkthallstatt.com/sitemap.xml',
  };
}
