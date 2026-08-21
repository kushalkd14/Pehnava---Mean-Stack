export interface BusinessConfig {
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  city: string;
  state: string;
  country: string;
  fullAddress: string;
  addressLines: string[];
  landmarks: string[];
  googleMapsUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  whatsappNumber: string;
  whatsappDisplayNumber: string;
  storeTimings: string;
  workingDays: string;
}

export interface Collection {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  highlightCount?: string;
  accentColor?: string;
}

export interface Look {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  image: string;
  description: string;
  details: string[];
  enquiryMessage: string;
  accentColor?: string;
  badge?: string;
  fabricNote?: string;
}

export interface Store {
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  fullAddress: string;
  addressLines: string[];
  googleMapsUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  whatsappNumber: string;
  whatsappDisplayNumber: string;
  storeTimings: string;
  workingDays: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date?: string;
  cardVariant?: 'ivory' | 'mint' | 'cream' | 'peach' | 'rose' | 'sage';
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  aspectRatio?: 'square' | 'portrait';
}

export interface WhyPehnavaItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
