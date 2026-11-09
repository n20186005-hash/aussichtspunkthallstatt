import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Place of Silence - Hallstatt | Visitor Guide',
    short_name: 'Place of Silence',
    description:
      'Name and considerate-conduct information for Place of Silence in Hallstatt.',
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
