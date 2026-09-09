import { WEATHER_URL, normalizeWeather, type WeatherData } from '@/lib/weather';
import WeatherPanel from './WeatherPanel';

// Server-side caching for the initial render (ISR / build cache).
// A lightweight client refresh keeps the values current after load.
export const revalidate = 1800;

async function loadWeather(): Promise<WeatherData | null> {
  try {
    const res = await fetch(WEATHER_URL, { next: { revalidate: 1800 } });
    if (!res.ok) return null;
    return normalizeWeather(await res.json());
  } catch {
    return null;
  }
}

export default async function WeatherSection() {
  const initial = await loadWeather();

  return (
    <section id="weather" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <WeatherPanel initial={initial} />
      </div>
    </section>
  );
}
