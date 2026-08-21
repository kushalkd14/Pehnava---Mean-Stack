import { BUSINESS_CONFIG } from '../config/business';

const SITE_URL = 'https://pehnava-rj01.pages.dev/';
const SOCIAL_IMAGE = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop';

export function buildSeoSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ClothingStore',
        '@id': `${SITE_URL}#store`,
        name: BUSINESS_CONFIG.name,
        url: SITE_URL,
        image: SOCIAL_IMAGE,
        description: BUSINESS_CONFIG.subheadline,
        telephone: BUSINESS_CONFIG.whatsappDisplayNumber,
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${BUSINESS_CONFIG.addressLines[0]}, ${BUSINESS_CONFIG.addressLines[1]}, ${BUSINESS_CONFIG.addressLines[2]}`,
          addressLocality: BUSINESS_CONFIG.city,
          addressRegion: BUSINESS_CONFIG.state,
          postalCode: '305007',
          addressCountry: 'IN',
        },
        areaServed: {
          '@type': 'City',
          name: BUSINESS_CONFIG.city,
        },
        sameAs: [BUSINESS_CONFIG.instagramUrl, BUSINESS_CONFIG.googleMapsUrl],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '11:00',
            closes: '21:00',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        name: BUSINESS_CONFIG.name,
        url: SITE_URL,
        publisher: { '@id': `${SITE_URL}#store` },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}#webpage`,
        url: SITE_URL,
        name: 'Pahnave Wale Bhaiya | Indian Fashion Boutique in Ajmer, Rajasthan',
        description: BUSINESS_CONFIG.subheadline,
        isPartOf: { '@id': `${SITE_URL}#website` },
        about: { '@id': `${SITE_URL}#store` },
        primaryImageOfPage: SOCIAL_IMAGE,
        inLanguage: 'en-IN',
      },
    ],
  };
}
