import type { NearbyPlace } from './nearbyAttractions';

export type VisitText = readonly [en: string, de: string, zh: string];

const trail: VisitText = ['Outdoor access depends on trail conditions and posted closures.', 'Der Zugang richtet sich nach Wegzustand und örtlichen Sperren.', '户外步道按路况与现场封闭公告开放。'];
const grounds: VisitText = ['Access follows the park calendar and any event closures.', 'Für den Zugang gelten Parkkalender und Veranstaltungssperren.', '按园区日历开放，活动期间可能临时关闭。'];
const cave: VisitText = ['Seasonal guided tours. Check the cave’s own operating dates and the last entry.', 'Saisonale Führungen. Öffnungstage und letzten Einlass für diese Höhle prüfen.', '季节性导览，须查询本洞穴的开放日期及最后入场时间。'];
const lift: VisitText = ['Check lift operating dates, weather closures and the last descent.', 'Betriebstage, Wettersperren und letzte Talfahrt prüfen.', '出发前查询缆车营运日期、天气停运公告及末班下山时间。'];
const boat: VisitText = ['Shore access and seasonal boat departures follow separate schedules.', 'Uferzugang und saisonale Bootsfahrten sind getrennt geregelt.', '湖岸通行与季节性船班分别安排。'];
const museum: VisitText = ['Check the visitor calendar for opening days and last admission.', 'Besuchstage und letzten Einlass im Museumskalender prüfen.', '请查馆方日历确认开放日及最后入场时间。'];

const pathFee: VisitText = ['Check separately for charges at car parks or managed facilities along the route.', 'Gebühren für Parkplätze und Einrichtungen am Weg gesondert prüfen.', '沿途停车与营运设施若收费，须另外查询。'];
const caveFee: VisitText = ['The guided visit is ticketed. Select this cave when comparing lift and cave combinations.', 'Die Führung ist kostenpflichtig. Beim Tarifvergleich diese Höhle und die passende Seilbahnleistung auswählen.', '导览须购票。比较洞穴与缆车套票时，请选择本洞穴。'];
const liftFee: VisitText = ['Check the return fare for your lift sections and any separate road or parking fees.', 'Den Rückfahrttarif für die benötigten Bahnsektionen sowie Straßen- und Parkgebühren prüfen.', '请查所需缆车区段的往返票价，以及可能另外收取的道路或停车费用。'];
const museumFee: VisitText = ['See the venue’s current admission and any guided-tour charges.', 'Aktuellen Eintritt und etwaige Führungspreise beim Haus prüfen.', '门票及可能另收的导览费，请查馆方最新公告。'];
const boatFee: VisitText = ['Check the fare for the specific lake crossing and whether it includes the return.', 'Den Preis der konkreten Seefahrt und die enthaltene Rückfahrt prüfen.', '请查具体航段票价，并确认是否包含返程。'];
const parkSource = 'https://www.kaiservilla.at/index.php/en/opening-times-prices';
const caveTariffs = 'https://www.dachstein-salzkammergut.com/en/tickets-offers/tickets-summer/single-tariffs';
const boatTariffs = 'https://schifffahrt-grundlsee.at/de/fahrplan';
const museumInfo = 'https://www.kammerhofmuseum.at/besucherinformation/';

type Facts = {
  arrival: VisitText;
  hours: VisitText;
  price: VisitText;
  hoursSource?: string;
  priceSource?: string;
};

export const visitFacts: Record<NearbyPlace['slug'], Facts> = {
  waldbachstrub: { arrival: ['Upper Echern Valley waterfall approach', 'Oberer Wasserfallzustieg im Echerntal', '埃赫恩谷上段瀑布进路'], hours: trail, price: pathFee },
  echerntal: { arrival: ['Malerweg from Hallstatt Lahn to Waldbach bridge', 'Malerweg ab Hallstatt Lahn zur Waldbachbrücke', '由哈尔施塔特拉恩沿画家步道至瓦尔德巴赫桥'], hours: trail, price: pathFee },
  simonyhuette: { arrival: ['Dachstein plateau mountain hut, 2,203 m', 'Berghütte am Dachsteinplateau auf 2.203 m', '达赫施泰因高原山屋，海拔 2,203 米'], hours: ['Check the staffed hut season and availability with the Alpine Club.', 'Bewirtschaftungszeiten und Verfügbarkeit beim Alpenverein prüfen.', '向高山协会查询山屋有人值守的季节和床位。'], price: ['Meals and overnight stays use separate hut rates. Confirm your booking in advance.', 'Verpflegung und Übernachtung haben eigene Hüttentarife. Reservierung vorab klären.', '餐饮和住宿按山屋费率分开计费，请提前确认预订。'], hoursSource: 'https://www.alpenverein.at/simonyhuette/', priceSource: 'https://www.alpenverein.at/simonyhuette/' },
  'dachstein-ice-cave': { arrival: ['Schönbergalm middle station, marked uphill footpath', 'Mittelstation Schönbergalm, markierter Anstieg', '舍恩贝格牧场中间站，沿标记上坡小径'], hours: cave, price: caveFee, priceSource: caveTariffs },
  'dachstein-mammoth-cave': { arrival: ['Schönbergalm middle station, Mammuthöhle trail', 'Mittelstation Schönbergalm, Weg zur Mammuthöhle', '舍恩贝格牧场中间站，沿猛犸洞步道'], hours: cave, price: caveFee, priceSource: caveTariffs },
  koppenbruellerhoehle: { arrival: ['Forested path from Koppenrast in the valley', 'Waldweg ab Koppenrast im Tal', '从谷地 Koppenrast 沿林间步道前往'], hours: ['The 2026 tour season ran 1 May–27 September. See the operator for the next season.', 'Die Führungen 2026 liefen vom 1. Mai bis 27. September. Neue Termine beim Betreiber prüfen.', '2026 年导览季为 5 月 1 日至 9 月 27 日，下一季请查营运方。'], price: ['Summer 2026 guide price: €18.90 adult and €10.40 child. Check next season’s tariff.', 'Sommertarif 2026: 18,90 € für Erwachsene und 10,40 € für Kinder. Neuen Tarif prüfen.', '2026 年夏季导览参考价：成人 €18.90，儿童 €10.40。下一季票价以营运方为准。'], priceSource: caveTariffs },
  welterbespirale: { arrival: ['Krippenstein upper station, summit footpath', 'Bergstation Krippenstein, Gipfelweg', '克里彭施泰因上站，登顶步道'], hours: lift, price: liftFee, hoursSource: 'https://www.dachstein-salzkammergut.com/en/news/operation-times', priceSource: caveTariffs },
  'vorderer-gosausee': { arrival: ['Gosausee terminus and arrival shore', 'Endstelle Gosausee und vorderes Seeufer', '戈绍湖终点站与入口湖岸'], hours: trail, price: pathFee },
  'hinterer-gosausee': { arrival: ['Upper-lake trail from Vorderer Gosausee via Gosaulacke', 'Weg ab Vorderem Gosausee über die Gosaulacke', '从前戈绍湖经戈绍拉克水洼步行上行'], hours: trail, price: pathFee },
  gosaulacke: { arrival: ['Intermediate basin on the path between the two Gosau lakes', 'Zwischenbecken am Weg zwischen den Gosauseen', '前后戈绍湖之间步道上的浅洼'], hours: trail, price: pathFee },
  zwieselalmhoehe: { arrival: ['Gosaukammbahn upper station and crest path', 'Bergstation Gosaukammbahn und Höhenweg', '戈绍山脊缆车上站及坡脊步道'], hours: lift, price: liftFee },
  loeckermoos: { arrival: ['Gosau bog trail and designated boardwalk', 'Moorzustieg ab Gosau und Holzsteg', '戈绍湿地登山路线及指定栈道'], hours: trail, price: pathFee },
  landlermuseum: { arrival: ['Former Goiserermühle annex in Bad Goisern', 'Ehemaliges Auszugshaus der Goiserermühle', '巴德戈伊瑟恩旧磨坊附属建筑'], hours: museum, price: museumFee },
  'woodcutters-museum': { arrival: ['Historic cabin in the Müllnerwäldchen', 'Historische Stube im Müllnerwäldchen', '米尔纳小树林内的旧伐木工木屋'], hours: museum, price: museumFee, hoursSource: 'https://www.museum-goisern.at/holzknechtmuseum/', priceSource: 'https://www.museum-goisern.at/holzknechtmuseum/' },
  'ewige-wand': { arrival: ['Signed Höhen- und Sagenweg approach', 'Markierter Zustieg über den Höhen- und Sagenweg', '高地传说步道的标记进路'], hours: trail, price: pathFee },
  kaiservilla: { arrival: ['Kaiserpark entrance at Jainzen 38', 'Kaiserpark-Eingang bei Jainzen 38', 'Jainzen 38 皇室公园入口'], hours: ['Villa visits follow guided-tour times. Check the first and last tour for your date.', 'Für die Villa gelten Führungszeiten. Erste und letzte Führung am Besuchstag prüfen.', '别墅按导览场次开放，请查当日首场和末场。'], price: ['Select the villa tour ticket. Park-only admission is offered separately.', 'Eintritt mit Villaführung wählen. Für den reinen Parkbesuch gibt es einen eigenen Tarif.', '室内参观请选择别墅导览票，公园单独参观有另外的票种。'], hoursSource: parkSource, priceSource: parkSource },
  marmorschloessl: { arrival: ['Uphill path inside Kaiserpark from the villa', 'Ansteigender Parkweg ab der Kaiservilla', '由皇帝别墅沿园内上坡步道前往'], hours: ['Check the exhibition calendar and the park’s own access times.', 'Ausstellungszeiten und Parköffnungszeiten getrennt prüfen.', '分别核对展览日历和皇室公园开放时段。'], price: ['Check exhibition admission and whether you also need a park ticket.', 'Ausstellungseintritt und eventuell nötiges Parkticket prüfen.', '查询展览票价，并确认是否还需公园门票。'] },
  'kurpark-bad-ischl': { arrival: ['Kurhausstraße near the concert and theatre venue', 'Kurhausstraße am Kongress- und Theaterhaus', '库尔豪斯街会议与剧院中心旁'], hours: grounds, price: ['The public garden can be visited independently. Ticketed events have their own admission.', 'Der öffentliche Garten ist separat zugänglich. Für Veranstaltungen gelten eigene Eintrittsbedingungen.', '公共花园可单独游览，售票活动另行购票。'] },
  'kongress-theaterhaus': { arrival: ['Kurhausstraße 8, park-facing event venue', 'Kurhausstraße 8, Veranstaltungsgebäude am Kurpark', 'Kurhausstraße 8，面向疗养公园的场馆'], hours: ['Interior access depends on the event programme.', 'Der Innenzugang richtet sich nach dem Veranstaltungsprogramm.', '室内开放取决于场馆活动日程。'], price: ['Auditorium ticket prices depend on the performance or event.', 'Saalpreise richten sich nach Aufführung oder Veranstaltung.', '观众厅票价按演出或活动而定。'] },
  leharvilla: { arrival: ['Riverside entrance at Lehárkai 8', 'Eingang am Fluss, Lehárkai 8', 'Lehárkai 8 河畔入口'], hours: ['On opening days, guided tours start on the hour from 10:00 to 16:00. Check closures.', 'An Öffnungstagen stündliche Führungen von 10 bis 16 Uhr. Schließtage prüfen.', '开放日 10:00 至 16:00 整点有导览，请另查休馆日。'], price: museumFee },
  katrin: { arrival: ['Katrin lift valley station, Kaltenbachstraße 62', 'Katrin-Talstation, Kaltenbachstraße 62', '卡特林缆车下站，Kaltenbachstraße 62'], hours: lift, price: liftFee },
  siriuskogl: { arrival: ['Signed uphill walk from Bad Ischl to Franz-Josefs-Warte', 'Markierter Aufstieg von Bad Ischl zur Franz-Josefs-Warte', '从巴德伊施尔沿标记上坡至弗朗茨·约瑟夫塔'], hours: ['Check tower access separately from the hillside path and restaurant.', 'Turmzugang, Fußweg und Gasthaus gesondert prüfen.', '观景塔、山坡步道和餐厅各自开放，请分别查询。'], price: pathFee },
  'altausseer-see': { arrival: ['Altaussee village shore, lakeside circuit', 'Dorfufer Altaussee, Seerundweg', '阿尔陶塞村湖岸环线'], hours: trail, price: pathFee },
  'altaussee-salt-mine': { arrival: ['Tour entrance at Lichtersberg 25 above Altaussee', 'Führungseingang am Lichtersberg 25 oberhalb von Altaussee', '阿尔陶塞村上方，Lichtersberg 25 导览入口'], hours: ['Tours use a seasonal timetable, with a winter maintenance break. Check available departure times.', 'Saisonaler Führungsplan mit winterlicher Betriebspause. Verfügbare Termine prüfen.', '按季节安排导览，冬季有维护停运期。请查可预约场次。'], price: ['Standard mine tour with exhibition: 2026 adults €27, ages 4–15 €13. In 2027, €28 and €14.', 'Bergwerk mit Ausstellung: 2026 Erwachsene 27 €, Kinder 4–15 Jahre 13 €. 2027: 28 € und 14 €.', '盐矿导览及展览：2026 年成人 €27、4–15 岁 €13。2027 年分别为 €28、€14。'] },
  augstsee: { arrival: ['Signed path from the Loser upland access', 'Markierter Weg ab Loser-Höhenzugang', '从洛瑟山高处入口沿标记步道'], hours: lift, price: liftFee },
  kammerhofmuseum: { arrival: ['Chlumeckyplatz 1 in central Bad Aussee', 'Chlumeckyplatz 1 im Zentrum von Bad Aussee', '巴德奥塞中心，Chlumeckyplatz 1'], hours: museum, price: ['Published 2026 rates: adults €8, visitors aged 18 and under €3.', 'Veröffentlichter Tarif 2026: Erwachsene 8 €, Kinder und Jugendliche bis 18 Jahre 3 €.', '馆方公布的 2026 年票价：成人 €8，18 岁及以下 €3。'], hoursSource: museumInfo, priceSource: museumInfo },
  grundlsee: { arrival: ['West shore in Grundlsee village', 'Westufer beim Ort Grundlsee', '格伦德尔湖主村西岸'], hours: boat, price: boatFee, priceSource: boatTariffs },
  toplitzsee: { arrival: ['West landing reached on foot from Gößl', 'Westanlegestelle zu Fuß ab Gößl', '从格瑟尔步行前往西岸码头'], hours: boat, price: boatFee, hoursSource: boatTariffs, priceSource: boatTariffs },
  kammersee: { arrival: ['Short footpath from the eastern Toplitzsee landing', 'Kurzer Fußweg ab Toplitzsee-Ostanlegestelle', '从托普利茨湖东岸码头沿短步道'], hours: boat, price: boatFee, hoursSource: boatTariffs, priceSource: boatTariffs },
  goessl: { arrival: ['Village at the east end of Grundlsee', 'Ortschaft am Ostende des Grundlsees', '格伦德尔湖东端村落'], hours: trail, price: pathFee },
  kaiserpark: { arrival: ['Park entrance at Jainzen 38', 'Parkeingang Jainzen 38', 'Jainzen 38 公园入口'], hours: grounds, price: ['Use the park-only ticket if you plan to visit the gardens. Check separate charges for the villa or exhibitions.', 'Für den Gartenbesuch den Parktarif wählen. Villa und Ausstellungen können separat berechnet werden.', '仅游园可选公园票，别墅导览及展览可能另收费。'], hoursSource: parkSource, priceSource: parkSource },
  loserfenster: { arrival: ['Marked upland path in the Loser area', 'Markierter Höhenweg im Losergebiet', '洛瑟山区域标记高地步道'], hours: trail, price: liftFee },
};

export const visitAdvice: Record<NearbyPlace['slug'], VisitText> = {
  waldbachstrub: ['Plan the steep upper section on a dry day and allow time to descend before dusk.', 'Den steilen oberen Abschnitt an einem trockenen Tag angehen und vor der Dämmerung absteigen.', '把陡峭的上段留到干燥天气，并为天黑前下山留时间。'],
  echerntal: ['Use the valley walk as a quieter outing after the village waterfront.', 'Den Talspaziergang als ruhige Ergänzung zum Seeufer einplanen.', '走完村庄湖岸后，可把谷地步道安排成一段安静的短游。'],
  simonyhuette: ['Make the hut the main objective for the day and confirm your return plan before leaving.', 'Die Hütte als Tagesziel wählen und den Rückweg vor dem Start klären.', '把山屋作为当天主行程，出发前先核实整段返程。'],
  'dachstein-ice-cave': ['Collect your cave tour time at Schönbergalm before taking the path to the entrance.', 'An der Schönbergalm zuerst die Führungszeit holen und dann zum Eingang gehen.', '先在舍恩贝格牧场中间站确认导览场次，再走到洞口。'],
  'dachstein-mammoth-cave': ['Leave space before the next activity to account for the uphill approach and tour registration.', 'Für Zustieg und Anmeldung Zeit vor dem nächsten Programmpunkt lassen.', '给上坡进洞与现场登记预留时间，再安排下一站。'],
  koppenbruellerhoehle: ['When the forecast includes heavy rain, check the operator’s cave notice before travelling.', 'Bei angekündigtem Starkregen vor der Anfahrt die Höhlenmeldung prüfen.', '预报有大雨时，出发前先看营运方的洞穴公告。'],
  welterbespirale: ['Plan the platform for a clear-weather window, with time to walk back to the upper station.', 'Für die Plattform ein Zeitfenster mit guter Sicht und Rückweg zur Bergstation einplanen.', '挑视野清晰的时段登观景台，并给返回缆车上站留时间。'],
  'vorderer-gosausee': ['Start at the arrival shore and decide there whether to extend the walk around the lake.', 'Am vorderen Ufer starten und erst dort über die Seerunde entscheiden.', '先在入口岸边看景，再决定是否延长为环湖。'],
  'hinterer-gosausee': ['Bring water and set a turnaround time before leaving the lower lake.', 'Wasser mitnehmen und am Vorderen See eine Umkehrzeit festlegen.', '备好饮水，离开前湖之前先定好折返时间。'],
  gosaulacke: ['Treat the basin as a distinct observation stop on the upper-lake trail.', 'Die Mulde als eigenen Beobachtungshalt auf dem Weg zum Hinteren See einplanen.', '前往后湖时，可在这片浅洼单独留一段观察时间。'],
  zwieselalmhoehe: ['Confirm the lift descent before committing to a longer crest walk.', 'Vor einer längeren Höhenrunde die letzte Talfahrt klären.', '延长坡脊步行前，先确认末班下山缆车。'],
  loeckermoos: ['Take time to observe vegetation from the designated boards and give others space to pass.', 'Moorpflanzen vom Steg aus betrachten und Platz zum Vorbeigehen lassen.', '从指定栈道观察湿地植物，停留时留出通行空间。'],
  landlermuseum: ['Allow time for both the household displays and the preserved shoemaker’s workshop.', 'Zeit für den ländlichen Alltag und die erhaltene Schusterstube einplanen.', '给日常生活展品和保留下来的鞋匠工作间都留些时间。'],
  'woodcutters-museum': ['Pair the cabin with the Landler Museum when both are open.', 'Die Stube mit dem Landlermuseum verbinden, wenn beide geöffnet sind.', '两馆都开放时，可把伐木工木屋和兰德勒博物馆串游。'],
  'ewige-wand': ['Pick a short turnaround point if your group prefers to avoid prolonged exposed walking.', 'Für Gruppen, die ausgesetzte Wege meiden möchten, einen frühen Umkehrpunkt festlegen.', '同行者若不适合长距离走临崖路段，可提前选好折返点。'],
  kaiservilla: ['Check the next guided tour at the entrance before deciding how long to spend in the park.', 'Am Eingang zuerst nach der nächsten Führung fragen und danach den Parkbesuch planen.', '先在入口确认下一场导览，再决定公园停留多久。'],
  marmorschloessl: ['Set aside time for both the exhibition and the uphill walk through the park.', 'Zeit für die Ausstellung und den ansteigenden Parkweg einplanen.', '同时预留看展和沿园路上坡的时间。'],
  'kurpark-bad-ischl': ['Pair a short garden walk with the view of the theatre façade.', 'Den kurzen Gartenspaziergang mit dem Blick auf die Theaterfassade verbinden.', '可把花园散步和观看剧院立面安排在一起。'],
  'kongress-theaterhaus': ['If attending a performance, use the park for a short walk before auditorium doors open.', 'Vor einer Aufführung bis zur Saalöffnung einen kurzen Parkspaziergang einplanen.', '若来看演出，可在观众厅开放前先逛旁边的公园。'],
  leharvilla: ['Plan the riverside walk around a guided-tour start rather than arriving between sessions.', 'Den Uferspaziergang auf den Beginn einer Führung abstimmen.', '按导览开始时间安排河畔步行，避免在场次间空等。'],
  katrin: ['Choose an upper-station walk suited to your group before starting toward the ridge.', 'Vor dem Aufbruch zum Rücken einen zur Gruppe passenden Bergstationsweg wählen.', '往山脊出发前，先在上站选择适合同行者的步行长度。'],
  siriuskogl: ['Factor in the uphill walk before treating the tower as a stop between town visits.', 'Vor einem Zwischenstopp am Turm die Dauer des Aufstiegs bedenken.', '若把观景塔插入市区行程，要先算上上坡时间。'],
  'altausseer-see': ['For a short visit, start at the village shore and pick a return point before setting off.', 'Für einen kurzen Besuch am Dorfufer starten und einen Umkehrpunkt wählen.', '短访可从村庄岸边走一段，出发时先选好折返点。'],
  'altaussee-salt-mine': ['Book under Altaussee and check the minimum age before travelling with children.', 'Bei der Buchung Altaussee wählen und bei Kindern das Mindestalter prüfen.', '订票时选择阿尔陶塞矿场，带孩子前往请先查看最低年龄。'],
  augstsee: ['Leave time around the basin before deciding whether to add Loserfenster.', 'Am Becken Zeit lassen, bevor das Loserfenster ergänzt wird.', '先给小湖盆留出停留时间，再决定要不要加走洛瑟石窗。'],
  kammerhofmuseum: ['Start your town walk at the museum so the salt and clothing collections give context to the surrounding streets.', 'Den Stadtrundgang im Museum beginnen, damit Salz- und Trachtensammlung den Ortsrundgang einordnen.', '可先看博物馆里的盐业与服饰展，再到周边街巷实地观察。'],
  grundlsee: ['Choose one shore for a short stop. Reserve the full three-lake outing for a longer visit.', 'Für einen kurzen Halt ein Seeufer wählen. Für alle drei Seen mehr Zeit vorsehen.', '短游可选一侧湖岸。想串游三座湖，宜留出更多时间。'],
  toplitzsee: ['Check the return boat before boarding if you plan to walk on the eastern shore.', 'Bei geplantem Spaziergang am Ostufer vor dem Einsteigen die Rückfahrt prüfen.', '打算登陆东岸步行的话，上船前就确认返程船班。'],
  kammersee: ['Leave time after arrival at the eastern landing for both the footpath and the return boat.', 'Nach der Ankunft am Ostufer Zeit für Fußweg und Rückfahrt lassen.', '到东岸后，为短步道和返程船班都留出时间。'],
  goessl: ['See the public waterfront before continuing toward the Toplitzsee trailhead.', 'Zuerst das öffentliche Ufer ansehen und dann Richtung Toplitzsee weitergehen.', '先逛公共湖岸，再走往托普利茨湖方向的步道口。'],
  kaiserpark: ['Allow time for the upper paths as well as the open area in front of the villa.', 'Neben dem offenen Bereich vor der Villa auch Zeit für die höher gelegenen Wege lassen.', '游览时除了别墅前的开阔地，也给地势较高的园路留些时间。'],
  loserfenster: ['Save the exposed approach for good visibility and firm footing.', 'Den ausgesetzten Zustieg nur bei guter Sicht und sicherem Tritt wählen.', '视野良好且脚下稳固时，再走临崖进路。'],
};
