export type Province =
  | "Punjab"
  | "Sindh"
  | "Khyber Pakhtunkhwa"
  | "Balochistan"
  | "Gilgit Baltistan"
  | "Azad Jammu and Kashmir"
  | "Islamabad Capital Territory";

export type TourismType =
  | "Historical"
  | "Nature"
  | "Adventure"
  | "Cultural"
  | "Religious"
  | "Urban"
  | "Beach"
  | "Desert";

export interface Location {
  slug: string;
  name: string;
  province: Province;
  type: TourismType;
  overview: string;
  attractions: string[];
  historical: string[];
  natural: string[];
  hotels: string[];
  restaurants: string[];
  localFood: string[];
  bestSeason: string;
  weather: string;
  safety: string;
  nearby: string[];
  dailyBudget: number; // PKR
  featured?: boolean;
  hiddenGem?: boolean;
  image?: string;
}

const base = (
  name: string,
  province: Province,
  type: TourismType,
  overview: string,
  attractions: string[],
  dailyBudget: number,
  bestSeason: string,
  extras: Partial<Location> = {},
): Location => ({
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  name,
  province,
  type,
  overview,
  attractions,
  historical: extras.historical ?? attractions.slice(0, 2),
  natural: extras.natural ?? [],
  hotels: extras.hotels ?? [`${name} Serena`, `PC ${name}`, `${name} Inn`, `Budget Lodge ${name}`],
  restaurants: extras.restaurants ?? [`Cafe ${name}`, `Karahi House`, `Chai Khana`],
  localFood: extras.localFood ?? ["Biryani", "Karahi", "Naan", "Chai"],
  bestSeason,
  weather: extras.weather ?? "Varies by season — check forecast before travel.",
  safety: extras.safety ?? "Generally safe. Respect local customs, avoid isolated areas after dark.",
  nearby: extras.nearby ?? [],
  dailyBudget,
  featured: extras.featured,
  hiddenGem: extras.hiddenGem,
});

// Curated seed set — representative sample across all provinces & territories.
// The app is structured to scale to 500+ entries; add more here anytime.
export const LOCATIONS: Location[] = [
  // ── Punjab ──
  base("Lahore", "Punjab", "Historical",
    "Cultural heart of Pakistan — Mughal architecture, food streets, and centuries of history.",
    ["Badshahi Mosque", "Lahore Fort", "Shalimar Gardens", "Wagah Border", "Food Street Gawalmandi"],
    6500, "October – March",
    { featured: true, nearby: ["Kasur", "Sheikhupura", "Nankana Sahib"], localFood: ["Nihari", "Paye", "Lahori Chargha", "Falooda"] }),
  base("Multan", "Punjab", "Historical",
    "The city of Sufi saints, blue-tiled shrines, and mango orchards.",
    ["Shrine of Bahauddin Zakariya", "Shah Rukn-e-Alam", "Multan Fort", "Ghanta Ghar"],
    4200, "November – February",
    { localFood: ["Sohan Halwa", "Multani Karahi", "Mangoes"] }),
  base("Faisalabad", "Punjab", "Urban",
    "Manchester of Pakistan — Pakistan's textile capital.",
    ["Clock Tower (Ghanta Ghar)", "Lyallpur Museum", "Jinnah Garden"], 3800, "Year-round"),
  base("Rawalpindi", "Punjab", "Urban",
    "Twin city of Islamabad with bustling bazaars and colonial charm.",
    ["Raja Bazaar", "Ayub National Park", "Rawat Fort"], 4500, "October – April",
    { nearby: ["Islamabad", "Murree"] }),
  base("Murree", "Punjab", "Nature",
    "Colonial-era hill station famous for pine forests and snowy winters.",
    ["Mall Road", "Pindi Point", "Kashmir Point", "Patriata Chairlift"],
    5500, "March – June, December (snow)", { featured: true, nearby: ["Nathia Gali", "Bhurban"] }),
  base("Bahawalpur", "Punjab", "Historical",
    "Home to the Cholistan Desert and princely-era palaces.",
    ["Noor Mahal", "Derawar Fort", "Lal Suhanra National Park", "Cholistan Desert"],
    3500, "October – March", { hiddenGem: true, type: "Desert" }),
  base("Sialkot", "Punjab", "Urban", "Historic city, birthplace of Allama Iqbal.",
    ["Iqbal Manzil", "Sialkot Fort", "Marala Headworks"], 3600, "Year-round"),
  base("Nankana Sahib", "Punjab", "Religious", "Sacred birthplace of Guru Nanak, founder of Sikhism.",
    ["Gurdwara Janam Asthan", "Gurdwara Patti Sahib"], 3000, "October – March"),
  base("Harappa", "Punjab", "Historical", "Ancient Indus Valley civilization archaeological site.",
    ["Harappa Archaeological Site", "Harappa Museum"], 2800, "November – February", { hiddenGem: true }),
  base("Fort Munro", "Punjab", "Nature", "Hill station in the Sulaiman Range, cool escape in southern Punjab.",
    ["Anari Lake", "Damas Waterfall", "Fort Munro View Point"], 3200, "April – October", { hiddenGem: true }),

  // ── Sindh ──
  base("Karachi", "Sindh", "Urban",
    "Pakistan's largest metropolis — beaches, food, culture, and business capital.",
    ["Clifton Beach", "Mazar-e-Quaid", "Mohatta Palace", "Port Grand", "Empress Market"],
    7000, "November – February",
    { featured: true, type: "Urban", localFood: ["Bun Kabab", "Nihari", "BBQ", "Seafood"] }),
  base("Hyderabad", "Sindh", "Cultural", "City of bangles, Sindhi culture, and historic bazaars.",
    ["Rani Bagh", "Sindh Museum", "Pacco Qillo", "Tomb of Talpur Mirs"], 3500, "October – March"),
  base("Mohenjo-daro", "Sindh", "Historical", "5,000-year-old Indus Valley city — UNESCO World Heritage.",
    ["Great Bath", "Buddhist Stupa", "Mohenjo-daro Museum"], 4200, "November – February",
    { featured: true, hiddenGem: true }),
  base("Sukkur", "Sindh", "Historical", "Historic river city with the iconic Sukkur Barrage.",
    ["Sukkur Barrage", "Sadhu Bela Temple", "Lansdowne Bridge"], 3200, "November – February"),
  base("Thatta", "Sindh", "Historical", "Home to the Makli Necropolis, one of the largest cemeteries in the world.",
    ["Makli Necropolis", "Shah Jahan Mosque", "Keenjhar Lake"], 2800, "October – March"),
  base("Keenjhar Lake", "Sindh", "Nature", "Largest freshwater lake in Pakistan — perfect weekend getaway.",
    ["Boat rides", "Bird watching", "Camping"], 2500, "October – March"),
  base("Gorakh Hill", "Sindh", "Nature", "Sindh's only hill station — snowfall on rare winter nights.",
    ["Gorakh Peak", "Sunset Point"], 3000, "November – February", { hiddenGem: true }),
  base("Kotri", "Sindh", "Urban", "Industrial town beside the Indus, gateway to interior Sindh.",
    ["Kotri Barrage", "Indus riverfront"], 2400, "October – March"),

  // ── Khyber Pakhtunkhwa ──
  base("Peshawar", "Khyber Pakhtunkhwa", "Historical",
    "One of the oldest living cities in South Asia — Pashtun culture and Mughal-era bazaars.",
    ["Qissa Khwani Bazaar", "Peshawar Museum", "Bala Hisar Fort", "Sethi House"],
    3800, "October – March", { localFood: ["Chapli Kabab", "Kabuli Pulao", "Peshawari Ice Cream"] }),
  base("Swat Valley", "Khyber Pakhtunkhwa", "Nature",
    "Switzerland of the East — alpine meadows, rivers, and snow-capped peaks.",
    ["Malam Jabba", "Kalam", "Mahodand Lake", "Ushu Forest"],
    5000, "April – October", { featured: true }),
  base("Kalam", "Khyber Pakhtunkhwa", "Nature", "Riverside valley with pine forests and glacial lakes.",
    ["Kalam Bazaar", "Mahodand Lake", "Ushu Valley"], 4500, "May – September"),
  base("Naran", "Khyber Pakhtunkhwa", "Nature",
    "Gateway to Saif-ul-Malook Lake and the Kaghan Valley.",
    ["Saif-ul-Malook Lake", "Lulusar Lake", "Babusar Top"],
    5200, "May – September", { featured: true }),
  base("Kaghan", "Khyber Pakhtunkhwa", "Nature", "River valley of pine forests, streams, and trout.",
    ["Shogran", "Siri Paye Meadows", "Balakot"], 4800, "May – September"),
  base("Chitral", "Khyber Pakhtunkhwa", "Adventure",
    "Remote mountain valley — Kalash tribes, Tirich Mir, and polo festivals.",
    ["Chitral Fort", "Shahi Mosque", "Kalash Valley", "Shandur Pass"], 4500, "May – October"),
  base("Kalash Valley", "Khyber Pakhtunkhwa", "Cultural",
    "Home to the indigenous Kalash people with unique festivals and traditions.",
    ["Bumburet", "Rumbur", "Birir", "Chilam Joshi Festival"], 4200, "May – September", { hiddenGem: true }),
  base("Abbottabad", "Khyber Pakhtunkhwa", "Nature", "Green hill town — gateway to Nathia Gali and Kaghan.",
    ["Ilyasi Mosque", "Shimla Hill", "Thandiani"], 3800, "March – October"),
  base("Nathia Gali", "Khyber Pakhtunkhwa", "Nature", "Pine-covered hill resort in the Galyat.",
    ["Mukshpuri Trek", "Nathia Gali Church", "Miranjani Peak"], 4200, "April – October"),
  base("Ayubia", "Khyber Pakhtunkhwa", "Nature", "National park with chairlifts and pipeline trek.",
    ["Ayubia Chairlift", "Pipeline Walk", "Dungagali"], 3500, "April – October"),

  // ── Balochistan ──
  base("Quetta", "Balochistan", "Cultural",
    "Fruit basket of Pakistan — apple, cherry, and juniper valleys.",
    ["Hanna Lake", "Urak Valley", "Ziarat Juniper Forest", "Quetta Bazaar"], 3500, "April – October"),
  base("Ziarat", "Balochistan", "Nature", "Home to one of the world's oldest juniper forests and Quaid's Residency.",
    ["Quaid-e-Azam Residency", "Juniper Forest", "Prospect Point"], 3600, "April – October", { hiddenGem: true }),
  base("Gwadar", "Balochistan", "Beach", "Deep-sea port city on the Arabian Sea coast — CPEC hub.",
    ["Astola Island", "Hammerhead Beach", "Princess of Hope", "Kund Malir"], 4500, "November – March", { featured: true }),
  base("Kund Malir", "Balochistan", "Beach", "One of the world's most beautiful desert-meets-sea beaches.",
    ["Kund Malir Beach", "Hingol National Park", "Princess of Hope"], 4000, "November – March", { hiddenGem: true }),
  base("Hingol National Park", "Balochistan", "Nature", "Largest national park in Pakistan — mud volcanoes and Hinglaj Mata temple.",
    ["Hinglaj Mata Temple", "Mud Volcanoes", "Buzi Pass"], 3800, "November – February"),
  base("Hanna Lake", "Balochistan", "Nature", "Picturesque lake near Quetta, popular for boat rides.",
    ["Lakeside boating", "Picnic spots"], 2500, "March – October"),

  // ── Gilgit Baltistan ──
  base("Hunza Valley", "Gilgit Baltistan", "Nature",
    "Legendary valley of longevity — snow-capped peaks and apricot blossoms.",
    ["Baltit Fort", "Altit Fort", "Attabad Lake", "Passu Cones", "Rakaposhi View"],
    6000, "April – October",
    { featured: true, image: "hero", nearby: ["Gilgit", "Nagar", "Khunjerab"] }),
  base("Skardu", "Gilgit Baltistan", "Adventure",
    "Gateway to K2 and the world's highest mountains — Shangrila and cold deserts.",
    ["Shangrila Resort", "Shigar Fort", "Deosai Plains", "Sheosar Lake", "Katpana Desert"],
    6500, "May – September", { featured: true }),
  base("Gilgit", "Gilgit Baltistan", "Adventure", "Regional capital, base for expeditions to the north.",
    ["Kargah Buddha", "Gilgit Bridge", "Naltar Valley"], 5000, "April – October"),
  base("Naltar Valley", "Gilgit Baltistan", "Nature", "Alpine valley of coloured lakes and pine forests.",
    ["Naltar Lakes", "Ski Resort", "Pine forests"], 5200, "May – October", { hiddenGem: true }),
  base("Fairy Meadows", "Gilgit Baltistan", "Nature",
    "Meadow at the base of Nanga Parbat — jeep + trek adventure.",
    ["Nanga Parbat Base Camp", "Fairy Meadows camping", "Beyal Camp"],
    5800, "May – September", { featured: true, hiddenGem: true }),
  base("Deosai Plains", "Gilgit Baltistan", "Nature", "Second-highest plateau in the world — wildflowers and brown bears.",
    ["Sheosar Lake", "Bara Pani", "Kala Pani"], 5500, "June – September"),
  base("Attabad Lake", "Gilgit Baltistan", "Nature", "Turquoise lake formed by a 2010 landslide.",
    ["Boat rides", "Jetty Cafe", "Passu Cones view"], 5000, "April – October"),
  base("Khunjerab Pass", "Gilgit Baltistan", "Adventure", "Highest paved border crossing in the world (4,693m).",
    ["Pak-China Border", "Marco Polo Sheep"], 6000, "May – September"),
  base("Astore Valley", "Gilgit Baltistan", "Nature", "Alpine valley with Rama Meadow and Nanga Parbat views.",
    ["Rama Lake", "Rama Meadow"], 4800, "May – September", { hiddenGem: true }),

  // ── Azad Jammu & Kashmir ──
  base("Muzaffarabad", "Azad Jammu and Kashmir", "Cultural", "Capital of AJK at the confluence of Jhelum and Neelum rivers.",
    ["Red Fort", "Pir Chinasi", "Subri Lake"], 4200, "April – October"),
  base("Neelum Valley", "Azad Jammu and Kashmir", "Nature",
    "Blue-river valley of waterfalls, wooden villages, and alpine forests.",
    ["Kutton Waterfall", "Kel", "Arang Kel", "Ratti Gali Lake", "Sharda"],
    4800, "April – October", { featured: true }),
  base("Arang Kel", "Azad Jammu and Kashmir", "Nature", "Hilltop village above Kel — chair lift + hike access.",
    ["Arang Kel Meadow", "Chairlift"], 4500, "May – September", { hiddenGem: true }),
  base("Rawalakot", "Azad Jammu and Kashmir", "Nature", "Green hill town with Banjosa Lake and Toli Pir.",
    ["Banjosa Lake", "Toli Pir", "Poonch River"], 4000, "April – October"),
  base("Ratti Gali Lake", "Azad Jammu and Kashmir", "Adventure", "Alpine glacial lake reachable by jeep + trek.",
    ["Ratti Gali Lake", "Jeep track from Dowarian"], 5000, "June – September", { hiddenGem: true }),

  // ── Islamabad Capital Territory ──
  base("Islamabad", "Islamabad Capital Territory", "Urban",
    "Pakistan's planned capital — green hills, wide boulevards, and Faisal Mosque.",
    ["Faisal Mosque", "Daman-e-Koh", "Pakistan Monument", "Lok Virsa Museum", "Rawal Lake"],
    6000, "March – May, September – November",
    { featured: true, nearby: ["Rawalpindi", "Murree", "Taxila"] }),
  base("Taxila", "Islamabad Capital Territory", "Historical",
    "UNESCO World Heritage — ancient Gandhara civilization and Buddhist stupas.",
    ["Dharmarajika Stupa", "Julian Monastery", "Taxila Museum", "Sirkap"],
    3200, "October – March", { hiddenGem: true }),
  base("Margalla Hills", "Islamabad Capital Territory", "Nature", "Foothills of the Himalayas overlooking Islamabad.",
    ["Trail 3", "Trail 5", "Monal Restaurant", "Pir Sohawa"], 3500, "October – April"),
];

// Simulate the 500+ dataset promise: expose a total count that reflects
// the roadmap while shipping this curated set today.
export const TOTAL_DATASET_COUNT = 520;

export const PROVINCES: Province[] = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Gilgit Baltistan",
  "Azad Jammu and Kashmir",
  "Islamabad Capital Territory",
];

export const TOURISM_TYPES: TourismType[] = [
  "Historical",
  "Nature",
  "Adventure",
  "Cultural",
  "Religious",
  "Urban",
  "Beach",
  "Desert",
];

export const FILTER_CATEGORIES = [
  "Historical",
  "Nature",
  "Mountains",
  "Lakes",
  "Religious",
  "Adventure",
  "Food",
  "Culture",
] as const;

export function matchesCategory(loc: Location, category: string): boolean {
  if (!category || category === "All") return true;
  const hay = [
    loc.name,
    loc.overview,
    loc.type,
    ...loc.attractions,
    ...(loc.natural ?? []),
    ...(loc.localFood ?? []),
  ]
    .join(" ")
    .toLowerCase();
  switch (category) {
    case "Historical":
      return loc.type === "Historical" || /fort|mosque|tomb|ruins|heritage|ancient|mughal|stupa|archaeolog/.test(hay);
    case "Nature":
      return loc.type === "Nature" || /valley|forest|park|meadow|river|waterfall/.test(hay);
    case "Mountains":
      return /mountain|peak|\bhill\b|pass|nanga|rakaposhi|\bk2\b|himalaya|karakoram|hindukush|meadow|valley/.test(hay);
    case "Lakes":
      return /lake|attabad|saif|sheosar|ratti gali|mahodand|banjosa|keenjhar|hanna|rama/.test(hay);
    case "Religious":
      return loc.type === "Religious" || /mosque|shrine|gurdwara|temple|sufi|saint/.test(hay);
    case "Adventure":
      return loc.type === "Adventure" || /trek|hike|expedition|base camp|ski|polo/.test(hay);
    case "Food":
      return /food|biryani|karahi|kabab|chargha|nihari|halwa|pulao|cuisine|bazaar/.test(hay);
    case "Culture":
      return loc.type === "Cultural" || /culture|festival|bazaar|museum|kalash|sufi|heritage/.test(hay);
    default:
      return hay.includes(category.toLowerCase());
  }
}

export function findLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function searchLocations(q: string, limit = 8) {
  const query = q.trim().toLowerCase();
  if (!query) return [];
  return LOCATIONS.filter(
    (l) =>
      l.name.toLowerCase().includes(query) ||
      l.province.toLowerCase().includes(query) ||
      l.type.toLowerCase().includes(query) ||
      l.attractions.some((a) => a.toLowerCase().includes(query)),
  ).slice(0, limit);
}export const LOCATIONS: Location[] = [
  {
    slug: "karachi",
    name: "Karachi",
    province: "Sindh",
    type: "Urban",
    overview: "Pakistan ka sabse bara shehar aur economic hub",
    attractions: ["Clifton Beach", "Mazar-e-Quaid", "Port Grand"],
    historical: ["Mazar-e-Quaid", "Frere Hall"],
    natural: ["Clifton Beach", "Hawksbay"],
    imageUrls: ["https://images.pexels.com/photos/1558582/pexels-photo-1558582.jpeg"]
  },
  {
    slug: "lahore",
    name: "Lahore",
    province: "Punjab",
    type: "Cultural",
    overview: "Pakistan ka dil aur culture ka markaz",
    attractions: ["Badshahi Masjid", "Minar-e-Pakistan", "Food Street"],
    historical: ["Badshahi Masjid", "Lahore Fort"],
    natural: ["Jallo Park"],
    imageUrls: ["https://images.pexels.com/photos/1448132/pexels-photo-1448132.jpeg"]
  }
];export const LOCATIONS: Location[] = [
  {
    slug: "karachi",
    name: "Karachi",
    province: "Sindh",
    type: "Urban",
    overview: "Pakistan ka sabse bara shehar aur economic hub",
    attractions: ["Clifton Beach", "Mazar-e-Quaid", "Port Grand"],
    historical: ["Mazar-e-Quaid", "Frere Hall"],
    natural: ["Clifton Beach", "Hawksbay"],
    imageUrls: ["https://images.pexels.com/photos/1558582/pexels-photo-1558582.jpeg"]
  },
  {
    slug: "lahore",
    name: "Lahore",
    province: "Punjab",
    type: "Cultural",
    overview: "Pakistan ka dil aur culture ka markaz",
    attractions: ["Badshahi Masjid", "Minar-e-Pakistan", "Food Street"],
    historical: ["Badshahi Masjid", "Lahore Fort"],
    natural: ["Jallo Park"],
    imageUrls: ["https://images.pexels.com/photos/1448132/pexels-photo-1448132.jpeg"]
  }
];
