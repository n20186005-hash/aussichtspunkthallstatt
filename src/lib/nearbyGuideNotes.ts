import type { NearbyPlace } from './nearbyAttractions';

type Translations = readonly [english: string, german: string, chinese: string];

type GuideNotes = {
  background: Translations;
  photo: Translations;
  question: Translations;
  answer: Translations;
};

export const nearbyGuideNotes = {
  'waldbachstrub': {
    background: [
      "For generations the Waldbach has linked Hallstatt’s inhabited valley floor with the steep Dachstein hinterland. At Waldbachstrub it drops through a rock cleft, with the upper flow breaking into smaller falls below.",
      "Der Waldbach verbindet den besiedelten Talboden seit Generationen mit dem steilen Dachstein-Hinterland. Am Waldbachstrub stürzt er durch einen Felsspalt und teilt sich unten in kleinere Kaskaden.",
      "瓦尔德巴赫溪世代贯穿有人居住的谷底与达赫施泰因陡峭的腹地。溪水在瀑布处穿过岩缝，下方分成多股小瀑流。",
    ],
    photo: [
      "From a stable spot on the signed path, frame the dark rock around the white water. Pack a cloth for spray.",
      "Vom sicheren Stand am markierten Weg den dunklen Fels als Rahmen für das weiße Wasser nutzen. Ein Tuch gegen Gischt mitnehmen.",
      "在标记步道的稳固位置，用暗色岩壁衬托白色瀑水。带一块擦拭水雾的镜头布。",
    ],
    question: [
      "Is the last section an easy walk?",
      "Ist das letzte Stück ein leichter Spaziergang?",
      "最后一段适合轻松散步吗？",
    ],
    answer: [
      "The final section is graded black for difficulty. For an easier outing, turn back in the valley before the steep waterfall approach.",
      "Der letzte Abschnitt ist als schwarzer Bergweg eingestuft. Für einen leichteren Ausflug vor dem steilen Wasserfallzustieg im Tal umkehren.",
      "最后一段列为黑色难度山径。想轻松走走，可在进入通往瀑布的陡坡前折返。",
    ],
  },
  'echerntal': {
    background: [
      "The valley is a quieter counterpart to the lakeside street. The Malerweg recalls the painters who sought out the inner Salzkammergut, and the Waldbach bridge shows how settlement follows the narrow valley floor.",
      "Das Tal bildet einen ruhigen Gegenpol zur Seestraße. Der Malerweg erinnert an die Landschaftsmaler des inneren Salzkammerguts, und an der Waldbachbrücke lässt sich die Bebauung entlang des schmalen Talbodens ablesen.",
      "谷地比湖滨街安静。画家步道让人想起曾到访内萨尔茨卡默古特的风景画家，从瓦尔德巴赫桥可以看出聚落如何沿狭窄谷底展开。",
    ],
    photo: [
      "From the public bridge, include the stream and both sides of the valley in one frame.",
      "Von der öffentlichen Brücke Bach und beide Talseiten in einem Bild aufnehmen.",
      "在公共桥上把溪流与两侧谷坡一起纳入画面。",
    ],
    question: [
      "Must I hike all the way to the waterfall?",
      "Muss ich bis zum Wasserfall wandern?",
      "一定要走到瀑布吗？",
    ],
    answer: [
      "A short walk to the valley bridge and back makes a separate outing. The steep final approach to Waldbachstrub can be left for another day.",
      "Der Hin- und Rückweg zur Talbrücke eignet sich als eigener Ausflug. Den steilen Anstieg zum Waldbachstrub kann man für einen anderen Tag einplanen.",
      "走到谷地桥梁再返回，就能安排成一次独立短游。瀑布前的陡坡可以留到另一天。",
    ],
  },
  'simonyhuette': {
    background: [
      "The hut preserves a tradition of mountaineering on the Dachstein plateau associated with Friedrich Simony’s glacier research. The low building and sparsely vegetated surroundings show how exposed the site is.",
      "Die Hütte steht in der Tradition des Dachstein-Alpinismus und der Gletscherforschung Friedrich Simonys. Das niedrige Gebäude und die spärliche Vegetation zeigen die Exponiertheit des Standorts.",
      "山屋延续了当地与西莫尼冰川研究相关的登山传统。低矮的建筑与稀疏的植被反映出高原环境的开阔与暴露。",
    ],
    photo: [
      "From the hut approach, use the building for scale against the limestone plateau. Leave the glacier out of the walking route.",
      "Vom Hüttenzustieg das Gebäude als Maßstab vor dem Kalkplateau nutzen. Die Wanderung ohne Gletscherquerung planen.",
      "在山屋进路上以建筑为比例尺拍摄石灰岩高原。规划步行路线时避开冰川。",
    ],
    question: [
      "Can I treat this as a quick cable-car stop?",
      "Genügt dafür ein kurzer Halt mit der Seilbahn?",
      "能把山屋当作搭缆车顺访的小站吗？",
    ],
    answer: [
      "The hut requires a separate alpine approach. Check the entire route, weather and hut service before departure.",
      "Die Hütte erfordert einen eigenen alpinen Zustieg. Route, Wetter und Hüttenbetrieb vor dem Aufbruch vollständig prüfen.",
      "山屋需要单独安排高山徒步。出发前核对全程路线、天气与山屋营运。",
    ],
  },
  'dachstein-ice-cave': {
    background: [
      "The cave became a show cave in the early twentieth century. Look for smooth ice surfaces next to rough limestone, and follow how the lighting makes the chamber depth visible.",
      "Die Höhle wurde im frühen 20. Jahrhundert zur Schauhöhle. Glatte Eisflächen, rauer Kalk und die Beleuchtung lassen die Tiefe der Kammern erkennen.",
      "洞穴在二十世纪初开放参观。可以对比平滑冰面与粗糙石灰岩，观察灯光如何表现洞室纵深。",
    ],
    photo: [
      "If the guide permits photography, steady the camera from the viewing stop and use the existing lighting.",
      "Wenn die Führung Fotos erlaubt, die Kamera am Haltepunkt ruhig halten und das vorhandene Licht nutzen.",
      "导游允许拍照时，在停留点稳住相机，利用洞内原有灯光。",
    ],
    question: [
      "Do I need a jacket in summer?",
      "Brauche ich im Sommer eine Jacke?",
      "夏天也需要外套吗？",
    ],
    answer: [
      "Bring a warm layer for the underground portion and allow time for the uphill approach between the lift and tour meeting point.",
      "Eine warme Schicht für den Höhlenbesuch mitnehmen und Zeit für den Anstieg vom Lift zum Führungstreffpunkt einplanen.",
      "洞内仍需保暖衣物，缆车站到导览集合点的上坡也要留出时间。",
    ],
  },
  'dachstein-mammoth-cave': {
    background: [
      "The cave records water cutting through the Dachstein limestone. Broad passages and narrower links make it easier to see how the underground system developed along weaknesses in the rock.",
      "Die Höhle zeigt die Arbeit des Wassers im Dachsteinkalk. Breite Gänge und enge Verbindungen lassen erkennen, wie sich das System entlang von Schwachstellen im Fels entwickelte.",
      "洞道记录了水流侵蚀达赫施泰因石灰岩的过程。宽阔通道与狭窄连接段展现出水沿岩石薄弱处扩展的轨迹。",
    ],
    photo: [
      "Where photography is permitted, include a lit section of the walkway to show the height of the passage.",
      "Wo Fotos erlaubt sind, einen beleuchteten Wegabschnitt als Maßstab für die Ganghöhe einbeziehen.",
      "获准拍照时，可把亮灯的栈道纳入画面，作为洞道高度的参照。",
    ],
    question: [
      "Is it the same tour as the ice cave?",
      "Ist das dieselbe Führung wie in der Rieseneishöhle?",
      "与巨型冰洞是同一场导览吗？",
    ],
    answer: [
      "The two caves have separate approaches and tours from Schönbergalm. Coordinate both meeting times if you plan to visit them together.",
      "Die beiden Höhlen haben ab der Schönbergalm getrennte Zustiege und Führungen. Für einen Doppelbesuch beide Treffzeiten abstimmen.",
      "两洞从舍恩贝格高山牧场分别进洞、分别导览。连访时要核对两场集合时间。",
    ],
  },
  'koppenbruellerhoehle': {
    background: [
      "This cave takes its name from the roar of water that can be heard inside. The low entrance beside the forest path gives way to passages that help explain the valley’s karst drainage.",
      "Die Höhle verdankt ihren Namen dem Rauschen des Wassers im Inneren. Hinter dem niedrigen Eingang am Waldweg zeigen die Gänge die unterirdische Entwässerung des Karsttals.",
      "洞名来自洞内水流的轰鸣声。林间小径旁低矮的洞口通往地下洞道，展示喀斯特山谷的排水系统。",
    ],
    photo: [
      "The streamside path and the approach to the entrance offer a clear view of how the cave sits in the valley.",
      "Der Bachweg und der Zugang zum Eingang zeigen, wie die Höhle ins Tal eingebettet ist.",
      "溪畔步道和洞口进路适合拍摄洞穴与山谷的位置关系。",
    ],
    question: [
      "Do I take the Krippenstein cable car?",
      "Brauche ich die Krippenstein-Seilbahn?",
      "需要乘克里彭施泰因缆车吗？",
    ],
    answer: [
      "Walk in from the Koppen valley entrance near Obertraun. Check the separate cave schedule before setting out.",
      "Der Zugang erfolgt zu Fuß vom Koppental bei Obertraun. Vorher den eigenen Führungsplan der Höhle prüfen.",
      "从上特劳恩附近的科彭谷入口步行前往，出发前查这座洞穴单独的导览时段。",
    ],
  },
  'welterbespirale': {
    background: [
      "The viewing structure turns the Krippenstein summit into a place to read the wider UNESCO cultural landscape. Its spiral contrasts with the angular limestone and directs the gaze around several sides of the summit.",
      "Die Aussichtsanlage macht den Krippensteingipfel zum Lesepunkt der UNESCO-Kulturlandschaft. Die Spirale hebt sich vom kantigen Kalk ab und lenkt den Blick in mehrere Richtungen.",
      "螺旋构筑物让游客从峰顶读懂更广阔的世界遗产文化景观。它与棱角分明的石灰岩形成对照，并引导视线转向多个方向。",
    ],
    photo: [
      "Photograph the structure from the signed summit approach before stepping onto the platform. Clear weather reveals successive ridges behind it.",
      "Die Anlage vom markierten Gipfelweg fotografieren, bevor man die Plattform betritt. Bei klarer Sicht staffeln sich die Bergkämme dahinter.",
      "登台前可从有标记的登顶步道拍摄构筑物。天气晴好时，后方山脊层次更清楚。",
    ],
    question: [
      "Which lift station is closest?",
      "Welche Seilbahnstation liegt am nächsten?",
      "哪座缆车站最近？",
    ],
    answer: [
      "Use the Krippenstein upper station and follow the summit signs. Leave time to catch the last descent.",
      "An der Bergstation Krippenstein den Gipfelschildern folgen. Für die letzte Talfahrt ausreichend Zeit lassen.",
      "由克里彭施泰因上站沿登顶指示前往，并预留下山缆车时间。",
    ],
  },
  'vorderer-gosausee': {
    background: [
      "The lower lake formed in a glacial basin and later became part of the valley’s hydropower system. The developed approach shore gives way to steeper slopes framing the Dachstein.",
      "Der Vordere Gosausee entstand in einem Gletscherbecken und wurde später Teil der Wasserkraftnutzung im Tal. Hinter dem erschlossenen Ufer fassen steilere Hänge den Dachstein ein.",
      "前戈绍湖形成于冰川盆地，后来纳入山谷的水力发电系统。由入口岸边向湖内望去，两侧陡坡把达赫施泰因山框在中间。",
    ],
    photo: [
      "At the arrival shore, place the lake in the foreground and the Dachstein at the valley’s end. Calm water can give a reflection.",
      "Am vorderen Ufer den See in den Vordergrund und den Dachstein ans Talende setzen. Ruhiges Wasser kann die Berge spiegeln.",
      "在入口岸边以湖水作前景，把谷地尽头的达赫施泰因山纳入画面。无风时可拍倒影。",
    ],
    question: [
      "Can I get a view without doing the circuit?",
      "Gibt es eine Aussicht ohne Rundwanderung?",
      "不环湖也能看到代表性湖景吗？",
    ],
    answer: [
      "Yes. The approach shore is the simplest stop, with an out-and-back along the shore if you want to extend your visit.",
      "Ja. Das vordere Ufer ist der kürzeste Besuch, mit der Möglichkeit eines Hin- und Rückwegs am See.",
      "可以。入口湖岸适合短停，也可沿岸走一段再折返。",
    ],
  },
  'hinterer-gosausee': {
    background: [
      "The upper lake marks the enclosed end of Gosau valley. Its steep rock amphitheatre shows how the different lakes lie in successive basins along the same valley.",
      "Der Hintere Gosausee liegt am abgeschlossenen Ende des Gosautals. Sein steiler Felskessel zeigt, wie die Seen in aufeinanderfolgenden Becken desselben Tals liegen.",
      "后戈绍湖位于封闭的谷地尽头。陡峭的环形岩壁显示，同一山谷的几片湖水分别坐落在连续的盆地中。",
    ],
    photo: [
      "On reaching the lake, use a wide view from the signed approach to include the cliffs and visible shoreline.",
      "Bei der Ankunft vom markierten Weg einen weiten Ausschnitt mit Felswänden und Ufer wählen.",
      "抵达后从标记步道用广角拍摄，把岩壁与可见湖岸一并纳入画面。",
    ],
    question: [
      "Can I drive to the upper lake?",
      "Kann ich zum Hinteren See fahren?",
      "能开车直达后湖吗？",
    ],
    answer: [
      "Plan to start on foot at Vorderer Gosausee and return the same way. The route passes Gosaulacke and climbs farther into the valley.",
      "Zu Fuß am Vorderen Gosausee starten und denselben Weg zurücknehmen. Die Strecke führt an der Gosaulacke vorbei weiter bergauf.",
      "安排从前湖徒步往返。路线经过戈绍拉克水洼，并继续向谷地高处爬升。",
    ],
  },
  'gosaulacke': {
    background: [
      "The middle basin shows the variation of water levels between the two larger Gosau lakes. Its low, sometimes exposed edge makes the shape of the basin easier to see than at the lower lake.",
      "Das mittlere Becken zeigt die wechselnden Wasserstände zwischen den beiden größeren Gosauseen. Am flachen, zeitweise trockenen Rand ist die Beckenform gut zu erkennen.",
      "这片中段洼地能看出戈绍湖谷的水位变化。低平、时而裸露的边缘，让水盆轮廓比前湖更容易观察。",
    ],
    photo: [
      "Frame the basin from the signed trail, adding the Dachstein skyline if clear. The exposed margins also make a useful foreground.",
      "Die Mulde vom markierten Weg aufnehmen und bei klarer Sicht den Dachstein einbeziehen. Auch der trockene Rand eignet sich als Vordergrund.",
      "从标记步道拍摄洼地。天气晴朗时可带入达赫施泰因天际线，露出的洼地边缘也适合做前景。",
    ],
    question: [
      "Will it look like a lake year-round?",
      "Sieht die Mulde ganzjährig wie ein See aus?",
      "一年四季都能看到湖面吗？",
    ],
    answer: [
      "The water level varies. Part of the interest comes from seeing the basin at its current level.",
      "Der Wasserstand schwankt. Gerade der jeweilige Zustand macht den Reiz des Beckens aus.",
      "水位会变化，观察到访时的洼地状态本身就是看点。",
    ],
  },
  'zwieselalmhoehe': {
    background: [
      "Open pasture above the cable-car station reflects continued alpine grazing. The rounded ground of the Zwieselalmhöhe and the sharp Gosaukamm offer two distinct silhouettes in one view.",
      "Die offenen Weiden oberhalb der Bergstation zeigen die alpine Weidenutzung. Die runde Zwieselalmhöhe und der schroffe Gosaukamm ergeben zwei unterschiedliche Silhouetten.",
      "缆车上站上方的开阔草坡仍体现高山放牧传统。圆缓的观景高地与戈绍山脊的尖峰在同一视野内形成对照。",
    ],
    photo: [
      "From the signed crest trail, keep the pasture in the foreground and wait for a clear view of the limestone peaks.",
      "Vom markierten Rückenweg die Weide als Vordergrund nutzen und auf freie Sicht zu den Kalkspitzen warten.",
      "从标记的坡脊步道以草场作前景，等云开后拍摄石灰岩尖峰。",
    ],
    question: [
      "Is the viewpoint at the lift exit?",
      "Liegt die Aussicht direkt am Liftausgang?",
      "观景高地就在缆车出口吗？",
    ],
    answer: [
      "Allow time for the additional uphill walk from the lift. Check grazing gates and the last cable-car descent.",
      "Zeit für den zusätzlichen Anstieg ab der Bergstation einplanen. Weidetore und letzte Talfahrt beachten.",
      "缆车上站之后仍要上坡步行。留意牧场门与末班下山缆车。",
    ],
  },
  'loeckermoos': {
    background: [
      "The bog preserves peat formed under waterlogged conditions. The low vegetation around the pool makes a natural contrast with the bulky limestone ridges beyond Gosau.",
      "Das Moor speichert Torf, der unter nassen Bedingungen entstand. Die niedrige Vegetation am Moorsee bildet einen Kontrast zu den massigen Kalkrücken hinter Gosau.",
      "长期积水形成的泥炭保留在湿地里。池边低矮植被与戈绍后方厚重的石灰岩山脊形成对照。",
    ],
    photo: [
      "Use the designated boardwalk to frame the pool and ridgeline. Stay on the boards when moving for a better angle.",
      "Moorsee und Bergkamm vom vorgesehenen Steg aufnehmen. Beim Wechsel des Blickwinkels auf dem Steg bleiben.",
      "从指定栈道拍摄池水与山脊。调整角度时也留在栈道上。",
    ],
    question: [
      "Why stay on the boardwalk?",
      "Warum auf dem Steg bleiben?",
      "为什么要留在木栈道上？",
    ],
    answer: [
      "Saturated peat and its plants can be damaged by foot traffic. The boardwalk lets visitors see the pool without crossing the bog surface.",
      "Nasser Torf und seine Pflanzen sind trittempfindlich. Über den Steg lässt sich der Moorsee ohne Betreten der Moorfläche sehen.",
      "湿软泥炭和植被经不起踩踏。沿栈道就能看到池水，无需走入湿地表面。",
    ],
  },
  'landlermuseum': {
    background: [
      "The local history museum opened in 1981 in an annex of the Goiserer mill and added its Landler collection in 1992. Look for the preserved shoemaker’s workshop alongside records of migration and everyday life.",
      "Das Heimatmuseum eröffnete 1981 im Auszugshaus der Goiserermühle. 1992 kam das Landlermuseum hinzu. Die erhaltene Schusterstube ergänzt die Geschichte von Migration und Alltag.",
      "地方史馆于 1981 年在戈伊瑟恩旧磨坊附属屋开馆，1992 年增设兰德勒展。保留下来的鞋匠工作间，将迁徙史与日常生活连接起来。",
    ],
    photo: [
      "Photograph the exterior first. Ask staff before photographing workshop tools and farm models indoors.",
      "Zuerst das Gebäude von außen aufnehmen. Für Fotos von Werkzeugen und Hofmodellen im Inneren das Personal fragen.",
      "可先拍建筑外观。拍摄室内工具与农舍模型前，先询问馆员。",
    ],
    question: [
      "What does Landler mean here?",
      "Was bedeutet Landler hier?",
      "这里的兰德勒指什么？",
    ],
    answer: [
      "The exhibits follow Protestant families displaced from the region and their descendants. The collection puts that history beside local craft traditions.",
      "Die Ausstellung folgt aus der Region umgesiedelten evangelischen Familien und ihren Nachkommen. Sie stellt diese Geschichte neben das lokale Handwerk.",
      "展览介绍从当地被迁出的新教家庭及后代，并把这段历史与本地手工艺放在一起。",
    ],
  },
  'woodcutters-museum': {
    background: [
      "In 1977 the heritage association moved the Dürrenholzstube from Weißenbachtal to the Müllnerwäldchen. Its round-log walls and shared sleeping platform preserve the scale of a workweek shelter.",
      "1977 versetzte der Heimatverein die Dürrenholzstube aus dem Weißenbachtal ins Müllnerwäldchen. Rundholzwände und gemeinsame Bettstatt zeigen den Maßstab der Wochenunterkunft.",
      "1977 年，地方史协会把伐木工木屋从魏森巴赫谷迁至米尔纳小树林。圆木墙和共用床台保留了工人平日住宿的实际尺度。",
    ],
    photo: [
      "Take an oblique view of the cabin to show its projecting roof and round-log corners.",
      "Die Stube schräg aufnehmen, damit Dachüberstand und Rundholzecken erkennbar sind.",
      "从斜角拍木屋，可同时看到伸出的屋檐与圆木接角。",
    ],
    question: [
      "Is this the original cabin?",
      "Handelt es sich um die ursprüngliche Stube?",
      "这是真正的旧木屋吗？",
    ],
    answer: [
      "The historic building was dismantled and reassembled here. Its current setting makes it easy to pair with the nearby local museum.",
      "Das historische Gebäude wurde abgetragen und hier wieder aufgebaut. Es lässt sich gut mit dem nahen Heimatmuseum verbinden.",
      "这座历史木屋经拆解后在此重建，可与附近地方史馆一并参观。",
    ],
  },
  'ewige-wand': {
    background: [
      "The path’s short tunnels and ledges form a distinctive piece of trail engineering above Bad Goisern. Near the openings, you can see how the route uses natural breaks in the cliff.",
      "Kurze Tunnel und Felsbänder prägen diesen Wegbau über Bad Goisern. An den Öffnungen ist zu sehen, wie der Weg natürliche Absätze nutzt.",
      "短隧道与临崖步道构成巴德戈伊瑟恩上方独特的步道工程。由洞口可看出路线如何借用岩壁天然台阶。",
    ],
    photo: [
      "At a wider permitted section, use a tunnel opening to frame the valley. Keep the narrow passage clear.",
      "An einer breiteren erlaubten Stelle den Talausblick durch die Tunnelöffnung rahmen. Den engen Durchgang freihalten.",
      "在允许停留的较宽处以洞口框住谷景，保持狭窄通道畅通。",
    ],
    question: [
      "Is the path exposed?",
      "Ist der Weg ausgesetzt?",
      "步道有临崖路段吗？",
    ],
    answer: [
      "Several stretches run along the cliff. Check closures and turn back if the surface or exposure is unsuitable.",
      "Mehrere Abschnitte verlaufen an der Felswand. Sperren prüfen und bei ungeeignetem Untergrund oder zu ausgesetztem Gelände umkehren.",
      "数段路线沿岩壁经过。先查封闭信息，若路面条件或临崖程度不适合，可原路折返。",
    ],
  },
  'kaiservilla': {
    background: [
      "Franz Joseph and Elisabeth used the villa as a summer residence from the mid-nineteenth century. Compare its symmetrical façade and wings from the approach before joining an interior tour.",
      "Franz Joseph und Elisabeth nutzten die Villa seit der Mitte des 19. Jahrhunderts als Sommerresidenz. Vor einer Innenführung die symmetrische Fassade und die Flügel vom Zugang aus vergleichen.",
      "十九世纪中叶起，弗朗茨·约瑟夫与伊丽莎白把别墅用作夏季居所。参加室内导览前，可从进路观察对称立面与两侧翼楼。",
    ],
    photo: [
      "From the open park approach, centre the entrance and leave room for the wings. Ask the guide about photography indoors.",
      "Vom offenen Parkzugang den Eingang mittig aufnehmen und Platz für beide Flügel lassen. Innen nach den Fotoregeln fragen.",
      "从开阔进路把入口放在中央，为两侧翼楼留出空间。室内拍摄请先问导游。",
    ],
    question: [
      "Does park admission include the villa tour?",
      "Ist die Villaführung im Parkeintritt enthalten?",
      "公园门票包含别墅导览吗？",
    ],
    answer: [
      "Check the operator’s current ticket choices and tour times. The park visit and guided villa entry have different arrangements.",
      "Aktuelle Ticketoptionen und Führungszeiten beim Betreiber prüfen. Parkbesuch und geführter Eintritt in die Villa sind unterschiedlich geregelt.",
      "查运营方最新票种和导览时间。公园参观与别墅导览各有安排。",
    ],
  },
  'marmorschloessl': {
    background: [
      "Court gardener Franz Rauch created the small Tudor-style cottage for Elisabeth between 1856 and 1861. Its textured stonework, gables and loggia contrast with the formal villa down the slope.",
      "Hofgärtner Franz Rauch errichtete das kleine Cottage im Tudorstil von 1856 bis 1861 für Elisabeth. Strukturiertes Mauerwerk, Giebel und Loggia unterscheiden es von der tiefer gelegenen Villa.",
      "1856 至 1861 年，宫廷园艺师弗朗茨·劳赫为伊丽莎白建造了这栋都铎式小屋。石墙肌理、山墙与敞廊有别于坡下的正式别墅。",
    ],
    photo: [
      "From the public path, take a three-quarter view to show both the stone façade and loggia.",
      "Vom freigegebenen Parkweg eine schräge Ansicht wählen, die Steinfassade und Loggia zeigt.",
      "从对游客开放的园路斜拍，可同时拍到石砌外墙与敞廊。",
    ],
    question: [
      "Can I count on an exhibition every day?",
      "Gibt es täglich eine Ausstellung?",
      "每天都有展览可看吗？",
    ],
    answer: [
      "Check the current exhibition and park access separately, especially outside the main visitor season.",
      "Aktuelle Ausstellung und Parkzutritt getrennt prüfen, besonders außerhalb der Hauptsaison.",
      "当前展览和公园通行要分别查询，淡季尤其如此。",
    ],
  },
  'kurpark-bad-ischl': {
    background: [
      "The garden developed around Bad Ischl’s spa and social life. Flower beds, fountain and the theatre frontage still make the original relationship between the park and the Kurhaus easy to read.",
      "Der Garten entstand im Umfeld des Ischler Kur- und Gesellschaftslebens. Beete, Brunnen und Theaterfront zeigen weiterhin die räumliche Verbindung zum Kurhaus.",
      "花园随巴德伊施尔的疗养与社交生活发展。花坛、喷泉和剧院立面仍能看出花园与疗养会馆的空间关系。",
    ],
    photo: [
      "Align the fountain with the theatre front for a formal garden view, or shoot across the beds for a lower foreground.",
      "Für eine formale Ansicht Brunnen und Theaterfront ausrichten oder die Beete als niedrigen Vordergrund nutzen.",
      "可把喷泉与剧院正面对齐，呈现规整园景，也可贴近花坛取低前景。",
    ],
    question: [
      "Is this the same park as Kaiserpark?",
      "Ist das derselbe Park wie der Kaiserpark?",
      "这里和皇室公园是同一处吗？",
    ],
    answer: [
      "The Kurpark is by the theatre in town. The Kaiserpark is the separate garden associated with the Kaiservilla.",
      "Der Kurpark liegt beim Theater in der Innenstadt. Der Kaiserpark gehört zur Anlage der Kaiservilla.",
      "疗养公园在市区剧院旁。皇室公园则属于皇帝别墅园区。",
    ],
  },
  'kongress-theaterhaus': {
    background: [
      "The former Kurhaus embodied Bad Ischl’s role as a nineteenth-century spa town. Its long garden-facing front and central entrance retain that civic character, while the theatre programme continues the town’s operetta tradition.",
      "Das ehemalige Kurhaus steht für Bad Ischls Rolle als Kurstadt des 19. Jahrhunderts. Lange Gartenfront und zentraler Eingang prägen den Bau, und der Spielplan führt die Operettentradition weiter.",
      "旧疗养会馆体现了巴德伊施尔在十九世纪的疗养特色。面朝花园的长立面与中央入口保留公共建筑气质，剧院节目则延续当地轻歌剧传统。",
    ],
    photo: [
      "Step back across the Kurpark for the whole façade and look for poster boards near the entrance for current performances.",
      "Vom Kurpark aus die ganze Fassade aufnehmen. An den Aushängen beim Eingang nach aktuellen Aufführungen schauen.",
      "退到疗养公园内可拍完整立面，入口公示栏可查看近期演出。",
    ],
    question: [
      "Can I visit without a performance ticket?",
      "Kann ich ohne Veranstaltungskarte kommen?",
      "没有演出票能参观吗？",
    ],
    answer: [
      "The front can be viewed from the park. For the auditorium, check an event, exhibition or guided visit with the venue.",
      "Die Front ist vom Park aus sichtbar. Für den Saal eine Veranstaltung, Ausstellung oder Führung beim Haus erfragen.",
      "从公园可看建筑外观。若要进入观众厅，请向场馆查询活动、展览或导览。",
    ],
  },
  'leharvilla': {
    background: [
      "The riverside villa links Franz Lehár’s working life with the operetta culture of Bad Ischl. The furnished rooms give the home a domestic scale distinct from the public theatre.",
      "Die Villa am Fluss verbindet Franz Lehárs Arbeit mit der Ischler Operettenkultur. Die eingerichteten Räume sind der private Gegenpol zum öffentlichen Theater.",
      "这座河畔别墅把弗朗茨·莱哈尔的创作生活与当地轻歌剧文化连接起来。保留陈设的室内空间与公共剧院形成对照。",
    ],
    photo: [
      "From a public position by the Traun, frame the villa together with its riverside setting.",
      "Von einem öffentlichen Standort an der Traun die Villa mit ihrem Flussumfeld aufnehmen.",
      "在特劳恩河畔的公共位置，把别墅和河岸环境一并拍入画面。",
    ],
    question: [
      "Can I walk through the rooms on my own?",
      "Kann ich die Räume allein besichtigen?",
      "可以自行参观室内吗？",
    ],
    answer: [
      "Interior visits are guided. Check the museum’s time slots and meeting instructions before walking over.",
      "Die Innenräume werden im Rahmen einer Führung besucht. Vorher Termine und Treffpunkt beim Museum prüfen.",
      "室内参观由导游带领。步行前往前先查场次及集合方式。",
    ],
  },
  'katrin': {
    background: [
      "The cable car shaped access to Bad Ischl’s local mountain. Above the station, the ridgeline and viewpoints reveal why the mountain works as an overview of the Traun valley and the surrounding lake district.",
      "Die Seilbahn prägt den Zugang zum Hausberg von Bad Ischl. Oberhalb der Station öffnen Rücken und Aussichtsplätze den Blick über Trauntal und Seenregion.",
      "缆车改变了前往巴德伊施尔近郊山地的方式。上站以上的山脊与观景点可俯瞰特劳恩河谷和周边湖区。",
    ],
    photo: [
      "Use a signed viewpoint above the lift. Include part of the slope in the foreground to show the drop toward town.",
      "Einen ausgeschilderten Aussichtspunkt oberhalb der Bahn nutzen. Ein Stück Hang im Vordergrund macht den Höhenunterschied sichtbar.",
      "在缆车上站以上的指定观景点拍摄，把一段坡面留在前景，以体现至市区的落差。",
    ],
    question: [
      "Do I need to hike to the highest point?",
      "Muss ich bis zum höchsten Punkt wandern?",
      "必须走到最高点才能看景吗？",
    ],
    answer: [
      "There are signed viewpoints and shorter outings near the upper station. Choose the route by current conditions and return time.",
      "Nahe der Bergstation gibt es markierte Aussichtspunkte und kürzere Wege. Die Route nach Bedingungen und Rückfahrzeit auswählen.",
      "上站附近有标记观景点与短线步道。根据当天路况和返程时间选择即可。",
    ],
  },
  'siriuskogl': {
    background: [
      "The Franz-Josefs-Warte adds a historic lookout tower to the wooded hill. Its timber upper levels lift the view above the trees, exposing the curve of the Traun and the town below.",
      "Die Franz-Josefs-Warte ist der historische Aussichtsturm auf dem bewaldeten Hügel. Die hölzernen oberen Geschosse heben den Blick über die Bäume zur Traun und zur Stadt.",
      "弗朗茨·约瑟夫观景塔是林间山丘上的历史瞭望塔。木质上层高过树冠，能看到下方特劳恩河的弯道与市区。",
    ],
    photo: [
      "Take an exterior photo from the clear space by the tower and use the viewing deck only when open.",
      "Den Turm von der freien Fläche am Fuß fotografieren. Die Plattform nur bei geöffnetem Zugang betreten.",
      "可在塔脚开阔处拍外观，开放时再到观景层拍摄。",
    ],
    question: [
      "Can I visit between trains?",
      "Lässt sich der Turm zwischen zwei Zügen besuchen?",
      "能在候车间隙顺访吗？",
    ],
    answer: [
      "Allow for the uphill walk from town and the full return to the station. Check tower access before relying on the panorama.",
      "Aufstieg ab der Stadt und den gesamten Rückweg zum Bahnhof einkalkulieren. Für das Panorama vorher den Turmzugang prüfen.",
      "从市区上坡和返回火车站都需要时间。打算登塔看全景时先确认入口开放。",
    ],
  },
  'altausseer-see': {
    background: [
      "The lake lies under the Loser and has long supported fishing in Ausseerland. The near-shore paths connect the village with stretches of lakeside forest and show different faces of the same mountain basin.",
      "Der See liegt unter dem Loser und ist seit Langem ein Fischgewässer des Ausseerlands. Uferwege verbinden den Ort mit Waldabschnitten und zeigen unterschiedliche Seiten des Beckens.",
      "湖泊位于洛瑟山下，长期是奥瑟兰渔业水域。湖滨小径连接村庄与林岸，从不同方向可以观察同一盆地。",
    ],
    photo: [
      "From the eastern shore, look back across the water toward the Loser side and include the shoreline to give the photograph depth.",
      "Vom Ostufer über das Wasser zur Loserseite blicken und das nahe Ufer als Tiefenstaffelung einbeziehen.",
      "从东岸回望洛瑟山一侧，把近岸也收入画面以增加纵深。",
    ],
    question: [
      "Where should I start for a short visit?",
      "Wo beginne ich einen kurzen Besuch?",
      "短时游览从哪里开始？",
    ],
    answer: [
      "Start at the village shore and choose a turnaround point based on your time. The full circuit works better as a separate outing.",
      "Am Dorfufer starten und je nach Zeit umkehren. Die ganze Runde eignet sich eher als eigener Ausflug.",
      "从村庄湖岸出发，按剩余时间选折返点。绕湖一圈更适合单独安排。",
    ],
  },
  'altaussee-salt-mine': {
    background: [
      "The Steinberg tunnel illustrates the area’s centuries of salt extraction. Underground storage of art during the Second World War adds a separate chapter to the mine’s working history.",
      "Der Steinbergstollen steht für den jahrhundertelangen Salzabbau. Die Einlagerung von Kunst im Zweiten Weltkrieg bildet ein eigenes Kapitel der Betriebsgeschichte.",
      "施泰因贝格矿道见证了当地数百年的采盐历史。第二次世界大战期间在地下存放艺术品，是矿山营运史的另一段经历。",
    ],
    photo: [
      "Use the official visitor entrance as an outdoor photo opportunity. Underground, follow the tour’s rules about photography and where visitors can stop.",
      "Am offiziellen Besuchereingang bietet sich eine Außenaufnahme an. Unter Tage die Regeln der Führung zu Fotos und Haltepunkten beachten.",
      "可在正式访客入口拍摄外景。进入矿道后，按导览规定选择是否拍照及停留位置。",
    ],
    question: [
      "Is this the Hallstatt salt mine?",
      "Ist das das Salzbergwerk von Hallstatt?",
      "这里就是哈尔施塔特盐矿吗？",
    ],
    answer: [
      "The Altaussee site has its own entrance at Lichtersberg 25 and its own tours. Choose Altaussee when booking and navigating.",
      "Altaussee hat einen eigenen Eingang am Lichtersberg 25 und eigene Führungen. Bei Buchung und Navigation Altaussee auswählen.",
      "阿尔陶塞矿场的入口在利希特斯贝格 25 号，导览也独立安排。订票和导航请选阿尔陶塞。",
    ],
  },
  'augstsee': {
    background: [
      "This small lake occupies a basin high in the Loser area. Its compact shape and nearby grass and limestone slopes make the change between the valley lakes and the upland landscape easy to see.",
      "Der kleine See liegt in einer Mulde hoch im Losergebiet. Seine kompakte Form, Grasflanken und Kalkhänge zeigen den Wechsel von den Talseen zur Höhenlandschaft.",
      "这片小湖位于洛瑟山区高处的洼地。紧凑的湖面、草坡与石灰岩坡展现了从谷底湖泊到高地的地貌变化。",
    ],
    photo: [
      "From the signed approach, frame the whole basin with the near bank leading into the scene.",
      "Vom markierten Zugang das ganze Becken aufnehmen und das nahe Ufer als Blickführung nutzen.",
      "从标记进路拍摄整个盆地，以近岸线条引导视线。",
    ],
    question: [
      "Can I add the Loser Window on the same outing?",
      "Lässt sich das Loserfenster am selben Tag ergänzen?",
      "可以同日加走洛瑟山石窗吗？",
    ],
    answer: [
      "It is a separate upland stop. Make the decision at the Loser access after checking trail conditions and your remaining return time.",
      "Es ist ein eigener Höhenwegpunkt. Am Loser-Zugang nach Wegzustand und verbleibender Rückfahrzeit entscheiden.",
      "石窗是另一处高地景点。抵达洛瑟山入口后，再按路况和返程时间决定。",
    ],
  },
  'kammerhofmuseum': {
    background: [
      "The museum occupies Bad Aussee’s historic Kammerhof, a building associated with regional salt administration. The stone frontage and interior collection give two ways to trace the influence of salt and local dress on Ausseerland.",
      "Das Museum befindet sich im historischen Kammerhof, der mit der regionalen Salzverwaltung verbunden war. Steinfassade und Sammlung erzählen von Salz und Tracht im Ausseerland.",
      "博物馆设在与地方盐业管理有关的历史建筑卡默霍夫里。石砌立面与馆藏分别从建筑和展品角度讲述奥瑟兰的盐业与服饰。",
    ],
    photo: [
      "From Chlumeckyplatz, step back across the square to fit the building’s full façade. Check indoor photo rules at the entrance.",
      "Vom Chlumeckyplatz über den Platz zurücktreten, um die Fassade ganz zu erfassen. Die Fotoregeln innen am Eingang erfragen.",
      "从克卢梅茨基广场退开几步可拍完整立面。室内拍摄规定请在入口确认。",
    ],
    question: [
      "How can I combine it with the town centre?",
      "Wie lässt es sich mit dem Stadtzentrum verbinden?",
      "如何与市中心散步一起安排？",
    ],
    answer: [
      "Begin at Chlumeckyplatz and see the Kammerhof before continuing toward the nearby town streets and river crossings.",
      "Am Chlumeckyplatz mit dem Kammerhof beginnen und anschließend zu den nahen Gassen und Flussübergängen gehen.",
      "在克卢梅茨基广场先看卡默霍夫，再步行探索邻近街巷与过河桥梁。",
    ],
  },
  'grundlsee': {
    background: [
      "The lake forms the broad western part of the three-lake landscape. Travel along its shore reveals a shift from the developed village side toward the narrower cliffs and woods at the Gößl end.",
      "Der Grundlsee bildet den breiten Westteil der Drei-Seen-Landschaft. Entlang des Ufers führt der Blick vom erschlossenen Hauptort zu engeren Fels- und Waldhängen bei Gößl.",
      "格伦德尔湖构成三湖景观较宽阔的西段。沿岸可见从设施集中的主村逐渐过渡到格瑟尔一端较窄的岩坡与林地。",
    ],
    photo: [
      "From the western waterfront, point the camera along the lake’s length. The near jetty or shore can make a useful foreground.",
      "Vom Westufer längs über den See fotografieren. Ein naher Steg oder das Ufer eignet sich als Vordergrund.",
      "从西岸顺着湖的长轴取景，可把近处码头或湖岸当作前景。",
    ],
    question: [
      "Do I need a boat for the main lake view?",
      "Brauche ich ein Schiff für den Hauptseeblick?",
      "一定要坐船才能看主湖景吗？",
    ],
    answer: [
      "The western public waterfront already gives a view along the lake. Boat trips add views from the water when seasonal services operate.",
      "Das öffentliche Westufer bietet bereits den Längsblick. Bei Saisonbetrieb ergänzt eine Schifffahrt die Sicht vom Wasser.",
      "西侧公共湖岸已能看到湖面纵深。有季节船班时，可加上水上视角。",
    ],
  },
  'toplitzsee': {
    background: [
      "Steep wooded slopes enclose this long, narrow lake east of Gößl. The historic timber transport works near the eastern end connect its landscape with the smaller Kammersee.",
      "Steile Waldhänge umschließen den langen, schmalen See östlich von Gößl. Historische Anlagen zur Holztrift am Ostende verbinden die Landschaft mit dem kleineren Kammersee.",
      "陡峭林坡环绕着格瑟尔以东的狭长湖泊。东端的历史木材漂运遗迹把这片湖区与较小的卡默湖相连。",
    ],
    photo: [
      "At the west landing, shoot along the narrow waterline. On the boat, keep photo gear clear of narrow boarding areas.",
      "An der Westanlegestelle längs über die schmale Wasserfläche fotografieren. Beim Einsteigen die engen Bereiche freihalten.",
      "在西侧码头沿狭长水面取景。上船时收好相机设备，给狭窄登船区留出空间。",
    ],
    question: [
      "How do I reach the eastern landing?",
      "Wie erreiche ich die Ostanlegestelle?",
      "怎样到东岸码头？",
    ],
    answer: [
      "Check the seasonal boat from the west landing. Leave enough time to return to Gößl without relying on a late sailing.",
      "Die saisonale Fahrt ab der Westanlegestelle prüfen. Genügend Zeit für die Rückkehr nach Gößl einplanen.",
      "查询西侧码头的季节船班，并为回到格瑟尔留足时间。",
    ],
  },
  'kammersee': {
    background: [
      "A historic timber-floating channel was cut through rock between Kammersee and Toplitzsee. The small basin and the remaining works show how people adapted the narrow separation between the two lakes.",
      "Zwischen Kammersee und Toplitzsee wurde ein historischer Triftkanal durch den Fels geschlagen. Becken und erhaltene Anlage zeigen die Nutzung der schmalen Trennung zwischen beiden Seen.",
      "卡默湖和托普利茨湖之间曾凿岩修建木材漂运水道。小湖盆与遗存展示了当地如何利用两湖之间的狭窄岩脊。",
    ],
    photo: [
      "At the end of the marked footpath, frame the near shore and enclosing woodland. The gallery photo gives the wider three-lake relationship from above.",
      "Am Ende des markierten Fußwegs nahes Ufer und Wald in den Ausschnitt nehmen. Das Foto von oben zeigt die Lage im Drei-Seen-Gebiet.",
      "在标记步道尽头拍近岸和周围林地。页面实景图提供的是从高处俯瞰三湖的关系。",
    ],
    question: [
      "Can I drive to the lakeshore?",
      "Kann ich bis zum Seeufer fahren?",
      "能开车抵达湖岸吗？",
    ],
    answer: [
      "The standard visitor approach uses the Toplitzsee boat and then a short walk. Check the boat schedule and return arrangements first.",
      "Der übliche Besucherzugang führt mit dem Boot über den Toplitzsee und dann ein Stück zu Fuß. Fahrt und Rückkehr zuvor klären.",
      "常用访客路线是乘船穿越托普利茨湖，再走一小段路。先确认船班与返程安排。",
    ],
  },
  'goessl': {
    background: [
      "Gößl sits at the eastern meeting point of Grundlsee, the valley toward Toplitzsee and the cliff slopes above. Its modest lanes and lakeside open space make that relationship visible on foot.",
      "Gößl liegt am östlichen Übergang von Grundlsee, Tal zum Toplitzsee und Felsflanken. Kleine Gassen und offene Uferflächen machen diese Lage beim Gehen sichtbar.",
      "格瑟尔处在格伦德尔湖东端、通往托普利茨湖的谷地与上方岩坡的交会处。走过小巷与开阔湖岸，就能读懂村落的区位。",
    ],
    photo: [
      "Use the public shore to look west along Grundlsee or include the moored wooden boats where they are visible.",
      "Vom öffentlichen Ufer nach Westen über den Grundlsee blicken und gegebenenfalls die sichtbaren Holzboote einbeziehen.",
      "从公共湖岸向西拍摄格伦德尔湖，若有可见的木船也可一并收入画面。",
    ],
    question: [
      "Is Gößl a useful base for the other lakes?",
      "Eignet sich Gößl als Ausgangspunkt für die anderen Seen?",
      "适合从格瑟尔出发去另外两座湖吗？",
    ],
    answer: [
      "The walk toward Toplitzsee starts from this end of Grundlsee. For a combined trip, check the boat schedules and the walk back.",
      "Der Spazierweg zum Toplitzsee beginnt an diesem Ende des Grundlsees. Für eine Kombination Fahrpläne und Rückweg prüfen.",
      "从格伦德尔湖这一端可起步前往托普利茨湖。若串游多湖，先查船班及步行回程。",
    ],
  },
  'kaiserpark': {
    background: [
      "The nineteenth-century landscaped grounds formed the outdoor setting of the imperial summer residence. Look at how formal space in front of the villa gives way to slopes, trees and smaller structures uphill.",
      "Der Landschaftspark des 19. Jahrhunderts bildete den Freiraum der kaiserlichen Sommerresidenz. Vor der Villa weicht die formale Anlage bergauf Hängen, Bäumen und kleineren Bauten.",
      "十九世纪的风景园是皇室夏季居所的户外环境。由别墅正面朝坡上走，可观察规整空间如何过渡到坡地、树木与小型构筑物。",
    ],
    photo: [
      "Choose a garden path that frames trees and the villa or the hunting monument, and leave the lawn undisturbed.",
      "Einen Parkweg wählen, der Bäume und Villa oder Jagddenkmal einrahmt. Auf den freigegebenen Wegen bleiben.",
      "可在园路上以树木衬托别墅或狩猎纪念雕像，并沿开放路线行走。",
    ],
    question: [
      "Can I visit just the park?",
      "Kann ich nur den Park besuchen?",
      "可以只参观公园吗？",
    ],
    answer: [
      "Check park admission before arrival. A walk through the grounds can be planned separately from the interior tour.",
      "Den Parkeintritt vorab prüfen. Ein Rundgang im Park lässt sich getrennt von der Innenführung planen.",
      "事先核对公园入场规定。园内散步可与室内导览分开安排。",
    ],
  },
  'loserfenster': {
    background: [
      "The rock opening formed as weathering exploited weaknesses in the Loser limestone. Its irregular rim and sloping base reveal more of that process than a distant silhouette alone.",
      "Die Felsöffnung entstand durch Verwitterung entlang von Schwachstellen im Loserkalk. Unregelmäßiger Rand und geneigte Basis zeigen den Prozess besser als die entfernte Silhouette.",
      "风化沿洛瑟山石灰岩的薄弱处扩大，形成天然岩窗。近看不规则边缘和倾斜底部，更容易理解形成过程。",
    ],
    photo: [
      "From firm ground on the marked path, place distant rock or sky in the opening. Keep away from exposed edges.",
      "Vom festen Stand am markierten Weg fernen Fels oder Himmel in die Öffnung setzen. Abstand zu ausgesetzten Kanten halten.",
      "在标记小径的稳固位置，用远处岩壁或天空填入石窗，远离暴露边缘。",
    ],
    question: [
      "Should I walk through the rock opening?",
      "Sollte ich durch die Felsöffnung gehen?",
      "需要穿过岩窗才能拍照吗？",
    ],
    answer: [
      "Views are available from the signed trail. Use that position and turn back if the weather or footing is poor.",
      "Der markierte Weg bietet bereits Sicht. Dort bleiben und bei schlechtem Wetter oder unsicherem Untergrund umkehren.",
      "标记步道上就能看到岩窗。天气不佳或地面湿滑时，从原路折返。",
    ],
  },
} satisfies Record<NearbyPlace['slug'], GuideNotes>;

export const managementRoles = {
  waldbachstrub: 'waterfall',
  echerntal: 'municipalInfo',
  simonyhuette: 'alpineClub',
  'dachstein-ice-cave': 'cave',
  'dachstein-mammoth-cave': 'cave',
  koppenbruellerhoehle: 'cave',
  welterbespirale: 'cableAccess',
  'vorderer-gosausee': 'reservoir',
  'hinterer-gosausee': 'municipalInfo',
  gosaulacke: 'municipalInfo',
  zwieselalmhoehe: 'cableAccess',
  loeckermoos: 'municipalInfo',
  landlermuseum: 'heritageMuseum',
  'woodcutters-museum': 'heritageMuseum',
  'ewige-wand': 'municipalInfo',
  kaiservilla: 'estate',
  marmorschloessl: 'exhibitions',
  'kurpark-bad-ischl': 'parkInfo',
  'kongress-theaterhaus': 'events',
  leharvilla: 'cityMuseum',
  katrin: 'cableAccess',
  siriuskogl: 'municipalInfo',
  'altausseer-see': 'lake',
  'altaussee-salt-mine': 'mine',
  augstsee: 'cableAccess',
  kammerhofmuseum: 'cityCollection',
  grundlsee: 'lake',
  toplitzsee: 'lakeBoat',
  kammersee: 'boatApproach',
  goessl: 'village',
  kaiserpark: 'estate',
  loserfenster: 'municipalInfo',
} as const satisfies Record<NearbyPlace['slug'], string>;

export const extraPhotos: Partial<Record<NearbyPlace['slug'], {
  file: string;
  alt: Translations;
  source: string;
  credit: string;
  license: string;
  licenseUrl: string;
}>> = {
  "vorderer-gosausee": {
    "file": "vorderer-gosausee-lakeshore",
    "alt": [
      "Lower Gosau Lake shoreline",
      "Ufer am Vorderen Gosausee",
      "前戈绍湖湖岸"
    ],
    "source": "https://commons.wikimedia.org/wiki/File:Vorderer_Gosausee_2019.jpg",
    "credit": "Funke",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  "toplitzsee": {
    "file": "toplitzsee-west-shore",
    "alt": [
      "Fischerhütte by the west shore of Toplitzsee",
      "Fischerhütte am Westufer des Toplitzsees",
      "托普利茨湖西岸渔人木屋"
    ],
    "source": "https://commons.wikimedia.org/wiki/File:Fischerh%C3%BCtte_Toplitzsee.jpg",
    "credit": "Funke",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  "kurpark-bad-ischl": {
    "file": "kurpark-bad-ischl-pavilion",
    "alt": [
      "Stage in Bad Ischl’s Kurpark",
      "Bühne im Kurpark Bad Ischl",
      "巴德伊施尔疗养公园舞台"
    ],
    "source": "https://commons.wikimedia.org/wiki/File:Kurpark_Bad_Ischl_B%C3%BChne.jpg",
    "credit": "Funke",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  "kaiservilla": {
    "file": "kaiservilla-facade",
    "alt": [
      "Facade of the Imperial Villa",
      "Fassade der Kaiservilla",
      "皇帝别墅立面"
    ],
    "source": "https://commons.wikimedia.org/wiki/File:Kaiservilla_Bad_Ischl.JPG",
    "credit": "Toffel",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  }
};
