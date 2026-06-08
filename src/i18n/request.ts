import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// ENHANCEMENT: Added top-down traceability validation flow for official links and heritage databases.
function validateTraceability(data: any) {
  const requiredLevels = [
    'https://www.oesterreich.gv.at',
    'https://www.land-oberoesterreich.gv.at',
    'https://www.hallstatt.ooe.gv.at',
    'https://dachstein.salzkammergut.at',
    'https://www.bda.gv.at'
  ];
  
  let valid = true;
  if (data?.footer?.officialLinks) {
    const links = Object.values(data.footer.officialLinks).map((l: any) => l.url);
    requiredLevels.forEach(level => {
      if (!links.some(url => url.includes(level))) {
        valid = false;
      }
    });
  }
  return valid;
}

// ENHANCEMENT: Added interception and ID/Slug matching logic to cut off misaligned country data.
function interceptAndFixData(locale: string, originalData: any) {
  const data = JSON.parse(JSON.stringify(originalData));
  
  // Validation Check
  const isTraceable = validateTraceability(data);
  
  // Core Logic: Strict binding of extended modules (transport, route, hotels, basic info) to the main attraction ID "hallstatt-viewpoint"
  const currentAttractionId = "hallstatt-viewpoint";
  
  if (currentAttractionId === "hallstatt-viewpoint" && isTraceable) {
    // Override Basic Information (was wrongly mapped to Alte Brücke Heidelberg)
    data.basicInfo.officialNameValue = locale === 'zh' ? "哈尔施塔特观景点" : "Panoramic Viewpoint - Hallstatt";
    data.basicInfo.countryValue = locale === 'zh' ? "奥地利" : "Austria";
    data.basicInfo.cityValue = locale === 'zh' ? "哈尔施塔特" : "Hallstatt";
    data.basicInfo.addressValue = "Gosaumühlstraße 67, 4830 Hallstatt, Austria";
    data.basicInfo.plusCodeValue = "HJ7X+RX Hallstatt, Austria";
    
    if (data.footer) {
      data.footer.rights = locale === 'zh' 
        ? "© 2026 Panoramic Viewpoint Hallstatt. 保留所有权利。" 
        : "© 2026 Panoramic Viewpoint Hallstatt. All rights reserved.";
    }
    
    if (data.meta) {
      data.meta.title = locale === 'zh' 
        ? "哈尔施塔特观景点 | Panoramic Viewpoint - Hallstatt" 
        : "Panoramic Viewpoint - Hallstatt | Austria";
      data.meta.description = locale === 'zh'
        ? "探索奥地利哈尔施塔特观景点的完整指南，发现最经典的明信片拍摄机位。"
        : "Explore the complete guide to Panoramic Viewpoint - Hallstatt, Austria. Discover the most classic postcard photo spot.";
    }
    
    if (data.intro) {
      data.intro.title = locale === 'zh' ? "探索哈尔施塔特观景点" : "Explore Panoramic Viewpoint Hallstatt";
      data.intro.description = locale === 'zh' 
        ? "哈尔施塔特观景点是拍摄小镇经典明信片视角的最佳位置。在这里，您可以将哥特式教堂尖塔、依山傍水的传统木屋和阿尔卑斯山在湖面上的倒影完美定格。" 
        : "The Hallstatt Panoramic Viewpoint is the best spot to capture the classic postcard view of the town. Here, you can perfectly frame the Gothic church spire, traditional wooden houses, and the reflection of the Alps on the lake.";
      
      data.intro.visitGuide = {
        title: locale === 'zh' ? "游览建议" : "Visiting Tips",
        items: locale === 'zh' ? [
          "最佳拍摄时间：上午顺光适合拍摄清晰倒影，下午/傍晚容易逆光。",
          "人群拥挤度提示：该机位空间极小（就在马路边），建议标注“上午9点前或下午5点后可避开大巴团”。",
          "居民隐私提醒：提示游客不要大声喧哗或进入当地居民的私人领地（这是该景点目前最被关注的痛点）。",
          "注意交通安全：由于观景点紧靠马路，拍照时请务必留意过往车辆。"
        ] : [
          "Best shooting time: Morning light is ideal for clear reflections; afternoon/evening tends to be backlit.",
          "Crowd tips: The spot is very small (right by the road). Visit before 9 AM or after 5 PM to avoid tour bus crowds.",
          "Resident privacy warning: Please do not make loud noises or enter private properties of local residents (a major concern here).",
          "Traffic safety: As the viewpoint is next to the road, please be mindful of passing vehicles while taking photos."
        ]
      };
      
      data.intro.alsoKnownAs = {
        title: locale === 'zh' ? "景点特色" : "Highlights",
        items: locale === 'zh' ? [
          "明信片视角：全球闻名的哈尔施塔特标志性摄影机位",
          "世界遗产风貌：完美展现哈尔施塔特-达赫施泰因世界文化遗产的精髓",
          "湖光山色：哈尔施塔特湖与阿尔卑斯山脉的绝佳观景台"
        ] : [
          "Postcard View: The world-famous iconic photo spot of Hallstatt",
          "World Heritage: Perfectly showcases the essence of the Hallstatt-Dachstein World Heritage site",
          "Lake and Mountains: An excellent observation deck for Lake Hallstatt and the Alps"
        ]
      };
    }
    
    if (data.knowledge) {
      data.knowledge.title = locale === 'zh' ? "了解哈尔施塔特" : "Discover Hallstatt";
      data.knowledge.sections = [
        {
          id: "history",
          title: locale === 'zh' ? "世界遗产" : "World Heritage",
          content: locale === 'zh' ? "哈尔施塔特-达赫施泰因/萨尔茨卡默古特文化景观于1997年被列入联合国教科文组织世界遗产名录。" : "The Hallstatt-Dachstein/Salzkammergut Cultural Landscape was inscribed on the UNESCO World Heritage List in 1997."
        },
        {
          id: "architecture",
          title: locale === 'zh' ? "传统建筑" : "Traditional Architecture",
          content: locale === 'zh' ? "依山傍水的木屋是这里的标志，哥特式基督教路德教堂的尖塔则是整个画面的视觉中心。" : "The wooden houses nestled between the mountain and the lake are iconic, with the Gothic Evangelical Parish Church spire forming the visual centerpiece."
        },
        {
          id: "experience",
          title: locale === 'zh' ? "绝佳体验" : "Unforgettable Experience",
          content: locale === 'zh' ? "无论是清晨的薄雾，还是冬日的白雪，这里四季都呈现出童话般的绝美景致。" : "Whether in the morning mist or under winter snow, the viewpoint offers breathtaking, fairytale-like scenery all year round."
        }
      ];
    }
    
    if (data.hero) {
      data.hero.title = locale === 'zh' ? "哈尔施塔特观景点" : locale === 'de' ? "Aussichtspunkt Hallstatt" : "Panoramic Viewpoint - Hallstatt";
      data.hero.subtitle = locale === 'zh' ? "Panoramic Viewpoint - Hallstatt" : locale === 'de' ? "Panoramic Viewpoint - Hallstatt" : "Aussichtspunkt Hallstatt";
      data.hero.rating = "4.8";
      data.hero.reviewCount = "13,868";
    }
    
    // Override Transportation (was wrongly mapped to Portugal)
    if (data.transport) {
      data.transport.airportDesc = locale === 'zh' 
        ? "前往哈尔施塔特通常需要飞往萨尔茨堡机场 (SZG) 或维也纳机场 (VIE)。"
        : "Usually requires flying to Salzburg Airport (SZG) or Vienna Airport (VIE).";
      data.transport.selfDriveDesc = locale === 'zh' 
        ? "经典的公共交通路线是乘坐火车到达哈尔施塔特火车站 (Hallstatt Bahnhof)，随后换乘渡轮 (Ferry) 跨湖进入小镇。"
        : "The classic route is taking a train to Hallstatt Bahnhof, then transferring to a ferry across the lake into the town.";
      data.transport.busDesc = locale === 'zh'
        ? "可从萨尔茨堡搭乘 150 路公交车至巴德伊舍 (Bad Ischl)，再换乘火车或公交车抵达哈尔施塔特。"
        : "You can take bus 150 from Salzburg to Bad Ischl, then transfer to a train or bus to Hallstatt.";
      data.transport.intercityDesc = locale === 'zh'
        ? "小镇内部非常紧凑，所有主要景点（包括观景点）均可通过步行轻松抵达。"
        : "The town is very compact, and all main attractions (including the viewpoint) are easily accessible on foot.";
      data.transport.cyclingDesc = locale === 'zh'
        ? "环哈尔施塔特湖有优美的自行车道，但镇中心核心区域由于人流密集，建议推车步行。"
        : "There are beautiful cycling paths around Lake Hallstatt, but walking is recommended in the crowded town center.";
      data.transport.tipsDesc = locale === 'zh'
        ? "哈尔施塔特是萨尔茨卡默古特湖区的核心，建议与圣沃尔夫冈 (St. Wolfgang)、巴德伊舍等地结合游览。"
        : "Hallstatt is the heart of the Salzkammergut lake district. We recommend visiting along with St. Wolfgang and Bad Ischl.";
    }
    
    if (data.route) {
      data.route.overview = locale === 'zh' ? "哈尔施塔特经典步行路线" : "Classic Hallstatt Walking Route";
      data.route.steps = locale === 'zh' ? [
        "从轮渡码头或公交站出发，进入哈尔施塔特小镇中心",
        "漫步于集市广场 (Marktplatz)，欣赏色彩斑斓的传统房屋",
        "沿着湖畔主街 (Seestraße) 向北步行约 5-10 分钟",
        "抵达哈尔施塔特观景点 (Panoramic Viewpoint)，拍摄经典明信片照片",
        "返回途中参观哥特式路德教堂和人骨教堂",
        "乘坐缆车前往哈尔施塔特盐矿和天空步道 (Skywalk) 俯瞰全景"
      ] : [
        "Start from the ferry dock or bus station and enter the town center",
        "Stroll through the Market Square (Marktplatz) and admire the colorful houses",
        "Walk north along the lakeside street (Seestraße) for about 5-10 minutes",
        "Arrive at the Panoramic Viewpoint to capture the classic postcard photo",
        "On the way back, visit the Gothic Evangelical Church and the Charnel House",
        "Take the funicular up to the Salzwelten (Salt Mine) and the Skywalk for a panoramic view"
      ];
      data.route.supplements = locale === 'zh' ? [
        "观景点空间狭小且紧邻行车道，请务必注意交通安全。",
        "请尊重当地居民隐私，不要大声喧哗，严禁使用无人机或进入私人领地。",
        "建议在上午 9 点前抵达观景点，以避开拥挤的旅游团。"
      ] : [
        "The viewpoint space is narrow and close to the road; please be mindful of traffic.",
        "Respect local residents' privacy: do not make loud noises, fly drones, or enter private property.",
        "Arrive before 9 AM to avoid large tour groups."
      ];
    }
      
    // Override Nearby Attractions (was wrongly mapped to Leiria Castle)
    if (data.hours) {
      data.hours.outdoor = locale === 'zh' ? "全天开放" : "Open 24/7";
      data.hours.outdoorTime = locale === 'zh' ? "观景点位于公共道路旁，全天免费开放" : "The viewpoint is located by a public road and is free and open all day.";
      data.hours.lighthouse = locale === 'zh' ? "周边景点" : "Nearby Attractions";
      data.hours.summer = locale === 'zh' ? "哈尔施塔特湖 (Lake Hallstatt)" : "Lake Hallstatt";
      data.hours.summerTime = locale === 'zh' ? "全天开放，可乘船游览" : "Open all day, boat tours available.";
      data.hours.winter = locale === 'zh' ? "哈尔施塔特盐矿 (Salzwelten Hallstatt)" : "Salzwelten Hallstatt";
      data.hours.winterTime = locale === 'zh' ? "通常为 09:30-14:30 或更长，依季节而定" : "Usually 09:30-14:30 or longer depending on the season.";
      data.hours.warning = locale === 'zh' ? "人骨教堂 (Charnel House)" : "Charnel House";
      data.hours.warningTime = locale === 'zh' ? "通常为 10:00-17:00，依季节而定" : "Usually 10:00-17:00 depending on the season.";
      data.hours.tip = locale === 'zh' ? "清晨（上午9点前）光线最好，且能避开人潮。" : "Early morning (before 9 AM) offers the best light and avoids crowds.";
    }
    
    if (data.tickets) {
      data.tickets.outdoor = locale === 'zh' ? "哈尔施塔特观景点" : "Panoramic Viewpoint";
      data.tickets.outdoorPrice = locale === 'zh' ? "免费开放" : "Free all day";
      data.tickets.lighthouse = locale === 'zh' ? "周边付费景点" : "Nearby Paid Attractions";
      data.tickets.adults = locale === 'zh' ? "人骨教堂 (Charnel House)" : "Charnel House";
      data.tickets.adultsPrice = locale === 'zh' ? "需购买门票" : "Admission fee applies";
      data.tickets.students = locale === 'zh' ? "哈尔施塔特盐矿" : "Salzwelten Hallstatt";
      data.tickets.studentsPrice = locale === 'zh' ? "需购买门票（含缆车）" : "Admission fee applies (includes funicular)";
      data.tickets.children = locale === 'zh' ? "停车费" : "Parking Fees";
      data.tickets.childrenPrice = locale === 'zh' ? "镇外设有多个公共停车场（P1/P2/P3），按小时收费" : "Public parking lots (P1/P2/P3) available outside the town, charged hourly";
      data.tickets.card = locale === 'zh' ? "交通建议" : "Transport Tip";
      data.tickets.cardPrice = locale === 'zh' ? "镇内限制外部车辆驶入，需步行游览" : "External vehicles are restricted in town; walking is required.";
    }
    
    // Override Photo Spots
    if (data.photoSpots) {
      data.photoSpots.title = locale === 'zh' ? "拍照机位与建议" : "Photo Spots & Tips";
      data.photoSpots.spots = locale === 'zh' ? [
        {
          name: "明信片机位 (Postcard Viewpoint)",
          desc: "利用前景的坡道，拍摄哥特式基督教路德教堂的尖塔、依山傍水的传统木屋，以及阿尔卑斯山脉在湖面上的倒影。"
        },
        {
          name: "湖畔长椅区",
          desc: "以宁静的哈尔施塔特湖为背景，捕捉白天鹅和游船的画面。"
        },
        {
          name: "集市广场 (Marktplatz)",
          desc: "拍摄四周色彩斑斓的传统建筑和中央的黑死病纪念柱。"
        },
        {
          name: "天空步道 (Skywalk)",
          desc: "乘坐缆车上山，在悬空观景台上俯瞰整个小镇和湖泊全景。"
        }
      ] : [
        {
          name: "Postcard Viewpoint",
          desc: "Use the ramp in the foreground to capture the spire of the Evangelical Parish Church, traditional wooden houses, and the reflection of the Alps."
        },
        {
          name: "Lakeside Benches",
          desc: "Capture swans and boats with the tranquil Lake Hallstatt as the background."
        },
        {
          name: "Market Square (Marktplatz)",
          desc: "Photograph the colorful traditional buildings and the central Holy Trinity column."
        },
        {
          name: "Skywalk",
          desc: "Take the funicular up the mountain for a panoramic bird's-eye view of the entire town and lake from the suspended platform."
        }
      ];
      data.photoSpots.tipsContent = locale === 'zh' 
        ? "最佳拍摄时间：上午顺光，水面平静，倒影最清晰；下午和傍晚容易逆光。由于机位极小，建议早上9点前到达以避开大巴人群。"
        : "Best shooting time: Morning light is perfect for clear reflections. Afternoons tend to be backlit. The spot is very small, so arrive before 9 AM to avoid crowds.";
    }
    
    // Override Hotels
    if (data.hotels) {
      data.hotels.title = locale === 'zh' ? "住宿与餐饮建议" : "Accommodation & Dining";
      data.hotels.hotels = locale === 'zh' ? [
        {
          name: "湖畔木屋酒店",
          desc: "历史悠久的哈尔施塔特镇内湖畔木屋，提供极致的湖景体验。",
          price: "旺季极难预订，需提前数月规划"
        },
        {
          name: "奥贝特劳恩 (Obertraun)",
          desc: "位于湖对岸的宁静小镇，性价比高，可通过轮渡或公交轻松抵达哈尔施塔特。",
          price: "作为镇内售罄时的最佳替代方案"
        },
        {
          name: "巴德伊舍 (Bad Ischl)",
          desc: "交通便利的温泉小镇，距离哈尔施塔特约半小时车程，适合自驾或乘坐公共交通的游客。",
          price: "周边设施完善的度假中心"
        }
      ] : [
        {
          name: "Lakeside Wooden Hotels",
          desc: "Historic lakeside cabins in Hallstatt offering ultimate lake view experiences.",
          price: "Extremely hard to book in peak season; plan months ahead"
        },
        {
          name: "Obertraun",
          desc: "A quiet town across the lake, highly cost-effective, easily accessible by ferry or bus.",
          price: "The best alternative when Hallstatt is sold out"
        },
        {
          name: "Bad Ischl",
          desc: "A convenient spa town about half an hour away, great for driving or public transport.",
          price: "A resort hub with excellent amenities"
        }
      ];
      data.hotels.supplementsTitle = locale === 'zh' ? "当地美食" : "Local Cuisine";
      data.hotels.supplementsContent = locale === 'zh' 
        ? "当地特色饮食主要是烤湖鱼（从哈尔施塔特湖捕捞）和奥地利传统高山菜肴。推荐在湖畔餐厅边享用美食边欣赏湖景。" 
        : "Local cuisine mainly features grilled lake fish (caught from Lake Hallstatt) and traditional Austrian alpine dishes. We recommend enjoying your meal at a lakeside restaurant with a view.";
    }
    
    if (data.gallery) {
      data.gallery.captions = locale === 'zh' ? [
        "明信片机位全景",
        "哥特式路德教堂尖塔",
        "依山傍水的传统木屋",
        "阿尔卑斯山脉倒影",
        "哈尔施塔特湖天鹅",
        "集市广场建筑",
        "冬季雪景",
        "清晨薄雾",
        "湖畔游船",
        "人骨教堂内部",
        "盐矿缆车",
        "天空步道俯瞰",
        "历史小巷",
        "秋季红叶",
        "特色烤湖鱼",
        "半山腰观景台",
        "小镇夜景",
        "传统奥地利服饰",
        "湖畔咖啡馆",
        "纪念品商店"
      ] : [
        "Postcard View Panorama",
        "Gothic Evangelical Church Spire",
        "Traditional Wooden Houses",
        "Alps Reflection",
        "Swans on Lake Hallstatt",
        "Market Square Architecture",
        "Winter Snow Scene",
        "Morning Mist",
        "Lakeside Boats",
        "Inside Charnel House",
        "Salt Mine Funicular",
        "Skywalk View",
        "Historic Alleys",
        "Autumn Leaves",
        "Grilled Lake Fish",
        "Mid-mountain Viewpoint",
        "Town Night View",
        "Traditional Austrian Dress",
        "Lakeside Cafe",
        "Souvenir Shop"
      ];
    }
    
    if (data.officialManagement) {
      data.officialManagement.title = locale === 'zh' ? "关于哈尔施塔特观景点" : "About Hallstatt Viewpoint";
      data.officialManagement.text = locale === 'zh' 
        ? "哈尔施塔特观景点是世界文化遗产“哈尔施塔特-达赫施泰因/萨尔茨卡默古特文化景观”的核心拍摄地，受上奥地利州及哈尔施塔特镇政府共同规划与保护。" 
        : "The Hallstatt Panoramic Viewpoint is the core photo spot of the 'Hallstatt-Dachstein/Salzkammergut Cultural Landscape' World Heritage site, protected and managed by the State of Upper Austria and the Hallstatt Town Government.";
    }
  }
  
  return data;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = (requested && routing.locales.includes(requested as any))
    ? requested
    : routing.defaultLocale;

  const originalMessages = (await import(`../messages/${locale}.json`)).default;
  const interceptedMessages = interceptAndFixData(locale, originalMessages);

  return {
    locale,
    messages: interceptedMessages,
  };
});