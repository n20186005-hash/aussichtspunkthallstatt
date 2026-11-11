import Link from 'next/link';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {guidePages} from '@/lib/guidePages';
import {detailsFor} from '@/lib/guideDetails';
import {siteConfig} from '@/config';

type Params={params:Promise<{locale:string;slug:string}>};
export function generateStaticParams(){return guidePages.map(p=>({locale:'en',slug:p.slug}));}
export async function generateMetadata({params}:Params):Promise<Metadata>{
  const {locale,slug}=await params; const p=guidePages.find(x=>x.slug===slug);
  if(!p)return {};
  return {title:`${p.title} | Hallstatt Visitor Guide`,description:p.intro,alternates:{canonical:`https://aussichtspunkthallstatt.com/en/guide/${slug}`},openGraph:{title:p.title,description:p.intro,type:'article'}};
}
export default async function Article({params}:Params){
  const {locale,slug}=await params; const p=guidePages.find(x=>x.slug===slug);if(!p)notFound();
  const detail=detailsFor(slug,p.kind);
  const nearby=guidePages.filter(x=>x.slug!==slug&&x.kind===p.kind).slice(0,3);
  const suggestions=nearby.length?nearby:guidePages.filter(x=>x.slug!==slug).slice(0,3);
  const self=`https://aussichtspunkthallstatt.com/${locale}/guide/${slug}`;
  const isMainView=!['Nearby attraction','Regional excursion'].includes(p.kind) && slug!=='hallstatt-skywalk';
  const maps=isMainView?siteConfig.mapsUrl:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.query+', Austria')}`;
  const jsonLd={'@context':'https://schema.org','@type':'Article',headline:p.title,description:p.intro,mainEntityOfPage:self,author:{'@type':'Organization',name:'Hallstatt Visitor Guide'},dateModified:'2026-11-11',inLanguage:'en'};
  return <><Header/><main style={{color:'var(--text-primary)'}}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <div className="max-w-5xl mx-auto px-5 pt-10 pb-20">
      <nav className="text-sm mb-8" style={{color:'var(--text-secondary)'}}><Link href={`/${locale}`}>Hallstatt</Link> / <Link href={`/${locale}/guide`}>Travel guides</Link> / {p.kind}</nav>
      <p className="uppercase tracking-widest text-sm mb-3" style={{color:'var(--accent)'}}>{p.kind} · Hallstatt, Austria</p>
      <h1 className="font-bold text-4xl md:text-5xl leading-tight max-w-4xl">{p.title}</h1>
      <p className="text-lg leading-8 mt-6 mb-8 max-w-3xl" style={{color:'var(--text-secondary)'}}>{p.intro}</p>
      <div className="rounded-2xl overflow-hidden mb-10 relative"><img src={detail.photo} alt={`${p.title}: visitor photography of the Hallstatt area`} className="w-full object-cover max-h-[420px]"/><p className="text-xs px-4 py-2" style={{background:'var(--bg-tertiary)',color:'var(--text-secondary)'}}>{detail.credit || 'Hallstatt panorama from the existing site gallery. This is an area photograph, not necessarily the individual attraction.'}</p></div>
      <section className="rounded-2xl p-6 md:p-8 mb-10 border" style={{background:'var(--bg-secondary)',borderColor:'var(--border-color)'}}>
        <p className="uppercase tracking-wider text-xs mb-2" style={{color:'var(--accent)'}}>About this place · history & stewardship</p>
        <h2 className="text-2xl font-bold mb-4">About {p.title}</h2>
        <p className="leading-8 mb-4">{detail.history}</p>
        <p className="leading-8 mb-4">{detail.architecture}</p>
        <p className="leading-8">{detail.management}</p>
        {detail.source&&<a className="text-sm underline mt-4 inline-block" href={detail.source} target="_blank" rel="noopener noreferrer">Read the relevant local or operator information</a>}
      </section>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10">
      <article className="space-y-9 leading-8">
        <section><h2 className="text-2xl font-bold mb-3">What makes this worth exploring?</h2><p>{p.highlight}</p><p className="mt-3">{detail.architecture}</p></section>
        <section><h2 className="text-2xl font-bold mb-3">Suggested route and walking plan</h2><p>{p.route}</p><p className="mt-3">For a practical visit, start by confirming the map pin and your arrival stop, identify the public pedestrian approach, and set a turnaround time before beginning. Allow additional time if your route includes a hillside climb or paid attraction.</p></section>
        <section><h2 className="text-2xl font-bold mb-3">Before you go</h2><p>{p.practical}</p><p className="mt-3">For museums, mountain lifts and managed attractions, check the operator’s current notices for admission, opening dates and accessibility. A search-map listing is useful for navigation but does not guarantee that an attraction is open or that a route is permitted.</p></section>
        <section><h2 className="text-2xl font-bold mb-3">Photography and observation tips</h2><p>{p.highlight} A useful sequence is one wide view establishing the setting, one medium frame emphasising the distinctive feature, and one close architectural or landscape detail. Look at light and sightlines before choosing a position; keep paths clear.</p></section>
        <section><h2 className="text-2xl font-bold mb-3">Frequently asked questions</h2><h3 className="font-semibold mt-4">What should I look for at {p.title}?</h3><p>{p.highlight}</p><h3 className="font-semibold mt-4">How should I get there?</h3><p>{p.route}</p><h3 className="font-semibold mt-4">What should I check before leaving?</h3><p>{p.practical}</p><h3 className="font-semibold mt-4">Who looks after the site?</h3><p>{detail.management}</p></section>
        <section><h2 className="text-2xl font-bold mb-3">Useful sources for current conditions</h2><ul className="list-disc pl-6"><li><a className="underline" href="https://dachstein.salzkammergut.at/" target="_blank" rel="noopener noreferrer">Dachstein Salzkammergut tourism information</a></li><li><a className="underline" href="https://www.hallstatt.ooe.gv.at/" target="_blank" rel="noopener noreferrer">Municipality of Hallstatt</a></li><li><a className="underline" href="https://www.oebb.at/en/" target="_blank" rel="noopener noreferrer">ÖBB rail journey planner</a></li></ul></section>
      </article>
      <aside className="lg:sticky lg:top-8 h-fit rounded-2xl border p-6 space-y-4" style={{borderColor:'var(--border-color)',background:'var(--bg-secondary)'}}><h2 className="text-xl font-semibold">Plan your visit</h2><p className="text-sm">Area: Hallstatt / Salzkammergut, Upper Austria</p><p className="text-sm">Map destination: {p.query}</p><a href={maps} target="_blank" rel="noopener noreferrer" className="block text-center rounded-xl p-3 font-semibold" style={{background:'var(--accent)',color:'white'}}>View {p.title} on Google Maps</a><p className="text-xs" style={{color:'var(--text-secondary)'}}>The link targets this named place or the supplied Panoramic Viewpoint pin; review current access on arrival.</p></aside>
      </div>
      <section className="mt-14 pt-8 border-t" style={{borderColor:'var(--border-color)'}}><h2 className="text-2xl font-bold mb-5">Continue exploring</h2><div className="grid sm:grid-cols-3 gap-4">{suggestions.map(s=><Link className="rounded-xl border p-5 hover:underline" style={{borderColor:'var(--border-color)'}} key={s.slug} href={`/${locale}/guide/${s.slug}`}>{s.title}</Link>)}</div><Link className="inline-block mt-6 underline" href={`/${locale}/guide`}>All Hallstatt travel guides</Link></section>
    </div>
  </main><Footer/></>;
}
