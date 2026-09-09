'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useState, type ReactNode } from 'react';
import {
  WEATHER_URL,
  normalizeWeather,
  conditionKey,
  type ConditionKey,
  type WeatherData,
} from '@/lib/weather';
import { buildAdvice } from '@/lib/weatherAdvice';

const localeIntlMap: Record<string, string> = {
  de: 'de-AT',
  en: 'en-GB',
  zh: 'zh-CN',
};

function WeatherGlyph({ code, className = '' }: { code: number; className?: string }) {
  const key: ConditionKey = conditionKey(code);
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };
  switch (key) {
    case 'clear':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      );
    case 'partlyCloudy':
      return (
        <svg {...common}>
          <circle cx="7" cy="8" r="3.5" />
          <path d="M7 1.5v1.5M1.6 8H.2M2.6 3.6l1 1M11.4 3.6l-1 1" />
          <path d="M17.5 19a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.7 1.2A3.5 3.5 0 0 0 7.5 19z" />
        </svg>
      );
    case 'overcast':
      return (
        <svg {...common}>
          <path d="M17.5 19a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.7 1.2A3.5 3.5 0 0 0 7.5 19z" />
        </svg>
      );
    case 'fog':
      return (
        <svg {...common}>
          <path d="M6 9a4 4 0 0 1 .3-8 5 5 0 0 1 9.8.6A3.2 3.2 0 0 1 16 9z" />
          <path d="M4 13h16M5 16h14M7 19h10" />
        </svg>
      );
    case 'drizzle':
      return (
        <svg {...common}>
          <path d="M17.5 15a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.7 1.2A3.5 3.5 0 0 0 7.5 15z" />
          <path d="M8 19h.01M12 21h.01M16 19h.01" />
        </svg>
      );
    case 'rain':
      return (
        <svg {...common}>
          <path d="M17.5 14a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.7 1.2A3.5 3.5 0 0 0 7.5 14z" />
          <path d="M9 18l-1 2M13 18l-1 2M17 18l-1 2" />
        </svg>
      );
    case 'snow':
      return (
        <svg {...common}>
          <path d="M17.5 14a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.7 1.2A3.5 3.5 0 0 0 7.5 14z" />
          <path d="M12 17v4M10 18l2-1.5 2 1.5M10 21l2-1.5 2 1.5" />
        </svg>
      );
    case 'thunder':
    default:
      return (
        <svg {...common}>
          <path d="M17.5 13a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.7 1.2A3.5 3.5 0 0 0 7.5 13z" />
          <path d="M13 14l-3 4.5h2.5L11 22l4-5h-2.5z" />
        </svg>
      );
  }
}

function formatDay(intl: Intl.DateTimeFormat, iso: string): string {
  try {
    return intl.format(new Date(`${iso}T00:00:00Z`));
  } catch {
    return iso;
  }
}

const SLOT_ICONS: Record<'outfit' | 'plan' | 'gear', ReactNode> = {
  outfit: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.4 3.5 16 2a4 4 0 0 1-8 0L3.6 3.5a2 2 0 0 0-1.3 2.2l.6 3.5a1 1 0 0 0 1 .8H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.1a1 1 0 0 0 1-.8l.6-3.5a2 2 0 0 0-1.3-2.2z" />
    </svg>
  ),
  plan: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  ),
  gear: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
      <path d="M8 10h8" />
    </svg>
  ),
};

export default function WeatherPanel({ initial }: { initial: WeatherData | null }) {
  const t = useTranslations('weather');
  const locale = useLocale();
  const [data, setData] = useState<WeatherData | null>(initial);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let mounted = true;
    let timer: ReturnType<typeof setInterval> | undefined;

    async function refresh() {
      try {
        const res = await fetch(WEATHER_URL);
        if (!res.ok) throw new Error('weather fetch failed');
        const parsed = normalizeWeather(await res.json());
        if (!mounted || !parsed) return;
        setData(parsed);
        setFailed(false);
      } catch {
        if (mounted) setFailed(true);
      }
    }

    refresh();
    timer = setInterval(refresh, 30 * 60 * 1000);
    return () => {
      mounted = false;
      if (timer) clearInterval(timer);
    };
  }, []);

  const conditions = t.raw('conditions') as Record<ConditionKey, string>;
  const advice = data ? buildAdvice(data) : null;
  const adviceMap = (t.raw('advice') as Record<string, string>) || {};
  const adviceLabels = (t.raw('adviceLabels') as Record<string, string>) || {};
  const todayMax = data?.daily?.[0]?.tMax;
  const todayMin = data?.daily?.[0]?.tMin;
  const todayPrecip = data?.daily?.[0]?.precip ?? null;
  const uvValue = data?.uvIndex != null ? String(Math.round(data.uvIndex)) : '–';
  const intl = new Intl.DateTimeFormat(localeIntlMap[locale] || locale, { weekday: 'short' });

  return (
    <>
      <h2
        className="font-display text-3xl sm:text-4xl font-semibold mb-2"
        style={{ color: 'var(--text-primary)' }}
      >
        {t('title')}
      </h2>
      <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
      <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

      {!data ? (
        <div
          className="rounded-xl p-10 text-center text-sm"
          style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}
        >
          {failed ? t('unavailable') : t('loading')}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div
              className="rounded-xl flex-1 p-6 flex items-center gap-5"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
            >
              <div className="shrink-0 w-16 h-16 flex items-center justify-center rounded-full" style={{ background: 'var(--bg-tertiary)', color: 'var(--accent)' }}>
                <WeatherGlyph code={data.code} className="!w-9 !h-9" />
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{t('current')}</p>
                <div className="flex items-end gap-3 flex-wrap">
                  <span className="font-display text-4xl font-semibold leading-none" style={{ color: 'var(--text-primary)' }}>
                    {Math.round(data.temp)}°C
                  </span>
                  <span className="text-sm mb-0.5 flex items-center gap-2 flex-wrap" style={{ color: 'var(--accent)' }}>
                    {conditions[conditionKey(data.code)]}
                    {typeof todayMax === 'number' && typeof todayMin === 'number' && (
                      <span className="font-normal" style={{ color: 'var(--text-muted)' }}>
                        {Math.round(todayMax)}° / {Math.round(todayMin)}°
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
              <Metric
                label={t('feelsLike')}
                value={`${Math.round(data.feelsLike)}°C`}
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 14.76V6a2 2 0 0 0-4 0v8.76a4 4 0 1 0 4 0z" /><path d="M12 22a4 4 0 0 0 0-8" /></svg>}
              />
              <Metric
                label={t('rainChance')}
                value={todayPrecip != null ? `${todayPrecip}%` : '–'}
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3s6 5.7 6 11a6 6 0 0 1-12 0c0-5.3 6-11 6-11z" /></svg>}
              />
              <Metric
                label={t('wind')}
                value={`${Math.round(data.wind)} km/h`}
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 8h11a3 3 0 1 0-3-3M3 13h15a3 3 0 1 1-3 3M3 18h7" /></svg>}
              />
              <Metric
                label={t('uvIndex')}
                value={uvValue}
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>}
              />
            </div>
          </div>

          {advice && (
            <div className="space-y-4">
              {advice.risk.length > 0 ? (
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'rgba(220,38,38,0.08)',
                    border: '1px solid rgba(220,38,38,0.55)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-3" style={{ color: '#dc2626' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><path d="M12 9v4M12 17h.01" /></svg>
                    <span className="font-semibold text-sm tracking-wide">{adviceLabels.risk}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {advice.risk.map((id) => (
                      <li key={id} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                        <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#dc2626' }} />
                        <span>{adviceMap[id] || id}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm"
                  style={{ background: 'rgba(22,163,74,0.1)', color: 'var(--text-primary)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>{t('noRisk')}</span>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                {(['outfit', 'plan', 'gear'] as const).map((slot) => {
                  const items = advice[slot];
                  if (items.length === 0) return null;
                  return (
                    <div
                      key={slot}
                      className="rounded-xl p-5"
                      style={{ flex: '1 1 230px', minWidth: 230, background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
                    >
                      <div className="flex items-center gap-2 mb-3" style={{ color: 'var(--accent)' }}>
                        {SLOT_ICONS[slot]}
                        <span className="font-semibold text-sm tracking-wide" style={{ color: 'var(--text-primary)' }}>
                          {adviceLabels[slot]}
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {items.map((id) => (
                          <li key={id} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                            <span>{adviceMap[id] || id}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <h3 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('forecast')}
            </h3>
            <div className="-mx-1 overflow-x-auto px-1 pb-1">
              <div className="flex gap-2 sm:gap-3 w-max min-w-full">
              {data.daily.map((day) => (
                <div
                  key={day.date}
                  className="flex-1 rounded-xl p-3 text-center min-w-[96px]"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
                >
                  <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>{formatDay(intl, day.date)}</p>
                  <div className="mx-auto mb-2" style={{ color: 'var(--accent)' }}>
                    <WeatherGlyph code={day.code} className="!w-6 !h-6 mx-auto" />
                  </div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {Math.round(day.tMax)}° / {Math.round(day.tMin)}°
                  </p>
                  <p className="text-[11px] mt-1 flex items-center justify-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3s6 5.7 6 11a6 6 0 0 1-12 0c0-5.3 6-11 6-11z" /></svg>
                    {day.precip != null ? `${day.precip}%` : '–'}
                  </p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Metric({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return (
    <div
      className="rounded-xl p-4 flex flex-col justify-center gap-1.5"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
    >
      <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
        <span style={{ color: 'var(--accent)' }}>{icon}</span>
        {label}
      </span>
      <span className="font-semibold text-lg leading-none" style={{ color: 'var(--text-primary)' }}>
        {value}
      </span>
    </div>
  );
}
