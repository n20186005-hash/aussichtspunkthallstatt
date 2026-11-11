// Editorial guide subjects. These are independent planning pages, not claims of
// operating hours, admission prices or site management.
// All visitor-facing text is provided per locale (en / de / zh).
export type Locale = 'en' | 'de' | 'zh';
export type Loc = Record<Locale, string>;
export type GuidePage = {
  slug: string;
  category: string; // stable key used for grouping / related links
  kind: Loc; // display label for the category
  title: Loc;
  intro: Loc;
  highlight: Loc;
  route: Loc;
  practical: Loc;
  query: Loc; // Google Maps search term (proper noun / place name)
};

export const guidePages: GuidePage[] = [
  {
    slug: 'classic-postcard-view',
    category: 'Photography',
    kind: { en: 'Photography', de: 'Fotografie', zh: '摄影' },
    title: {
      en: 'The Classic Hallstatt Postcard View',
      de: 'Der klassische Hallstätter Postkarten-Blick',
      zh: '哈尔施塔特经典明信片视角',
    },
    intro: {
      en: 'The northern lakeside perspective combines tightly packed houses, the church tower and steep mountain slopes in a single composition. The famous photograph is made from a public streetside viewpoint, not from a private balcony.',
      de: 'Die nördliche Seesicht vereint dicht aneinandergereihte Häuser, den Kirchturm und steile Berghänge in einem Bild. Das berühmte Foto entsteht von einem öffentlichen Straßenaussichtspunkt, nicht von einem privaten Balkon.',
      zh: '从湖畔北侧望去，密集的民居、教堂尖塔与陡峭的山坡共同构成一幅画面。这张著名的照片是在公共街边观景点拍摄的，并非来自私人阳台。',
    },
    highlight: {
      en: 'Look for the changing layers of roofs and their reflection when the lake is calm. A slightly wider frame shows how small the village is against the Dachstein landscape.',
      de: 'Achten Sie auf die sich verändernden Dachebenen und ihr Spiegelbild bei ruhigem See. Ein etwas weiterer Rahmen zeigt, wie klein das Dorf vor der Dachstein-Landschaft wirkt.',
      zh: '留意层叠的屋顶，以及湖面平静时的倒影。稍微拉宽取景，能看出村庄在达赫施泰因群山衬托下显得多么小巧。',
    },
    route: {
      en: 'Walk north from the market-square area on the lakeside streets toward Gosaumühlstraße; follow local pedestrian signs and keep access roads clear.',
      de: 'Gehen Sie vom Bereich des Marktplatzes auf den Uferstraßen nach Norden Richtung Gosaumühlstraße; folgen Sie den örtlichen Fußgängerhinweisen und halten Sie Zufahrtswege frei.',
      zh: '从市场广场一带沿湖畔街道向北，朝 Gosaumühlstraße 方向步行；留意当地步行标识，不要占用进出车道。',
    },
    practical: {
      en: 'Use a short stop and a quiet camera setup. Never step into the road or residents’ entrances to reproduce an image.',
      de: 'Machen Sie einen kurzen Halt mit ruhiger Kameraeinstellung. Betreten Sie niemals die Fahrbahn oder private Eingänge, um ein Bild zu wiederholen.',
      zh: '短暂停留、安静取景即可。切勿为了复刻画面而站上车道或进入居民出入口。',
    },
    query: {
      en: 'Panoramic Viewpoint Hallstatt Gosaumühlstraße 67',
      de: 'Aussichtspunkt Hallstatt Gosaumühlstraße 67',
      zh: '哈尔施塔特观景点 Gosaumühlstraße 67',
    },
  },
  {
    slug: 'viewpoint-address',
    category: 'Navigation',
    kind: { en: 'Navigation', de: 'Navigation', zh: '导航' },
    title: {
      en: 'Panoramic Viewpoint Address and Map',
      de: 'Adresse und Karte zum Aussichtspunkt',
      zh: '观景点地址与地图',
    },
    intro: {
      en: 'Visitors searching for Gosaumühlstraße 67 are usually looking for the familiar northern Hallstatt lake photograph rather than the elevated Skywalk above the village.',
      de: 'Besucher, die nach Gosaumühlstraße 67 suchen, meinen meist das vertraute nördliche Hallstätter Seefoto und nicht den erhöhten Skywalk oberhalb des Ortes.',
      zh: '搜索 Gosaumühlstraße 67 的游客，通常想找的是大家熟悉的哈尔施塔特湖北侧照片，而非村庄上方的 Skywalk 高空平台。',
    },
    highlight: {
      en: 'The lakeside viewpoint faces back toward central Hallstatt. Check the actual map pin before leaving because similarly named viewpoints refer to different places.',
      de: 'Der Aussichtspunkt am See blickt zurück zum Zentrum von Hallstatt. Prüfen Sie vor der Abfahrt den tatsächlichen Kartenpin, denn ähnlich benannte Punkte meinen verschiedene Orte.',
      zh: '湖畔观景点面向哈尔施塔特中心。出发前请核对实际地图标记，因为名称相近的观景点其实指向不同地点。',
    },
    route: {
      en: 'From central Hallstatt continue toward the northern edge of the village; choose the pedestrian approach indicated by current local signs.',
      de: 'Gehen Sie vom Zentrum Hallstatts zum nördlichen Ortsrand; wählen Sie den Fußweg, den die aktuellen örtlichen Schilder anzeigen.',
      zh: '从哈尔施塔特中心继续前往村庄北端，按当地最新标识选择步行路线。',
    },
    practical: {
      en: 'The address is a navigation aid, not a promise of vehicle access or parking at the camera position.',
      de: 'Die Adresse dient der Orientierung, sie garantiert keinen Fahrzeugzugang oder Parkplatz an der Fotostelle.',
      zh: '地址只是导航参考，并不代表可在拍摄点驾车直达或停车。',
    },
    query: {
      en: 'Gosaumühlstraße 67 4830 Hallstatt',
      de: 'Gosaumühlstraße 67 4830 Hallstatt',
      zh: 'Gosaumühlstraße 67 4830 Hallstatt',
    },
  },
  {
    slug: 'best-time-for-photos',
    category: 'Photography',
    kind: { en: 'Photography', de: 'Fotografie', zh: '摄影' },
    title: {
      en: 'Best Time to Photograph Hallstatt',
      de: 'Beste Zeit für Fotos von Hallstatt',
      zh: '哈尔施塔特最佳拍摄时间',
    },
    intro: {
      en: 'Light direction, weather, visitor numbers and reflections all affect the postcard view. There is no single hour that guarantees a clear lake or empty foreground.',
      de: 'Lichtrichtung, Wetter, Besucherzahl und Spiegelungen beeinflussen den Postkartenblick. Keine Stunde garantiert einen klaren See oder einen leeren Vordergrund.',
      zh: '光线方向、天气、游客数量和倒影都会影响明信片般的画面。没有任何一个固定时段能保证湖面清澈或前景无人。',
    },
    highlight: {
      en: 'Morning may provide quieter conditions; late-day light can add warm tones to the facades. Cloud cover can make mountain layers more atmospheric.',
      de: 'Morgens kann es ruhiger sein; das späte Tageslicht färbt die Fassaden warm. Bewölkung lässt die Bergschichten stimmungsvoller wirken.',
      zh: '清晨往往更安静；傍晚的光线会给建筑立面染上暖色。云层则能让层叠的山峦更显氛围。',
    },
    route: {
      en: 'Plan a first visit to the lakeside viewpoint, then return only if your schedule and local conditions allow.',
      de: 'Planen Sie zunächst einen Besuch des Seeblicks, und kehren Sie nur zurück, wenn Zeitplan und örtliche Bedingungen es erlauben.',
      zh: '先安排一次到湖畔观景点的探访，只有在行程与当地条件允许时再考虑重访。',
    },
    practical: {
      en: 'Check sunrise, sunset and weather for your specific date. Stay on permitted public paths even when photography conditions are ideal.',
      de: 'Prüfen Sie für Ihr Datum Sonnenaufgang, Sonnenuntergang und Wetter. Bleiben Sie auf erlaubten öffentlichen Wegen, selbst bei idealen Fotobedingungen.',
      zh: '查询当天具体的日出、日落与天气。即便拍摄条件理想，也请留在允许的公共步道。',
    },
    query: {
      en: 'Panoramic Viewpoint Hallstatt',
      de: 'Aussichtspunkt Hallstatt',
      zh: '哈尔施塔特观景点',
    },
  },
  {
    slug: 'hallstatt-in-rain',
    category: 'Weather',
    kind: { en: 'Weather', de: 'Wetter', zh: '天气' },
    title: {
      en: 'Visiting Hallstatt in Rain',
      de: 'Hallstatt bei Regen besuchen',
      zh: '雨天游览哈尔施塔特',
    },
    intro: {
      en: 'Low cloud and rain can hide the mountains but bring out the village’s rooflines and lakeside atmosphere. Slippery pavement changes how to explore.',
      de: 'Tiefe Wolken und Regen können die Berge verbergen, lassen aber die Dächer und die Seefläche des Dorfes hervortreten. Glatter Belag verändert die Art des Erkundens.',
      zh: '低云和雨水会遮住群山，却更凸显村庄的屋顶线条与湖畔氛围。湿滑的路面会改变探索的方式。',
    },
    highlight: {
      en: 'Photograph architectural details and mist over the lake rather than waiting for a perfect mountain panorama.',
      de: 'Fotografieren Sie architektonische Details und Nebel über dem See, statt auf ein perfektes Bergpanorama zu warten.',
      zh: '与其等待完美的山景，不如拍摄建筑细节和湖面上的薄雾。',
    },
    route: {
      en: 'Keep walking sections short between sheltered stops in the village and avoid exposed or closed paths.',
      de: 'Halten Sie die Gehstrecken zwischen überdachten Haltpunkten im Ort kurz und meiden Sie freie oder gesperrte Wege.',
      zh: '在村庄内有遮挡的停留点之间保持短距离步行，避开空旷或封闭的路段。',
    },
    practical: {
      en: 'Bring waterproof shoes and protect camera equipment. Check for weather-related restrictions before taking hillside routes.',
      de: 'Tragen Sie wasserdichte Schuhe und schützen Sie die Kameraausrüstung. Prüfen Sie wetterbedingte Einschränkungen, bevor Sie Hangwege nehmen.',
      zh: '穿防水鞋并保护好摄影器材。走山坡路段前，先确认是否有天气相关的管制。',
    },
    query: {
      en: 'Hallstatt Austria',
      de: 'Hallstatt Österreich',
      zh: '哈尔施塔特 奥地利',
    },
  },
  {
    slug: 'winter-viewpoint',
    category: 'Seasonal',
    kind: { en: 'Seasonal', de: 'Saisonal', zh: '季节' },
    title: {
      en: 'Hallstatt Viewpoint in Winter',
      de: 'Hallstatt Aussichtspunkt im Winter',
      zh: '冬季的哈尔施塔特观景点',
    },
    intro: {
      en: 'Snow on rooftops can transform the familiar view, but icy streets, reduced daylight and winter transport timetables need extra planning.',
      de: 'Schnee auf den Dächern verwandelt den vertrauten Blick, doch vereiste Straßen, kürzere Tageslichtdauer und Winterfahrpläne erfordern zusätzliche Planung.',
      zh: '屋顶积雪会让熟悉的景色焕然一新，但结冰的街道、缩短的日照与冬季交通时刻表需要额外规划。',
    },
    highlight: {
      en: 'Use the contrast between pastel buildings, dark water and snow-covered slopes as the visual focus.',
      de: 'Nutzen Sie den Kontrast zwischen pastellfarbenen Gebäuden, dunklem Wasser und verschneiten Hängen als Bildmittelpunkt.',
      zh: '以柔色彩建筑、幽深湖面与积雪山坡之间的对比作为视觉焦点。',
    },
    route: {
      en: 'Choose cleared pedestrian streets from the village centre; do not assume summer footpaths remain open.',
      de: 'Wählen Sie geräumte Fußgängerstraßen vom Ortszentrum; gehen Sie nicht davon aus, dass Sommerwege offen bleiben.',
      zh: '从村中心选择已清雪的步行街道；不要以为夏季步道冬季仍开放。',
    },
    practical: {
      en: 'Wear slip-resistant footwear and confirm transport, access and daylight on the day of travel.',
      de: 'Tragen Sie rutschfeste Schuhe und klären Sie am Reisetag Verkehr, Zugang und Tageslicht.',
      zh: '穿防滑鞋，并在出行当天确认交通、通行与日照情况。',
    },
    query: {
      en: 'Panoramic Viewpoint Hallstatt',
      de: 'Aussichtspunkt Hallstatt',
      zh: '哈尔施塔特观景点',
    },
  },
  {
    slug: 'autumn-colours',
    category: 'Seasonal',
    kind: { en: 'Seasonal', de: 'Saisonal', zh: '季节' },
    title: {
      en: 'Hallstatt in Autumn',
      de: 'Hallstatt im Herbst',
      zh: '秋天的哈尔施塔特',
    },
    intro: {
      en: 'Autumn changes the hillside colours behind the village while lake conditions and cloud cover vary day by day.',
      de: 'Der Herbst verändert die Hangfarben hinter dem Dorf, während Seebedingungen und Bewölkung von Tag zu Tag wechseln.',
      zh: '秋天改变了村庄背后的山坡色彩，而湖面状况与云量也每日不同。',
    },
    highlight: {
      en: 'Include tree-covered slopes in a wide photograph and take a second closer frame of the waterfront.',
      de: 'Nehmen Sie bewachsene Hänge in ein Weitbild auf und machen Sie ein zweites, näheres Bild der Uferzone.',
      zh: '在广角照片中纳入林木覆盖的山坡，再补一张水畔的近景。',
    },
    route: {
      en: 'Combine the northern viewpoint with a slow walk through the central lanes if the weather is stable.',
      de: 'Verbinden Sie den nördlichen Aussichtspunkt mit einem langsamen Spaziergang durch die zentralen Gassen, wenn das Wetter stabil ist.',
      zh: '若天气稳定，可将北侧观景点与中心小巷的慢行结合。',
    },
    practical: {
      en: 'Expect shorter daylight as the season progresses and check seasonal schedules for other attractions.',
      de: 'Rechnen Sie im Verlauf der Saison mit kürzerem Tageslicht und prüfen Sie Saisonfahrpläne anderer Attraktionen.',
      zh: '随着季节推进日照变短，并查询其他景点的季节性开放安排。',
    },
    query: {
      en: 'Hallstatt Austria',
      de: 'Hallstatt Österreich',
      zh: '哈尔施塔特 奥地利',
    },
  },
  {
    slug: 'summer-visit',
    category: 'Seasonal',
    kind: { en: 'Seasonal', de: 'Saisonal', zh: '季节' },
    title: {
      en: 'Hallstatt in Summer',
      de: 'Hallstatt im Sommer',
      zh: '夏季的哈尔施塔特',
    },
    intro: {
      en: 'Longer daylight creates more options for walking and photos, while popular central streets and viewpoints can be busy.',
      de: 'Längeres Tageslicht eröffnet mehr Möglichkeiten zum Gehen und Fotografieren, während beliebte Zentralstraßen und Aussichtspunkte voll sein können.',
      zh: '更长的日照带来更多散步与拍摄选择，但热门的中心街道和观景点可能人潮拥挤。',
    },
    highlight: {
      en: 'Explore beyond the single postcard frame: architectural details, changing reflections and the surrounding mountain backdrop.',
      de: 'Erkunden Sie mehr als den einen Postkartenrahmen: architektonische Details, wechselnde Spiegelungen und das umgebende Bergpanorama.',
      zh: '不要只停留在单一张明信片画面：去发现建筑细节、变化的倒影与周围的山景背景。',
    },
    route: {
      en: 'Arrive by your chosen public transport, visit the viewpoint on foot and continue to quieter permitted public areas.',
      de: 'Reisen Sie mit dem gewählten öffentlichen Verkehrsmittel an, besuchen Sie den Aussichtspunkt zu Fuß und gehen Sie weiter zu ruhigeren erlaubten öffentlichen Bereichen.',
      zh: '乘选定的公共交通抵达，步行前往观景点，再继续前往更安静的允许公共区域。',
    },
    practical: {
      en: 'Carry water, use sun protection and leave room for queues and transport transfers.',
      de: 'Nehmen Sie Wasser mit, schützen Sie sich vor der Sonne und rechnen Sie mit Warteschlangen und Umstiegen.',
      zh: '带好饮水、做好防晒，并为排队与交通换乘留出时间。',
    },
    query: {
      en: 'Hallstatt Austria',
      de: 'Hallstatt Österreich',
      zh: '哈尔施塔特 奥地利',
    },
  },
  {
    slug: 'spring-visit',
    category: 'Seasonal',
    kind: { en: 'Seasonal', de: 'Saisonal', zh: '季节' },
    title: {
      en: 'Hallstatt in Spring',
      de: 'Hallstatt im Frühling',
      zh: '春天的哈尔施塔特',
    },
    intro: {
      en: 'Spring weather around the lake can change quickly. The village offers striking contrasts between fresh foliage and lingering snow on the high peaks.',
      de: 'Das Frühlingswetter am See kann schnell wechseln. Das Dorf bietet starke Kontraste zwischen frischem Laub und verbleibendem Schnee auf den hohen Gipfeln.',
      zh: '湖区的春季天气变化很快。村庄呈现出新绿与高峰残雪之间的鲜明对比。',
    },
    highlight: {
      en: 'Look for light on the waterfront and mountain layers rather than expecting every elevated trail to be snow-free.',
      de: 'Suchen Sie nach Licht an der Uferzone und auf den Bergschichten, statt zu erwarten, dass jeder höhere Weg schneefrei ist.',
      zh: '留意水畔与山峦层次上的光线，而不是指望每条高处步道都已无雪。',
    },
    route: {
      en: 'Use the walkable village core as your base and treat higher excursions as conditional on current access.',
      de: 'Nutzen Sie das gut begehbare Ortszentrum als Basis und betrachten Sie höhere Ausflüge als abhängig vom aktuellen Zugang.',
      zh: '以可步行的村庄核心为基地，将较高处的游览视为视当前通行情况而定。',
    },
    practical: {
      en: 'Pack layers and check conditions for mountain attractions separately.',
      de: 'Packen Sie Schichten ein und prüfen Sie die Bedingungen für Bergattraktionen separat.',
      zh: '准备可增减的衣物，并单独查询山地景点的状况。',
    },
    query: {
      en: 'Hallstatt Austria',
      de: 'Hallstatt Österreich',
      zh: '哈尔施塔特 奥地利',
    },
  },
  {
    slug: 'photo-composition',
    category: 'Photography',
    kind: { en: 'Photography', de: 'Fotografie', zh: '摄影' },
    title: {
      en: 'Hallstatt Photography Composition Guide',
      de: 'Kompositionshilfe für Hallstatt-Fotos',
      zh: '哈尔施塔特摄影构图指南',
    },
    intro: {
      en: 'The classic Hallstatt scene works because the village forms a diagonal between water and mountains. Small changes in framing can tell very different stories.',
      de: 'Die klassische Hallstatt-Szene funktioniert, weil das Dorf eine Diagonale zwischen Wasser und Bergen bildet. Kleine Änderungen im Rahmen erzählen sehr verschiedene Geschichten.',
      zh: '经典的哈尔施塔特画面之所以成立，是因为村庄在水与山之间构成一条斜线。取景的微小变化就能讲述截然不同的故事。',
    },
    highlight: {
      en: 'Try a wide view with lake foreground, a medium view centred on the church, and a detail frame of facades. Keep a level horizon.',
      de: 'Versuchen Sie eine Weitsicht mit See im Vordergrund, eine mittlere Sicht auf die Kirche und ein Detailbild der Fassaden. Halten Sie den Horizont gerade.',
      zh: '尝试三种画面：以湖面为前景的远景、以教堂为中心的居中景，以及建筑立面的细节特写。保持水平线平直。',
    },
    route: {
      en: 'Take photos from safe public stopping points along the allowed lakeside walk rather than moving into traffic.',
      de: 'Fotografieren Sie von sicheren öffentlichen Haltpunkten entlang des erlaubten Uferwegs, statt in den Verkehr zu treten.',
      zh: '在允许的湖畔步道上的安全公共停留点拍摄，而不是走入车流。',
    },
    practical: {
      en: 'Tripods must not obstruct narrow paths. Respect homes, windows and people who do not want to be photographed.',
      de: 'Stative dürfen schmale Wege nicht blockieren. Respektieren Sie Wohnungen, Fenster und Menschen, die nicht fotografiert werden wollen.',
      zh: '三脚架不得阻碍狭窄步道。尊重住宅、窗户以及不愿被拍摄的人。',
    },
    query: {
      en: 'Panoramic Viewpoint Hallstatt',
      de: 'Aussichtspunkt Hallstatt',
      zh: '哈尔施塔特观景点',
    },
  },
  {
    slug: 'phone-photography',
    category: 'Photography',
    kind: { en: 'Photography', de: 'Fotografie', zh: '摄影' },
    title: {
      en: 'Photographing Hallstatt with a Phone',
      de: 'Hallstatt mit dem Handy fotografieren',
      zh: '用手机拍摄哈尔施塔特',
    },
    intro: {
      en: 'A phone camera can capture the postcard scene well without specialist equipment, especially when the lake and sky have similar brightness.',
      de: 'Eine Handykamera kann die Postkartenszene gut einfangen, ohne Fachausrüstung, besonders wenn See und Himmel ähnlich hell sind.',
      zh: '手机镜头也能很好地记录明信片般的画面，无需专业器材，尤其在湖面与天空亮度接近时。',
    },
    highlight: {
      en: 'Tap on the brighter sky to manage exposure, then capture a second frame for darker building details. Avoid excessive digital zoom.',
      de: 'Tippen Sie auf den helleren Himmel, um die Belichtung zu steuern, und machen Sie ein zweites Bild für dunklere Gebäudedetails. Vermeiden Sie zu starke digitale Vergrößerung.',
      zh: '点击较亮的的天空以控制曝光，再补拍一张较暗建筑细节的构图。避免过度数码变焦。',
    },
    route: {
      en: 'Stop at a safe public place, photograph the wide scene, then continue toward the centre for street-level details.',
      de: 'Halten Sie an einem sicheren öffentlichen Ort, fotografieren Sie die Weitsicht und gehen Sie dann Richtung Zentrum für Straßendetails.',
      zh: '在安全公共位置停留，先拍远景，再走向中心拍摄街面细节。',
    },
    practical: {
      en: 'Use both hands or a stable rail without blocking other visitors. Check your photo before walking away.',
      de: 'Halten Sie das Handy mit beiden Händen oder an einem stabilen Geländer, ohne andere zu blockieren. Prüfen Sie das Bild, bevor Sie weitergehen.',
      zh: '用双手或扶稳栏杆拍摄，不要挡住其他游客。走开前查看一下照片。',
    },
    query: {
      en: 'Panoramic Viewpoint Hallstatt',
      de: 'Aussichtspunkt Hallstatt',
      zh: '哈尔施塔特观景点',
    },
  },
  {
    slug: 'walking-from-market-square',
    category: 'Walking route',
    kind: { en: 'Walking route', de: 'Wanderroute', zh: '步行路线' },
    title: {
      en: 'Walk from Hallstatt Market Square to the Viewpoint',
      de: 'Vom Hallstätter Marktplatz zum Aussichtspunkt',
      zh: '从哈尔施塔特市场广场步行到观景点',
    },
    intro: {
      en: 'The market square is an intuitive starting point for exploring Hallstatt’s compact centre and reaching the northern lakeside viewpoint.',
      de: 'Der Marktplatz ist ein naheliegender Startpunkt, um das kompakte Zentrum zu erkunden und den nördlichen Seeblick zu erreichen.',
      zh: '市场广场是探索哈尔施塔特紧凑中心并抵达湖北侧观景点的直观起点。',
    },
    highlight: {
      en: 'The journey offers a transition from colourful central facades to the broad panorama of village, lake and mountains.',
      de: 'Der Weg bietet den Übergang von bunten zentralen Fassaden zum weiten Panorama aus Dorf, See und Bergen.',
      zh: '这段路程让你从色彩缤纷的中心立面，过渡到村庄、湖泊与群山的开阔全景。',
    },
    route: {
      en: 'Locate Marktplatz, follow signed public streets toward the northern waterfront and Gosaumühlstraße, and return by the permitted village route.',
      de: 'Finden Sie den Marktplatz, folgen Sie beschilderten öffentlichen Straßen zum nördlichen Ufer und zur Gosaumühlstraße und kehren Sie auf erlaubtem Dorfweg zurück.',
      zh: '找到 Marktplatz，沿有标识的公共街道前往北侧水畔与 Gosaumühlstraße，再按允许的村庄路线返回。',
    },
    practical: {
      en: 'Narrow paths are shared with residents. Allow extra time for photos and avoid treating map estimates as guaranteed travel times.',
      de: 'Schmale Wege werden mit Anwohnern geteilt. Rechnen Sie extra Zeit für Fotos ein und behandeln Sie Kartenangaben nicht als garantierte Reisezeiten.',
      zh: '狭窄小路由居民共用。为拍照留出额外时间，且不要将地图估算当作保证的行程时间。',
    },
    query: {
      en: 'Hallstatt Marktplatz to Panoramic Viewpoint',
      de: 'Hallstatt Marktplatz zum Aussichtspunkt',
      zh: '哈尔施塔特市场广场到观景点',
    },
  },
  {
    slug: 'hallstatt-half-day',
    category: 'Itinerary',
    kind: { en: 'Itinerary', de: 'Reiseplan', zh: '行程' },
    title: {
      en: 'Half-Day Hallstatt Walking Plan',
      de: 'Hallstatt in einem halben Tag zu Fuß',
      zh: '哈尔施塔特半日步行计划',
    },
    intro: {
      en: 'A half day is best spent choosing a few close-together stops rather than rushing between every attraction in the region.',
      de: 'Einen halben Tag verbringt man am besten mit wenigen eng beieinanderliegenden Stationen, statt zwischen allen Attraktionen der Region zu hetzen.',
      zh: '半天时间最好用于选择几处彼此靠近的停留点，而不是在地区内所有景点间赶场。',
    },
    highlight: {
      en: 'Prioritise the postcard view, market square, waterfront atmosphere and one cultural visit that matches opening times.',
      de: 'Priorisieren Sie den Postkartenblick, den Marktplatz, die Uferatmosphäre und einen kulturellen Besuch, der zu den Öffnungszeiten passt.',
      zh: '优先安排明信片视角、市场广场、水畔氛围，以及一处与开放时间相符的文化参访。',
    },
    route: {
      en: 'Begin at your arrival point, walk through the village centre, visit the northern viewpoint and return toward transport.',
      de: 'Beginnen Sie an Ihrem Ankunftspunkt, gehen Sie durch das Ortszentrum, besuchen Sie den nördlichen Aussichtspunkt und kehren Sie Richtung Verkehr zurück.',
      zh: '从抵达点出发，穿过村庄中心，走访北侧观景点，再返回交通点。',
    },
    practical: {
      en: 'Reserve buffer time for ferry or bus connections; entry attractions require separate checks.',
      de: 'Halten Sie Pufferzeit für Fähre oder Busverbindungen frei; Eintrittsattraktionen erfordern separate Prüfung.',
      zh: '为渡轮或巴士衔接预留缓冲时间；需购票的景点要单独确认。',
    },
    query: {
      en: 'Hallstatt Austria',
      de: 'Hallstatt Österreich',
      zh: '哈尔施塔特 奥地利',
    },
  },
  {
    slug: 'hallstatt-one-day',
    category: 'Itinerary',
    kind: { en: 'Itinerary', de: 'Reiseplan', zh: '行程' },
    title: {
      en: 'One Day in Hallstatt',
      de: 'Ein Tag in Hallstatt',
      zh: '哈尔施塔特一日游',
    },
    intro: {
      en: 'A full day allows time for both the village atmosphere and a larger experience such as a museum, salt-mine excursion or lakeside walk.',
      de: 'Ein ganzer Tag lässt Zeit für die Dorfatmosphäre und ein größeres Erlebnis wie ein Museum, einen Salzbergwerk-Ausflug oder einen Uferweg.',
      zh: '一整天可以同时兼顾村庄氛围与更丰富的体验，例如博物馆、盐矿之旅或湖畔漫步。',
    },
    highlight: {
      en: 'Keep the postcard viewpoint as a flexible stop since light and visitor density change over the day.',
      de: 'Halten Sie den Postkartenblick als flexiblen Stopp, da Licht und Besucherdichte über den Tag wechseln.',
      zh: '把明信片观景点当作灵活的一站，因为光线与游客密度全天都在变化。',
    },
    route: {
      en: 'Choose one major activity first, then explore Marktplatz, the old lanes, waterfront and northern viewpoint.',
      de: 'Wählen Sie zuerst eine Hauptaktivität, erkunden Sie dann Marktplatz, alte Gassen, Ufer und nördlichen Aussichtspunkt.',
      zh: '先选一项主要活动，再探索 Marktplatz、老巷、水畔与北侧观景点。',
    },
    practical: {
      en: 'Do not combine every attraction by default. Check cable-car, mine and museum schedules before choosing your order.',
      de: 'Kombinieren Sie nicht standardmäßig jede Attraktion. Prüfen Sie Standseilbahn-, Bergwerk- und Museumsfahrpläne, bevor Sie die Reihenfolge wählen.',
      zh: '不要默认把每个景点都排上。选择顺序前，先确认缆车、盐矿与博物馆的时刻表。',
    },
    query: {
      en: 'Hallstatt Austria',
      de: 'Hallstatt Österreich',
      zh: '哈尔施塔特 奥地利',
    },
  },
  {
    slug: 'quiet-visit',
    category: 'Visitor etiquette',
    kind: { en: 'Visitor etiquette', de: 'Besucherverhalten', zh: '游客礼仪' },
    title: {
      en: 'How to Visit Hallstatt Respectfully',
      de: 'Hallstatt respektvoll besuchen',
      zh: '如何文明游览哈尔施塔特',
    },
    intro: {
      en: 'Hallstatt is a living community, not an open-air film set. The most memorable visit leaves residential lanes usable and private spaces undisturbed.',
      de: 'Hallstatt ist eine lebendige Gemeinde, keine Freiluft-Filmkulisse. Der eindrücklichste Besuch lässt Wohnwege nutzbar und private Bereiche unberührt.',
      zh: '哈尔施塔特是一个生活社区，而非露天片场。最难忘的到访，是把民居小巷留作可用、把私人空间保持原样。',
    },
    highlight: {
      en: 'Observe architecture from public routes, keep conversations low near houses and make time for small details beyond the crowded photo spot.',
      de: 'Betrachten Sie Architektur von öffentlichen Wegen, sprechen Sie bei Häusern leise und nehmen Sie sich Zeit für kleine Details abseits des gedrängten Fotopunkts.',
      zh: '从公共路线欣赏建筑，在房屋附近压低交谈，并抽出时间在拥挤拍摄点之外感受细节。',
    },
    route: {
      en: 'Follow marked pedestrian access and any local temporary diversions.',
      de: 'Folgen Sie markierten Fußgängerzugängen und etwaigen örtlichen Umleitungen.',
      zh: '沿标识的步行通道，并配合当地临时改道安排。',
    },
    practical: {
      en: 'Do not enter gardens, climb barriers, fly drones without authorisation or block resident access for photographs.',
      de: 'Betreten Sie keine Gärten, klettern Sie nicht über Absperrungen, fliegen Sie keine Drohnen ohne Erlaubnis und blockieren Sie keinen Anwohnerzugang für Fotos.',
      zh: '不要进入花园、翻越护栏，未经许可不得放飞无人机，也别为了拍照挡住居民通道。',
    },
    query: {
      en: 'Hallstatt Austria',
      de: 'Hallstatt Österreich',
      zh: '哈尔施塔特 奥地利',
    },
  },
  {
    slug: 'viewpoint-vs-skywalk',
    category: 'Comparison',
    kind: { en: 'Comparison', de: 'Vergleich', zh: '对比' },
    title: {
      en: 'Panoramic Viewpoint vs Hallstatt Skywalk',
      de: 'Aussichtspunkt vs. Hallstatt Skywalk',
      zh: '观景点与哈尔施塔特 Skywalk 的对比',
    },
    intro: {
      en: 'Two very different views are often confused: the free-to-observe lakeside postcard perspective and the elevated Skywalk area above Hallstatt.',
      de: 'Zwei sehr unterschiedliche Blicke werden oft verwechselt: die frei einsehbare Seepostkarten-Perspektive und der erhöhte Skywalk-Bereich oberhalb von Hallstatt.',
      zh: '人们常把两种截然不同的视角混为一谈：免费远眺的湖畔明信片视角，以及哈尔施塔特上方高处的 Skywalk 区域。',
    },
    highlight: {
      en: 'The lakeside view places the village against the mountains; the elevated platform looks down across lake and settlement from much higher up.',
      de: 'Der Seeblick stellt das Dorf vor die Berge; die erhöhte Plattform blickt von viel höher herab über See und Siedlung.',
      zh: '湖畔视角把村庄衬在群山之前；而高处平台则从更高处俯瞰湖面与聚落。',
    },
    route: {
      en: 'Choose Gosaumühlstraße for the classic postcard view. Research the Salzberg access and current lift status for the elevated attraction.',
      de: 'Wählen Sie die Gosaumühlstraße für den klassischen Postkartenblick. Prüfen Sie für die erhöhte Attraktion den Salzberg-Zugang und den aktuellen Liftstatus.',
      zh: '经典明信片视角请选 Gosaumühlstraße。至于高处景点，请先了解 Salzberg 的登山路线与缆车当前状态。',
    },
    practical: {
      en: 'Never assume the two viewpoints share entrance procedures, accessibility or operating hours.',
      de: 'Gehen Sie niemals davon aus, dass beide Aussichtspunkte Eingangsverfahren, Barrierefreiheit oder Öffnungszeiten teilen.',
      zh: '切勿想当然地认为两处观景点共用入口流程、无障碍条件或开放时间。',
    },
    query: {
      en: 'Hallstatt Skywalk',
      de: 'Hallstatt Skywalk',
      zh: '哈尔施塔特 Skywalk',
    },
  },
  {
    slug: 'hallstatt-train-ferry',
    category: 'Transport',
    kind: { en: 'Transport', de: 'Anreise', zh: '交通' },
    title: {
      en: 'Arriving in Hallstatt by Train and Ferry',
      de: 'Mit Zug und Fähre in Hallstatt ankommen',
      zh: '乘火车与渡轮抵达哈尔施塔特',
    },
    intro: {
      en: 'Hallstatt railway station is across the lake from the historic village, so rail visitors normally need to consider the lake crossing as part of the journey.',
      de: 'Der Bahnhof Hallstatt liegt gegenüber dem historischen Dorf am See, daher ist die Überquerung für Bahnreisende meist Teil der Reise.',
      zh: '哈尔施塔特火车站位于湖对岸，与历史村落相望，因此铁路旅客通常需把横渡湖面纳入行程。',
    },
    highlight: {
      en: 'The arrival across the lake is itself a memorable perspective on the waterfront settlement.',
      de: 'Die Ankunft über den See ist selbst eine denkwürdige Perspektive auf die Ufersiedlung.',
      zh: '从湖上抵达本身，就是俯瞰水畔聚落的一段难忘视角。',
    },
    route: {
      en: 'Check your train to Hallstatt Bahnhof, the matching ferry timetable and the onward walk through the centre toward the viewpoint.',
      de: 'Prüfen Sie Ihren Zug nach Hallstatt Bahnhof, den passenden Fährenfahrplan und den weiteren Fußweg durch das Zentrum zum Aussichtspunkt.',
      zh: '查询到 Hallstatt Bahnhof 的火车、对应渡轮时刻表，以及穿过中心前往观景点的续步行程。',
    },
    practical: {
      en: 'Confirm the current ferry operator and last departures; schedules may not align with a late photo session.',
      de: 'Bestätigen Sie den aktuellen Fährenbetreiber und die letzten Abfahrten; Fahrpläne passen möglicherweise nicht zu einer späten Fototour.',
      zh: '确认当前渡轮运营方与末班时间；时刻表未必与晚间拍摄时段吻合。',
    },
    query: {
      en: 'Hallstatt Bahnhof ferry Hallstatt Markt',
      de: 'Hallstatt Bahnhof Fähre Hallstatt Markt',
      zh: '哈尔施塔特火车站 渡轮 哈尔施塔特市场',
    },
  },
  {
    slug: 'hallstatt-bus-arrival',
    category: 'Transport',
    kind: { en: 'Transport', de: 'Anreise', zh: '交通' },
    title: {
      en: 'Visiting Hallstatt by Bus',
      de: 'Hallstatt mit dem Bus besuchen',
      zh: '乘巴士游览哈尔施塔特',
    },
    intro: {
      en: 'Regional bus connections can be useful for visitors staying around the Salzkammergut, but stops, service frequency and transfers vary by route.',
      de: 'Regionale Busverbindungen sind nützlich für Gäste im Salzkammergut, doch Haltestellen, Takt und Umstiege variieren je nach Linie.',
      zh: '区域巴士线路对住在萨尔茨卡默古特一带的游客很有用，但停靠站、班次与换乘因线路而异。',
    },
    highlight: {
      en: 'Plan the final pedestrian leg separately so navigation does not send you toward the lakeside viewpoint by car.',
      de: 'Planen Sie das letzte Fußweg-Stück separat, damit die Navigation Sie nicht mit dem Auto zum Seeblick schickt.',
      zh: '把最后一段步行单独规划，避免导航把你开车引向湖畔观景点。',
    },
    route: {
      en: 'Find the currently served Hallstatt bus stop, follow local pedestrian signs through the village, and continue to the northern panorama.',
      de: 'Finden Sie die aktuell bediente Hallstatt-Haltestelle, folgen Sie örtlichen Fußgängerschildern durchs Dorf und gehen Sie weiter zum nördlichen Panorama.',
      zh: '找到当前停靠的哈尔施塔特巴士站，沿当地步行标识穿过村庄，再前往北侧全景。',
    },
    practical: {
      en: 'Use the transport operator’s timetable for your travel date, especially on holidays and weekends.',
      de: 'Nutzen Sie den Fahrplan des Verkehrsbetreibers für Ihr Reisedatum, besonders an Feiertagen und Wochenenden.',
      zh: '请使用运营方针对你出行日期的时刻表，尤其在节假日与周末。',
    },
    query: {
      en: 'Hallstatt bus stop Austria',
      de: 'Hallstatt Bushaltestelle Österreich',
      zh: '哈尔施塔特 巴士站 奥地利',
    },
  },
  {
    slug: 'hallstatt-parking',
    category: 'Transport',
    kind: { en: 'Transport', de: 'Anreise', zh: '交通' },
    title: {
      en: 'Parking and Walking to Hallstatt Viewpoint',
      de: 'Parken und zu Fuß zum Hallstatt Aussichtspunkt',
      zh: '停车及步行前往哈尔施塔特观景点',
    },
    intro: {
      en: 'Hallstatt has controlled vehicle access and designated parking arrangements. The viewpoint is a pedestrian destination, not a place to park beside the camera position.',
      de: 'Hallstatt hat geregelten Fahrzeugzugang und ausgewiesene Parkmöglichkeiten. Der Aussichtspunkt ist ein Fußgängerziel, kein Platz zum Parken neben der Fotostelle.',
      zh: '哈尔施塔特有管制的车辆通行与指定停车安排。观景点是步行目的地，而非在拍摄点旁停车之处。',
    },
    highlight: {
      en: 'Treat the final approach as part of the experience and notice the village streets on the way.',
      de: 'Betrachten Sie den letzten Anmarsch als Teil des Erlebnisses und achten Sie auf die Dorfstraßen am Weg.',
      zh: '把最后一段路程当作体验的一部分，留意沿途的村庄街道。',
    },
    route: {
      en: 'Follow current official signs to an available visitor car park, then take the permitted walking route toward the centre and northern viewpoint.',
      de: 'Folgen Sie aktuellen offiziellen Schildern zu einem freien Besucherparkplatz, dann nehmen Sie den erlaubten Fußweg zum Zentrum und nördlichen Aussichtspunkt.',
      zh: '按当前官方标识前往有空位的游客停车场，再走允许的步行路线前往中心与北侧观景点。',
    },
    practical: {
      en: 'Check capacity, charges, restrictions and any shuttle service on the travel date. Do not park in residential or emergency access areas.',
      de: 'Prüfen Sie am Reisetag Kapazität, Gebühren, Einschränkungen und etwaigen Shuttlebetrieb. Parken Sie nicht in Wohn- oder Rettungszufahrtsbereichen.',
      zh: '出行当天查询车位、收费、限制与接驳服务。切勿停在居民区或紧急通道区域。',
    },
    query: {
      en: 'Hallstatt visitor parking Austria',
      de: 'Hallstatt Besucherparkplatz Österreich',
      zh: '哈尔施塔特 游客停车 奥地利',
    },
  },
  {
    slug: 'accessible-visit',
    category: 'Accessibility',
    kind: { en: 'Accessibility', de: 'Barrierefreiheit', zh: '无障碍' },
    title: {
      en: 'Accessibility Planning for Hallstatt',
      de: 'Barrierefreie Planung für Hallstatt',
      zh: '哈尔施塔特无障碍出行规划',
    },
    intro: {
      en: 'Hallstatt’s historic streets are narrow and some routes have slopes, uneven surfaces or steps. Conditions vary between the waterfront and higher streets.',
      de: 'Hallstatts historische Straßen sind eng, und manche Wege haben Steigungen, unebene Flächen oder Stufen. Die Bedingungen unterscheiden sich zwischen Ufer und höheren Straßen.',
      zh: '哈尔施塔特的历史街道狭窄，部分路段有坡道、不平整路面或台阶。水畔与较高处街道的条件各不相同。',
    },
    highlight: {
      en: 'The lakeside area may offer scenic views without a high mountain excursion, but individual routes still require checking.',
      de: 'Der Uferbereich bietet möglicherweise Ausblicke ohne hochalpine Tour, doch einzelne Wege erfordern weiterhin Prüfung.',
      zh: '湖畔区域无需登高山也能赏景，但具体路线仍需事先确认。',
    },
    route: {
      en: 'Review a current accessible route from your arrival stop or car park to the viewing area before setting out.',
      de: 'Prüfen Sie vor der Abfahrt eine aktuelle barrierefreie Route von Ihrem Ankunftspunkt oder Parkplatz zum Aussichtsbereich.',
      zh: '出发前，先从抵达站或停车场查一条当前可用的无障碍路线到观景区。',
    },
    practical: {
      en: 'Contact local tourism or transport providers for step-free access, ferry boarding and mobility assistance details.',
      de: 'Kontaktieren Sie örtlichen Tourismus oder Verkehrsanbieter für details zu stufenfreiem Zugang, Fähreinstieg und Mobilitätshilfe.',
      zh: '联系当地旅游或交通机构，了解无障碍通行、渡轮登船与行动协助的细节。',
    },
    query: {
      en: 'Hallstatt accessible tourism',
      de: 'Hallstatt barrierefreier Tourismus',
      zh: '哈尔施塔特 无障碍旅游',
    },
  },
  {
    slug: 'family-visit',
    category: 'Family travel',
    kind: { en: 'Family travel', de: 'Reisen mit Kindern', zh: '亲子游' },
    title: {
      en: 'Hallstatt with Children',
      de: 'Hallstatt mit Kindern',
      zh: '带孩子游哈尔施塔特',
    },
    intro: {
      en: 'Families can enjoy the colourful village and boats on the lake without planning a long hike. Crowds and traffic near narrow streets require attention.',
      de: 'Familien können das bunte Dorf und die Boote auf dem See genießen, ohne einen langen Wanderurlaub zu planen. Gedränge und Verkehr an engen Straßen erfordern Aufmerksamkeit.',
      zh: '家庭无需规划长途徒步，也能享受彩色的村庄与湖上的小船。狭窄街道附近的拥挤与交通需要留意。',
    },
    highlight: {
      en: 'Turn the walk into a short search for church towers, wooden balconies, boats and mountain reflections.',
      de: 'Verwandeln Sie den Spaziergang in eine kurze Suche nach Kirchtürmen, Holzbalkonen, Booten und Bergspiegelungen.',
      zh: '把散步变成一次小小的寻访：找一找教堂塔楼、木阳台、小船与山峦倒影。',
    },
    route: {
      en: 'Choose a short central-village loop with the northern viewpoint as an optional extension.',
      de: 'Wählen Sie eine kurze Schleife durchs Zentrum, mit dem nördlichen Aussichtspunkt als optionaler Verlängerung.',
      zh: '选择一条短小的村庄中心环线，把北侧观景点作为可选的延伸。',
    },
    practical: {
      en: 'Keep children close to the water and roads; check stroller suitability and toilets before departure.',
      de: 'Halten Sie Kinder in der Nähe von Wasser und Straßen; prüfen Sie vor der Abfahrt Kinderwageneignung und Toiletten.',
      zh: '让孩子远离水域与道路；出发前确认婴儿车是否适用，以及卫生间位置。',
    },
    query: {
      en: 'Hallstatt Austria',
      de: 'Hallstatt Österreich',
      zh: '哈尔施塔特 奥地利',
    },
  },
  {
    slug: 'market-square',
    category: 'Nearby attraction',
    kind: { en: 'Nearby attraction', de: 'Sehenswertes in der Nähe', zh: '周边景点' },
    title: {
      en: 'Hallstatt Market Square Guide',
      de: 'Marktplatz Hallstatt – kleiner Führer',
      zh: '哈尔施塔特市场广场指南',
    },
    intro: {
      en: 'Marktplatz is the small historic heart of Hallstatt, framed by traditional facades and lanes leading toward the lake.',
      de: 'Der Marktplatz ist das kleine historische Herz Hallstatts, umrahmt von traditionellen Fassaden und Gassen zum See.',
      zh: 'Marktplatz 是哈尔施塔特小巧的历史中心，被传统立面与通往湖边的小巷环绕。',
    },
    highlight: {
      en: 'Notice building colours, balconies and the contrast between the intimate square and the wider mountain landscape.',
      de: 'Achten Sie auf Gebäudefarben, Balkone und den Kontrast zwischen dem intimen Platz und der weiten Berglandschaft.',
      zh: '留意建筑色彩、阳台，以及亲切小广场与开阔山景之间的对比。',
    },
    route: {
      en: 'Visit the square on the way between your arrival point and the northern lakeside viewpoint.',
      de: 'Besuchen Sie den Platz auf dem Weg zwischen Ankunftspunkt und nördlichem Seeblick.',
      zh: '在从抵达点到湖北侧观景点的途中顺便造访广场。',
    },
    practical: {
      en: 'Shops and hospitality venues have individual opening hours; respect outdoor dining areas and residents.',
      de: 'Geschäfte und Gastronomie haben eigene Öffnungszeiten; respektieren Sie Außengastronomie und Anwohner.',
      zh: '商店与餐饮店各有自己的营业时间；请尊重户外用餐区与居民。',
    },
    query: {
      en: 'Marktplatz Hallstatt Austria',
      de: 'Marktplatz Hallstatt Österreich',
      zh: '哈尔施塔特 市场广场',
    },
  },
  {
    slug: 'evangelical-church',
    category: 'Nearby attraction',
    kind: { en: 'Nearby attraction', de: 'Sehenswertes in der Nähe', zh: '周边景点' },
    title: {
      en: 'Hallstatt Evangelical Church',
      de: 'Evangelische Kirche Hallstatt',
      zh: '哈尔施塔特福音派教堂',
    },
    intro: {
      en: 'The Evangelical Church is one of the most recognisable elements in Hallstatt’s postcard silhouette, rising prominently near the waterfront.',
      de: 'Die Evangelische Kirche ist eines der erkennbarsten Elemente in Hallstatts Postkartensilhouette und ragt markant nahe am Ufer auf.',
      zh: '福音派教堂是哈尔施塔特明信片轮廓中最易辨认的元素之一，在湖畔附近醒目地耸立。',
    },
    highlight: {
      en: 'Compare the church’s position from the panoramic viewpoint with the impression from the nearby village streets.',
      de: 'Vergleichen Sie die Lage der Kirche vom Panoramablick mit dem Eindruck aus den nahen Dorfgassen.',
      zh: '把教堂在全景观景点中的位置，与在近处村庄街道上的观感对比一下。',
    },
    route: {
      en: 'Walk from Marktplatz toward the waterfront church area, then continue north to see it in the classic panorama.',
      de: 'Gehen Sie vom Marktplatz Richtung Uferkirchenbereich und weiter nach Norden, um sie im klassischen Panorama zu sehen.',
      zh: '从 Marktplatz 走向湖畔教堂区域，再向北走，便能在经典全景中看到它。',
    },
    practical: {
      en: 'Religious services and events take priority over tourism; check visiting access and keep quiet inside.',
      de: 'Gottesdienste und Veranstaltungen gehen dem Tourismus vor; prüfen Sie Besuchsmöglichkeiten und halten Sie innen Ruhe.',
      zh: '宗教礼拜与活动优先于观光；请确认可否参观，并在室内保持安静。',
    },
    query: {
      en: 'Evangelische Kirche Hallstatt',
      de: 'Evangelische Kirche Hallstatt',
      zh: '哈尔施塔特 福音派教堂',
    },
  },
  {
    slug: 'catholic-church',
    category: 'Nearby attraction',
    kind: { en: 'Nearby attraction', de: 'Sehenswertes in der Nähe', zh: '周边景点' },
    title: {
      en: 'Catholic Parish Church of Hallstatt',
      de: 'Katholische Pfarrkirche Hallstatt',
      zh: '哈尔施塔特天主教堂区教堂',
    },
    intro: {
      en: 'The Catholic parish church occupies a higher position above the historic village and helps explain Hallstatt’s layered hillside layout.',
      de: 'Die Katholische Pfarrkirche liegt höher über dem historischen Dorf und hilft, Hallstatts geschichtete Hanglage zu verstehen.',
      zh: '天主教堂区教堂位于历史村庄上方的高处，有助于理解哈尔施塔特层叠的坡地格局。',
    },
    highlight: {
      en: 'Observe how paths, retaining walls and buildings adapt to the steep terrain above Lake Hallstatt.',
      de: 'Beobachten Sie, wie Wege, Stützmauern und Gebäude sich dem steilen Gelände über dem Hallstätter See anpassen.',
      zh: '观察小径、挡土墙与建筑如何适应哈尔施塔特湖上方陡峭的地形。',
    },
    route: {
      en: 'Follow signed public paths uphill from the centre only if the incline and conditions suit your group.',
      de: 'Folgen Sie beschilderten öffentlichen Wegen bergauf vom Zentrum, nur wenn Steigung und Bedingungen zu Ihrer Gruppe passen.',
      zh: '仅当坡度与状况适合你们一行时，才从中心沿有标识的公共道路上山。',
    },
    practical: {
      en: 'Expect steps and gradients. Respect worship and any restricted areas.',
      de: 'Rechnen Sie mit Stufen und Steigungen. Respektieren Sie Gottesdienst und etwaige Sperrbereiche.',
      zh: '会有台阶与坡度。请尊重礼拜活动与任何限制区域。',
    },
    query: {
      en: 'Katholische Pfarrkirche Hallstatt',
      de: 'Katholische Pfarrkirche Hallstatt',
      zh: '哈尔施塔特 天主教教堂',
    },
  },
  {
    slug: 'hallstatt-ossuary',
    category: 'Nearby attraction',
    kind: { en: 'Nearby attraction', de: 'Sehenswertes in der Nähe', zh: '周边景点' },
    title: {
      en: 'Hallstatt Charnel House (Beinhaus)',
      de: 'Beinhaus Hallstatt',
      zh: '哈尔施塔特人骨屋（Beinhaus）',
    },
    intro: {
      en: 'The Beinhaus near the Catholic church is associated with the local tradition of decorated skulls and the village’s limited burial space.',
      de: 'Das Beinhaus bei der katholischen Kirche ist verbunden mit der örtlichen Tradition bemalter Schädel und dem begrenzten Bestattungsraum des Dorfes.',
      zh: '天主教堂旁的人骨屋，与当地绘制头骨的传统以及村庄有限的墓葬空间有关。',
    },
    highlight: {
      en: 'Approach it as a cultural and historical site rather than a novelty photo stop; its context is closely tied to alpine village life.',
      de: 'Betreten Sie es als kulturellen und historischen Ort statt als kuriosen Fotostopp; sein Kontext hängt eng mit alpinem Dorfleben zusammen.',
      zh: '把它当作文化历史场所而非猎奇拍照点；它的背景与高山村落生活紧密相连。',
    },
    route: {
      en: 'Combine a respectful visit with the parish church area and a return walk to the waterfront.',
      de: 'Verbinden Sie einen respektvollen Besuch mit dem Pfarrkirchenbereich und einem Rückweg zum Ufer.',
      zh: '将一次恭敬的参观与堂区教堂区域结合，再步行返回水畔。',
    },
    practical: {
      en: 'Verify admission and opening hours locally. Photography rules may differ from those in public streets.',
      de: 'Klären Sie Eintritt und Öffnungszeiten vor Ort. Fotoregeln können sich von denen auf öffentlichen Straßen unterscheiden.',
      zh: '请当场确认门票与开放时间。拍摄规定可能与公共街道不同。',
    },
    query: {
      en: 'Beinhaus Hallstatt Austria',
      de: 'Beinhaus Hallstatt Österreich',
      zh: '哈尔施塔特 人骨屋',
    },
  },
  {
    slug: 'hallstatt-museum',
    category: 'Nearby attraction',
    kind: { en: 'Nearby attraction', de: 'Sehenswertes in der Nähe', zh: '周边景点' },
    title: {
      en: 'Museum Hallstatt',
      de: 'Museum Hallstatt',
      zh: '哈尔施塔特博物馆',
    },
    intro: {
      en: 'The local museum connects the village seen today with the region’s long history of salt extraction, archaeology and settlement.',
      de: 'Das örtliche Museum verbindet das heute sichtbare Dorf mit der langen Geschichte des Salzabbaus, der Archäologie und der Besiedlung der Region.',
      zh: '当地博物馆把今天所见到的村庄，与本地区悠久的采盐史、考古与聚落历史联系起来。',
    },
    highlight: {
      en: 'Use the exhibits to place the lakeside houses within a much longer cultural timeline.',
      de: 'Nutzen Sie die Ausstellungen, um die Uferhäuser in einen viel längeren Kulturzeitstrahl einzuordnen.',
      zh: '借助展品，把湖畔房屋放入更漫长的文化时间线中理解。',
    },
    route: {
      en: 'Add the museum during a central-village walk, especially if weather limits outdoor photography.',
      de: 'Fügen Sie das Museum während eines Dorfzentrum-Spaziergangs hinzu, besonders wenn Wetter die Outdoor-Fotografie begrenzt.',
      zh: '把博物馆安排进村庄中心的步行中，尤其在天气限制户外拍摄时。',
    },
    practical: {
      en: 'Check opening days, ticket prices and exhibition information with the museum before visiting.',
      de: 'Prüfen Sie beim Museum vor dem Besuch Öffnungstage, Eintrittspreise und Ausstellungsinformationen.',
      zh: '参观前请向博物馆确认开放日、票价与展览信息。',
    },
    query: {
      en: 'Museum Hallstatt Austria',
      de: 'Museum Hallstatt Österreich',
      zh: '哈尔施塔特 博物馆',
    },
  },
  {
    slug: 'salt-mine',
    category: 'Nearby attraction',
    kind: { en: 'Nearby attraction', de: 'Sehenswertes in der Nähe', zh: '周边景点' },
    title: {
      en: 'Salzwelten Hallstatt Salt Mine',
      de: 'Salzwelten Hallstatt Salzbergwerk',
      zh: '萨尔茨韦尔滕哈尔施塔特盐矿',
    },
    intro: {
      en: 'Hallstatt’s identity is inseparable from salt, and the Salzwelten experience interprets mining history beyond the picturesque lakeside facades.',
      de: 'Hallstatts Identität ist untrennbar mit Salz verbunden, und das Salzwelten-Erlebnis deutet die Bergbaugeschichte jenseits der malerischen Uferfassaden.',
      zh: '哈尔施塔特的名片与盐密不可分，萨尔茨韦尔滕的体验把采矿历史从湖畔美景背后解读出来。',
    },
    highlight: {
      en: 'Consider how underground work shaped the settlement and its significance long before modern tourism.',
      de: 'Bedenken Sie, wie unterirdische Arbeit die Siedlung und ihre Bedeutung lange vor dem modernen Tourismus prägte.',
      zh: '思考地下劳作如何在现代旅游出现之前，就塑造了这里的聚落与其意义。',
    },
    route: {
      en: 'Plan the mine as a dedicated excursion rather than a quick detour from Gosaumühlstraße; verify its current access route.',
      de: 'Planen Sie das Bergwerk als eigenen Ausflug statt als kurzen Umweg von der Gosaumühlstraße; prüfen Sie seinen aktuellen Zugangsweg.',
      zh: '把盐矿当作一次专门的出游，而非从 Gosaumühlstraße 顺路快速拐一下；请先确认当前登山路线。',
    },
    practical: {
      en: 'Mine tours, lift operations, age restrictions and seasonal closures can change. Check the official operator before booking.',
      de: 'Bergwerkführungen, Liftbetrieb, Altersgrenzen und Saisonabschlüsse können sich ändern. Prüfen Sie den offiziellen Betreiber vor der Buchung.',
      zh: '矿洞导览、缆车运营、年龄限制与季节性关闭都可能变动。预订前请查官方运营方。',
    },
    query: {
      en: 'Salzwelten Hallstatt',
      de: 'Salzwelten Hallstatt',
      zh: '萨尔茨韦尔滕 哈尔施塔特',
    },
  },
  {
    slug: 'hallstatt-skywalk',
    category: 'Nearby attraction',
    kind: { en: 'Nearby attraction', de: 'Sehenswertes in der Nähe', zh: '周边景点' },
    title: {
      en: 'Hallstatt Skywalk Viewpoint',
      de: 'Hallstatt Skywalk Aussichtspunkt',
      zh: '哈尔施塔特 Skywalk 观景台',
    },
    intro: {
      en: 'The Skywalk provides an elevated perspective from the Salzberg area, making it a distinct experience from the lakeside postcard viewpoint.',
      de: 'Der Skywalk bietet eine erhöhte Perspektive aus dem Salzberg-Bereich und ist damit ein eigenes Erlebnis gegenüber dem Seepostkartenblick.',
      zh: 'Skywalk 从 Salzberg 区域提供高处的视角，是与湖畔明信片观景点截然不同的体验。',
    },
    highlight: {
      en: 'From above, focus on the lake basin and the settlement’s extraordinary position between water and mountain.',
      de: 'Von oben richten Sie den Blick auf das Seebecken und die außergewöhnliche Lage der Siedlung zwischen Wasser und Berg.',
      zh: '从高处聚焦湖盆，以及聚落在水与山之间非同寻常的位置。',
    },
    route: {
      en: 'Research the currently operating access route to the Salzberg platform, then allow enough time to return to the village.',
      de: 'Recherchieren Sie den aktuell betriebenen Zugangsweg zur Salzberg-Plattform und lassen Sie genug Zeit für die Rückkehr ins Dorf.',
      zh: '先查当前可通行的 Salzberg 平台路线，再预留足够时间返回村庄。',
    },
    practical: {
      en: 'Check lift or trail status, weather exposure and admission details with the operator.',
      de: 'Prüfen Sie Lift- oder Wegstatus, Wetterexposition und Eintrittsdetails beim Betreiber.',
      zh: '向运营方确认缆车或步道状态、天气暴露情况与门票细节。',
    },
    query: {
      en: 'Hallstatt Skywalk Welterbeblick',
      de: 'Hallstatt Skywalk Welterbeblick',
      zh: '哈尔施塔特 Skywalk 世界遗产观景',
    },
  },
  {
    slug: 'lake-hallstatt',
    category: 'Nearby attraction',
    kind: { en: 'Nearby attraction', de: 'Sehenswertes in der Nähe', zh: '周边景点' },
    title: {
      en: 'Lake Hallstatt Waterfront Walk',
      de: 'Uferweg am Hallstätter See',
      zh: '哈尔施塔特湖滨漫步',
    },
    intro: {
      en: 'Hallstätter See defines the village’s setting and offers changing reflections, light and ferry perspectives throughout the day.',
      de: 'Der Hallstätter See prägt die Lage des Dorfes und bietet im Tagesverlauf wechselnde Spiegelungen, Licht und Fährperspektiven.',
      zh: '哈尔施塔特湖定义了村庄的环境，全天提供不断变化的倒影、光线与渡轮视角。',
    },
    highlight: {
      en: 'Look across the water to understand the steep slopes and the narrow strip of settlement along the shore.',
      de: 'Blicken Sie über das Wasser, um die steilen Hänge und den schmalen Siedlungsstreifen am Ufer zu verstehen.',
      zh: '隔水远望，体会陡峭的山坡与岸边狭窄的聚落带。',
    },
    route: {
      en: 'Explore publicly accessible waterfront stretches around the village and connect them to the northern panorama.',
      de: 'Erkunden Sie öffentlich zugängliche Uferabschnitte um das Dorf und verbinden Sie sie mit dem nördlichen Panorama.',
      zh: '探索村庄周边对公众开放的水岸段落，并与北侧全景相连。',
    },
    practical: {
      en: 'Waterfront access is not continuous everywhere; obey barriers and keep away from private docks.',
      de: 'Uferzugang ist nicht überall durchgehend; beachten Sie Absperrungen und meiden Sie private Stege.',
      zh: '水岸并非处处贯通；请遵守隔离设施，远离私人码头。',
    },
    query: {
      en: 'Hallstätter See Hallstatt',
      de: 'Hallstätter See Hallstatt',
      zh: '哈尔施塔特湖',
    },
  },
  {
    slug: 'five-fingers',
    category: 'Regional excursion',
    kind: { en: 'Regional excursion', de: 'Ausflug in der Region', zh: '区域游览' },
    title: {
      en: 'Five Fingers Viewpoint from Hallstatt',
      de: '5Fingers Aussichtsplattform ab Hallstatt',
      zh: '从哈尔施塔特前往五指观景台',
    },
    intro: {
      en: 'The Five Fingers viewing platforms on the Dachstein Krippenstein side of the region offer a high-alpine panorama quite different from Hallstatt’s waterfront.',
      de: 'Die 5Fingers-Plattformen auf der Dachstein-Krippenstein-Seite bieten ein hochalpines Panorama, das sich stark vom Hallstätter Ufer unterscheidet.',
      zh: '位于地区内达赫施泰因-克里彭施泰因一侧的五指观景平台，提供与哈尔施塔特水畔迥异的高山全景。',
    },
    highlight: {
      en: 'This is an expansive mountain excursion focused on cliffs and distant lake views, not the classic village photograph.',
      de: 'Dies ist ein weiter Bergausflug mit Felswänden und fernen Seeblicken, nicht das klassische Dorffoto.',
      zh: '这是一次开阔的山地出游，以悬崖与远处的湖景为主，而非经典的村庄照片。',
    },
    route: {
      en: 'Plan transport toward Obertraun and the appropriate mountain lift separately from your Hallstatt village walk.',
      de: 'Planen Sie den Transport Richtung Obertraun und den passenden Berglift getrennt von Ihrem Hallstatt-Dorfspaziergang.',
      zh: '把前往上特劳恩与相应登山缆车的交通，与你在哈尔施塔特村庄的步行分开规划。',
    },
    practical: {
      en: 'High-altitude weather, cable-car timetables and trail access are critical; verify current status before departure.',
      de: 'Hochgebirgswetter, Seilbahnfahrpläne und Wegzugang sind entscheidend; prüfen Sie den aktuellen Status vor der Abfahrt.',
      zh: '高海拔天气、缆车时刻表与步道通行都至关重要；出发前请核实当前状况。',
    },
    query: {
      en: '5 Fingers Dachstein Krippenstein Obertraun',
      de: '5 Fingers Dachstein Krippenstein Obertraun',
      zh: '五指 达赫施泰因 克里彭施泰因 上特劳恩',
    },
  },
  {
    slug: 'obertraun',
    category: 'Regional excursion',
    kind: { en: 'Regional excursion', de: 'Ausflug in der Region', zh: '区域游览' },
    title: {
      en: 'Obertraun and the Eastern Shore',
      de: 'Obertraun und das Ostufer',
      zh: '上特劳恩与东岸',
    },
    intro: {
      en: 'Obertraun on the opposite side of the Hallstatt lake area can provide a quieter base for outdoor activities and views across the valley.',
      de: 'Obertraun auf der gegenüberliegenden Seite des Hallstätter Sees bietet eine ruhigere Basis für Outdoor-Aktivitäten und Ausblicke über das Tal.',
      zh: '位于哈尔施塔特湖另一侧的上特劳恩，可作为更安静的户外活动和俯瞰山谷的落脚点。',
    },
    highlight: {
      en: 'Use the different shore orientation to appreciate the lake and surrounding peaks beyond the well-known Hallstatt postcard angle.',
      de: 'Nutzen Sie die andere Uferausrichtung, um See und umgebende Gipfel jenseits des bekannten Hallstatt-Postkartenwinkels zu schätzen.',
      zh: '借助不同的湖岸朝向，去欣赏那张知名明信片角度之外的湖面与群峰。',
    },
    route: {
      en: 'Check bus, rail or other current connections between Hallstatt and Obertraun, then plan a separate local walk.',
      de: 'Prüfen Sie aktuelle Bus-, Bahn- oder andere Verbindungen zwischen Hallstatt und Obertraun, dann planen Sie einen separaten lokalen Spaziergang.',
      zh: '先查哈尔施塔特与上特劳恩之间当前的巴士、铁路或其他连接，再规划一段单独的当地步行。',
    },
    practical: {
      en: 'Do not assume every lakeside stretch is publicly walkable. Check local route and transport information.',
      de: 'Gehen Sie nicht davon aus, dass jeder Uferabschnitt öffentlich begehbar ist. Prüfen Sie örtliche Weg- und Verkehrsinformationen.',
      zh: '不要以为每段湖岸都可公开步行。请查当地路线与交通信息。',
    },
    query: {
      en: 'Obertraun Austria',
      de: 'Obertraun Österreich',
      zh: '上特劳恩 奥地利',
    },
  },
  {
    slug: 'historic-village-architecture',
    category: 'Architecture',
    kind: { en: 'Architecture', de: 'Architektur', zh: '建筑' },
    title: {
      en: 'Hallstatt Historic Village Architecture Walk',
      de: 'Hallstatt – historischer Architekturspaziergang',
      zh: '哈尔施塔特历史村庄建筑漫步',
    },
    intro: {
      en: 'Hallstatt’s narrow streets, timber balconies, steep roofs and lakeside facades reveal how an alpine settlement adapted to unusually limited land between water and mountain.',
      de: 'Hallstatts enge Gassen, Holzbalkone, steile Dächer und Uferfassaden zeigen, wie sich eine Alpensiedlung an das ungewöhnlich begrenzte Land zwischen Wasser und Berg anpasste.',
      zh: '哈尔施塔特狭窄的街道、木阳台、陡坡屋顶与湖畔立面，揭示了高山聚落如何在水与山之间异常有限的土地上求得生存。',
    },
    highlight: {
      en: 'Notice the contrast between the compact market square, houses rising up the hillside and waterfront buildings whose foundations sit close to the lake.',
      de: 'Achten Sie auf den Kontrast zwischen kompaktem Marktplatz, hangaufwärts steigenden Häusern und Ufergebäuden, deren Fundamente nahe am See liegen.',
      zh: '留意紧凑的市场广场、沿山坡攀升的房屋，以及地基紧贴湖面的水畔建筑之间的对比。',
    },
    route: {
      en: 'Start at Marktplatz, follow permitted central lanes toward the waterfront, and continue to the northern viewpoint for a broad look back at the village’s clustered rooftops.',
      de: 'Beginnen Sie am Marktplatz, folgen Sie erlaubten zentralen Gassen zum Ufer und gehen Sie weiter zum nördlichen Aussichtspunkt für einen weiten Blick zurück auf die gedrängten Dächer des Dorfes.',
      zh: '从 Marktplatz 出发，沿允许的中心小巷走向水畔，再前往北侧观景点，回望村庄密集的屋顶。',
    },
    practical: {
      en: 'Many photogenic facades are private homes; remain on public streets and avoid photographing through windows.',
      de: 'Viele fotogene Fassaden sind private Wohnhäuser; bleiben Sie auf öffentlichen Straßen und fotografieren Sie nicht durch Fenster.',
      zh: '许多上镜的立面是私人住宅；请留在公共街道，不要透过窗户拍摄。',
    },
    query: {
      en: 'Marktplatz Hallstatt Austria',
      de: 'Marktplatz Hallstatt Österreich',
      zh: '哈尔施塔特 市场广场',
    },
  },
];
