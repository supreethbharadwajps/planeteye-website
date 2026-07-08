export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'is-farmland-near-bangalore-a-good-investment',
    title: 'Is Farmland Near Bangalore a Good Investment?',
    excerpt: 'Explore ROI, capital appreciation, and tax benefits of farmland near Bangalore.',
    date: '2026-01-15',
    content: `<p>[Full article – 800+ words]... Farmland near Bangalore offers dual returns: capital gains and agricultural income. With rising demand for weekend homes and organic farming, managed farmland projects like those from Planet Eye provide a secure, appreciating asset...</p>`,
  },
  // ... 6 more slugs with full articles
];