import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config';
import type { Metadata, Viewport } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: '#3a7a8d',
};

const baseUrl = siteConfig.baseUrl;

const localeMap: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  de: 'de_AT',
};

const htmlLangMap: Record<string, string> = {
  zh: 'zh-CN',
  en: 'en',
  de: 'de',
};

function selfUrlFor(locale: string) {
  return `${baseUrl}/${locale}`;
}

function buildJsonLd(selfUrl: string, locale: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristAttraction',
        '@id': `${selfUrl}#attraction`,
        name: siteConfig.officialFullName,
        alternateName: siteConfig.alternateNames,
        description:
          'Comprehensive visitor guide to Panoramic Viewpoint - Hallstatt (Aussichtspunkt Hallstatt) in Hallstatt, Upper Austria, Austria. Location map, opening details, nearby landmarks and travel tips.',
        url: siteConfig.baseUrl,
        image: [siteConfig.galleryImage1],
        isAccessibleForFree: true,
        touristType: ['Scenic Viewpoint', 'Tourist Attraction'],
        telephone: siteConfig.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.streetAddress,
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.region,
          postalCode: siteConfig.postalCode,
          addressCountry: siteConfig.countryCode,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        hasMap: siteConfig.mapsUrl,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: siteConfig.rating,
          reviewCount: siteConfig.reviewCount,
          bestRating: 5,
        },
        sameAs: [
          siteConfig.mapsUrl,
          siteConfig.authorityUrl,
          'https://www.hallstatt.ooe.gv.at/',
          'https://www.land-oberoesterreich.gv.at/',
        ],
      },
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: siteConfig.officialFullName,
        url: siteConfig.baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/icons/icon.svg`,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: siteConfig.baseUrl,
        name: siteConfig.officialFullName,
        inLanguage: ['zh-CN', 'en', 'de'],
        publisher: { '@id': `${baseUrl}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${selfUrl}#webpage`,
        url: selfUrl,
        name: siteConfig.officialFullName,
        description:
          'Comprehensive visitor guide to Panoramic Viewpoint - Hallstatt (Aussichtspunkt Hallstatt) in Hallstatt, Upper Austria, Austria.',
        isPartOf: { '@id': `${baseUrl}/#website` },
        primaryImageOfPage: { '@id': `${selfUrl}#attraction` },
        dateModified: siteConfig.lastUpdated,
        inLanguage: htmlLangMap[locale] || 'zh-CN',
      },
    ],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const selfUrl = selfUrlFor(locale);
  const zhUrl = `${baseUrl}/zh`;
  const enUrl = `${baseUrl}/en`;
  const deUrl = `${baseUrl}/de`;

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: selfUrl,
      languages: {
        'de': deUrl,
        'zh': zhUrl,
        'en': enUrl,
        'x-default': deUrl,
      } as Record<string, string>,
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: siteConfig.officialFullName,
      locale: localeMap[locale] || 'zh_CN',
      type: 'website',
      images: [
        {
          url: siteConfig.galleryImage1,
          alt: `${siteConfig.officialFullName} in ${siteConfig.city}, ${siteConfig.country}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [siteConfig.galleryImage1],
    },
    icons: {
      icon: '/icons/icon.svg',
      shortcut: '/icons/icon.svg',
      apple: '/icons/icon.svg',
    },
    manifest: '/manifest.webmanifest',
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const selfUrl = selfUrlFor(locale);
  const jsonLd = JSON.stringify(buildJsonLd(selfUrl, locale));

  return (
    <html lang={htmlLangMap[locale] || 'de'} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  function readPrefs() {
                    try { return JSON.parse(localStorage.getItem('cookiePrefs') || '{}'); }
                    catch(e) { return {}; }
                  }
                  var loaded = false;
                  function loadGtag() {
                    if (loaded) return;
                    loaded = true;
                    var s = document.createElement('script');
                    s.async = true;
                    s.src = 'https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga4Id}';
                    document.head.appendChild(s);
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { window.dataLayer.push(arguments); }
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', '${siteConfig.ga4Id}', { anonymize_ip: true });
                  }
                  if (readPrefs().analytics) { loadGtag(); }
                  window.addEventListener('consent-updated', function() {
                    var prefs = readPrefs();
                    if (prefs.analytics) { loadGtag(); }
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator && /^https:/.test(window.location.protocol) && !/localhost/.test(window.location.hostname)) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function() {});
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
