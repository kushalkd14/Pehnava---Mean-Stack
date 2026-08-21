export interface OfferConfig {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  badge: string;
  startDate: string;
  endDate: string;
  theme: 'festive-gold' | 'emerald-luxury' | 'royal-rose';
  image: string;
  ctaText: string;
  whatsappMessage: string;
  validTillText: string;
  features: string[];
}

export const CURRENT_SEASONAL_OFFER: OfferConfig = {
  id: 'festive-rakhi-wedding-2026',
  title: 'Rakshabandhan & Festive Couture Launch',
  subtitle: 'Handcrafted Gota Patti Shararas, Silk Anarkalis & Premium Co-Ords',
  discount: 'FLAT 20% - 40% OFF',
  badge: 'Limited Festive Drop',
  startDate: '2026-08-01T00:00:00Z',
  endDate: '2026-08-31T23:59:59Z',
  theme: 'festive-gold',
  image: 'assets/collections/festive-collection.webp',
  ctaText: 'Claim Festive Offer on WhatsApp',
  whatsappMessage: 'Hello Pehnava RJ01, I want to claim the Rakshabandhan & Festive Couture offer!',
  validTillText: 'Valid till 31st August 2026',
  features: [
    'Authentic Rajasthani Handwork',
    'Free Custom Size Alterations in Store',
    'Direct In-Store Trial Room Access',
    'Express Dispatch & WhatsApp Ordering',
  ],
};
