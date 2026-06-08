'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter, routing } from '@/i18n/routing';

const languages = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Austrian German' }
];

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    // router.replace(pathname, { locale: newLocale as any });
    window.location.href = `/${newLocale}${pathname === '/' ? '' : pathname}`;
  };

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-2 py-1 text-sm rounded transition-colors ${
            locale === lang.code
              ? 'bg-white/20 text-white font-medium'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}
