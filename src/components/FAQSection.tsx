import { useTranslations } from 'next-intl';

const FAQ_COUNT = 6;

export default function FAQSection() {
  const t = useTranslations('faq');
  const items = Array.from({ length: FAQ_COUNT }, (_, i) => ({
    q: t(`items.${i}.q`),
    a: t(`items.${i}.a`),
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section id="faq" className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
          <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

          <div className="space-y-3">
            {items.map((item, i) => (
              <details
                key={i}
                className="rounded-xl overflow-hidden group"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
                open={i === 0}
              >
                <summary
                  className="cursor-pointer list-none flex items-start justify-between gap-4 p-5 font-medium select-none"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <span>{item.q}</span>
                  <span className="shrink-0 transition-transform group-open:rotate-45" style={{ color: 'var(--accent)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
