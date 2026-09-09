import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Panoramic Viewpoint - Hallstatt | Visitor Guide',
    short_name: 'Viewpoint Hallstatt',
    description:
      'Visitor guide to Panoramic Viewpoint - Hallstatt (Aussichtspunkt Hallstatt) in Hallstatt, Upper Austria, Austria.',
    start_url: '/de',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3a7a8d',
    lang: 'de',
    categories: ['travel', 'tourism'],
    icons: [
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  };
}
