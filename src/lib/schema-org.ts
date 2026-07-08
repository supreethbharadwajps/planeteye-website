export const OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Planet Eye Builders & Developers',
  legalName: 'Planet Eye Group',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '52/1, 935, 28th Main Rd, Putlanpalya, Jayanagara 9th Block',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560069',
    addressCountry: 'IN',
  },
  telephone: '+91 9845331133',
  email: 'planeteyeprojects@gmail.com',
  sameAs: [
    'https://www.facebook.com/planeteye',
    'https://www.instagram.com/planeteye_projects',
    'https://www.linkedin.com/company/planet-eye',
    'https://www.youtube.com/@planeteyeprojects',
  ],
  logo: 'https://planeteye.in/logo.png',
};

export const WebSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Planet Eye Builders & Developers',
  url: 'https://planeteye.in',
};

export function FAQPageSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function BreadcrumbListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function ArticleSchema(article: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { '@type': 'Organization', name: 'Planet Eye' },
    publisher: { '@type': 'Organization', name: 'Planet Eye', logo: { '@type': 'ImageObject', url: 'https://planeteye.in/logo.png' } },
  };
}