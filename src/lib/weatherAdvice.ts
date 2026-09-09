// Smart visitor-advice engine for the Hallstatt lakeside viewpoint.
// Pure function: turns live/daily weather into tip-ID buckets (risk/outfit/plan/gear).
// The panel maps IDs to localized strings; untriggered buckets are simply not rendered.
import { conditionKey, type WeatherData } from '@/lib/weather';

export type TipSlot = 'risk' | 'outfit' | 'plan' | 'gear';

export type AdviceSet = Record<TipSlot, string[]>;

const RAIN_PROB_HIGH = 60; // %
const HOT_MAX = 32; // °C
const COOL_MAX = 10; // °C (today's high)
const DAY_SWING = 8; // °C day–night spread
const WIND_FRESH = 29; // km/h (~Beaufort 5)
const WIND_GALE = 50; // km/h (~Beaufort 7)
const UV_HIGH = 5;

// Open-Meteo WMO codes
const LIGHT_RAIN = new Set([61, 62, 80, 81]);
const HEAVY_RAIN = new Set([63, 65, 66, 67, 82]);

function push(set: AdviceSet, slot: TipSlot, id: string) {
  if (!set[slot].includes(id)) set[slot].push(id);
}

export function buildAdvice(d: WeatherData): AdviceSet {
  const out: AdviceSet = { risk: [], outfit: [], plan: [], gear: [] };
  const key = conditionKey(d.code);
  const code = d.code;
  const today = d.daily[0];
  const tMax = today?.tMax ?? d.temp;
  const tMin = today?.tMin ?? d.temp;
  const precip = today?.precip ?? null;
  const wind = d.wind;
  const uv = d.uvIndex ?? 0;

  const isLight = LIGHT_RAIN.has(code) || (code >= 51 && code <= 57);
  const isHeavy = HEAVY_RAIN.has(code);
  const thunder = code >= 95;
  const fog = key === 'fog';
  const snow = key === 'snow';
  const sunny = key === 'clear';
  const cloudy = key === 'partlyCloudy' || key === 'overcast';
  const hot = tMax >= HOT_MAX;
  const cold = tMax <= COOL_MAX;
  const swing = Math.abs(tMax - tMin) >= DAY_SWING;
  const rainChance = precip != null && precip >= RAIN_PROB_HIGH;

  // ── Safety (rendered first, top red card when present) ─────────────
  if (isHeavy && !thunder) push(out, 'risk', 'riskRainHeavy');
  if (thunder) push(out, 'risk', 'riskThunder');
  if (wind >= WIND_GALE) push(out, 'risk', 'riskWind');
  if (fog) push(out, 'risk', 'riskFog');

  // ── What to wear ────────────────────────────────────────────────────
  if (hot) push(out, 'outfit', 'outfitHot');
  if (snow) push(out, 'outfit', 'outfitSnow');
  else if (cold) push(out, 'outfit', 'outfitCool');
  else if (swing) push(out, 'outfit', 'outfitDayNight');
  if (wind >= WIND_FRESH) push(out, 'outfit', 'outfitWind');
  if (isLight || isHeavy) push(out, 'outfit', 'outfitRain');
  else if (sunny && !hot) push(out, 'outfit', 'outfitSun');
  if (uv >= UV_HIGH && (sunny || key === 'partlyCloudy')) push(out, 'outfit', 'outfitUv');

  // ── What to do (lakeside viewpoint context) ─────────────────────────
  if (sunny && !isLight && !isHeavy && !thunder) push(out, 'plan', 'planSunny');
  if (cloudy && !isLight && !isHeavy && !thunder) push(out, 'plan', 'planCloudy');
  if (rainChance && !isLight && !isHeavy) push(out, 'plan', 'planRainProb');
  if (isLight) push(out, 'plan', 'planRainLight');
  if (isHeavy || thunder) push(out, 'plan', 'planNoOutdoor');
  if (wind >= WIND_FRESH && wind < WIND_GALE) push(out, 'plan', 'planWind');
  if (hot) push(out, 'plan', 'planHot');
  if (fog) push(out, 'plan', 'planFog');
  if (snow) push(out, 'plan', 'planSnow');

  // ── What to pack (dynamic, only items that matter) ──────────────────
  if (rainChance || isLight) push(out, 'gear', 'gearUmbrella');
  if (isHeavy) push(out, 'gear', 'gearRaincoat');
  if (uv >= UV_HIGH) push(out, 'gear', 'gearSunscreen');
  if (hot) push(out, 'gear', 'gearWater');
  if (snow) push(out, 'gear', 'gearSnow');

  return out;
}
