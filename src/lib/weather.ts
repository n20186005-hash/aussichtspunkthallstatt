export type DailyPoint = {
  date: string;
  code: number;
  tMax: number;
  tMin: number;
  precip: number | null;
  uv: number | null;
};

export type WeatherData = {
  temp: number;
  feelsLike: number;
  wind: number;
  code: number;
  uvIndex: number | null;
  daily: DailyPoint[];
};

export const WEATHER_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=47.5645953&longitude=13.645211&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max&timezone=Europe%2FVienna&forecast_days=7&wind_speed_unit=kmh';

export type ConditionKey =
  | 'clear'
  | 'partlyCloudy'
  | 'overcast'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'snow'
  | 'thunder';

export function conditionKey(code: number): ConditionKey {
  if (code === 0) return 'clear';
  if (code === 1 || code === 2) return 'partlyCloudy';
  if (code === 3) return 'overcast';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 57) return 'drizzle';
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return 'rain';
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snow';
  if (code >= 95) return 'thunder';
  return 'overcast';
}

export function normalizeWeather(raw: any): WeatherData | null {
  if (!raw || !raw.current || !raw.daily || !Array.isArray(raw.daily.time)) return null;

  const c = raw.current;
  const d = raw.daily;

  const daily: DailyPoint[] = d.time.map((date: string, i: number) => ({
    date,
    code: Number(d.weather_code?.[i] ?? 0),
    tMax: Number(d.temperature_2m_max?.[i] ?? 0),
    tMin: Number(d.temperature_2m_min?.[i] ?? 0),
    precip:
      d.precipitation_probability_max?.[i] != null
        ? Number(d.precipitation_probability_max[i])
        : null,
    uv: d.uv_index_max?.[i] != null ? Number(d.uv_index_max[i]) : null,
  }));

  // UV is only meaningful by day; use the strongest signal available
  // (today's forecast peak vs. the live reading) so a night visit is not misreported.
  const curUv = c.uv_index != null ? Number(c.uv_index) : null;
  const todayUv = daily[0]?.uv ?? null;
  const uvIndex =
    curUv != null && todayUv != null
      ? Math.max(curUv, todayUv)
      : (curUv ?? todayUv);

  return {
    temp: Number(c.temperature_2m ?? 0),
    feelsLike: Number(c.apparent_temperature ?? c.temperature_2m ?? 0),
    wind: Number(c.wind_speed_10m ?? 0),
    code: Number(c.weather_code ?? 0),
    uvIndex,
    daily,
  };
}
