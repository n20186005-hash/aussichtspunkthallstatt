import Link from 'next/link';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { guidePages } from '@/lib/guidePages';
import { siteConfig } from '@/config';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Locale, Loc } from '@/lib/guidePages';

type Params = { params: Promise<{ locale: string }> };

function pick(locale: string, loc: Loc): string {
  return loc[locale as Locale] ?? loc.en;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guide' });
  const baseUrl = siteConfig.baseUrl;
  const self = `${baseUrl}/${locale}/guide`;
  const langs: Record<string, string> = {
    en: `${baseUrl}/en/guide`,
    de: `${baseUrl}/de/guide`,
    zh: `${baseUrl}/zh/guide`,
  };
  langs['x-default'] = langs.en;
  return {
    title: t('indexTitle'),
    description: t('indexSubtitle'),
    alternates: { canonical: self, languages: langs },
    openGraph: { title: t('indexTitle'), description: t('indexSubtitle'), url: self, type: 'website' },
  };
}

export default async function GuideIndex({ params }: Params) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    const { notFound } = await import('next/navigation');
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations('guide');
  const loc = locale as Locale;

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-5 py-14" style={{ color: 'var(--text-primary)' }}>
        <p className="text-sm uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
          {t('indexEyebrow')}
        </p>
        <h1 className="text-4xl font-bold mt-3 mb-5">{t('indexTitle')}</h1>
        <p className="max-w-3xl mb-10 leading-8" style={{ color: 'var(--text-secondary)' }}>
          {t('indexSubtitle')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {guidePages.map((p) => (
            <Link
              key={p.slug}
              href={`/${locale}/guide/${p.slug}`}
              className="rounded-2xl p-6 border hover:shadow-lg transition-shadow"
              style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}
            >
              <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--accent)' }}>
                {pick(loc, p.kind)}
              </span>
              <h2 className="text-xl font-semibold my-3">{pick(loc, p.title)}</h2>
              <p className="text-sm leading-6" style={{ color: 'var(--text-secondary)' }}>
                {pick(loc, p.intro)}
              </p>
              <span className="inline-block mt-4 text-sm underline">{t('indexCta')}</span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
