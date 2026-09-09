import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://aussichtspunkthallstatt.com';
  const zhUrl = `${baseUrl}/zh/cookie-settings`;
  const enUrl = `${baseUrl}/en/cookie-settings`;
  const deUrl = `${baseUrl}/de/cookie-settings`;
  const selfUrl =
    locale === 'en' ? enUrl : locale === 'de' ? deUrl : zhUrl;

  return {
    alternates: {
      canonical: selfUrl,
      languages: {
        'de': deUrl,
        'zh': zhUrl,
        'en': enUrl,
        'x-default': deUrl,
      },
    },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
