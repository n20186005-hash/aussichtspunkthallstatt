// Single source of truth for the Panoramic Viewpoint - Hallstatt entity.
// Used by Hero/Gallery/Reviews/MapEmbed/layout metadata/JSON-LD so that
// NAP data and links stay identical across the whole site.

export const siteConfig = {
  domain: "aussichtspunkthallstatt.com",
  baseUrl: "https://aussichtspunkthallstatt.com",

  // Entity (Google Maps listing data)
  officialFullName: "Panoramic Viewpoint - Hallstatt",
  alternateNames: [
    "Aussichtspunkt Hallstatt",
    "Place of Silence Hallstatt",
    "哈尔施塔特观景点",
  ],
  city: "Hallstatt",
  region: "Upper Austria",
  regionLocal: "Oberösterreich",
  country: "Austria",
  countryCode: "AT",
  postalCode: "4830",
  streetAddress: "Gosaumühlstraße 67",
  plusCode: "HJ7X+RX",
  phone: "+43613226909400",
  rating: 4.8,
  reviewCount: 14323,

  geo: {
    latitude: 47.5645953,
    longitude: 13.645211,
  },

  mapsUrl: "https://maps.app.goo.gl/F1oaX1i4HaeuWWL1A",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4784.90105543306!2d13.645211!3d47.5645953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47713612846fe77d%3A0xde080447d6d64c5d!2z5ZOI5bCU5pa95aGU54m56KeC5pmv54K577yI5aWl5Zyw5Yip77yJ!5e1!3m2!1szh-CN!2s!4v1788934641114!5m2!1szh-CN!2s",

  heroImage: "/gallery/panoramic-viewpoint-hallstatt-1.jpg",

  // First gallery image used for og:image + JSON-LD image.
  galleryImage1:
    "https://aussichtspunkthallstatt.com/gallery/panoramic-viewpoint-hallstatt-1.jpg",

  nearbyLandmarks: [
    "Market Square (Marktplatz) & Charnel House (Beinhaus)",
    "Salzwelten Hallstatt Salt Mine & Skywalk",
  ],

  authorityUrl: "https://dachstein.salzkammergut.at/",

  ga4Id: "G-HXM22WWPKP",

  lastUpdated: "2026-09-09",
} as const;

export type SiteConfig = typeof siteConfig;
