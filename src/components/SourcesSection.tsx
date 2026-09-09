import { useTranslations } from 'next-intl';

export default function SourcesSection() {
  const t = useTranslations('sources');
  const items = t.raw('items') as Array<{ name: string; url: string; note: string }>;

  return (
    <section id="sources" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-5 transition-shadow hover:shadow-md block"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                  {item.name}
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--accent)' }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
              <p className="text-xs mb-3 break-all" style={{ color: 'var(--accent)' }}>
                {item.url.replace(/^https?:\/\//, '')}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.note}
              </p>
            </a>
          ))}
        </div>

        <p className="text-xs mt-10" style={{ color: 'var(--text-muted)' }}>
          {t('lastUpdated')}
        </p>
        <p className="text-xs mt-3 max-w-3xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('photoCredit')}
        </p>
      </div>
    </section>
  );
}
