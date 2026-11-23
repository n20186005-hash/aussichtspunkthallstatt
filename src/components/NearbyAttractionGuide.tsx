import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Header from './Header';
import Footer from './Footer';
import { nearbyAttractions, townNamesZh, type NearbyPlace } from '@/lib/nearbyAttractions';
import { extraPhotos, managementRoles, nearbyGuideNotes } from '@/lib/nearbyGuideNotes';
import { visitAdvice, visitFacts } from '@/lib/nearbyVisitFacts';
import type { Locale } from '@/lib/guidePages';

export const nearbyCopy = {
  title: { en: 'Places to visit around Hallstatt', de: 'Ausflugsziele rund um Hallstatt', zh: '哈尔施塔特周边景点' },
  gettingThere: { en: 'Getting there', de: 'Anreise', zh: '交通方式' },
  contact: { en: 'Management and visitor information', de: 'Verwaltung und Besucherinformation', zh: '管理主体与访客咨询' },
  about: { en: 'About', de: 'Über', zh: '关于' },
  visitAdvice: { en: 'Plan your visit', de: 'Besuch planen', zh: '游览建议' },
  walking: { en: 'Walking route', de: 'Weg zu Fuß', zh: '步行路线' },
  photoSpots: { en: 'Photo spots', de: 'Fotostandorte', zh: '拍照机位' },
  questions: { en: 'Frequently asked questions', de: 'Häufige Fragen', zh: '常见问答' },
  source: { en: 'Management source', de: 'Quelle zur Zuständigkeit', zh: '管理信息来源' },
  official: { en: 'Official visitor information', de: 'Offizielle Besucherinformation', zh: '官方访客资讯' },
  reviews: { en: 'Visitor ratings and reviews', de: 'Bewertungen und Erfahrungsberichte', zh: '游客评分与评价' },
  readReviews: { en: 'Read current Google Maps reviews', de: 'Aktuelle Bewertungen auf Google Maps lesen', zh: '在 Google 地图查看当前评分与评价' },
  photo: { en: 'Photo, resized', de: 'Foto, verkleinert', zh: '实景照片（已缩放）' },
  introduction: { en: 'Discover the area', de: 'Das Ziel entdecken', zh: '探索景点' },
  highlights: { en: 'Highlights', de: 'Besondere Merkmale', zh: '景区特色' },
  hours: { en: 'Opening hours', de: 'Öffnungszeiten', zh: '开放时间' },
  prices: { en: 'Tickets and prices', de: 'Eintritt und Preise', zh: '门票价格' },
  entrance: { en: 'Visitor approach', de: 'Zugang vor Ort', zh: '访客入口或步道起点' },
  discovery: { en: 'History and character', de: 'Geschichte und Charakter', zh: '发现魅力' },
  access: { en: 'Before you go', de: 'Vor dem Besuch', zh: '游览须知' },
  lodging: { en: 'Where to stay', de: 'Übernachten', zh: '住宿建议' },
  directions: { en: 'Address and directions', de: 'Adresse und Wegbeschreibung', zh: '交通指南' },
  seeHours: { en: 'Check opening times', de: 'Öffnungszeiten prüfen', zh: '查询开放时间' },
  seePrices: { en: 'Check official prices', de: 'Offizielle Preise prüfen', zh: '查询官方票价' },
  rail: {
    en: 'For rail and bus connections and the last return, check the timetable for your travel date.',
    de: 'Bahn- und Busverbindungen sowie die letzte Rückfahrt im Fahrplan für den Reisetag prüfen.',
    zh: '火车、公交接驳与末班返程请按出行日期查询。',
  },
};

const access = {
  trail: {
    en: 'Check signed access and local closures. A lift, car park or nearby facility may have its own operating hours and fees.',
    de: 'Zugang und Sperren vor Ort prüfen. Bergbahnen, Parkplätze und Einrichtungen können eigene Betriebszeiten und Gebühren haben.',
    zh: '以现场通行标识及封闭公告为准。缆车、停车场和周边设施可能有各自的开放时间与收费。',
  },
  museum: {
    en: 'Check the operator’s calendar for visiting hours, tickets and whether admission requires a tour or event booking.',
    de: 'Öffnungszeiten, Eintritt und gegebenenfalls Führungs- oder Veranstaltungsbuchung beim Betreiber prüfen.',
    zh: '查运营方日历，确认开放时间、票价，以及是否需要预约导览或活动。',
  },
  cave: {
    en: 'Check the guided-tour calendar, ticket options and access instructions in advance. Bring warm layers and shoes with grip.',
    de: 'Führungstermine, Ticketoptionen und Zugangshinweise vorab prüfen. Warme Kleidung und Schuhe mit Profil mitnehmen.',
    zh: '提前确认导览场次、票种和进洞方式。携带保暖衣物，穿防滑鞋。',
  },
  lift: {
    en: 'Check operating days, fares and the last descent before heading up. Weather can affect both lift service and walking access.',
    de: 'Betriebstage, Tarife und letzte Talfahrt vor dem Aufstieg prüfen. Das Wetter kann Bahn und Wege beeinflussen.',
    zh: '上山前检查营运日期、票价及末班下山缆车。天气会影响缆车和步道通行。',
  },
  boat: {
    en: 'Check the seasonal sailing schedule and return options before setting off. Verify whether the trip you want requires a reservation.',
    de: 'Saisonfahrplan und Rückfahrt vor der Abfahrt prüfen. Klären, ob die gewünschte Fahrt reserviert werden muss.',
    zh: '出发前查阅当季船班及返程方式，并确认所选航次是否需要预约。',
  },
};

const kindLabels = {
  trail: ['Outdoor site', 'Ausflugsziel im Freien', '户外景点'],
  museum: ['Cultural site', 'Kulturstätte', '文化景点'],
  cave: ['Guided underground visit', 'Unterirdische Führung', '地下导览'],
  lift: ['Mountain visit', 'Ausflugsziel am Berg', '高山景点'],
  boat: ['Lake and boat access', 'See mit Bootszugang', '湖泊及游船'],
} as const;

const lodgingByTown = {
  Hallstatt: ['Stay on the Hallstatt village side for an early start. For cross-lake accommodation, check the first crossing.', 'Für einen frühen Start auf der Hallstätter Ortsseite übernachten. Am Gegenufer die erste Überfahrt prüfen.', '若想清晨起步，宜住哈尔施塔特村庄一侧。住对岸时请查询首班渡船。'],
  Obertraun: ['Obertraun is a practical base for the cable car and valley cave. Check how far your lodging is from the actual entrance.', 'Obertraun eignet sich als Ausgangspunkt für Bergbahn und Talhöhle. Entfernung zur jeweiligen Einstiegsstelle prüfen.', '上特劳恩适合安排缆车与谷地洞穴行程，订房时留意住处到具体入口的距离。'],
  Gosau: ['Choose Gosau village for several valley outings, or stay near the lower lake for an early trail start.', 'Gosau als Basis für mehrere Talausflüge wählen. Für einen frühen Start am See bietet sich die Umgebung des Vorderen Gosausees an.', '连游多条山谷路线可住戈绍村。想一早走湖区步道，可选前戈绍湖附近。'],
  'Bad Goisern': ['Stay near central Bad Goisern for the museums and rail access. For a cliff walk, check how to reach the trailhead from your lodging.', 'Für Museen und Bahnanschluss im Ortszentrum übernachten. Für die Felswanderung den Weg von der Unterkunft zum Ausgangspunkt prüfen.', '参观博物馆或依赖火车时可选巴德戈伊瑟恩中心。安排岩壁徒步时，请另查住处到步道口的交通。'],
  'Bad Ischl': ['Stay near central Bad Ischl to visit the parks and museums on foot. For mountain outings, check your connection to the lift.', 'Für Parks und Museen zu Fuß im Zentrum übernachten. Bei Bergtouren die Verbindung zur Seilbahn prüfen.', '住巴德伊施尔中心可步行串游公园与博物馆。若安排高山行程，再查住处到缆车站的接驳。'],
  Altaussee: ['A village stay is useful for early lakeside walks. For the mine or Loser uplands, plan the uphill connection separately.', 'Eine Unterkunft im Ort eignet sich für frühe Uferspaziergänge. Bergwerk und Loser-Höhenzugang gesondert planen.', '住阿尔陶塞村方便清晨走湖岸。盐矿或洛瑟山高地需另外安排上坡交通。'],
  'Bad Aussee': ['Stay in central Bad Aussee to reach the Kammerhof on foot and use the town as a base for day trips.', 'Im Zentrum von Bad Aussee ist der Kammerhof zu Fuß erreichbar. Der Ort eignet sich als Basis für Tagesausflüge.', '住巴德奥塞市中心可步行抵达卡默霍夫，也便于安排周边一日游。'],
  Grundlsee: ['Choose the village shore for the main lake or the Gößl end for an early start toward Toplitzsee. Check the return boat before booking around it.', 'Für den Hauptsee am Ortsufer übernachten, für einen frühen Start zum Toplitzsee bei Gößl. Rückfahrt vor der Buchung prüfen.', '游主湖可住格伦德尔湖主村岸边，想一早去托普利茨湖可选格瑟尔。若依赖游船，订房前先查返程班次。'],
} as const;

const languageIndex = { en: 0, de: 1, zh: 2 } as const;

const management = {
  waterfall: (contact: string) => [
    `${contact} and the Inner Salzkammergut tourist board worked together to reopen the waterfall approach. Check their posted notices before using the upper path.`,
    `${contact} und Tourismusverband Inneres Salzkammergut ermöglichten gemeinsam die Wiederöffnung des Wasserfallzustiegs. Vor dem Aufstieg die örtlichen Hinweise beachten.`,
    `${contact}（哈尔施塔特市镇）与内萨尔茨卡默古特旅游协会共同承担了瀑布步道重新开放事宜。前往上段前请查当地公告。`,
  ],
  municipalInfo: (contact: string) => [
    `For local access and trail notices, consult ${contact} and the regional visitor information. Follow the signs on the approach for the segment you intend to walk.`,
    `Für Zugang und Weghinweise sind ${contact} und die regionale Tourismusinformation Anlaufstellen. Maßgeblich sind die Schilder am jeweiligen Wegabschnitt.`,
    `公共通行与步道公告可向当地市镇（${contact}）及区域旅游部门查询。选择路线时，请以该路段现场标识为准。`,
  ],
  alpineClub: (contact: string) => [
    `The hut belongs to ${contact}. The hut team publishes service and booking information for visitors using the alpine approach.`,
    `Die Hütte gehört dem Alpenverein Austria (${contact}). Das Hüttenteam informiert über Betrieb und Reservierungen am alpinen Zustieg.`,
    `山屋隶属奥地利高山协会奥地利分会（${contact}）。山屋团队负责公布开放与预约信息。`,
  ],
  cave: (contact: string) => [
    `${contact} runs the guided cave visits and publishes the operating calendar for this entrance.`,
    `${contact} organisiert die Höhlenführungen und veröffentlicht die Betriebszeiten für diesen Eingang.`,
    `达赫施泰因旅游公司（${contact}）负责洞穴导览，并公布这一洞口的参观时段。`,
  ],
  cableAccess: (contact: string) => [
    `${contact} provides operating information for lift access. Check trail-side notices separately for the walking section above the station.`,
    `${contact} informiert über den Seilbahnbetrieb. Für den Fußweg oberhalb der Station gelten die Hinweise am Weg.`,
    `缆车通行与营运消息由 ${contact} 发布。上站之后的步行路段，请另外查看步道现场告示。`,
  ],
  reservoir: (contact: string) => [
    `Energie AG operates the hydropower facilities associated with the lower lake. For the publicly accessible shoreline route, consult ${contact} and the regional visitor information.`,
    `Energie AG betreibt die Wasserkraftanlagen am Vorderen Gosausee. Hinweise zum öffentlichen Uferweg geben ${contact} und die regionale Tourismusinformation.`,
    `前湖相关水力发电设施由 Energie AG 运营。公共湖岸步道的访客信息请向戈绍市镇（${contact}）与区域旅游部门查询。`,
  ],
  heritageMuseum: (contact: string) => [
    `${contact} established this museum and presents the area’s working and domestic heritage. Check the museum programme for public access.`,
    `${contact} hat das Museum eingerichtet und vermittelt die lokale Arbeits- und Alltagsgeschichte. Das Museumsprogramm nennt die Besuchsmöglichkeiten.`,
    `博物馆由巴德戈伊瑟恩地方史协会（${contact}）创办，展示本地劳作与日常生活历史。参观以博物馆公告为准。`,
  ],
  estate: (contact: string) => [
    `${contact} looks after visitor access to the imperial estate and publishes opening and ticket information for the villa and park.`,
    `${contact} betreut den Besuch der kaiserlichen Anlage und veröffentlicht Öffnungszeiten und Eintrittsinformationen für Villa und Park.`,
    `皇帝别墅公司（${contact}）负责皇室园区的游客接待，公布别墅和公园的开放与门票信息。`,
  ],
  exhibitions: (contact: string) => [
    `${contact} presents exhibitions at the Marmorschlössl. For entry through the grounds, also consult the Kaiserpark visitor information.`,
    `${contact} veranstaltet die Ausstellungen im Marmorschlössl. Für den Zugang durch die Anlage gelten zusätzlich die Hinweise des Kaiserparks.`,
    `大理石小宫的展览由上奥地利州文化公司（${contact}）组织。穿过园区入场时，还需查皇室公园的访客信息。`,
  ],
  parkInfo: (contact: string) => [
    `The Kurpark is a public garden in central Bad Ischl. For announcements about public access and events, consult ${contact} and the city visitor information.`,
    `Der Kurpark ist ein öffentlicher Garten im Zentrum von Bad Ischl. Hinweise zu Zugang und Veranstaltungen geben ${contact} und die städtische Tourismusinformation.`,
    `疗养公园是巴德伊施尔市中心的公共花园。公共通行与活动消息可向巴德伊施尔市政府（${contact}）及市旅游部门查询。`,
  ],
  events: (contact: string) => [
    `The ${contact} team handles venue access, events and auditorium bookings. The neighbouring Kurpark provides an outdoor view of the building.`,
    `Das Team des ${contact} betreut Zugang, Veranstaltungen und Saalbuchungen. Vom benachbarten Kurpark ist das Gebäude von außen sichtbar.`,
    `会议与剧院中心（${contact}）的场馆团队负责进场、活动及观众厅预约。相邻疗养公园可观赏建筑外观。`,
  ],
  cityMuseum: (contact: string) => [
    `${contact} operates the villa as a museum and arranges guided visits to its furnished rooms.`,
    `${contact} betreibt die Villa als Museum und organisiert Führungen durch die eingerichteten Räume.`,
    `巴德伊施尔市博物馆（${contact}）运营别墅并安排室内导览。`,
  ],
  lake: (contact: string) => [
    `Österreichische Bundesforste administers the lake. For public waterfront access and local facilities, consult ${contact} and regional tourism information.`,
    `Der See wird von den Österreichischen Bundesforsten verwaltet. Zum öffentlichen Uferzugang und zu Einrichtungen informieren ${contact} und der Tourismusverband.`,
    `湖泊水域由奥地利联邦森林公司管理。公共岸线的通行与设施信息可向当地市镇（${contact}）及区域旅游部门查询。`,
  ],
  mine: (contact: string) => [
    `${contact} runs the visitor tours at the working salt mine. The tour operator publishes bookings and arrival instructions for the Altaussee entrance.`,
    `${contact} betreibt die Besucherführungen im aktiven Salzbergwerk. Buchung und Anreise zum Altausseer Eingang veröffentlicht der Führungsbetrieb.`,
    `仍在生产的盐矿由 Salzwelten 提供游客导览（${contact}）。请查看运营方发布的阿尔陶塞入口、预约和抵达说明。`,
  ],
  cityCollection: (contact: string) => [
    `The Kammerhofmuseum association runs ${contact} on behalf of the Town of Bad Aussee and publishes entry details for the exhibitions.`,
    `Der Verein Kammerhofmuseum leitet das ${contact} im Auftrag der Stadtgemeinde Bad Aussee und veröffentlicht die Besuchsinformationen.`,
    `巴德奥塞市政府委托卡默霍夫博物馆协会管理博物馆（${contact}）。参观事项由博物馆发布。`,
  ],
  lakeBoat: (contact: string) => [
    `Österreichische Bundesforste administers the lake. ${contact} operates seasonal visitor boats between the landings.`,
    `Den See verwalten die Österreichischen Bundesforste. Die ${contact} betreibt saisonale Besucherfahrten zwischen den Anlegestellen.`,
    `湖泊水域由奥地利联邦森林公司管理。季节性访客船班由 ${contact} 运营，连接两侧码头。`,
  ],
  boatApproach: (contact: string) => [
    `${contact} operates the boat leg across Toplitzsee. Follow the signed footpath from the eastern landing for pedestrian access to Kammersee.`,
    `${contact} betreibt die Bootsfahrt über den Toplitzsee. Vom Ostufer führt der markierte Fußweg zum Kammersee.`,
    `跨托普利茨湖的船段由 ${contact} 运营。从东岸码头前往卡默湖，请走有标记的步道。`,
  ],
  village: (contact: string) => [
    `Gößl is part of ${contact}. For information about public waterfront facilities, ask the municipality or the Ausseerland visitor office.`,
    `Gößl gehört zur ${contact}. Auskunft zu öffentlichen Uferanlagen geben die Gemeinde und die Ausseerland-Tourismusinformation.`,
    `格瑟尔村隶属格伦德尔湖市镇（${contact}）。公共湖岸设施可向市镇或奥瑟兰游客中心查询。`,
  ],
};

const managementSources: Partial<Record<keyof typeof management, string>> = {
  alpineClub: 'https://www.alpenverein.at/simonyhuette/',
  waterfall: 'https://www.tips.at/nachrichten/gmunden/land-leute/689606-zugang-zum-wasserfall-im-hallstaetter-echerntal-wieder-offen',
  cave: 'https://www.dachstein-salzkammergut.com/en/imprint',
  estate: 'https://www.kaiservilla.at/index.php/de/impressums',
  cityCollection: 'https://www.kammerhofmuseum.at/about/',
  reservoir: 'https://dachstein.salzkammergut.at/informieren/unsere-seen/gosausee.html',
  lake: 'https://www.bundesforste.at/fileadmin/publikationen/brochueren/Seenfolder.pdf',
  lakeBoat: 'https://www.bundesforste.at/fileadmin/publikationen/brochueren/Seenfolder.pdf',
  boatApproach: 'https://schifffahrt-grundlsee.at/de/fahrplan',
};

const mapContext: Partial<Record<NearbyPlace['slug'], string>> = {
  waldbachstrub: 'Wasserfall im Echerntal',
  echerntal: 'Malerweg und Waldbachbrücke',
  simonyhuette: 'Dachstein',
  'dachstein-ice-cave': 'Schönbergalm',
  'dachstein-mammoth-cave': 'Schönbergalm',
  koppenbruellerhoehle: 'Koppental',
  welterbespirale: 'Krippenstein',
  loeckermoos: 'Hochmoor Gosau',
  'ewige-wand': 'Höhen- und Sagenweg',
  'kurpark-bad-ischl': 'beim Kongress und TheaterHaus',
  katrin: 'Berg und Aussicht Bad Ischl',
  siriuskogl: 'Franz-Josefs-Warte',
  augstsee: 'Loser',
  grundlsee: 'See im Ausseerland',
  toplitzsee: 'See bei Gößl',
  kammersee: 'östlich vom Toplitzsee',
  goessl: 'Ortschaft am Grundlsee',
  loserfenster: 'Felsfenster am Loser',
};

const transportByTown = {
  Hallstatt: [
    'For the valley walks, start from Hallstatt Lahn on the village shore. If arriving by rail, allow time for the crossing from the railway station across the lake.',
    'Für die Talwanderungen im Ortsteil Hallstatt Lahn beginnen. Bei Bahnanreise Zeit für die Überfahrt vom Bahnhof am gegenüberliegenden Ufer einplanen.',
    '谷地步道从村庄侧的哈尔施塔特拉恩起步。搭火车抵达时，要为对岸车站至村庄的渡船接驳预留时间。',
  ],
  Obertraun: [
    'For Schönbergalm or the Krippenstein summit, look for the cable-car valley station at Winkl 34. For Koppenbrüllerhöhle, use the separate valley trail from Koppenrast.',
    'Zur Schönbergalm oder zum Krippensteingipfel über die Seilbahn-Talstation Winkl 34. Zur Koppenbrüllerhöhle den eigenen Talweg ab Koppenrast nehmen.',
    '舍恩贝格高山牧场和克里彭施泰因山顶从 Winkl 34 的缆车下站出发。科彭布吕勒洞走 Koppenrast 起步的独立谷地步道。',
  ],
  Gosau: [
    'For the lake trail, use the Gosausee stop or parking near the lower lake. For Löckermoos, follow the bog trail directions from Gosau rather than the lakeshore path.',
    'Für den Seeweg die Haltestelle Gosausee oder den Parkplatz am Vorderen See nutzen. Zum Löckermoos den Moorzustieg ab Gosau wählen.',
    '湖区步道从戈绍湖站或前湖附近停车区起步。前往勒克尔莫斯湿地，应从戈绍按湿地入口指示走。',
  ],
  'Bad Goisern': [
    'Use Bad Goisern station for the village museums. For Ewige Wand, check the separate trailhead on the published walking route before choosing a bus or parking stop.',
    'Für die Ortsmuseen den Bahnhof Bad Goisern nutzen. Zur Ewigen Wand vor der Wahl von Bushaltestelle oder Parkplatz den Ausgangspunkt der Wandertour prüfen.',
    '前往村里的博物馆可从巴德戈伊瑟恩火车站起步。去永恒岩壁前，先查官方徒步路线的独立起点，再选公交站或停车区。',
  ],
  'Bad Ischl': [
    'From Bad Ischl station, the town-centre sites are reached on foot. For the Katrin lift, use the valley station at Kaltenbachstraße 62.',
    'Ab Bahnhof Bad Ischl sind die Ziele im Zentrum zu Fuß erreichbar. Zur Katrin-Seilbahn die Talstation an der Kaltenbachstraße 62 ansteuern.',
    '由巴德伊施尔火车站可步行前往中心区景点。卡特林缆车下站在 Kaltenbachstraße 62。',
  ],
  Altaussee: [
    'From Bad Aussee, check bus 955 for Altaussee village. Allow extra time for the uphill mine entrance or mountain access in the Loser area.',
    'Ab Bad Aussee die Buslinie 955 nach Altaussee prüfen. Für den höher gelegenen Bergwerkseingang und den Loser-Bergzugang zusätzliche Zeit einplanen.',
    '从巴德奥塞前往阿尔陶塞村可查询 955 路公交。上坡去盐矿入口或洛瑟山区登山口时要另留时间。',
  ],
  'Bad Aussee': [
    'Use Bad Aussee station for rail connections and continue to Chlumeckyplatz in the town centre. Check the local bus if you want to avoid the walk from the station.',
    'Ab Bahnhof Bad Aussee zum Chlumeckyplatz im Zentrum weiterfahren oder gehen. Wer den Fußweg vermeiden möchte, kann den Ortsbus prüfen.',
    '搭火车到巴德奥塞后，再前往市中心的克卢梅茨基广场。若想减少步行，可查火车站到市中心的公交。',
  ],
  Grundlsee: [
    'From Bad Aussee, check bus 956 toward Grundlsee and Gößl. For Toplitzsee and Kammersee, continue on foot from the Gößl end and check the separate sailing.',
    'Ab Bad Aussee die Buslinie 956 Richtung Grundlsee und Gößl prüfen. Zu Toplitzsee und Kammersee ab Gößl zu Fuß weitergehen und die separate Bootsfahrt prüfen.',
    '从巴德奥塞可查往格伦德尔湖和格瑟尔的 956 路公交。托普利茨湖和卡默湖行程从格瑟尔一端继续步行，并另查游船。',
  ],
} satisfies Record<NearbyPlace['town'], readonly [string, string, string]>;

export function attractionMap(place: NearbyPlace) {
  const query = [place.title.de, mapContext[place.slug], place.address, 'Austria'].filter(Boolean).join(', ');
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default async function NearbyAttractionGuide({ place, locale }: { place: NearbyPlace; locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'guide' });
  const title = place.title[locale];
  const map = attractionMap(place);
  const notes = nearbyGuideNotes[place.slug];
  const facts = visitFacts[place.slug];
  const extraPhoto = extraPhotos[place.slug];
  const language = languageIndex[locale];
  const role = managementRoles[place.slug];
  const managementSource = managementSources[role];
  const routeSteps = place.route[locale].split(/(?<=。)|(?<=\.) +(?=\p{Lu})/u).filter(Boolean);
  const essentials = [
    [t('labelPlace'), title],
    [t('labelType'), kindLabels[place.kind][language]],
    [t('labelLocation'), place.address],
    [nearbyCopy.entrance[locale], facts.arrival[language]],
    [nearbyCopy.contact[locale], place.contact],
  ];
  const similar = nearbyAttractions.filter((candidate) => candidate.slug !== place.slug && candidate.town === place.town).slice(0, 3);

  return (
    <>
      <Header />
      <main style={{ color: 'var(--text-primary)' }}>
        <section className="relative isolate min-h-[28rem] sm:min-h-[34rem] flex items-end overflow-hidden">
          <img src={`/guide/nearby/${place.slug}.webp`} alt={title} className="absolute inset-0 -z-20 size-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to top, rgba(10,20,15,.95), rgba(10,20,15,.52) 55%, rgba(10,20,15,.34))' }} />
          <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 pt-24 pb-10 sm:pb-14 text-white">
            <nav className="text-sm mb-7 text-white/90">
              <Link className="hover:underline" href={`/${locale}`}>{t('breadcrumbHome')}</Link> / <Link className="hover:underline" href={`/${locale}/guide#nearby-attractions`}>{nearbyCopy.title[locale]}</Link>
            </nav>
            <p className="text-sm font-semibold tracking-wide mb-2">{locale === 'zh' ? townNamesZh[place.town] : place.town} · {locale === 'zh' ? '萨尔茨卡默古特' : 'Salzkammergut'}</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">{title}</h1>
            <p className="text-base sm:text-xl text-white/90 mt-4 mb-6 max-w-3xl">{facts.arrival[language]}</p>
            <div className="flex flex-wrap gap-2 sm:gap-3 text-sm font-medium">
              <a href={map} className="rounded-full px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">{t('asideViewMap', { title })}</a>
              <a href="#opening-hours" className="rounded-full px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">{nearbyCopy.hours[locale]}</a>
              <a href="#visitor-reviews" className="rounded-full px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">{nearbyCopy.reviews[locale]}</a>
            </div>
          </div>
        </section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <p className="mt-3 mb-8 text-xs" style={{ color: 'var(--text-muted)' }}>
            {nearbyCopy.photo[locale]} · <a className="underline" href={place.photo.source}>{place.photo.credit}</a>{' · '}
            <a className="underline" href={place.photo.licenseUrl}>{place.photo.license}</a>
          </p>
          <article className="destination-guide space-y-5 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.introduction[locale]}</h2>
              <p>{place.intro[locale]}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.visitAdvice[locale]}</h2>
              <p>{visitAdvice[place.slug][language]}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.highlights[locale]}</h2>
              <p>{place.highlight[locale]}</p>
            </section>
            <section className="rounded-2xl p-6 border" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
              <h2 className="font-display text-2xl font-bold mb-3">{nearbyCopy.about[locale]}{locale === 'zh' ? '' : ' '}{title}</h2>
              <p className="leading-7">{management[role](place.contact)[language]}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
                <a className="underline" href={place.source}>{nearbyCopy.official[locale]}</a>
                {managementSource && managementSource !== place.source && (
                  <a className="underline" href={managementSource}>{nearbyCopy.source[locale]}</a>
                )}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-3">{t('essentialTitle')}</h2>
              <dl className="rounded-xl border divide-y" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}>
                {essentials.map(([label, value]) => (
                  <div key={label} className="grid gap-x-5 p-3 sm:grid-cols-[12rem_1fr]">
                    <dt className="font-semibold">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <section id="opening-hours" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.hours[locale]}</h2>
              <p>{facts.hours[language]}</p>
              <a className="underline" href={facts.hoursSource ?? place.source}>{nearbyCopy.seeHours[locale]}</a>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.prices[locale]}</h2>
              <p>{facts.price[language]}</p>
              {facts.priceSource && <a className="underline" href={facts.priceSource}>{nearbyCopy.seePrices[locale]}</a>}
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.gettingThere[locale]}</h2>
              <p>{transportByTown[place.town][language]}</p>
              <p className="mt-2">{nearbyCopy.rail[locale]} <a className="underline" href={t('sourceOebbUrl')}>{t('sourceOebbName')}</a></p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.discovery[locale]}</h2>
              <p>{notes.background[language]}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.walking[locale]}</h2>
              <ol className="list-decimal pl-5 space-y-1">
                {routeSteps.map((step, index) => <li key={index}>{step}</li>)}
              </ol>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.access[locale]}</h2>
              <p>{access[place.kind][locale]}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.photoSpots[locale]}</h2>
              <p>{notes.photo[language]}</p>
              {extraPhoto && (
                <figure className="mt-4">
                  <img src={`/guide/nearby/${extraPhoto.file}.webp`} alt={extraPhoto.alt[language]} loading="lazy" className="w-full max-h-80 object-contain rounded-xl" style={{ background: 'var(--bg-secondary)' }} />
                  <figcaption className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {extraPhoto.alt[language]} · <a className="underline" href={extraPhoto.source}>{extraPhoto.credit}</a>{' · '}
                    <a className="underline" href={extraPhoto.licenseUrl}>{extraPhoto.license}</a>
                  </figcaption>
                </figure>
              )}
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.questions[locale]}</h2>
              <h3 className="font-semibold">{notes.question[language]}</h3>
              <p>{notes.answer[language]}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.lodging[locale]}</h2>
              <p>{lodgingByTown[place.town][language]}</p>
            </section>
            <section id="visitor-reviews" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.reviews[locale]}</h2>
              <a className="underline" href={map}>{nearbyCopy.readReviews[locale]}</a>
            </section>
            <section className="rounded-2xl border p-6" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}>
              <h2 className="text-2xl font-bold mb-2">{nearbyCopy.directions[locale]}</h2>
              <p>{place.address}</p>
              <p>{facts.arrival[language]}</p>
              <a className="underline inline-block mt-3" href={map}>{t('asideViewMap', { title })}</a>
            </section>
          </article>
          <section className="mt-14 pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
            <h2 className="text-2xl font-bold mb-5">{t('continueTitle')}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {similar.map((candidate) => (
                <Link key={candidate.slug} href={`/${locale}/guide/${candidate.slug}`} className="rounded-xl border p-5 hover:underline" style={{ borderColor: 'var(--border-color)' }}>
                  {candidate.title[locale]}
                </Link>
              ))}
            </div>
            <Link href={`/${locale}/guide#nearby-attractions`} className="inline-block mt-6 underline">{t('continueAll')}</Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
