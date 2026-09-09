import { useTranslations } from 'next-intl';

export default function InfoSection() {
  const t = useTranslations('knowledge');
  const sections = t.raw('sections') as Array<{ id: string; title: string; content: string }>;

  return (
    <section id="history" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <article
              key={section.id}
              className="rounded-xl p-6"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
            >
              <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {section.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {section.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
