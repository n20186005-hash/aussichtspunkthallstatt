import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { guidePages } from '@/lib/guidePages';
import { detailsFor } from '@/lib/guideDetails';
import { siteConfig } from '@/config';
import { profiles } from '@/lib/guideEditorial';
import { routing } from '@/i18n/routing';
import type { Locale, Loc } from '@/lib/guidePages';

type Params = { params: Promise<{ locale: string; slug: string }> };

function pick(locale: string, loc: Loc): string {
  return loc[locale as Locale] ?? loc.en;
}

const htmlLangMap: Record<string, string> = { zh: 'zh-CN', en: 'en', de: 'de' };
const regionText: Record<Locale, string> = {
  en: 'Hallstatt / Salzkammergut, Upper Austria, Austria',
  de: 'Hallstatt / Salzkammergut, Oberösterreich, Österreich',
  zh: '哈尔施塔特 / 萨尔茨卡默古特，上奥地利州，奥地利',
};
const visitInfoChip: Record<Locale, string> = {
  en: 'Visit info: check local notices',
  de: 'Besuchsinfo: örtliche Hinweise prüfen',
  zh: '游览信息：请查当地告示',
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guidePages.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = guidePages.find((x) => x.slug === slug);
  if (!p) return {};
  const title = p.title[locale as Locale] ?? p.title.en;
  const description = p.intro[locale as Locale] ?? p.intro.en;
  const baseUrl = siteConfig.baseUrl;
  const self = `${baseUrl}/${locale}/guide/${slug}`;
  const langs: Record<string, string> = {
    en: `${baseUrl}/en/guide/${slug}`,
    de: `${baseUrl}/de/guide/${slug}`,
    zh: `${baseUrl}/zh/guide/${slug}`,
  };
  langs['x-default'] = langs.en;
  return {
    title: `${title} | ${siteConfig.officialFullName}`,
    description,
    alternates: { canonical: self, languages: langs },
    openGraph: {
      title,
      description,
      url: self,
      type: 'article',
      locale: htmlLangMap[locale] || 'en',
    },
  };
}

export default async function Article({ params }: Params) {
  const { locale, slug } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const p = guidePages.find((x) => x.slug === slug);
  if (!p) notFound();
  const t = await getTranslations('guide');
  const loc = locale as Locale;

  const detail = detailsFor(slug, p.category);
  const profile = profiles[slug];
  const nearby = guidePages.filter((x) => x.slug !== slug && x.category === p.category).slice(0, 3);
  const suggestions = nearby.length ? nearby : guidePages.filter((x) => x.slug !== slug).slice(0, 3);
  const self = `${siteConfig.baseUrl}/${locale}/guide/${slug}`;
  const isMainView =
    !['Nearby attraction', 'Regional excursion', 'Transport', 'Walking route', 'Itinerary'].includes(
      p.category
    ) && slug !== 'hallstatt-skywalk';
  const maps = isMainView
    ? siteConfig.mapsUrl
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pick(loc, p.query) + ', Austria')}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pick(loc, p.title),
    description: pick(loc, p.intro),
    mainEntityOfPage: self,
    author: { '@type': 'Organization', name: 'Hallstatt Visitor Guide' },
    dateModified: '2026-11-11',
    inLanguage: htmlLangMap[locale] || 'en',
  };

  return (
    <>
      <Header />
      <main style={{ color: 'var(--text-primary)' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="max-w-5xl mx-auto px-5 pt-10 pb-20">
          <nav className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
            <Link href={`/${locale}`}>{t('breadcrumbHome')}</Link> /{' '}
            <Link href={`/${locale}/guide`}>{t('breadcrumbGuides')}</Link> / {pick(loc, p.kind)}
          </nav>
          <p className="uppercase tracking-widest text-sm mb-3" style={{ color: 'var(--accent)' }}>
            {pick(loc, p.kind)} · Hallstatt, Austria
          </p>
          <h1 className="font-bold text-4xl md:text-5xl leading-tight max-w-4xl">{pick(loc, p.title)}</h1>
          <p className="text-lg leading-8 mt-6 mb-5 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            {pick(loc, p.intro)}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: 'var(--border-color)' }}>
              {t('labelTime')}: {pick(loc, profile.duration)}
            </span>
            <span className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: 'var(--border-color)' }}>
              {visitInfoChip[loc]}
            </span>
            <a
              href={maps}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{ background: 'var(--accent)', color: 'white' }}
            >
              {t('asideViewMap', { title: pick(loc, p.title) })}
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden mb-10 relative">
            <img
              src={detail.photo}
              alt={`${pick(loc, p.title)}: ${pick(loc, detail.architecture)}`}
              className="w-full object-cover max-h-[420px]"
            />
          </div>
          <section
            className="rounded-2xl p-6 md:p-8 mb-10 border"
            style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
          >
            <p className="uppercase tracking-wider text-xs mb-2" style={{ color: 'var(--accent)' }}>
              {t('aboutEyebrow')}
            </p>
            <h2 className="text-2xl font-bold mb-4">
              {t('aboutPrefix')} {pick(loc, p.title)}
            </h2>
            <p className="leading-8 mb-4">{pick(loc, detail.history)}</p>
            <p className="leading-8 mb-4">{pick(loc, detail.architecture)}</p>
            <p className="leading-8">{pick(loc, detail.management)}</p>
            {detail.source && (
              <a
                className="text-sm underline mt-4 inline-block"
                href={detail.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('sourceHallstattName')}
              </a>
            )}
          </section>
          <section className="mb-10 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl p-6 border" style={{ borderColor: 'var(--border-color)' }}>
              <h2 className="text-xl font-bold mb-3">{t('visitRecTitle')}</h2>
              <p className="leading-7">
                {t('bestSuited')} {pick(loc, profile.suited)}.
              </p>
              <p className="leading-7 mt-3">
                {t('suggestedVisit')} {pick(loc, profile.duration)}. {t('combineNote')}
              </p>
            </div>
            <div className="rounded-2xl p-6 border" style={{ borderColor: 'var(--border-color)' }}>
              <h2 className="text-xl font-bold mb-3">{t('threeHighlights')}</h2>
              <ul className="list-disc pl-5 leading-7">
                {profile.features.map((f) => (
                  <li key={f}>{pick(loc, f)}</li>
                ))}
              </ul>
            </div>
          </section>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10">
            <article className="space-y-9 leading-8">
              <section>
                <h2 className="text-2xl font-bold mb-3">{t('essentialTitle')}</h2>
                <dl className="grid sm:grid-cols-[160px_1fr] border rounded-xl overflow-hidden" style={{ borderColor: 'var(--border-color)' }}>
                  {[
                    [t('labelPlace'), pick(loc, p.title)],
                    [t('labelType'), pick(loc, p.kind)],
                    [t('labelRegion'), regionText[loc]],
                    [t('labelLocation'), pick(loc, profile.arrival)],
                    [t('labelTime'), pick(loc, profile.duration)],
                    [t('labelBestFor'), pick(loc, profile.suited)],
                  ].map(([label, value]) => (
                    <div key={label} className="contents">
                      <dt className="p-3 border-b font-semibold" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}>
                        {label}
                      </dt>
                      <dd className="p-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3">{t('openingTitle')}</h2>
                <h3 className="font-semibold">{t('whenVisit')}</h3>
                <p>
                  {['Nearby attraction', 'Regional excursion', 'Transport', 'Walking route', 'Itinerary', 'Comparison', 'Accessibility', 'Family travel', 'Architecture'].includes(
                    p.category
                  )
                    ? t('whenVisitNearby')
                    : t('whenVisitPublic')}
                </p>
                <h3 className="font-semibold mt-4">{t('ticketsTitle')}</h3>
                <p>{pick(loc, profile.admission)}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3">{t('worthTitle')}</h2>
                <p>{pick(loc, p.highlight)}</p>
                <p className="mt-3">{pick(loc, detail.architecture)}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3">{t('routeTitle')}</h2>
                <p>{pick(loc, p.route)}</p>
                <ol className="list-decimal pl-6 mt-4 space-y-2">
                  {profile.steps.map((step) => (
                    <li key={step}>{pick(loc, step)}</li>
                  ))}
                </ol>
                <p className="mt-3">{t('routeNote')}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3">{t('getThereTitle')}</h2>
                <p>{pick(loc, profile.arrival)}.</p>
                <h3 className="font-semibold mt-4">{t('publicTransport')}</h3>
                <p>{t('publicTransportDesc')}</p>
                <h3 className="font-semibold mt-4">{t('drivingParking')}</h3>
                <p>{t('drivingParkingDesc')}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3">{t('beforeTitle')}</h2>
                <p>{pick(loc, p.practical)}</p>
                <p className="mt-3">{t('beforeNote')}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3">{t('photoTitle')}</h2>
                <p>{pick(loc, profile.photos)}</p>
                <p className="mt-3">{pick(loc, p.highlight)}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3">{t('stayTitle')}</h2>
                <p>{t('stayDesc')}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3">{t('faqTitle')}</h2>
                <h3 className="font-semibold mt-4">{t('faqQ1', { title: pick(loc, p.title) })}</h3>
                <p>{pick(loc, p.highlight)}</p>
                <h3 className="font-semibold mt-4">{t('faqQ2')}</h3>
                <p>
                  {pick(loc, profile.duration)}; {t('combineNote')}
                </p>
                <h3 className="font-semibold mt-4">{t('faqQ3')}</h3>
                <p>{pick(loc, p.route)}</p>
                <h3 className="font-semibold mt-4">{t('faqQ4')}</h3>
                <p>{pick(loc, p.practical)}</p>
                <h3 className="font-semibold mt-4">{t('faqQ5')}</h3>
                <p>{pick(loc, detail.management)}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3">{t('sourcesTitle')}</h2>
                <ul className="list-disc pl-6">
                  <li>
                    <a className="underline" href={t('sourceDachsteinUrl')} target="_blank" rel="noopener noreferrer">
                      {t('sourceDachsteinName')}
                    </a>
                  </li>
                  <li>
                    <a className="underline" href={t('sourceHallstattUrl')} target="_blank" rel="noopener noreferrer">
                      {t('sourceHallstattName')}
                    </a>
                  </li>
                  <li>
                    <a className="underline" href={t('sourceOebbUrl')} target="_blank" rel="noopener noreferrer">
                      {t('sourceOebbName')}
                    </a>
                  </li>
                </ul>
              </section>
            </article>
            <aside
              className="lg:sticky lg:top-8 h-fit rounded-2xl border p-6 space-y-4"
              style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}
            >
              <h2 className="text-xl font-semibold">{t('asideTitle')}</h2>
              <p className="text-sm">{t('asideArea')} {regionText[loc]}</p>
              <p className="text-sm">{t('asideMapDest')} {pick(loc, p.query)}</p>
              <a
                href={maps}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center rounded-xl p-3 font-semibold"
                style={{ background: 'var(--accent)', color: 'white' }}
              >
                {t('asideViewMap', { title: pick(loc, p.title) })}
              </a>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                {t('asideNote')}
              </p>
            </aside>
          </div>
          <section className="mt-14 pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
            <h2 className="text-2xl font-bold mb-5">{t('continueTitle')}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {suggestions.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${locale}/guide/${s.slug}`}
                  className="rounded-xl border p-5 hover:underline"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  {pick(loc, s.title)}
                </Link>
              ))}
            </div>
            <Link className="inline-block mt-6 underline" href={`/${locale}/guide`}>
              {t('continueAll')}
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
