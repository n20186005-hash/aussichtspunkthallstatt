import Link from 'next/link';
import {guidePages} from '@/lib/guidePages';
import {attractionDetails} from '@/lib/guideDetails';

const featured=['market-square','evangelical-church','catholic-church','hallstatt-ossuary','hallstatt-museum','salt-mine','lake-hallstatt','five-fingers','obertraun'];
export default function NearbyGuides({locale}:{locale:string}){
  return <section className="py-16 px-4 sm:px-6" style={{background:'var(--bg-secondary)',color:'var(--text-primary)'}}>
    <div className="max-w-6xl mx-auto">
      <p className="text-sm uppercase tracking-wider mb-2" style={{color:'var(--accent)'}}>Explore the neighbourhood</p>
      <h2 className="font-display text-3xl font-bold mb-4">Nearby Hallstatt attractions and travel guides</h2>
      <p className="max-w-3xl mb-8 leading-7" style={{color:'var(--text-secondary)'}}>Continue from the famous lakeside panorama to historic churches, the market square, the salt-mining heritage and mountain excursions. Every card opens a dedicated visitor guide with route and map information.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{featured.map(slug=>{const p=guidePages.find(x=>x.slug===slug)!;const d=attractionDetails[slug];return <Link key={slug} href={`/en/guide/${slug}`} className="rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow" style={{background:'var(--bg-primary)',borderColor:'var(--border-color)'}}><img src={d.photo} alt={`${p.title} in Hallstatt region`} className="w-full h-44 object-cover" loading="lazy"/><div className="p-5"><h3 className="font-semibold text-lg mb-2">{p.title}</h3><p className="text-sm leading-6" style={{color:'var(--text-secondary)'}}>{p.intro}</p><span className="text-sm underline inline-block mt-3" style={{color:'var(--accent)'}}>Explore this attraction</span></div></Link>})}</div>
      <Link href="/en/guide" className="inline-block mt-8 font-semibold underline" style={{color:'var(--accent)'}}>Browse all 31 Hallstatt guides</Link>
    </div>
  </section>;
}
