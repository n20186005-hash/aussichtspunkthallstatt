'use client';

import type { CSSProperties } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

const languages = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' }
];

export default function LanguageToggle({ scrolled = false }: { scrolled?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();

  const t = useTranslations('header');
  const route = pathname.replace(/^\/(de|en|zh)(?=\/|$)/, '');
  const localizedHref = (code: string) => `/${code}${route === '/' ? '' : route}`;

  const baseStyle = (active: boolean): CSSProperties => ({
    background:
      active
        ? scrolled
          ? 'var(--bg-tertiary)'
          : 'rgba(255,255,255,0.2)'
        : 'transparent',
    color: active
      ? scrolled
        ? 'var(--text-primary)'
        : '#fff'
      : scrolled
        ? 'var(--text-secondary)'
        : 'rgba(255,255,255,0.75)',
  });

  return (
    <nav aria-label={t('languagePicker')} className="flex items-center gap-0.5 sm:gap-2">
      {languages.map((lang) => (
        <a
          key={lang.code}
          href={localizedHref(lang.code)}
          hrefLang={lang.code}
          lang={lang.code}
          aria-current={locale === lang.code ? 'true' : undefined}
          className={`px-1.5 sm:px-2 py-2 text-xs sm:text-sm rounded transition-colors ${
            locale === lang.code ? 'font-medium' : ''
          } hover:bg-white/10`}
          style={baseStyle(locale === lang.code)}
        >
          {lang.name}
        </a>
      ))}
    </nav>
  );
}
