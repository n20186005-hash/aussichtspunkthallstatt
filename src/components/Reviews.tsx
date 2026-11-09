import { useTranslations, useMessages } from 'next-intl';
import { siteConfig } from '@/config';

export default function Reviews() {
  const t = useTranslations('reviews');
  const messages = useMessages() as any;
  const items = (messages?.reviews?.items || []) as Array<{
    name: string;
    date: string;
    rating: number;
    text: string;
  }>;

  return (
    <section id="reviews" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p
          className="text-sm leading-relaxed mb-10 max-w-2xl"
          style={{ color: 'var(--text-muted)' }}
        >
          {t('declaration')}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {items.map((review, i) => (
            <div
              key={i}
              className="rounded-xl p-5 sm:p-6 transition-shadow hover:shadow-md"
              style={{
                background: 'var(--card-bg)',
                boxShadow: 'var(--card-shadow)',
                border: '1px solid var(--border-color)',
              }}
            >
              <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                {review.name}
              </h3>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* More reviews link — arrow only */}
        <div className="flex justify-center">
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
            style={{
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
            }}
          >
            <span>{t('moreReviews')}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
