import Link from 'next/link';
import {notFound,redirect} from 'next/navigation';
import type {Metadata} from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {guidePages} from '@/lib/guidePages';
import {detailsFor} from '@/lib/guideDetails';
import {siteConfig} from '@/config';
import {profiles} from '@/lib/guideEditorial';

type Params={params:Promise<{locale:string;slug:string}>};
export function generateStaticParams(){return guidePages.map(p=>({locale:'en',slug:p.slug}));}
export async function generateMetadata({params}:Params):Promise<Metadata>{
  const {locale,slug}=await params; const p=guidePages.find(x=>x.slug===slug);
  if(!p)return {};
  return {title:`${p.title} | Hallstatt Visitor Guide`,description:p.intro,alternates:{canonical:`https://aussichtspunkthallstatt.com/en/guide/${slug}`},openGraph:{title:p.title,description:p.intro,type:'article'}};
}
export default async function Article({params}:Params){
  const {locale,slug}=await params; const p=guidePages.find(x=>x.slug===slug);if(!p)notFound();
  if(locale!=='en')redirect(`/en/guide/${slug}`);
  const detail=detailsFor(slug,p.kind);
  const profile=profiles[slug];
  const nearby=guidePages.filter(x=>x.slug!==slug&&x.kind===p.kind).slice(0,3);
  const suggestions=nearby.length?nearby:guidePages.filter(x=>x.slug!==slug).slice(0,3);
  const self=`https://aussichtspunkthallstatt.com/${locale}/guide/${slug}`;
  const isMainView=!['Nearby attraction','Regional excursion','Transport','Walking route','Itinerary'].includes(p.kind) && slug!=='hallstatt-skywalk';
  const maps=isMainView?siteConfig.mapsUrl:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.query+', Austria')}`;
  const jsonLd={'@context':'https://schema.org','@type':'Article',headline:p.title,description:p.intro,mainEntityOfPage:self,author:{'@type':'Organization',name:'Hallstatt Visitor Guide'},dateModified:'2026-11-11',inLanguage:'en'};
  return <><Header/><main style={{color:'var(--text-primary)'}}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <div className="max-w-5xl mx-auto px-5 pt-10 pb-20">
      <nav className="text-sm mb-8" style={{color:'var(--text-secondary)'}}><Link href={`/${locale}`}>Hallstatt</Link> / <Link href={`/${locale}/guide`}>Travel guides</Link> / {p.kind}</nav>
      <p className="uppercase tracking-widest text-sm mb-3" style={{color:'var(--accent)'}}>{p.kind} · Hallstatt, Austria</p>
      <h1 className="font-bold text-4xl md:text-5xl leading-tight max-w-4xl">{p.title}</h1>
      <p className="text-lg leading-8 mt-6 mb-5 max-w-3xl" style={{color:'var(--text-secondary)'}}>{p.intro}</p>
      <div className="flex flex-wrap gap-3 mb-8"><span className="rounded-full border px-4 py-2 text-sm" style={{borderColor:'var(--border-color)'}}>Suggested time: {profile.duration}</span><span className="rounded-full border px-4 py-2 text-sm" style={{borderColor:'var(--border-color)'}}>Visit info: check local notices</span><a href={maps} target="_blank" rel="noopener noreferrer" className="rounded-full px-4 py-2 text-sm font-semibold" style={{background:'var(--accent)',color:'white'}}>View location and navigation</a></div>
      <div className="rounded-2xl overflow-hidden mb-10 relative"><img src={detail.photo} alt={`${p.title}: ${detail.architecture}`} className="w-full object-cover max-h-[420px]"/></div>
      <section className="rounded-2xl p-6 md:p-8 mb-10 border" style={{background:'var(--bg-secondary)',borderColor:'var(--border-color)'}}>
        <p className="uppercase tracking-wider text-xs mb-2" style={{color:'var(--accent)'}}>About this place · history & stewardship</p>
        <h2 className="text-2xl font-bold mb-4">About {p.title}</h2>
        <p className="leading-8 mb-4">{detail.history}</p>
        <p className="leading-8 mb-4">{detail.architecture}</p>
        <p className="leading-8">{detail.management}</p>
        {detail.source&&<a className="text-sm underline mt-4 inline-block" href={detail.source} target="_blank" rel="noopener noreferrer">Read the relevant local or operator information</a>}
      </section>
      <section className="mb-10 grid md:grid-cols-2 gap-5">
        <div className="rounded-2xl p-6 border" style={{borderColor:'var(--border-color)'}}><h2 className="text-xl font-bold mb-3">Visit recommendations</h2><p className="leading-7">Best suited for: {profile.suited}.</p><p className="leading-7 mt-3">Suggested visit: {profile.duration}. Combine it with nearby stops only when transport and opening conditions allow.</p></div>
        <div className="rounded-2xl p-6 border" style={{borderColor:'var(--border-color)'}}><h2 className="text-xl font-bold mb-3">Three highlights</h2><ul className="list-disc pl-5 leading-7">{profile.features.map(f=><li key={f}>{f}</li>)}</ul></div>
      </section>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10">
      <article className="space-y-9 leading-8">
        <section><h2 className="text-2xl font-bold mb-3">Essential visitor information</h2>
          <dl className="grid sm:grid-cols-[160px_1fr] border rounded-xl overflow-hidden" style={{borderColor:'var(--border-color)'}}>{[
            ['Place',p.title],['Type',p.kind],['Region','Hallstatt / Salzkammergut, Upper Austria, Austria'],['Location',profile.arrival],['Suggested time',profile.duration],['Best for',profile.suited],
          ].map(([label,value])=><div key={label} className="contents"><dt className="p-3 border-b font-semibold" style={{borderColor:'var(--border-color)',background:'var(--bg-secondary)'}}>{label}</dt><dd className="p-3 border-b" style={{borderColor:'var(--border-color)'}}>{value}</dd></div>)}</dl>
        </section>
        <section><h2 className="text-2xl font-bold mb-3">Opening and admission</h2><h3 className="font-semibold">When can I visit?</h3><p>{p.kind==='Nearby attraction'||p.kind==='Regional excursion'?'Visiting arrangements depend on the operator and season. Consult the official provider or posted entrance notice before travel.':'For the public-street portions of this guide, follow the municipality’s current access and conduct notices. Individual venues along the route may keep separate hours.'}</p><h3 className="font-semibold mt-4">Tickets and costs</h3><p>{profile.admission}</p></section>
        <section><h2 className="text-2xl font-bold mb-3">What makes this worth exploring?</h2><p>{p.highlight}</p><p className="mt-3">{detail.architecture}</p></section>
        <section><h2 className="text-2xl font-bold mb-3">Suggested route and walking plan</h2><p>{p.route}</p><ol className="list-decimal pl-6 mt-4 space-y-2">{profile.steps.map(step=><li key={step}>{step}</li>)}</ol><p className="mt-3">Keep your return transport time in mind, especially for cross-lake ferry connections and mountain lifts.</p></section>
        <section><h2 className="text-2xl font-bold mb-3">How to get there</h2><p>{profile.arrival}.</p><h3 className="font-semibold mt-4">Public transport</h3><p>Use the date-specific ÖBB rail or regional bus planner and check the final walking connection. If arriving at Hallstatt Bahnhof, factor in the lake ferry crossing.</p><h3 className="font-semibold mt-4">Driving and parking</h3><p>Follow designated visitor parking and local access signs. The historic centre and its viewpoints should be approached on permitted public paths, not by attempting to drive to a photograph location.</p></section>
        <section><h2 className="text-2xl font-bold mb-3">Before you go</h2><p>{p.practical}</p><p className="mt-3">For museums, mountain lifts and managed attractions, check the operator’s current notices for admission, opening dates and accessibility. A search-map listing is useful for navigation but does not guarantee that an attraction is open or that a route is permitted.</p></section>
        <section><h2 className="text-2xl font-bold mb-3">Photography and observation tips</h2><p>{profile.photos}</p><p className="mt-3">{p.highlight}</p></section>
        <section><h2 className="text-2xl font-bold mb-3">Where to stay nearby</h2><p>Staying in Hallstatt village keeps the historic centre close at hand but may involve restricted vehicle access and carrying luggage along narrow streets. Bad Goisern and Obertraun are alternative bases to compare for public transport connections, parking and mountain excursions. Choose accommodation by your departure timetable and mobility needs.</p></section>
        <section><h2 className="text-2xl font-bold mb-3">Frequently asked questions</h2><h3 className="font-semibold mt-4">What should I look for at {p.title}?</h3><p>{p.highlight}</p><h3 className="font-semibold mt-4">How long should I allow?</h3><p>{profile.duration}; allow extra time for the journey and changing conditions.</p><h3 className="font-semibold mt-4">How should I get there?</h3><p>{p.route}</p><h3 className="font-semibold mt-4">What should I check before leaving?</h3><p>{p.practical}</p><h3 className="font-semibold mt-4">Who looks after the site?</h3><p>{detail.management}</p></section>
        <section><h2 className="text-2xl font-bold mb-3">Useful sources for current conditions</h2><ul className="list-disc pl-6"><li><a className="underline" href="https://dachstein.salzkammergut.at/" target="_blank" rel="noopener noreferrer">Dachstein Salzkammergut tourism information</a></li><li><a className="underline" href="https://www.hallstatt.ooe.gv.at/" target="_blank" rel="noopener noreferrer">Municipality of Hallstatt</a></li><li><a className="underline" href="https://www.oebb.at/en/" target="_blank" rel="noopener noreferrer">ÖBB rail journey planner</a></li></ul></section>
      </article>
      <aside className="lg:sticky lg:top-8 h-fit rounded-2xl border p-6 space-y-4" style={{borderColor:'var(--border-color)',background:'var(--bg-secondary)'}}><h2 className="text-xl font-semibold">Plan your visit</h2><p className="text-sm">Area: Hallstatt / Salzkammergut, Upper Austria</p><p className="text-sm">Map destination: {p.query}</p><a href={maps} target="_blank" rel="noopener noreferrer" className="block text-center rounded-xl p-3 font-semibold" style={{background:'var(--accent)',color:'white'}}>View {p.title} on Google Maps</a><p className="text-xs" style={{color:'var(--text-secondary)'}}>The link targets this named place or the supplied Panoramic Viewpoint pin; review current access on arrival.</p></aside>
      </div>
      <section className="mt-14 pt-8 border-t" style={{borderColor:'var(--border-color)'}}><h2 className="text-2xl font-bold mb-5">Continue exploring</h2><div className="grid sm:grid-cols-3 gap-4">{suggestions.map(s=><Link className="rounded-xl border p-5 hover:underline" style={{borderColor:'var(--border-color)'}} key={s.slug} href={`/${locale}/guide/${s.slug}`}>{s.title}</Link>)}</div><Link className="inline-block mt-6 underline" href={`/${locale}/guide`}>All Hallstatt travel guides</Link></section>
    </div>
  </main><Footer/></>;
}
