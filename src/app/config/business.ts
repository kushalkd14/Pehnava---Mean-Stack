import { BusinessConfig } from '../models/catalog.models';

/** Official WhatsApp contact, stored as country-code digits for wa.me links. */
export const WHATSAPP_NUMBER = '918005785709';
export const WHATSAPP_DISPLAY_NUMBER = '+91 80057 85709';

export const WHATSAPP_MESSAGES = {
  general: 'Hello Pehnava, I would like to know more about your collection.',
  product: (productName: string) => `Hello Pehnava, I am interested in ${productName}. Could you please share more details?`,
  storeVisit: 'Hello Pehnava, I would like to know more about visiting your store.',
  availability: 'Hello Pehnava, I would like to check the availability of a product.',
  shareExperience: 'Hello Pehnava, I would like to share my experience with your store.',
};

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'Pehnava',
  tagline: 'Style That Feels Like You.',
  headline: 'Style That Feels Like You.',
  subheadline: 'Discover contemporary fashion for every occasion at Pehnava, Ajmer.',
  city: 'Ajmer',
  state: 'Rajasthan',
  country: 'India',
  fullAddress: 'Front of Holy Family Hospital, Mayo Link Road, near 9 No. Petrol Pump, Nagra, Ajmer, Rajasthan 305007, India',
  addressLines: [
    'Front of Holy Family Hospital',
    'Mayo Link Road',
    'Near 9 No. Petrol Pump',
    'Nagra, Ajmer, Rajasthan 305007',
  ],
  landmarks: [
    'Front of Holy Family Hospital',
    'Mayo Link Road',
    'Near 9 No. Petrol Pump',
    'Nagra, Ajmer',
  ],
  googleMapsUrl: 'https://maps.app.goo.gl/1boS74EE8uDHqX3PA',
  instagramUrl: 'https://www.instagram.com/pehnavarj01/',
  instagramHandle: '@pehnavarj01',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplayNumber: WHATSAPP_DISPLAY_NUMBER,
  storeTimings: '11:00 AM – 9:00 PM',
  workingDays: 'Open All 7 Days',
};

/**
 * Generates a direct WhatsApp URL with the official number and pre-filled message.
 */
export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return baseUrl;
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
