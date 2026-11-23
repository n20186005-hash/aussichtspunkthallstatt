'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

export default function Header({ solid = false }: { solid?: boolean }) {
  const t = useTranslations('header');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const opaque = solid || scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: opaque ? 'var(--bg-secondary)' : 'transparent',
        borderBottom: opaque ? '1px solid var(--border-color)' : 'none',
        backdropFilter: opaque ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 min-h-16 py-1 flex items-center justify-between gap-1">
        <a href={`/${locale}`} className="font-display text-sm sm:text-lg font-semibold tracking-tight whitespace-nowrap" style={{ color: opaque ? 'var(--text-primary)' : '#fff' }} aria-label="Place of Silence - Hallstatt">
          Place of Silence<span className="hidden lg:inline"> - Hallstatt</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          <a
            href={`/${locale}/guide`}
            className="text-sm font-medium transition-colors"
            style={{ color: opaque ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}
          >
            {t('guides')}
          </a>
          {(['gallery', 'reviews', 'map'] as const).map((section) => (
            <a
              key={section}
              href={`/${locale}/#${section}`}
              className="text-sm font-medium transition-colors"
              style={{ color: opaque ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}
            >
              {t(section)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <LanguageToggle scrolled={opaque} />
        </div>
      </div>
    </header>
  );
}
