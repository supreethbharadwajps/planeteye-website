export interface Project {
  slug: string;
  name: string;
  status: string;
  hero: string;
  gallery: string[];
  tagline: string;
  locationBrief: string;
  distance: string;
  plotSizes: string;
  pricePositioning: string;
  description: string;
  features: string[];
  landmarks: { category: string; items: string[] }[];
  amenities: string[];
  faqs: { q: string; a: string }[];
  mapEmbed?: string;
  loanBlurb: string;
}

const BASE = 'https://www.planeteye.in';

export const projects: Project[] = [
  {
    slug: 'forest-view',
    name: 'Forest View',
    status: 'Phase 1 Sold Out — Phase 2 Now Open',
    hero: `${BASE}/imgs/1_forest_new.jpg`, // or use banner_forest_new.jpg if more suitable
    gallery: [
      `${BASE}/img/PFV_18_gal.jpg`,
      `${BASE}/img/FV%20_%20Gal_new.jpg`, // encoded space
      `${BASE}/img/PFV_12_gal.jpg`,
      `${BASE}/img/PFV_21_gal.jpg`,
      `${BASE}/img/PFV_19_gal.jpg`,
      `${BASE}/img/fv_new_latest.jpg`,
      `${BASE}/img/PFV_17_gal.jpg`,
      `${BASE}/img/PFV_16_gal.jpg`,
      `${BASE}/img/PFV_14_gal.jpg`,
      `${BASE}/img/PFV_13_Gal.jpg`,
      `${BASE}/imgs/2_forest_new.jpg`,
    ],
    tagline: 'An Investment, A Farming Option and a Weekend Home.',
    locationBrief: 'Off Harohalli, Bengaluru',
    distance: '25 min from NICE Road/Kanakapura Road junction',
    plotSizes: 'Quarter acre (10,890 sq ft) and larger',
    pricePositioning: 'Priced ~50% of comparable site value in the region',
    description: 'Forest View is a hilltop managed farmland surrounded by hills and greenery. Phase 1 sold out; Phase 2 now open. Easy access to Electronic City, Mysore Road, Tumkur Road.',
    features: [
      'Hilltop location with panoramic views',
      'Surrounded by hills & dense greenery',
      'Fertile soil, rich groundwater + lake on property',
      'Upcoming Dabaspet–Hosur road proximity',
      'Easy access to Electronic City, Mysore Road, Tumkur Road',
      'Easy payment options available',
      'Immediate construction possibility',
    ],
    landmarks: [
      { category: 'Education', items: ['Anand Sagar Medical College', 'Dayananda Sagar University', 'Dayananda Sagar College of Engineering', 'Jain University', 'APS College of Engineering', 'Jyothi College of Engineering'] },
      { category: 'Industrial', items: ['Harohalli Industrial Area', 'Electronic City', 'Bidadi Industrial Area', 'Jigani Industrial Area'] },
      { category: 'Spiritual', items: ['Art of Living', 'Anand Sagar Medical College area'] },
      { category: 'Tourism', items: ['Sangama & Mekedatu', 'Thottikallu Falls', 'Gaganachukki', 'Bara Chukki'] },
    ],
    amenities: [
      'Gated community with 24/7 security',
      'Road connectivity to each plot',
      'Water connectivity',
      'Yoga center',
      'Plantation maintenance up to 6 months',
      'Up to 60 mixed plants per quarter acre',
      'Natural & man-made lakes',
    ],
    faqs: [
      { q: 'Is Forest View Phase 1 sold out?', a: 'Yes, Phase 1 is completely sold out. Phase 2 is now open with fresh plots and early-bird pricing.' },
      { q: 'How far is Forest View from Bangalore?', a: 'Forest View is approximately 1.5 hours from central Bangalore, and about 25 minutes from NICE Road–Kanakapura Road junction.' },
    ],
    loanBlurb: 'We have arranged easy EMI and loan options to help you acquire your dream farm at Forest View.',
  },
  {
    slug: 'sandal-valley',
    name: 'Sandal Valley',
    status: 'Now Open',
    hero: `${BASE}/img/sandal_1.jpg`,
    gallery: [
      `${BASE}/img/sandal_1.jpg`,
      `${BASE}/img/sandal_new1.jpg`,
      `${BASE}/img/sandal_3.jpg`,
      `${BASE}/img/sandal_4.jpg`,
      `${BASE}/img/sandal_new2.jpeg`,
      `${BASE}/img/sandal_8.jpg`,
      `${BASE}/img/sandal_new3.jpeg`,
      `${BASE}/img/sandal_10.jpg`,
      `${BASE}/img/sandal_11.jpg`,
    ],
    tagline: 'Premium Sandalwood Farmland Investment near Kollegala',
    locationBrief: 'Near Kollegala, Karnataka',
    distance: '~2.5 hr drive from Bangalore (reducing to ~90 min once Daatu bridge completes)',
    plotSizes: 'Quarter acre and custom sizes',
    pricePositioning: 'Each sandal tree valued at ₹3–5 lakh at maturity',
    description: 'Sandal Valley is a 200-acre gated community featuring sandalwood trees that will be ready to reap in a few years. Natural & man-made lakes, Cauvery canal inside, tar road access.',
    features: [
      '200-acre gated community',
      '5 lakes (natural & man-made)',
      'Fertile soil & Cauvery canal inside project',
      'Sandal trees mature in ~15 years, already planted',
      'Tar road access',
      'Close to both Bangalore and Mysore',
    ],
    landmarks: [
      { category: 'Nearby Attractions', items: ['Sangama & Mekedatu', 'Bara Chukki', 'Gaganachukki Falls', 'B R Hills', 'MM Hills', 'Mysore Palace', 'Talakadu', 'Chamundi Hills'] },
    ],
    amenities: [
      'Gated community with 24/7 security',
      'Road connectivity',
      'Water connectivity',
      'Yoga center',
      'Plantation maintenance up to 6 months',
      'Up to 60 mixed plants per quarter acre',
      'Natural & man-made lakes',
    ],
    faqs: [
      { q: 'What is the return on investment for sandalwood plots?', a: 'Sandalwood is highly valuable; each tree can fetch ₹3–5 lakh based on stem size after maturity (~15 years). Plus land appreciation.' },
    ],
    loanBlurb: 'EMI and loan assistance available for Sandal Valley plots.',
  },
  {
    slug: 'bheemeshwari',
    name: 'Bheemeshwari Farm Plots',
    status: 'Now Open',
    hero: `${BASE}/img/PHL_IMG-30.webp`,
    gallery: [
      `${BASE}/img/PHL_IMG-4.webp`,
      `${BASE}/img/PHL_IMG-30.webp`,
      `${BASE}/img/PHL_IMG-37.webp`,
      `${BASE}/img/PHL_IMG-2.webp`,
      `${BASE}/img/bhim_466.jpg`,
      `${BASE}/img/bhim_gal2.jpeg`,
    ],
    tagline: 'Farm Plots near Bheemeshwari Fishing Camp, Cauvery Banks',
    locationBrief: 'Near Bheemeshwari, Kanakapura',
    distance: '~90 min drive from Bengaluru, equidistant from Mysore & Bangalore',
    plotSizes: 'Quarter acre (10,890 sq ft) and up',
    pricePositioning: 'Competitive pricing with strong appreciation potential',
    description: 'Located on a plateau amid green mountains near the famous Bheemeshwari fishing camp. Rich groundwater, fertile soil, gated community with CCTV, 20-ft internal roads.',
    features: [
      'Plateau location amid green mountains',
      'Fishing camp 5 km away',
      'Gated community with CCTV',
      'Road & water connectivity to every plot',
      '20-ft internal roads',
      'Rich groundwater & fertile soil',
    ],
    landmarks: [
      { category: 'Points of Interest', items: ['Sangama & Mekedatu', 'Bara Chukki', 'Gaganachukki Falls', 'B R Hills', 'MM Hills', 'Mysore Palace', 'Talakadu', 'Road Junction'] },
    ],
    amenities: [
      'Gated community, 24/7 security with CCTV',
      'Road connectivity',
      'Water connectivity',
      'Yoga center',
      'Plantation maintenance up to 6 months',
      '60 plants per quarter acre',
    ],
    faqs: [
      { q: 'How far is Bheemeshwari from Bangalore?', a: 'Around 90 minutes drive via Kanakapura Road, same distance from Mysore.' },
    ],
    loanBlurb: 'Easy EMI and loan options available.',
  },
  {
    slug: 'bliss',
    name: 'Planet Eye Bliss',
    status: 'Launching Soon @ Bidadi',
    hero: `${BASE}/img/Bliss_new.jpg`,
    gallery: [`${BASE}/img/Bliss_new.jpg`],
    tagline: 'Coming Soon – Premium Farm Plots at Bidadi',
    locationBrief: 'Bidadi, Bangalore',
    distance: 'Details coming soon',
    plotSizes: 'TBD',
    pricePositioning: 'Pre-launch pricing available',
    description: 'A new managed farmland project launching soon near Bidadi. Register your interest for early access and exclusive pre‑launch offers.',
    features: ['Details coming soon'],
    landmarks: [],
    amenities: [],
    faqs: [],
    loanBlurb: 'Loan assistance will be available upon launch.',
  },
];