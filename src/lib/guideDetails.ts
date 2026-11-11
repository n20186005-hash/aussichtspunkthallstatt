import type { Locale, Loc } from './guidePages';

export type Detail = {
  history: Loc;
  architecture: Loc;
  management: Loc;
  photo: string;
  credit?: string;
  source?: string;
};
// Image provenance is retained in source data for maintenance, not rendered to visitors.
export const attractionDetails: Record<string, Detail> = {
  'market-square': {
    history: {
      en: 'Marktplatz developed as the shared civic space of a salt-producing settlement squeezed between lake and mountain. Its compact scale reflects Hallstatt’s limited buildable land and the close relationship between trade, homes and public life.',
      de: 'Der Marktplatz entwickelte sich als gemeinsamer Gemeinderaum einer salzproduzierenden Siedlung, eingezwängt zwischen See und Berg. Sein kompakter Maßstab spiegelt Hallstatts begrenztes Bauland und die enge Beziehung von Handel, Wohnen und öffentlichem Leben.',
      zh: '市场广场是夹在湖与山之间、以产盐为生的聚落所共有的公共空间。它紧凑的尺度反映了哈尔施塔特有限的建筑用地，以及贸易、居住与公共生活之间的紧密关系。',
    },
    architecture: {
      en: 'Pastel facades, timber balconies and narrow adjoining passages form an intimate square rather than a broad formal plaza. Pause to compare the individual rooflines and shopfront rhythms.',
      de: 'Pastellfassaden, Holzbalkone und enge angrenzende Gassen bilden einen intimen Platz statt einer weiten repräsentativen Anlage. Bleiben Sie stehen, um die einzelnen Dachlinien und Ladenfrontrhythmen zu vergleichen.',
      zh: '柔彩立面、木阳台与狭窄相连的通道，构成一个亲切的小广场，而非宽阔的正式广场。不妨驻足，对比各自不同的屋顶线条与店铺节奏。',
    },
    management: {
      en: 'The market square is a public space within the municipality of Hallstatt. Street access and public-space arrangements fall under local civic rules; individual buildings and businesses have their own owners and operators.',
      de: 'Der Marktplatz ist ein öffentlicher Raum in der Marktgemeinde Hallstatt. Straßenzugang und öffentlicher Raum unterliegen lokalen Regeln; einzelne Gebäude und Betriebe haben eigene Eigentümer und Betreiber.',
      zh: '市场广场是哈尔施塔特市镇内的公共空间。街道通行与公共空间安排遵循当地市政规则；单体建筑与商户各有自己的业主与运营者。',
    },
    photo: '/guide/market-square.jpg',
    credit: 'Wikimedia Commons — Marktplatz, Hallstatt, 17.05.2019.jpg',
    source: 'https://www.hallstatt.ooe.gv.at/',
  },
  'evangelical-church': {
    history: {
      en: 'Hallstatt’s Protestant community has deep roots in the Salzkammergut’s Reformation history. Christuskirche, the waterside church familiar from panoramic photographs, serves the Hallstatt–Obertraun congregation.',
      de: 'Hallstatts evangelische Gemeinde hat tiefe Wurzeln in der Reformationsgeschichte des Salzkammerguts. Die Christuskirche, die wasserseitige Kirche aus Panoramafotos, dient der Gemeinde Hallstatt–Obertraun.',
      zh: '哈尔施塔特的福音派社群在萨尔茨卡默古特的宗教改革史中有深厚根基。从全景照片中熟悉的湖畔基督教堂，服务于哈尔施塔特—上特劳恩会众。',
    },
    architecture: {
      en: 'The slender tower and steep roof draw the eye above the waterfront buildings; from Gosaumühlstraße they help anchor the classic lake composition.',
      de: 'Der schlanke Turm und das steile Dach lenken den Blick über die Ufergebäude; von der Gosaumühlstraße aus verankern sie die klassische Seekomposition.',
      zh: '纤细的塔楼与陡坡屋顶把视线引向湖畔建筑之上；从 Gosaumühlstraße 望去，它们稳稳锚定了经典的湖景构图。',
    },
    management: {
      en: 'Christuskirche is a worship space of the Evangelische Pfarrgemeinde A.B. Hallstatt–Obertraun. The parish organises services and community use; visitor access must respect its religious function.',
      de: 'Die Christuskirche ist Gottesdienstraum der Evangelischen Pfarrgemeinde A.B. Hallstatt–Obertraun. Die Gemeinde organisiert Gottesdienste und Gemeinschaftsnutzung; der Besuch muss ihre religiöse Funktion respektieren.',
      zh: '基督教堂是哈尔施塔特—上特劳恩福音派 A.B. 堂区的礼拜场所。堂区组织礼拜与社区活动；参观须尊重其宗教功能。',
    },
    photo: '/guide/evangelical-church.jpg',
    credit: 'Wikimedia Commons — Hallstatt evangelische Kirche 20180206.jpg',
    source: 'https://www.evang-ooe.at/arbeitsbereiche/pfarrgemeinden?kirche=15',
  },
  'catholic-church': {
    history: {
      en: 'The Catholic parish church stands above the historic market settlement and preserves layers of medieval and later religious history. The parish’s heritage is closely linked with Hallstatt’s centuries of salt-working families.',
      de: 'Die Katholische Pfarrkirche steht über der historischen Marktsiedlung und bewahrt Schichten mittelalterlicher und späterer Religionsgeschichte. Das Erbe der Pfarre ist eng mit Hallstatts jahrhundertelangen Salzarbeiterfamilien verbunden.',
      zh: '天主教教堂区教堂矗立在历史市场聚落上方，保存着中世纪及后世宗教历史的层层积淀。堂区的传承与哈尔施塔特数百年来以采盐为业的家族紧密相连。',
    },
    architecture: {
      en: 'Its elevated position, Gothic elements and historic altars contrast with the lakeside Protestant church below. The hillside path offers a reading of Hallstatt’s vertical townscape.',
      de: 'Ihre erhöhte Lage, gotischen Elemente und historischen Altäre kontrastieren mit der Uferkirche darunter. Der Hangweg erschließt Hallstatts vertikale Ortslandschaft.',
      zh: '它高处的位置、哥特式元素与历史祭坛，与下方湖畔的新教教堂形成对比。山坡小径让人读懂哈尔施塔特垂直向的城镇格局。',
    },
    management: {
      en: 'The church is a Catholic parish worship and heritage site, cared for through its parish community rather than managed as a municipal park. Observe service times and any interior visitor restrictions.',
      de: 'Die Kirche ist katholische Pfarrkirche und Kulturerbe, gepflegt durch die Pfarrgemeinde und nicht als städtischer Park verwaltet. Beachten Sie Gottesdienstzeiten und etwaige Innenbeschränkungen.',
      zh: '教堂是天主教堂区礼拜与遗产场所，由堂区共同体照料，而非作为市政公园管理。请留意礼拜时间以及室内参观限制。',
    },
    photo: '/guide/catholic-church.jpg',
    credit: 'Wikimedia Commons — Hallstatt kath. Kirche Marienaltar Werktagsseite 01.jpg',
    source: 'https://www.hallstatt.net/about-hallstatt/sehenswertes-en-US/catholic-church-of-hallstatt/',
  },
  'hallstatt-ossuary': {
    history: {
      en: 'Hallstatt’s Beinhaus preserves the local custom of carefully arranging and decorating skulls, associated with a small mountain village where cemetery space was constrained. It offers a serious insight into memory and burial practices.',
      de: 'Hallstatts Beinhaus bewahrt den örtlichen Brauch, Schädel sorgfältig anzuordnen und zu bemalen, verbunden mit einem kleinen Bergdorf mit begrenztem Friedhofsraum. Es bietet einen ernsthaften Einblick in Erinnerung und Bestattung.',
      zh: '哈尔施塔特的人骨屋保留了当地精心摆放并绘制头骨的风俗，这与一个墓地空间有限的小山村有关。它让人严肃地理解记忆与丧葬习俗。',
    },
    architecture: {
      en: 'The small ossuary lies beside the elevated Catholic church and cemetery. Its interior arrangement is the main historic feature, rather than the dramatic lake-facing skyline.',
      de: 'Das kleine Beinhaus liegt neben der erhöhten katholischen Kirche und dem Friedhof. Seine Inneneinrichtung ist das Hauptmerkmal, nicht die dramatische Seesilhouette.',
      zh: '小巧的人骨屋位于高处天主教堂与墓园旁。其室内陈设才是主要的历史特征，而非朝向湖面的戏剧性天际线。',
    },
    management: {
      en: 'The Beinhaus belongs to the Catholic church and cemetery context. Entrance conditions and respectful conduct are determined locally by the parish and site custodians.',
      de: 'Das Beinhaus gehört zum Kontext von katholischer Kirche und Friedhof. Eintrittsbedingungen und respektvolles Verhalten werden vor Ort durch Pfarre und Stättenhüter bestimmt.',
      zh: '人骨屋属于天主教堂与墓园体系。入场条件与恭敬举止由堂区与场所管理者在本地规定。',
    },
    photo: '/guide/hallstatt-ossuary.jpg',
    credit: 'Wikimedia Commons — Hallstatt - Beinhaus 4a.jpg',
    source: 'https://www.hallstatt.net/ueber-hallstatt/ausfluege/kirchen-im-welterbe/beinhaus-hallstatt/',
  },
  'hallstatt-museum': {
    history: {
      en: 'The Hallstatt name is internationally important in archaeology: the Hallstatt culture takes its name from discoveries around this salt-mining region. The museum helps connect excavated objects and burial history to the modern village.',
      de: 'Der Name Hallstatt ist international in der Archäologie bedeutsam: Die Hallstatt-Kultur ist nach Funden um diese Salzbergbau-Region benannt. Das Museum verbindet ausgegrabene Objekte und Bestattungsgeschichte mit dem modernen Dorf.',
      zh: '哈尔施塔特之名在考古学中具有世界意义：哈尔施塔特文化正得名于这一采盐地区的发现。博物馆把出土器物与墓葬历史同现代村庄联系起来。',
    },
    architecture: {
      en: 'The museum is an indoor cultural stop amid the dense historic streets. Focus on exhibit context and the timeline of settlement rather than expecting a lookout platform.',
      de: 'Das Museum ist ein Innenkulturstopp mitten in den dichten historischen Straßen. Konzentrieren Sie sich auf Ausstellungskontext und Siedlungszeitstrahl statt auf eine Aussichtsplattform.',
      zh: '博物馆是密集历史街巷中的一处室内文化站点。请关注展品背景与聚落时间线，而非期待一处观景台。',
    },
    management: {
      en: 'Museum Hallstatt operates as a dedicated local heritage museum. Consult its own visitor desk or official listings for the current operator, exhibitions and admission arrangements.',
      de: 'Das Museum Hallstatt betreibt als eigenes lokales Kulturerbe-Museum. Erkundigen Sie sich am Besuchertresen oder in offiziellen Listen nach aktuellem Betreiber, Ausstellungen und Eintritt.',
      zh: '哈尔施塔特博物馆作为专门的地方遗产博物馆运营。当前运营方、展览与门票安排请直接咨询其访客台或官方名录。',
    },
    photo: '/guide/hallstatt-museum.jpg',
    credit: 'Wikimedia Commons — Hallstatt Museum.jpg',
    source: 'https://www.hallstatt.net/',
  },
  'salt-mine': {
    history: {
      en: 'Salt extraction made the Hallstatt area important long before the modern tourist village emerged. Archaeological discoveries in the Salzberg landscape reveal a very long continuity of mining and trade.',
      de: 'Der Salzabbau machte den Hallstatt-Raum lange vor dem modernen Touristendorf bedeutend. Archäologische Funde in der Salzberg-Landschaft zeigen eine sehr lange Kontinuität von Bergbau und Handel.',
      zh: '早在现代旅游村落出现之前，采盐就使哈尔施塔特地区举足轻重。Salzberg 地貌中的考古发现揭示出采矿与贸易极其悠久的延续。',
    },
    architecture: {
      en: 'This is an industrial-heritage underground experience: mine passages, interpretation and engineered visitor access are the main features rather than town-centre architecture.',
      de: 'Dies ist ein industriekulturelles Untertage-Erlebnis: Bergwerkstollen, Deutung und technischer Besucherzugang sind die Hauptmerkmale statt Stadtzentrumsarchitektur.',
      zh: '这是一处工业遗产式的地下体验：矿道、讲解与工程化的游客通道才是主要特色，而非城镇中心的建筑。',
    },
    management: {
      en: 'The visitor attraction is operated by Salzwelten GmbH. The company publishes mine-tour and Salzberg funicular schedules, age rules and ticket information.',
      de: 'Die Besucherattraktion wird von der Salzwelten GmbH betrieben. Das Unternehmen veröffentlicht Führungs- und Standseilbahnfahrpläne, Altersregeln und Ticketinformationen.',
      zh: '该景点由 Salzwelten GmbH 运营。公司发布矿洞导览与 Salzberg 登山小火车时刻表、年龄规定与票务信息。',
    },
    photo: '/guide/salt-mine.jpg',
    credit: 'Wikimedia Commons — Hallstatt - Salzwelten-Eingang.JPG',
    source: 'https://www.salzwelten.at/en/hallstatt/prices-opening-hours',
  },
  'lake-hallstatt': {
    history: {
      en: 'Hallstätter See was a natural transport and landscape corridor for settlements around the steep valley. The lake continues to shape how rail passengers approach the town from the opposite shore.',
      de: 'Der Hallstätter See war ein natürlicher Verkehrs- und Landschaftskorridor für Siedlungen um das steile Tal. Der See prägt weiterhin, wie Bahnreisende von der gegenüberliegenden Uferseite auf den Ort zukommen.',
      zh: '哈尔施塔特湖曾是陡峭山谷周边聚落的天然交通与景观走廊。湖泊至今仍在塑造铁路旅客从对岸接近小镇的方式。',
    },
    architecture: {
      en: 'Look for the meeting of waterside buildings, landing stages and dramatic mountain walls. The shoreline itself is the central landscape feature.',
      de: 'Achten Sie auf das Treffen von Ufergebäuden, Stegen und dramatischen Bergwänden. Das Ufer selbst ist das zentrale Landschaftsmerkmal.',
      zh: '留意湖畔建筑、码头与壮丽岩壁的交汇。岸线本身就是核心的景观要素。',
    },
    management: {
      en: 'Hallstätter See is a lake with multiple shoreline communities and users, not a single ticketed attraction. Public pathways, boats and individual landing stages have different responsible authorities.',
      de: 'Der Hallstätter See ist ein See mit mehreren Ufergemeinden und Nutzern, keine einzelne kostenpflichtige Attraktion. Öffentliche Wege, Boote und einzelne Stege haben verschiedene zuständige Stellen.',
      zh: '哈尔施塔特湖是多座湖畔聚落与使用者共有的湖泊，并非单一售票景点。公共步道、船只与各码头分属不同管理方。',
    },
    photo: '/guide/lake-hallstatt.jpg',
    credit: 'Wikimedia Commons — Hallstätter See 20180206.jpg',
    source: 'https://dachstein.salzkammergut.at/',
  },
  'five-fingers': {
    history: {
      en: 'The 5fingers platform belongs to modern alpine tourism on the Dachstein Krippenstein massif. Its design makes the high-altitude panorama accessible to visitors using the mountain lift system in suitable conditions.',
      de: 'Die 5Fingers-Plattform gehört zum modernen Alpintourismus am Dachstein-Krippenstein-Massiv. Ihre Konstruktion macht das Hochlandpanorama für Besucher mit dem Berglift bei passenden Bedingungen zugänglich.',
      zh: '五指平台属于达赫施泰因-克里彭施泰因山体的现代高山旅游。它的设计让游客在合适条件下借助登山缆车系统也能抵达高空全景。',
    },
    architecture: {
      en: 'Several projecting steel viewing fingers extend over the mountain edge, deliberately contrasting lightweight modern structures with sheer rock faces.',
      de: 'Mehrere auskragende Stahl-Blickfinger ragen über die Bergkante und stellen leichte moderne Bauwerke bewusst gegen die senkrechten Felswände.',
      zh: '几根悬挑的钢结构观指伸向山崖之外，刻意让轻盈的现代构造与陡峭岩壁形成对照。',
    },
    management: {
      en: 'Access is tied to the Dachstein Krippenstein cable-car and mountain visitor operation. The official mountain operator publishes seasonal lift and platform information.',
      de: 'Der Zugang hängt an der Dachstein-Krippenstein-Seilbahn und dem Bergbesucherbetrieb. Der offizielle Bergbetreiber veröffentlicht Saison-Lift- und Plattforminformationen.',
      zh: '通行与达赫施泰因-克里彭施泰因缆车及山地游客运营相连。官方山地运营方发布季节性缆车与平台信息。',
    },
    photo: '/guide/five-fingers.jpg',
    credit: 'Wikimedia Commons — 5 fingers 29-07-2013.jpg',
    source: 'https://www.dachstein-salzkammergut.com/en/summer/above-ground/5fingers',
  },
  obertraun: {
    history: {
      en: 'Obertraun is a separate Salzkammergut community on the lake’s eastern side and a gateway to Dachstein Krippenstein activities. Its setting offers a different perspective from the crowded Hallstatt village core.',
      de: 'Obertraun ist eine eigene Salzkammergut-Gemeinde an der Ostseite des Sees und ein Tor zu Dachstein-Krippenstein-Aktivitäten. Ihre Lage bietet eine andere Perspektive als der gedrängte Hallstatt-Kern.',
      zh: '上特劳恩是湖东侧一个独立的萨尔茨卡默古特社区，也是通往达赫施泰因-克里彭施泰因活动的门户。它的环境提供了与拥挤的哈尔施塔特核心区不同的视角。',
    },
    architecture: {
      en: 'The village and lakeside spaces sit beneath the steep Dachstein mountains; look for the transition from settled valley floors to alpine rock.',
      de: 'Das Dorf und die Uferflächen liegen unter den steilen Dachstein-Bergen; achten Sie auf den Übergang von besiedelten Talflächen zu alpinem Fels.',
      zh: '村庄与湖畔空间坐落于陡峭的达赫施泰因群山之下；留意从有人居住的谷底到高山岩壁的过渡。',
    },
    management: {
      en: 'Public spaces are administered under the municipality of Obertraun, while individual mountain facilities, accommodation and transport services have separate operators.',
      de: 'Öffentliche Räume werden von der Marktgemeinde Obertraun verwaltet, während einzelne Berganlagen, Unterkünfte und Verkehrsdienste separate Betreiber haben.',
      zh: '公共空间由上特劳恩市镇管理，而各山地设施、住宿与交通服务分属不同运营方。',
    },
    photo: '/guide/obertraun.jpg',
    credit: 'Wikimedia Commons — Obertraun, Austria (Unsplash).jpg',
    source: 'https://www.obertraun.ooe.gv.at/',
  },
};

const genericHistory: Record<string, Loc> = {
  Transport: {
    en: 'Hallstatt’s narrow valley and position against the lake shaped its unusual transport geography. The settlement remains best explored by combining designated arrival points with short pedestrian journeys.',
    de: 'Hallstatts enges Tal und Lage am See prägten seine ungewöhnliche Verkehrsgeografie. Die Siedlung erkundet man am besten, indem man ausgewiesene Ankunftspunkte mit kurzen Fußwegen verbindet.',
    zh: '哈尔施塔特狭窄的山谷与临湖的位置塑造了它独特的交通地理。最佳探索方式，仍是把指定的抵达点与短途步行结合起来。',
  },
  Seasonal: {
    en: 'Hallstatt’s salt-mining heritage and lakeside settlement predate modern sightseeing by many centuries. Seasonal conditions affect how the same historic streets and mountain views are experienced.',
    de: 'Hallstatts Salzbergbauerbe und Ufersiedlung sind Jahrhunderte älter als der moderne Tourismus. Saisonbedingungen beeinflussen, wie dieselben historischen Straßen und Bergblicke erlebt werden.',
    zh: '哈尔施塔特的采盐遗产与湖畔聚落比现代观光早了数个世纪。季节条件会影响人们体验同样的历史街道与山景的方式。',
  },
};
const genericHistoryDefault: Loc = {
  en: 'The village is part of the Hallstatt–Dachstein/Salzkammergut cultural landscape, where a long history of salt extraction and alpine settlement meets contemporary tourism.',
  de: 'Das Dorf gehört zur Kulturlandschaft Hallstatt–Dachstein/Salzkammergut, wo lange Salzgewinnung und alpine Siedlung auf zeitgenössischen Tourismus treffen.',
  zh: '村庄属于哈尔施塔特—达赫施泰因/萨尔茨卡默古特文化景观，悠久的采盐史与高山聚落在此与现代旅游相遇。',
};
const genericArchitecture: Loc = {
  en: 'Observe the compact houses, steep roofs and tiered village streets arranged between the lake and mountain walls. The historic silhouette remains the key visual landmark.',
  de: 'Beobachten Sie die kompakten Häuser, steilen Dächer und gestaffelten Dorfstraßen zwischen See und Bergwänden. Die historische Silhouette bleibt das zentrale visuelle Wahrzeichen.',
  zh: '留意湖与山壁之间紧凑的房屋、陡坡屋顶与层叠的村庄街道。历史轮廓始终是最关键的视觉地标。',
};
const genericManagement: Loc = {
  en: 'The Panoramic Viewpoint is a public streetside viewing location in Hallstatt, not a separately ticketed museum. The municipality governs local public-space rules; adjoining homes and premises remain privately or independently managed.',
  de: 'Der Aussichtspunkt ist ein öffentlicher Straßenblick in Hallstatt, kein separat kostenpflichtiges Museum. Die Marktgemeinde regelt lokale öffentliche Raumvorschriften; angrenzende Wohnungen und Betriebe bleiben privat oder unabhängig verwaltet.',
  zh: '观景点是哈尔施塔特一处公共街边观景位置，并非单独售票的博物馆。镇政府管理当地公共空间规则；相邻的住宅与场所仍由私人或独立管理。',
};

export function detailsFor(slug: string, kind: string): Detail {
  const named = attractionDetails[slug];
  if (named) return named;
  if (slug === 'hallstatt-skywalk')
    return {
      history: {
        en: 'The Salzberg above Hallstatt has long been associated with salt mining. The contemporary Skywalk viewing structure presents the historic lake settlement from a high vantage point.',
        de: 'Der Salzberg über Hallstatt ist seit langem mit Salzbergbau verbunden. Die zeitgenössische Skywalk-Plattform zeigt die historische Seesiedlung aus hoher Lage.',
        zh: '哈尔施塔特上方的 Salzberg 长期与采盐相关。现代的 Skywalk 观景结构从高处呈现这座历史悠久的湖畔聚落。',
      },
      architecture: {
        en: 'The projecting overlook frames the lake basin and village from above, distinctly different from the classic northern lakeside photograph.',
        de: 'Die auskragende Aussichtsplattform rahmt Seebecken und Dorf von oben, deutlich anders als das klassische nördliche Uferfoto.',
        zh: '悬挑的观景台从上方框住湖盆与村庄，与经典的湖北侧照片截然不同。',
      },
      management: {
        en: 'The Skywalk is part of the visitor experience promoted by Salzwelten Hallstatt. Check the operator’s current funicular and platform access notices.',
        de: 'Der Skywalk ist Teil des von Salzwelten Hallstatt beworbenen Besuchererlebnisses. Prüfen Sie die aktuellen Standseilbahn- und Plattform-Zugangshinweise des Betreibers.',
        zh: 'Skywalk 是萨尔茨韦尔滕哈尔施塔特所推广的游客体验的一部分。请查运营方当前登山小火车与平台通行公告。',
      },
      photo: '/guide/hallstatt-skywalk.jpg',
      credit: 'Wikimedia Commons — Aussichtsplattform Salzwelten Seeblick.jpg',
      source: 'https://www.salzwelten.at/en/hallstatt/prices-opening-hours',
    };
  const galleryBySlug: Record<string, number> = {
    'classic-postcard-view': 18, 'viewpoint-address': 1, 'best-time-for-photos': 9, 'hallstatt-in-rain': 19,
    'winter-viewpoint': 23, 'autumn-colours': 14, 'summer-visit': 20, 'spring-visit': 10,
    'photo-composition': 2, 'phone-photography': 3, 'walking-from-market-square': 11, 'hallstatt-half-day': 16,
    'hallstatt-one-day': 22, 'quiet-visit': 21, 'viewpoint-vs-skywalk': 8, 'hallstatt-train-ferry': 1,
    'hallstatt-bus-arrival': 4, 'hallstatt-parking': 7, 'accessible-visit': 14, 'family-visit': 11, 'historic-village-architecture': 21,
  };
  const index = galleryBySlug[slug] || 1;
  return {
    history: genericHistory[kind] || genericHistoryDefault,
    architecture: genericArchitecture,
    management: genericManagement,
    photo: `/gallery/panoramic-viewpoint-hallstatt-${index}.jpg`,
    source: 'https://www.hallstatt.ooe.gv.at/',
  };
}

export type { Locale };
