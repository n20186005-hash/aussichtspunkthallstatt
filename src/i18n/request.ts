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
    }
    
    if (data.hero) {
      data.hero.title = locale === 'zh' ? "哈尔施塔特观景点" : locale === 'de' ? "Aussichtspunkt Hallstatt" : "Panoramic Viewpoint - Hallstatt";
      data.hero.subtitle = locale === 'zh' ? "Panoramic Viewpoint - Hallstatt" : locale === 'de' ? "Panoramic Viewpoint - Hallstatt" : "Aussichtspunkt Hallstatt";
      data.hero.rating = "4.8";
      data.hero.reviewCount = "13,868";
    }
    
    // Override Transportation (was wrongly mapped to Portugal)
    data.transport.airportDesc = locale === 'zh' 
      ? "前往哈尔施塔特通常需要飞往萨尔茨堡机场 (SZG) 或维也纳机场 (VIE)。"
      : "Usually requires flying to Salzburg Airport (SZG) or Vienna Airport (VIE).";
    data.transport.selfDriveDesc = locale === 'zh' 
      ? "经典的公共交通路线是乘坐火车到达哈尔施塔特火车站 (Hallstatt Bahnhof)，随后换乘渡轮 (Ferry) 跨湖进入小镇。"
      : "The classic route is taking a train to Hallstatt Bahnhof, then transferring to a ferry across the lake into the town.";
      
    // Override Nearby Attractions (was wrongly mapped to Leiria Castle)
    data.hours.summer = locale === 'zh' ? "哈尔施塔特湖 (Lake Hallstatt)" : "Lake Hallstatt";
    data.hours.winter = locale === 'zh' ? "哈尔施塔特盐矿 (Salzwelten Hallstatt)" : "Salzwelten Hallstatt";
    data.tickets.adults = locale === 'zh' ? "人骨教堂 (Charnel House)" : "Charnel House";
    
    // Override Photo Spots
    if (data.photoSpots && data.photoSpots.spots && data.photoSpots.spots.length > 0) {
      data.photoSpots.spots[0].name = locale === 'zh' ? "明信片机位" : "Postcard Viewpoint";
      data.photoSpots.spots[0].desc = locale === 'zh' 
        ? "利用前景的坡道，拍摄哥特式基督教路德教堂的尖塔、依山傍水的传统木屋，以及阿尔卑斯山脉在湖面上的倒影。" 
        : "Use the ramp in the foreground to capture the spire of the Evangelical Parish Church, traditional wooden houses, and the reflection of the Alps.";
    }
    
    // Override Hotels
    if (data.hotels && data.hotels.hotels && data.hotels.hotels.length > 0) {
      data.hotels.hotels[0].name = locale === 'zh' ? "湖畔木屋酒店" : "Lakeside Wooden Hotels";
      data.hotels.hotels[0].desc = locale === 'zh' ? "历史悠久的湖畔木屋，镇内售罄可选择奥贝特劳恩或巴德伊舍。" : "Historic lakeside cabins. If sold out, choose Obertraun or Bad Ischl.";
      data.hotels.supplementsContent = locale === 'zh' ? "当地特色饮食主要是烤湖鱼和奥地利传统高山菜肴。" : "Local cuisine features grilled lake fish and traditional Austrian alpine dishes.";
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