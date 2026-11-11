import Link from 'next/link';
import type { Metadata } from 'next';
import { guidePages } from '@/lib/guidePages';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hallstatt Travel Guides: Views, Walks, Transport and Nearby Places',
  description: 'Detailed Hallstatt visitor guides for the famous panoramic viewpoint, photo stops, transport, village walks and nearby attractions.',
  alternates: { canonical: 'https://aussichtspunkthallstatt.com/en/guide' },
};

export default async function GuideIndex({params}:{params:Promise<{locale:string}>}) {
  const {locale} = await params;
  return <><Header/><main className="max-w-6xl mx-auto px-5 py-14" style={{color:'var(--text-primary)'}}>
    <p className="text-sm uppercase tracking-widest" style={{color:'var(--accent)'}}>Hallstatt visitor planning</p>
    <h1 className="text-4xl font-bold mt-3 mb-5">Explore Hallstatt: practical guides</h1>
    <p className="max-w-3xl mb-10 leading-8" style={{color:'var(--text-secondary)'}}>Plan your visit to the Panoramic Viewpoint on Gosaumühlstraße and discover useful walking routes, seasonal photography advice, transport options and nearby cultural sites. Each guide focuses on a different travel decision.</p>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{guidePages.map(p=><Link key={p.slug} href={`/${locale}/guide/${p.slug}`} className="rounded-2xl p-6 border hover:shadow-lg transition-shadow" style={{borderColor:'var(--border-color)',background:'var(--bg-secondary)'}}><span className="text-xs uppercase tracking-wide" style={{color:'var(--accent)'}}>{p.kind}</span><h2 className="text-xl font-semibold my-3">{p.title}</h2><p className="text-sm leading-6" style={{color:'var(--text-secondary)'}}>{p.intro}</p><span className="inline-block mt-4 text-sm underline">Read guide</span></Link>)}</div>
  </main><Footer/></>;
}
