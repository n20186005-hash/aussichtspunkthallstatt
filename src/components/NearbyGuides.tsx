import Link from 'next/link';
import { guidePages } from '@/lib/guidePages';
import { attractionDetails } from '@/lib/guideDetails';
import { getTranslations } from 'next-intl/server';
import type { Locale, Loc } from '@/lib/guidePages';

function pick(locale: string, loc: Loc): string {
  return loc[locale as Locale] ?? loc.en;
}

const featured = [
  'market-square',
  'evangelical-church',
  'catholic-church',
  'hallstatt-ossuary',
  'hallstatt-museum',
  'salt-mine',
  'lake-hallstatt',
  'five-fingers',
  'obertraun',
];

export default async function NearbyGuides({ locale }: { locale: string }) {
  const t = await getTranslations('guide');
  const loc = locale as Locale;
  return (
    <section className="py-16 px-4 sm:px-6" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-wider mb-2" style={{ color: 'var(--accent)' }}>
          {t('nearbyHeadingEyebrow')}
        </p>
        <h2 className="font-display text-3xl font-bold mb-4">{t('nearbyHeading')}</h2>
        <p className="max-w-3xl mb-8 leading-7" style={{ color: 'var(--text-secondary)' }}>
          {t('nearbySubtitle')}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((slug) => {
            const p = guidePages.find((x) => x.slug === slug)!;
            const d = attractionDetails[slug];
            return (
              <Link
                key={slug}
                href={`/${locale}/guide/${slug}`}
                className="rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow"
                style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
              >
                <img
                  src={d.photo}
                  alt={`${pick(loc, p.title)} ${t('nearbyAlt')}`}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{pick(loc, p.title)}</h3>
                  <p className="text-sm leading-6" style={{ color: 'var(--text-secondary)' }}>
                    {pick(loc, p.intro)}
                  </p>
                  <span className="text-sm underline inline-block mt-3" style={{ color: 'var(--accent)' }}>
                    {t('nearbyCta')}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <Link href={`/${locale}/guide`} className="inline-block mt-8 font-semibold underline" style={{ color: 'var(--accent)' }}>
          {t('nearbyAll')}
        </Link>
      </div>
    </section>
  );
}
