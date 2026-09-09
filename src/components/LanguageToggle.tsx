'use client';

import type { CSSProperties } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter, routing } from '@/i18n/routing';

const languages = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' }
];

export default function LanguageToggle({ scrolled = false }: { scrolled?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    // router.replace(pathname, { locale: newLocale as any });
    window.location.href = `/${newLocale}${pathname === '/' ? '' : pathname}`;
  };

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
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-2 py-1 text-sm rounded transition-colors ${
            locale === lang.code ? 'font-medium' : ''
          } hover:bg-white/10`}
          style={baseStyle(locale === lang.code)}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}
