import type { Loc } from './guidePages';

export type NearbyAttraction = {
  slug: string;
  title: Loc;
  town: string;
  address: string;
  contact: string;
  kind: 'trail' | 'museum' | 'cave' | 'lift' | 'boat';
  intro: Loc;
  highlight: Loc;
  route: Loc;
  source: string;
  photo: { source: string; credit: string; license: string; licenseUrl: string };
};

export const nearbyAttractions = [
  {
    "slug": "waldbachstrub",
    "title": {
      "en": "Waldbachstrub",
      "de": "Waldbachstrub",
      "zh": "瓦尔德巴赫瀑布"
    },
    "town": "Hallstatt",
    "address": "4830 Hallstatt",
    "contact": "Marktgemeinde Hallstatt",
    "kind": "trail",
    "intro": {
      "en": "The Waldbach drops through a wooded gorge at the back of the Echern valley.",
      "de": "Der Waldbach stürzt am Ende des Echerntals durch eine bewaldete Schlucht.",
      "zh": "瓦尔德巴赫溪在埃赫恩谷深处跌入林间峡谷。"
    },
    "highlight": {
      "en": "Look for the different cascades from the marked path; the spray makes exposed rock slippery.",
      "de": "Vom markierten Weg sieht man mehrere Kaskaden; die Gischt macht freiliegenden Fels rutschig.",
      "zh": "沿标记小径可看到多段跌水，水雾会让裸露岩石打滑。"
    },
    "route": {
      "en": "Start at Hallstatt’s Echerntal trailhead and follow the themed trail upstream. Turn around if any section is closed.",
      "de": "Am Echerntaler Wegbeginn in Hallstatt starten und dem Themenweg bachaufwärts folgen. Bei Sperren umkehren.",
      "zh": "从哈尔施塔特埃赫恩谷步道口出发，沿主题步道逆流而上。遇到封闭路段就原路返回。"
    },
    "source": "https://www.salzkammergut.at/en/oesterreich-tour/detail/430000686/hallstatt-echern-theme-trail-to-the-waterfalls.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Waldbachstrub.jpg",
      "credit": "Arquus",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "echerntal",
    "title": {
      "en": "Echern Valley",
      "de": "Echerntal",
      "zh": "埃赫恩谷"
    },
    "town": "Hallstatt",
    "address": "Echerntal, 4830 Hallstatt",
    "contact": "Marktgemeinde Hallstatt",
    "kind": "trail",
    "intro": {
      "en": "This valley explains how Hallstatt opens out behind its compact waterfront.",
      "de": "Das Tal zeigt, wie sich Hallstatt hinter dem engen Seeufer öffnet.",
      "zh": "这个山谷展现了哈尔施塔特如何从狭窄的湖岸向内陆展开。"
    },
    "highlight": {
      "en": "The Waldbach bridge gives a close look at the stream corridor, while the slopes reveal the tight limits on settlement.",
      "de": "An der Waldbachbrücke lässt sich der Bachlauf gut betrachten; die Hänge begrenzen den Siedlungsraum.",
      "zh": "瓦尔德巴赫桥适合近看溪流，两侧山坡也说明了村落用地为何有限。"
    },
    "route": {
      "en": "Approach from the Lahn district and follow the Malerweg into the valley. A short out-and-back stays on the valley floor.",
      "de": "Vom Ortsteil Lahn dem Malerweg ins Tal folgen. Für einen kurzen Hin- und Rückweg im Talboden bleiben.",
      "zh": "从拉恩片区沿画家步道进入谷地。时间不多时，可在谷底往返。"
    },
    "source": "https://www.salzkammergut.at/en/oesterreich-tour/detail/430000686/hallstatt-echern-theme-trail-to-the-waterfalls.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Hallstatt_-_Echerntal%2C_Waldbachbr%C3%BCcke.JPG",
      "credit": "C.Stadler/Bwag",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "simonyhuette",
    "title": {
      "en": "Simony Hut",
      "de": "Simonyhütte",
      "zh": "西莫尼山屋"
    },
    "town": "Hallstatt",
    "address": "4830 Hallstatt",
    "contact": "Österreichischer Alpenverein, Sektion Austria",
    "kind": "trail",
    "intro": {
      "en": "The hut is named for Dachstein researcher Friedrich Simony.",
      "de": "Die Hütte ist nach dem Dachsteinforscher Friedrich Simony benannt.",
      "zh": "山屋以研究达赫施泰因的弗里德里希·西莫尼命名。"
    },
    "highlight": {
      "en": "Its exposed plateau setting lets hikers compare bare limestone with the high glacial terrain beyond.",
      "de": "Ihre offene Plateaulage zeigt den Übergang vom Kalkfels zur Gletscherregion.",
      "zh": "站在开阔高原，可对比裸露石灰岩与远处的冰川地貌。"
    },
    "route": {
      "en": "Use a marked high-mountain approach and confirm hut access before setting out. Treat this as an alpine day rather than a village walk.",
      "de": "Einen markierten alpinen Zustieg wählen und die Hüttenöffnung vorher klären. Für einen eigenständigen Bergtag einplanen.",
      "zh": "选择有标记的高山进山路线，出发前确认山屋开放情况。把它作为单独一天的高山行程。"
    },
    "source": "https://www.salzkammergut.at/en/oesterreich-tour/detail/430008472/bergeseen-trail-d5-simonyhuette-hallstatt.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Simony_Hutte_exterier_B.jpg",
      "credit": "Mojmir Churavy",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
    }
  },
  {
    "slug": "dachstein-ice-cave",
    "title": {
      "en": "Dachstein Giant Ice Cave",
      "de": "Dachstein Rieseneishöhle",
      "zh": "达赫施泰因巨型冰洞"
    },
    "town": "Obertraun",
    "address": "4831 Obertraun",
    "contact": "Dachstein Tourismus AG",
    "kind": "cave",
    "intro": {
      "en": "Ice formations are the focus of this guided visit.",
      "de": "Eisformationen stehen bei dieser Führung im Mittelpunkt.",
      "zh": "导览重点是洞内冰层与冰柱。"
    },
    "highlight": {
      "en": "The cave’s cold chambers contrast with the exposed limestone above the cable car’s middle station.",
      "de": "Die kalten Kammern bilden einen Kontrast zum offenen Kalkfels oberhalb der Seilbahn-Mittelstation.",
      "zh": "低温洞室与缆车中间站上方裸露的石灰岩形成鲜明对比。"
    },
    "route": {
      "en": "Ride to Schönbergalm, then follow the signed uphill approach to the ice cave. Allow time to get from the lift to the tour meeting point.",
      "de": "Bis zur Schönbergalm fahren und dem ausgeschilderten Anstieg folgen. Für den Weg von der Bahn zum Führungstreffpunkt Zeit einplanen.",
      "zh": "乘缆车到舍恩贝格高山牧场站，沿标记上坡前往冰洞，并预留从缆车到集合点的时间。"
    },
    "source": "https://www.dachstein-salzkammergut.com/en/summer/operation-times-caves",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Dachstein-Rieseneish%C3%B6hle_001.jpg",
      "credit": "Funke",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "dachstein-mammoth-cave",
    "title": {
      "en": "Dachstein Mammoth Cave",
      "de": "Dachstein Mammuthöhle",
      "zh": "达赫施泰因猛犸洞"
    },
    "town": "Obertraun",
    "address": "4831 Obertraun",
    "contact": "Dachstein Tourismus AG",
    "kind": "cave",
    "intro": {
      "en": "The scale of the dry passages illustrates how water once worked through the Dachstein limestone.",
      "de": "Die großen trockenen Gänge zeigen, wie Wasser den Dachsteinkalk geformt hat.",
      "zh": "宽大的干燥洞道显示水流曾如何侵蚀达赫施泰因石灰岩。"
    },
    "highlight": {
      "en": "The visitor route gives a sample of a much larger cave system.",
      "de": "Der Besucherweg erschließt einen kleinen Teil des viel größeren Systems.",
      "zh": "开放导览只经过庞大洞穴系统的一部分。"
    },
    "route": {
      "en": "From Schönbergalm follow the Mammuthöhle signs. Book the two cave tours in sequence only if the meeting times leave room for both approaches.",
      "de": "Ab Schönbergalm den Schildern zur Mammuthöhle folgen. Beide Höhlenführungen nur mit genügend Zeit für die getrennten Zustiege kombinieren.",
      "zh": "从舍恩贝格高山牧场站按猛犸洞标识步行。若同日参观两洞，两场集合时间之间要留出两段步行时间。"
    },
    "source": "https://www.dachstein-salzkammergut.com/en/summer/operation-times-caves",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:2024_Dachsteingebirge_342_Mammuth%C3%B6hle.jpg",
      "credit": "Steffen 962",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "koppenbruellerhoehle",
    "title": {
      "en": "Koppenbrüller Cave",
      "de": "Koppenbrüllerhöhle",
      "zh": "科彭布吕勒洞"
    },
    "town": "Obertraun",
    "address": "4831 Obertraun",
    "contact": "Dachstein Tourismus AG",
    "kind": "cave",
    "intro": {
      "en": "This valley cave is known for the sound of its underground stream.",
      "de": "Die Talhöhle ist für das Geräusch ihres unterirdischen Bachs bekannt.",
      "zh": "这座位于谷底的洞穴以地下溪流声闻名。"
    },
    "highlight": {
      "en": "Water levels influence the character of a tour more directly here than in the two upper cable-car caves.",
      "de": "Der Wasserstand prägt die Führung hier stärker als in den beiden Höhlen an der Bergbahn.",
      "zh": "与缆车沿线上两座洞穴相比，这里的导览更直接受到水位影响。"
    },
    "route": {
      "en": "Use the signed valley footpath from the Koppenbrüllerhöhle stop or parking area. Confirm tour operation before travelling after heavy rain.",
      "de": "Ab Haltestelle oder Parkplatz Koppenbrüllerhöhle dem Talweg folgen. Nach Starkregen vor der Anfahrt den Führungsbetrieb prüfen.",
      "zh": "从科彭布吕勒洞站或停车区沿山谷步道前往。大雨后出发前先向营运方确认导览。"
    },
    "source": "https://www.dachstein-salzkammergut.com/en/summer/operation-times-caves",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Koppenbr%C3%BCllerh%C3%B6hle_-_entrance.jpg",
      "credit": "Herzi Pinki",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "slug": "welterbespirale",
    "title": {
      "en": "World Heritage Spiral",
      "de": "Welterbespirale",
      "zh": "世界遗产螺旋观景台"
    },
    "town": "Obertraun",
    "address": "4831 Obertraun",
    "contact": "Dachstein Tourismus AG",
    "kind": "lift",
    "intro": {
      "en": "The spiral opens out above the Krippenstein upper station.",
      "de": "Die Spirale liegt oberhalb der Krippenstein-Bergstation.",
      "zh": "螺旋观景台在克里彭施泰因缆车上站上方。"
    },
    "highlight": {
      "en": "Its broad plateau views complement the cliff-edge perspective of the nearby Five Fingers.",
      "de": "Der weite Plateaublick ergänzt die Sicht vom nahen Felsrand der 5fingers.",
      "zh": "这里视野横跨高原，可与附近五指观景台的临崖视角搭配游览。"
    },
    "route": {
      "en": "From the upper station take the signed summit path. Check lift operating times and turn back early if visibility deteriorates.",
      "de": "Von der Bergstation dem ausgeschilderten Gipfelweg folgen. Bahnzeiten prüfen und bei schlechter Sicht rechtzeitig umkehren.",
      "zh": "从缆车上站沿标记登顶步道步行。先查看缆车班次，能见度下降时尽早折返。"
    },
    "source": "https://dachstein.salzkammergut.at/wandern/oesterreich-poi/detail/430004189/welterbespirale.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Krippenstein_Welterbespirale.jpg",
      "credit": "Geisler Martin",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "slug": "vorderer-gosausee",
    "title": {
      "en": "Lower Lake Gosau",
      "de": "Vorderer Gosausee",
      "zh": "前戈绍湖"
    },
    "town": "Gosau",
    "address": "4824 Gosau",
    "contact": "Gemeinde Gosau",
    "kind": "trail",
    "intro": {
      "en": "The lakeshore frames the Dachstein at the far end of the valley.",
      "de": "Das Seeufer rahmt den Dachstein am Talende ein.",
      "zh": "湖岸把谷地尽头的达赫施泰因山框入视野。"
    },
    "highlight": {
      "en": "From the approach shore, the line of the water leads straight toward the glacier on a clear day.",
      "de": "Vom vorderen Ufer führt die Wasserlinie bei klarer Sicht direkt zum Gletscher.",
      "zh": "晴朗时从入口一侧望去，湖面线条直指远方冰川。"
    },
    "route": {
      "en": "Take the bus or road to the Gosausee terminus. The lakeside path offers an easy turnaround before the upper-lake trail climbs away.",
      "de": "Mit Bus oder Auto bis zur Endstelle Gosausee fahren. Am Ufer lässt sich leicht umkehren, bevor der Weg zum Hinteren See ansteigt.",
      "zh": "搭公交或自驾到戈绍湖终点站。沿湖行走可随时原路折返，通往后湖的路线才会开始明显上升。"
    },
    "source": "https://dachstein.salzkammergut.at/en/visitor-information/our-lakes/lake-gosau.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Vorderer_Gosausee_mit_Dachstein.jpg",
      "credit": "AtterseeMM",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "hinterer-gosausee",
    "title": {
      "en": "Upper Lake Gosau",
      "de": "Hinterer Gosausee",
      "zh": "后戈绍湖"
    },
    "town": "Gosau",
    "address": "4824 Gosau",
    "contact": "Gemeinde Gosau",
    "kind": "trail",
    "intro": {
      "en": "Upper Lake Gosau sits beyond the first lake and the Gosaulacke basin.",
      "de": "Der Hintere Gosausee liegt jenseits des Vorderen Sees und der Gosaulacke.",
      "zh": "后戈绍湖在前湖和戈绍拉克洼地之后。"
    },
    "highlight": {
      "en": "Its enclosed setting gives close views of the rock walls rather than the broad foreground of the lower lake.",
      "de": "Seine enge Lage öffnet den Blick auf nahe Felswände.",
      "zh": "这里谷地更封闭，岩壁离湖岸更近。"
    },
    "route": {
      "en": "Start at the lower lake and follow the signed upper-lake trail past Gosaulacke. Budget for the climb and the full return on foot.",
      "de": "Am Vorderen Gosausee starten und dem Weg über die Gosaulacke folgen. Anstieg und Rückweg zu Fuß einplanen.",
      "zh": "从前戈绍湖出发，沿标记经过戈绍拉克洼地。把上坡和整段徒步回程都计入计划。"
    },
    "source": "https://dachstein.salzkammergut.at/en/oesterreich-tour/detail/430001495/tour-to-the-upper-lake-gosau.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Hinterer_Gosausee_Landscape_Nicolas_May.jpg",
      "credit": "Nicolas May",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "gosaulacke",
    "title": {
      "en": "Gosaulacke",
      "de": "Gosaulacke",
      "zh": "戈绍拉克水洼"
    },
    "town": "Gosau",
    "address": "4824 Gosau",
    "contact": "Gemeinde Gosau",
    "kind": "trail",
    "intro": {
      "en": "Water can collect in this shallow basin between the two Gosau lakes.",
      "de": "In der flachen Mulde zwischen den beiden Gosauseen sammelt sich zeitweise Wasser.",
      "zh": "前后两座戈绍湖之间有一处浅洼，会随季节积水。"
    },
    "highlight": {
      "en": "The changing waterline is the main feature, so the appearance can differ greatly from photographs.",
      "de": "Der wechselnde Pegel erklärt, warum der Ort auf Fotos sehr unterschiedlich aussieht.",
      "zh": "水位变化是它的特色，现场景象可能与旧照片差别很大。"
    },
    "route": {
      "en": "Follow the signed upper-lake route from Vorderer Gosausee. Observe the basin from the trail and keep off soft exposed ground.",
      "de": "Vom Vorderen Gosausee dem ausgeschilderten Weg zum Hinteren See folgen. Die Mulde vom Weg aus betrachten und den weichen Boden meiden.",
      "zh": "从前戈绍湖沿后湖步道前往。留在步道上观察洼地，避开裸露的软泥。"
    },
    "source": "https://dachstein.salzkammergut.at/en/oesterreich-tour/detail/430001495/tour-to-the-upper-lake-gosau.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Gosaulacke_mit_Blick_zum_Dachstein.jpg",
      "credit": "Karl Posch",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "zwieselalmhoehe",
    "title": {
      "en": "Zwieselalmhöhe",
      "de": "Zwieselalmhöhe",
      "zh": "茨维瑟尔高山牧场观景高地"
    },
    "town": "Gosau",
    "address": "4824 Gosau",
    "contact": "Dachstein Tourismus AG",
    "kind": "lift",
    "intro": {
      "en": "The grassy height above the Zwieselalm brings the jagged Gosaukamm into view.",
      "de": "Von der Graskuppe oberhalb der Zwieselalm sieht man den gezackten Gosaukamm.",
      "zh": "从牧场上方的草坡高地可眺望锯齿状的戈绍山脊。"
    },
    "highlight": {
      "en": "The contrast between the pasture and limestone pinnacles changes as you walk along the crest.",
      "de": "Entlang des Rückens wechselt der Kontrast zwischen Weide und Kalkspitzen.",
      "zh": "沿坡脊行走时，草场与石灰岩尖峰的构图不断变化。"
    },
    "route": {
      "en": "Use the Gosaukammbahn from the lower lake and follow the marked route from the upper station when open. Keep clear of grazing animals.",
      "de": "Bei Betrieb die Gosaukammbahn am Vorderen Gosausee nehmen und ab Bergstation der Markierung folgen. Abstand zu Weidetieren halten.",
      "zh": "缆车营运时，从前湖搭戈绍山脊缆车上山，再沿标记前往。与放牧牲畜保持距离。"
    },
    "source": "https://www.dachstein.at/de/sommer/betriebszeiten-sommer",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Zwieselalmh%C3%B6he.jpg",
      "credit": "Benutzer:Hejkal",
      "license": "CC BY-SA 3.0 de",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en"
    }
  },
  {
    "slug": "loeckermoos",
    "title": {
      "en": "Löckermoos Bog",
      "de": "Löckermoos",
      "zh": "勒克尔莫斯高地泥炭沼泽"
    },
    "town": "Gosau",
    "address": "4824 Gosau",
    "contact": "Gemeinde Gosau",
    "kind": "trail",
    "intro": {
      "en": "The raised bog holds a dark pool amid open peat and low vegetation.",
      "de": "Das Hochmoor umgibt eine dunkle Wasserfläche mit Torf und niedriger Vegetation.",
      "zh": "高地泥炭沼泽中的深色水面，被泥炭和低矮植被围绕，后方可见戈绍山脊。"
    },
    "highlight": {
      "en": "The jagged Gosaukamm forms a distinct background beyond the wetland.",
      "de": "Dahinter zeichnet sich der Gosaukamm ab.",
      "zh": ""
    },
    "route": {
      "en": "Use the signed hiking approach from Gosau. Stay on the designated path or boardwalk to protect the wet ground.",
      "de": "Den markierten Wanderzustieg von Gosau nehmen. Zum Schutz des nassen Bodens auf Weg und Steg bleiben.",
      "zh": "从戈绍沿标记路线徒步进山。为保护湿地，请留在指定小径或木栈道上。"
    },
    "source": "https://dachstein.salzkammergut.at/fileadmin/user_upload/dachstein-salzkammergut/Pdf_Downloads/Ausflugszieleplaner/Erlebnisplaner2024_online.pdf",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Loeckermoos_Gosau_Gosaukamm.jpg",
      "credit": "Goisern",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "slug": "landlermuseum",
    "title": {
      "en": "Local History and Landler Museum",
      "de": "Heimat- und Landlermuseum",
      "zh": "地方历史与兰德勒博物馆"
    },
    "town": "Bad Goisern",
    "address": "4822 Bad Goisern",
    "contact": "Heimatverein Bad Goisern",
    "kind": "museum",
    "intro": {
      "en": "The exhibitions connect everyday rural objects with the story of Protestant families resettled from the Salzkammergut.",
      "de": "Die Ausstellung verbindet ländliche Alltagsobjekte mit der Geschichte der aus dem Salzkammergut umgesiedelten evangelischen Familien.",
      "zh": "展览把乡村日用品与从萨尔茨卡默古特迁出的新教家庭历史联系起来。"
    },
    "highlight": {
      "en": "Farm models show how living and working spaces fitted together.",
      "de": "Hofmodelle zeigen das Zusammenleben von Wohnen und Arbeiten.",
      "zh": "农舍模型展示了居住与劳作空间如何结合。"
    },
    "route": {
      "en": "Walk from the centre of Bad Goisern and pair the museum with the nearby woodcutters’ exhibition if both are open.",
      "de": "Vom Ortszentrum zu Fuß gehen und bei passenden Öffnungszeiten das nahe Holzknechtmuseum ergänzen.",
      "zh": "从巴德戈伊瑟恩中心步行前往。若两馆同日开放，可顺游附近的伐木工博物馆。"
    },
    "source": "https://www.museum-goisern.at/heimatmuseum/",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Bad_Goisern_Heimatmuseum_-_Modell_Geh%C3%B6fte.jpg",
      "credit": "Wolfgang Sauber",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "woodcutters-museum",
    "title": {
      "en": "Woodcutters’ Museum",
      "de": "Holzknechtmuseum",
      "zh": "伐木工博物馆"
    },
    "town": "Bad Goisern",
    "address": "4822 Bad Goisern",
    "contact": "Heimatverein Bad Goisern",
    "kind": "museum",
    "intro": {
      "en": "The Dürrenholzstube, a relocated woodcutters’ cabin, preserves the scale of a real work shelter.",
      "de": "Die versetzte Dürrenholzstube bewahrt den Maßstab einer tatsächlichen Holzknechtunterkunft.",
      "zh": "迁建的迪伦霍尔茨木屋保留了伐木工工作棚的实际尺度，室内陈设和手工工具可帮助理解当地林业劳动。"
    },
    "highlight": {
      "en": "Its furnishings and hand tools put the region’s timber labour in context.",
      "de": "Einrichtung und Handwerkzeuge erzählen von der regionalen Waldarbeit.",
      "zh": ""
    },
    "route": {
      "en": "Approach the Müllnerwäldchen from the centre of Bad Goisern. Check museum opening before making the cabin the focus of your outing.",
      "de": "Vom Goiserer Ortszentrum ins Müllnerwäldchen gehen. Die Öffnung prüfen, wenn die Stube das Hauptziel ist.",
      "zh": "从巴德戈伊瑟恩中心走到米尔纳小树林。如果专程看木屋，先查当天开放信息。"
    },
    "source": "https://www.bad-goisern.ooe.gv.at/Salzkammergut_Holzknechtmuseum",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Bad_Goisern-Holzknechtmuseum_Duerrenstube.JPG",
      "credit": "Szojak ( talk )",
      "license": "CC BY-SA 3.0 at",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/at/deed.en"
    }
  },
  {
    "slug": "ewige-wand",
    "title": {
      "en": "Ewige Wand Cliff Trail",
      "de": "Ewige Wand",
      "zh": "永恒岩壁步道"
    },
    "town": "Bad Goisern",
    "address": "4822 Bad Goisern",
    "contact": "Marktgemeinde Bad Goisern",
    "kind": "trail",
    "intro": {
      "en": "The path passes through short rock tunnels cut into the cliff above Bad Goisern.",
      "de": "Der Weg führt oberhalb von Bad Goisern durch kurze Felstunnel.",
      "zh": "巴德戈伊瑟恩上方的步道穿过凿在崖壁上的短隧道。"
    },
    "highlight": {
      "en": "Open sections after the tunnels give a broad look back toward the valley.",
      "de": "Auf offenen Abschnitten nach den Tunneln reicht der Blick weit ins Tal.",
      "zh": "穿出隧道后，开放路段可俯瞰宽阔河谷。"
    },
    "route": {
      "en": "Use the signed Höhen- und Sagenweg approach and check for local closures. Give other walkers room on the narrow sections.",
      "de": "Dem Höhen- und Sagenweg folgen und auf örtliche Sperren achten. Auf engen Abschnitten anderen Wandernden Platz lassen.",
      "zh": "沿标记的高地传说步道进入，先查通行限制。狭窄路段给其他徒步者留出空间。"
    },
    "source": "https://www.salzkammergut.at/en/oesterreich-tour/detail/430007280/bad-goisern-mountain-and-legend-trail.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Ewige_Wand%2C_Bad_Goisern.jpg",
      "credit": "Gschwandtnerbua",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "kaiservilla",
    "title": {
      "en": "Imperial Villa",
      "de": "Kaiservilla",
      "zh": "皇帝别墅"
    },
    "town": "Bad Ischl",
    "address": "Jainzen 38, 4820 Bad Ischl",
    "contact": "Kaiservilla GmbH",
    "kind": "museum",
    "intro": {
      "en": "The Habsburg summer residence places domestic rooms within the story of Franz Joseph and Elisabeth’s court.",
      "de": "Die habsburgische Sommerresidenz verbindet Wohnräume mit der Geschichte des Hofes von Franz Joseph und Elisabeth.",
      "zh": "这座哈布斯堡家族夏季居所把日常居住空间与弗朗茨·约瑟夫、伊丽莎白的宫廷历史联系起来。"
    },
    "highlight": {
      "en": "The facade and park approach show its relatively intimate scale.",
      "de": "Fassade und Parkzugang zeigen den überschaubaren Maßstab.",
      "zh": "由花园入内，可感受别墅较为紧凑的尺度。"
    },
    "route": {
      "en": "Walk across the Ischl river to the Kaiserpark entrance. Check which ticket includes the villa tour and allow for the next departure.",
      "de": "Über die Ischl zum Kaiserpark-Eingang gehen. Prüfen, welches Ticket die Villaführung umfasst, und Zeit bis zum nächsten Termin lassen.",
      "zh": "跨过伊施尔河抵达皇室公园入口，查看哪种门票包含别墅导览，并为下一场集合留出时间。"
    },
    "source": "https://www.kaiservilla.at/",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:BadIschl_Kaiservilla.jpg",
      "credit": "Dave Pape",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
    }
  },
  {
    "slug": "marmorschloessl",
    "title": {
      "en": "Marble Cottage",
      "de": "Marmorschlössl",
      "zh": "大理石小宫"
    },
    "town": "Bad Ischl",
    "address": "Kaiserpark, Jainzen 38, 4820 Bad Ischl",
    "contact": "OÖ Landes-Kultur GmbH",
    "kind": "museum",
    "intro": {
      "en": "This historic cottage in the imperial park was associated with Empress Elisabeth.",
      "de": "Das historische Parkschlösschen ist mit Kaiserin Elisabeth verbunden.",
      "zh": "这座皇室公园内的小宫与伊丽莎白皇后有关。"
    },
    "highlight": {
      "en": "Its ornamental exterior and compact rooms differ markedly from the formal villa nearby.",
      "de": "Die ornamentierte Außenansicht und die kleinen Räume unterscheiden sich deutlich von der nahen Kaiservilla.",
      "zh": "装饰性的外墙与紧凑的室内空间，与附近正式的皇帝别墅风格不同。"
    },
    "route": {
      "en": "Enter the park and follow the signed path uphill from the villa. Look up the current exhibition and its access conditions before visiting.",
      "de": "Im Park ab der Villa dem ausgeschilderten Weg bergauf folgen. Vorher die aktuelle Ausstellung und deren Zutritt prüfen.",
      "zh": "进入公园后，从别墅沿标记小径上行。参观前先查当前展览和入场条件。"
    },
    "source": "https://www.ooekultur.at/location-detail/marmorschl%C3%B6ssl-bad-ischl",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Kaiserpark_Marmorschloessl.jpg",
      "credit": "Clemens Mosch",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "kurpark-bad-ischl",
    "title": {
      "en": "Bad Ischl Spa Park",
      "de": "Kurpark Bad Ischl",
      "zh": "巴德伊施尔疗养公园"
    },
    "town": "Bad Ischl",
    "address": "Kurhausstraße, 4820 Bad Ischl",
    "contact": "Stadtgemeinde Bad Ischl",
    "kind": "trail",
    "intro": {
      "en": "The garden links the old spa-town promenade with the theatre frontage.",
      "de": "Der Garten verbindet die Kurpromenade mit dem Theater.",
      "zh": "花园连接旧疗养镇漫步道与剧院正面。"
    },
    "highlight": {
      "en": "Around the fountain, look for how planted beds and walkways frame views of the adjoining buildings.",
      "de": "Am Brunnen rahmen Beete und Wege die Sicht auf die benachbarten Bauten.",
      "zh": "站在喷泉附近，可观察花坛和步道如何构成邻近建筑的前景。"
    },
    "route": {
      "en": "Walk in from the town centre via Kurhausstraße. Leave room for event barriers or temporary stages when the park is in use.",
      "de": "Vom Zentrum über die Kurhausstraße kommen. Bei Veranstaltungen Absperrungen und temporäre Bühnen beachten.",
      "zh": "从市中心经库尔豪斯街步行前往。举办活动时留意临时舞台和围栏。"
    },
    "source": "https://badischl.salzkammergut.at/oesterreich-poi/detail/430002620/kurpark-bad-ischl.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Kurpark_Bad_Ischl_Brunnen.jpg",
      "credit": "Funke",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "kongress-theaterhaus",
    "title": {
      "en": "Congress and Theatre House",
      "de": "Kongress & TheaterHaus",
      "zh": "巴德伊施尔会议与剧院中心"
    },
    "town": "Bad Ischl",
    "address": "Kurhausstraße 8, 4820 Bad Ischl",
    "contact": "Kongress & TheaterHaus Bad Ischl",
    "kind": "museum",
    "intro": {
      "en": "The former spa gathering place now hosts events including operetta performances.",
      "de": "Der frühere Treffpunkt des Kurbetriebs ist heute Veranstaltungsort, unter anderem für Operetten.",
      "zh": "这座旧疗养社交场所如今用于活动与轻歌剧演出。"
    },
    "highlight": {
      "en": "Looking back from the Kurpark shows how the ceremonial frontage faces the garden.",
      "de": "Vom Kurpark sieht man die repräsentative Gartenfront.",
      "zh": "从疗养公园回望，可见面向花园的礼仪性正立面。"
    },
    "route": {
      "en": "Arrive on foot from Kurhausstraße. Consult the performance schedule if you want to enter the auditorium.",
      "de": "Über die Kurhausstraße zu Fuß ankommen. Für einen Besuch des Saals den Spielplan prüfen.",
      "zh": "从库尔豪斯街步行前往。若想进入观众厅，先查演出日程。"
    },
    "source": "https://badischl.salzkammergut.at/en/oesterreich-location/detail/430000434/kongress-theaterhouse-bad-ischl.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Kongress-_und_Theaterhaus_Bad_Ischl.jpg",
      "credit": "Funke",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "leharvilla",
    "title": {
      "en": "Lehár Villa",
      "de": "Lehár-Villa",
      "zh": "莱哈尔别墅"
    },
    "town": "Bad Ischl",
    "address": "Lehárkai 8, 4820 Bad Ischl",
    "contact": "Museen der Stadt Bad Ischl",
    "kind": "museum",
    "intro": {
      "en": "Franz Lehár’s riverside home preserves the domestic setting behind the operetta composer’s public career.",
      "de": "Franz Lehárs Wohnhaus am Fluss zeigt das private Umfeld des Operettenkomponisten.",
      "zh": "弗朗茨·莱哈尔的河畔住所保留了这位轻歌剧作曲家的生活环境，适合与特劳恩河漫步安排在一起。"
    },
    "highlight": {
      "en": "The villa makes a natural stop on a walk along the Traun.",
      "de": "Die Villa lässt sich gut mit einem Spaziergang entlang der Traun verbinden.",
      "zh": ""
    },
    "route": {
      "en": "Walk along Lehárkai to the villa. Check the city museums’ visitor information for guided access.",
      "de": "Am Lehárkai zur Villa gehen. Die Besuchsinformation der Stadtmuseen zu Führungen prüfen.",
      "zh": "沿莱哈尔河岸步道走到别墅。进馆前查看市立博物馆发布的导览信息。"
    },
    "source": "https://www.stadtmuseum.at/en/leharvilla/",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Leharvilla_Bad_Ischl.jpg",
      "credit": "Andreas Mohr",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "slug": "katrin",
    "title": {
      "en": "Katrin Mountain",
      "de": "Katrin",
      "zh": "卡特林山"
    },
    "town": "Bad Ischl",
    "address": "4820 Bad Ischl",
    "contact": "Katrin Seilbahn",
    "kind": "lift",
    "intro": {
      "en": "The mountain rises directly above Bad Ischl.",
      "de": "Die Katrin erhebt sich direkt über Bad Ischl.",
      "zh": "卡特林山紧邻巴德伊施尔。"
    },
    "highlight": {
      "en": "From signed routes above the cable car, openings between slopes show the town and the surrounding lake district.",
      "de": "Auf markierten Wegen oberhalb der Bahn öffnen sich Blicke auf die Stadt und die Seenregion.",
      "zh": "缆车上站附近的标记路线间，可从山坡开口俯瞰市镇与周边湖区。"
    },
    "route": {
      "en": "Go to the Katrin cable-car valley station and choose a signed upper route after checking conditions. Confirm the final descent before hiking.",
      "de": "Zur Talstation der Katrin-Seilbahn fahren und oben je nach Bedingungen einen markierten Weg wählen. Vor der Wanderung die letzte Talfahrt prüfen.",
      "zh": "先到卡特林缆车谷站，抵达山上后按路况选择标记路线。徒步前确认末班下山缆车。"
    },
    "source": "https://badischl.salzkammergut.at/en/oesterreich-poi/detail/202690/katrin-cable-car.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Bad_Ischl_Katrin.jpg",
      "credit": "Funke",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "siriuskogl",
    "title": {
      "en": "Siriuskogl Lookout",
      "de": "Siriuskogl",
      "zh": "天狼星山观景塔"
    },
    "town": "Bad Ischl",
    "address": "4820 Bad Ischl",
    "contact": "Stadtgemeinde Bad Ischl",
    "kind": "trail",
    "intro": {
      "en": "The Franz-Josefs-Warte puts a tower above a wooded hill close to the centre.",
      "de": "Die Franz-Josefs-Warte steht auf einem bewaldeten Hügel nahe der Innenstadt.",
      "zh": "弗朗茨·约瑟夫观景塔位于市中心附近的林间山丘。"
    },
    "highlight": {
      "en": "The elevated view helps place the Traun and the town’s neighbourhoods in the same frame.",
      "de": "Von oben lassen sich Traun und Stadtviertel gemeinsam überblicken.",
      "zh": "从高处可以把特劳恩河和市镇街区放进同一幅画面。"
    },
    "route": {
      "en": "From central Bad Ischl follow the marked ascent to the Siriuskogl. Check notices for tower access and expect an uphill walk.",
      "de": "Vom Stadtzentrum dem markierten Anstieg zum Siriuskogl folgen. Hinweise zum Turmzugang beachten; der Weg führt bergauf.",
      "zh": "从巴德伊施尔中心沿标记上坡前往。查看塔楼开放告示，并预留爬坡时间。"
    },
    "source": "https://badischl.salzkammergut.at/oesterreich-poi/detail/401170/ausflugsziel-siriuskogl.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Bad_Ischl_-_Siriuskogel%2C_Franz-Josefs-Warte.JPG",
      "credit": "C.Stadler/Bwag",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "altausseer-see",
    "title": {
      "en": "Lake Altaussee",
      "de": "Altausseer See",
      "zh": "阿尔陶塞湖"
    },
    "town": "Altaussee",
    "address": "8992 Altaussee",
    "contact": "Gemeinde Altaussee",
    "kind": "trail",
    "intro": {
      "en": "The circuit changes character between the village bank and the farther shore.",
      "de": "Der Rundweg wechselt zwischen Dorfufer und abgelegenerem Ufer seinen Charakter.",
      "zh": "沿湖环线从村庄一侧进入较僻静湖岸时，景观会随之改变。"
    },
    "highlight": {
      "en": "From the east the lake offers a different perspective on the slopes around the Loser.",
      "de": "Von Osten betrachtet zeigt der See die Hänge um den Loser aus anderer Perspektive.",
      "zh": "从东岸可换个方向看洛瑟山周围的山坡。"
    },
    "route": {
      "en": "Start by the village shore and follow the lakeside route. If time is short, do an out-and-back instead of committing to the circuit.",
      "de": "Am Dorfufer beginnen und dem Uferweg folgen. Bei wenig Zeit denselben Weg zurücknehmen.",
      "zh": "从村庄湖岸沿湖步道出发。时间有限可走一段后原路返回。"
    },
    "source": "https://www.salzkammergut.at/en/things-to-do/worth-visiting/hiking-with-prams/oesterreich-poi/detail/200044/lake-altausseer-see.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Altausseer_See_-_View_from_the_Eastern_Shore.jpg",
      "credit": "Bernd Thaller",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
    }
  },
  {
    "slug": "altaussee-salt-mine",
    "title": {
      "en": "Altaussee Salt Mine",
      "de": "Salzwelten Altaussee",
      "zh": "阿尔陶塞盐矿"
    },
    "town": "Altaussee",
    "address": "Lichtersberg 25, 8992 Altaussee",
    "contact": "Salzwelten GmbH",
    "kind": "cave",
    "intro": {
      "en": "Rock salt and underground mining spaces are the focus of this guided visit.",
      "de": "Steinsalz und unterirdische Abbauräume stehen im Mittelpunkt der Führung.",
      "zh": "导览介绍岩盐与地下采掘空间。"
    },
    "highlight": {
      "en": "Stories of artworks stored here during the Second World War add a separate layer to the mine’s industrial history.",
      "de": "Die im Zweiten Weltkrieg hier eingelagerten Kunstwerke ergänzen die Industriegeschichte.",
      "zh": "二战期间曾有艺术品藏于此，为矿业历史增加了另一层背景。"
    },
    "route": {
      "en": "Use the Altaussee mine entrance on Lichtersberg and allow time to reach the meeting point before your reserved tour.",
      "de": "Den Altausseer Bergwerkseingang am Lichtersberg ansteuern und vor der gebuchten Führung Zeit zum Treffpunkt einplanen.",
      "zh": "前往利希特斯贝格的阿尔陶塞矿场入口，预约导览前预留抵达集合点的时间。"
    },
    "source": "https://www.salzwelten.at/de/altaussee/preise-oeffnungszeiten",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:StollenSalzbergwerkAltaussee.jpg",
      "credit": "Dominik Stadler",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0"
    }
  },
  {
    "slug": "augstsee",
    "title": {
      "en": "Lake Augstsee",
      "de": "Augstsee",
      "zh": "奥格斯特湖"
    },
    "town": "Altaussee",
    "address": "8992 Altaussee",
    "contact": "Loser Bergbahnen",
    "kind": "lift",
    "intro": {
      "en": "Augstsee sits on the Loser above the valley’s much larger Altausseer See.",
      "de": "Der Augstsee liegt am Loser über dem viel größeren Altausseer See.",
      "zh": "奥格斯特湖位于洛瑟山上方，与谷地里更大的阿尔陶塞湖是两处地点。"
    },
    "highlight": {
      "en": "Look across the small basin to see how close the limestone slopes are to the shore.",
      "de": "Über das kleine Becken hinweg liegen die Kalkhänge dicht am Ufer.",
      "zh": "隔着小湖可近看贴近湖岸的石灰岩坡。"
    },
    "route": {
      "en": "Use the signed approach from the Loser upland access when open. Check operating or road information and stay on the path around the lake.",
      "de": "Bei geöffnetem Zugang dem Weg vom Loser-Hochbereich folgen. Bahn- oder Straßenbetrieb prüfen und am See auf dem Weg bleiben.",
      "zh": "山上通道开放时，从洛瑟山高处依标记步行。先查道路或缆车营运，沿湖时留在步道上。"
    },
    "source": "https://www.salzkammergut.at/en/oesterreich-poi/detail/430029076/lake-augstsee-at-loser.html",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Augstsee.jpg",
      "credit": "Christian Jansky (User User:Tschaensky )",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/"
    }
  },
  {
    "slug": "kammerhofmuseum",
    "title": {
      "en": "Kammerhof Museum",
      "de": "Kammerhofmuseum",
      "zh": "卡默霍夫博物馆"
    },
    "town": "Bad Aussee",
    "address": "Chlumeckyplatz 1, 8990 Bad Aussee",
    "contact": "Kammerhofmuseum Bad Aussee",
    "kind": "museum",
    "intro": {
      "en": "The historic Kammerhof gives the regional collection a building of its own to interpret.",
      "de": "Der historische Kammerhof ist selbst ein Teil der regionalen Geschichte.",
      "zh": "历史建筑卡默霍夫本身也是区域历史的一部分。"
    },
    "highlight": {
      "en": "Local dress and salt history explain how Ausseerland developed a distinct identity.",
      "de": "Tracht und Salzgeschichte zeigen, wie das Ausseerland sein eigenes Profil entwickelte.",
      "zh": "当地服饰与盐业展品帮助理解奥瑟兰为何形成独特文化。"
    },
    "route": {
      "en": "Walk to the Kammerhof in the centre of Bad Aussee and check current museum opening before making a special trip.",
      "de": "Zum Kammerhof im Zentrum von Bad Aussee gehen und vor einer eigenen Anreise die aktuellen Museumszeiten prüfen.",
      "zh": "步行前往巴德奥塞市中心的卡默霍夫。专程前往前先确认博物馆开放时间。"
    },
    "source": "https://www.kammerhofmuseum.at/",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Kammerhof_Bad_Aussee.jpg",
      "credit": "Geisler Martin",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    "slug": "grundlsee",
    "title": {
      "en": "Lake Grundlsee",
      "de": "Grundlsee",
      "zh": "格伦德尔湖"
    },
    "town": "Grundlsee",
    "address": "8993 Grundlsee",
    "contact": "Gemeinde Grundlsee",
    "kind": "trail",
    "intro": {
      "en": "The long lake runs from the main village toward Gößl and the Totes Gebirge.",
      "de": "Der langgestreckte See reicht vom Hauptort nach Gößl und zum Toten Gebirge.",
      "zh": "狭长的格伦德尔湖从主村向东延伸至格瑟尔与托特斯山脉。"
    },
    "highlight": {
      "en": "A village-end panorama conveys its length before the shore opens up toward the east.",
      "de": "Vom westlichen Seeende lässt sich seine volle Länge erfassen.",
      "zh": "从西端望去，能感受整片水域的纵深。"
    },
    "route": {
      "en": "Use the village-side waterfront for a short visit or continue by local road or scheduled boat toward Gößl when available.",
      "de": "Für einen kurzen Besuch am Ortsufer bleiben oder bei Betrieb per Linienschiff beziehungsweise über die Straße nach Gößl weiterfahren.",
      "zh": "短访可留在主村湖岸。若时间充裕，可沿公路或在船班营运时乘船前往格瑟尔。"
    },
    "source": "https://www.steiermark.com/en/Ausseerland-Salzkammergut/Plan-your-holidays/Ideas-for-excursions/Lake-Kammersee_isd_3421404",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Grundlsee_Panorama.jpg",
      "credit": "Tobias Jäkel",
      "license": "CC BY-SA 3.0 de",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en"
    }
  },
  {
    "slug": "toplitzsee",
    "title": {
      "en": "Lake Toplitzsee",
      "de": "Toplitzsee",
      "zh": "托普利茨湖"
    },
    "town": "Grundlsee",
    "address": "8993 Grundlsee",
    "contact": "Schifffahrt Grundlsee–Toplitzsee",
    "kind": "boat",
    "intro": {
      "en": "The narrow lake sits behind Gößl between wooded slopes and cliffs.",
      "de": "Der schmale See liegt hinter Gößl zwischen Waldhängen und Felswänden.",
      "zh": "狭长的托普利茨湖在格瑟尔村后，夹在林坡和岩壁之间。"
    },
    "highlight": {
      "en": "A boat trip reveals the eastern shore, where a footpath continues toward Kammersee.",
      "de": "Mit dem Boot erreicht man das Ostufer mit dem Fußweg zum Kammersee.",
      "zh": "乘船可到东岸，再沿短步道前往卡默湖。"
    },
    "route": {
      "en": "Walk from Gößl to the western landing and confirm boat departures and return arrangements before boarding.",
      "de": "Von Gößl zur westlichen Anlegestelle gehen und vor dem Einsteigen Fahrzeiten und Rückfahrt klären.",
      "zh": "从格瑟尔走到西侧码头，上船前确认开船和返程安排。"
    },
    "source": "https://booking.thermenland.at/steiermark.com/en/Ausseerland-Salzkammergut/Plan-your-holidays/Ideas-for-excursions/Toplitzsee_isd_3419286",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Toplitzsee_Ostufer_20220923.jpg",
      "credit": "Tigerente",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "kammersee",
    "title": {
      "en": "Lake Kammersee",
      "de": "Kammersee",
      "zh": "卡默湖"
    },
    "town": "Grundlsee",
    "address": "8993 Grundlsee",
    "contact": "Schifffahrt Grundlsee–Toplitzsee",
    "kind": "boat",
    "intro": {
      "en": "Kammersee is the innermost of the three lakes on this route.",
      "de": "Der Kammersee ist der innerste der drei Seen.",
      "zh": "卡默湖是这条三湖路线最深处的一座。"
    },
    "highlight": {
      "en": "From above, the three waters line up toward the Sarstein, while the visit itself reaches the small basin from Toplitzsee.",
      "de": "Von oben reihen sich die Gewässer Richtung Sarstein; vor Ort erreicht man das kleine Becken vom Toplitzsee.",
      "zh": "从高处可见三湖朝萨尔施泰因方向排列，实地游览则由托普利茨湖进入小盆地。"
    },
    "route": {
      "en": "Take the scheduled Toplitzsee boat to its eastern landing, then use the short marked footpath. Check the return boat before walking away from the landing.",
      "de": "Mit dem Schiff zum Toplitzsee-Ostufer fahren und dem kurzen markierten Weg folgen. Die Rückfahrt vor dem Verlassen der Anlegestelle klären.",
      "zh": "先乘托普利茨湖游船到东岸，再走标记短径。离开码头前确认返程船班。"
    },
    "source": "https://www.steiermark.com/en/Ausseerland-Salzkammergut/Plan-your-holidays/Ideas-for-excursions/Lake-Kammersee_isd_3421404",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:3_Seen_Blick_Ausseerland_BHO-5034.jpg",
      "credit": "Bernhard Holub",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    "slug": "goessl",
    "title": {
      "en": "Gößl Village",
      "de": "Gößl",
      "zh": "格瑟尔村"
    },
    "town": "Grundlsee",
    "address": "8993 Grundlsee",
    "contact": "Gemeinde Grundlsee",
    "kind": "trail",
    "intro": {
      "en": "The village occupies the eastern end of Grundlsee, where the through valley turns toward Toplitzsee.",
      "de": "Gößl liegt am Ostende des Grundlsees, wo das Tal zum Toplitzsee weiterführt.",
      "zh": "格瑟尔村位于格伦德尔湖东端，山谷由此继续通向托普利茨湖。"
    },
    "highlight": {
      "en": "The settlement and open lake views meet around the shoreline.",
      "de": "Siedlung und offene Seesicht treffen am Ufer zusammen.",
      "zh": "沿岸可同时观察村落格局和开阔湖景。"
    },
    "route": {
      "en": "Arrive by local road or a seasonal boat service if operating. Keep to public lanes when continuing to Toplitzsee.",
      "de": "Über die Straße oder bei Betrieb mit dem Saisonschiff anreisen. Auf dem Weiterweg zum Toplitzsee öffentliche Wege nutzen.",
      "zh": "可经公路前往，季节游船营运时也可搭船。继续走往托普利茨湖，请使用公共步道。"
    },
    "source": "https://booking.thermenland.at/steiermark.com/en/Ausseerland-Salzkammergut/Plan-your-holidays/Ideas-for-excursions/Toplitzsee_isd_3419286",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Badeplatz_G%C3%B6%C3%9Fl_Pl%C3%A4tte_Grundlsee_20240727a.jpg",
      "credit": "Tigerente",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0"
    }
  },
  {
    "slug": "kaiserpark",
    "title": {
      "en": "Imperial Park",
      "de": "Kaiserpark",
      "zh": "皇室公园"
    },
    "town": "Bad Ischl",
    "address": "Jainzen 38, 4820 Bad Ischl",
    "contact": "Kaiservilla GmbH",
    "kind": "museum",
    "intro": {
      "en": "The park grounds connect the formal villa with sloping green space.",
      "de": "Die Parkanlage verbindet die repräsentative Villa mit ansteigendem Grünraum.",
      "zh": "皇室公园把正式别墅与缓坡绿地相连。"
    },
    "highlight": {
      "en": "Compare views near the main facade with the quieter path toward the Marble Cottage.",
      "de": "Der Blick an der Hauptfassade unterscheidet sich vom ruhigen Weg zum Marmorschlössl.",
      "zh": "可比较别墅正面与通往大理石小宫的小径，两处空间的观感不同。"
    },
    "route": {
      "en": "Enter from the Kaiserpark gate and check current park access separately from the guided villa visit.",
      "de": "Am Kaiserpark-Tor eintreten und den Parkzutritt getrennt von der Villaführung prüfen.",
      "zh": "从皇室公园大门进入，公园入场和别墅导览分别查询。"
    },
    "source": "https://www.kaiservilla.at/",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Kaiser_-_Jagdstandbild_02_detail%2C_Bad_Ischl.jpg",
      "credit": "Herzi Pinki",
      "license": "CC BY-SA 3.0 at",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/at/deed.en"
    }
  },
  {
    "slug": "loserfenster",
    "title": {
      "en": "Loser Window",
      "de": "Loserfenster",
      "zh": "洛瑟山天然石窗"
    },
    "town": "Altaussee",
    "address": "8992 Altaussee",
    "contact": "Gemeinde Altaussee",
    "kind": "trail",
    "intro": {
      "en": "Erosion opened a natural frame through the Loser limestone.",
      "de": "Die Verwitterung hat ein natürliches Fenster im Loser-Kalk geöffnet.",
      "zh": "风化在洛瑟山石灰岩上形成了天然石窗。"
    },
    "highlight": {
      "en": "The feature can be seen from the marked trail, with changing views as you approach.",
      "de": "Vom markierten Weg ergeben sich beim Annähern verschiedene Blickwinkel.",
      "zh": "沿标记步道靠近时，可从多个角度观察岩孔。"
    },
    "route": {
      "en": "Approach on the marked upland route from the Loser area. Stay on the trail and skip exposed sections when conditions are poor.",
      "de": "Über den markierten Höhenweg im Loser-Gebiet ansteigen. Auf dem Weg bleiben und bei schlechten Bedingungen ausgesetzte Abschnitte meiden.",
      "zh": "由洛瑟山区域沿标记高地路线前往。留在步道上，天气或路况不佳时避开暴露路段。"
    },
    "source": "https://www.steiermark.com/de/Ausseerland-Salzkammergut/Magazin/5-Bergerlebnisse-im-Ausseerland-die-verzaubern_mad_14415187",
    "photo": {
      "source": "https://commons.wikimedia.org/wiki/File:Altaussee_Loserfenster.jpg",
      "credit": "Dromedar61",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
    }
  }
] as const satisfies readonly NearbyAttraction[];

export type NearbyPlace = (typeof nearbyAttractions)[number];

export const townNamesZh: Record<NearbyPlace['town'], string> = {
  Hallstatt: '哈尔施塔特',
  Obertraun: '上特劳恩',
  Gosau: '戈绍',
  'Bad Goisern': '巴德戈伊瑟恩',
  'Bad Ischl': '巴德伊施尔',
  Altaussee: '阿尔陶塞',
  'Bad Aussee': '巴德奥塞',
  Grundlsee: '格伦德尔湖',
};
