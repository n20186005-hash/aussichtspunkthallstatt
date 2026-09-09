import { useTranslations } from 'next-intl';

export default function IntroSection() {
  const t = useTranslations('intro');
  const breadcrumb = t.raw('breadcrumb') as string[];
  const visitItems = t.raw('visitGuide.items') as string[];
  const knownItems = t.raw('alsoKnownAs.items') as string[];

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Geographic breadcrumb: Full name → City → Region → Country */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
            {breadcrumb.map((item, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                )}
                <span className={i === 0 ? 'font-medium' : ''} style={i === 0 ? { color: 'var(--text-secondary)' } : undefined}>
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </nav>

        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div className="space-y-5 max-w-3xl">
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            {t('description')}
          </p>
          <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t('nearbyText')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="rounded-xl p-6" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {visitItems.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <span className="mt-1 shrink-0" style={{ color: 'var(--accent)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl p-6" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {knownItems.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <span className="mt-1 shrink-0" style={{ color: 'var(--accent)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
