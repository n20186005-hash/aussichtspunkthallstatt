import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

type FacilityItem = { type: string; detail: string };

function FacilityGlyph({ index }: { index: number }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  const glyphs: ReactNode[] = [
    // Public restrooms (WC)
    <svg key={0} {...common}>
      <circle cx="6" cy="7" r="2.2" />
      <path d="M3.5 20v-5a2.5 2.5 0 0 1 5 0v5M7 15v5" />
      <path d="M14.5 20v-9h5M14.5 11c1.8-1.4 3.6-2 5-1.4" />
      <path d="M16 20l3-7" />
    </svg>,
    // Parking (P)
    <svg key={1} {...common}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M9 16.5V8h4a2.5 2.5 0 0 1 0 5H9" />
    </svg>,
    // Dining (fork & knife)
    <svg key={2} {...common}>
      <path d="M6 2v20M6 10H3.5M6 14H3.5" />
      <path d="M16 2v8a2.5 2.5 0 0 1-2.5 2.5V22" />
      <path d="M18.5 2v20" />
    </svg>,
    // Accommodation (bed)
    <svg key={3} {...common}>
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
      <path d="M3 15h18M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
      <circle cx="7" cy="8.2" r="0.6" fill="currentColor" />
    </svg>,
    // Supermarket (shopping basket)
    <svg key={4} {...common}>
      <path d="M4 9h16l-1.5 11a2 2 0 0 1-2 1.7H7.5a2 2 0 0 1-2-1.7z" />
      <path d="M9 9l1.5-4.5a1.8 1.8 0 0 1 3.5.5L15 9" />
      <path d="M10.5 13v4M14 13v4" />
    </svg>,
    // Fuel pump
    <svg key={5} {...common}>
      <path d="M4 22V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
      <path d="M4 12h8M4 17h8" />
      <path d="M18 7l2-2 2 2v9a1.8 1.8 0 0 1-3.6 0z" />
      <path d="M18 10h1.5" />
    </svg>,
    // ATM / banknote
    <svg key={6} {...common}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>,
    // Tourist information (i)
    <svg key={7} {...common}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 11v5M12 7.5h.01" />
    </svg>,
  ];
  return <>{glyphs[index % glyphs.length]}</>;
}

export default function FacilitiesSection() {
  const t = useTranslations('facilities');
  const items = t.raw('items') as FacilityItem[];

  return (
    <section id="facilities" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 max-w-3xl" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-5 flex flex-col gap-3"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--accent)' }}
              >
                <FacilityGlyph index={i} />
              </div>
              <h3 className="font-semibold text-sm leading-snug" style={{ color: 'var(--text-primary)' }}>
                {item.type}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-8 text-xs leading-relaxed"
          style={{
            color: 'var(--text-secondary)',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-color)',
            borderRadius: '0.75rem',
            padding: '0.9rem 1rem',
          }}
        >
          {t('note')}
        </p>
      </div>
    </section>
  );
}
