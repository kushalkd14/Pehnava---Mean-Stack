import 'dotenv/config';
import { connectDatabase } from './config/database.js';
import { Collection } from './models/collection.model.js';
import { Look } from './models/look.model.js';
import { Store } from './models/store.model.js';

const photo = (id: string) => `https://images.unsplash.com/photo-${id}?q=75&w=750&auto=format&fit=crop`;

const rows = [
  ['look-1', 'Everyday Edit', 'Daily Contemporary', 'women', '1610030469983-98e550d6193c', 'A relaxed-fit ensemble blending understated comfort with refined modern aesthetics.', 'Breathable Modal & Linen Blend'],
  ['look-2', 'Festive Edit', 'Festive Occasion', 'occasion', '1583391733956-3750e0ff4e8b', 'Vibrant festive warmth with expressive motifs for gatherings and ceremonies.', 'Pure Chanderi with Zari Detailing'],
  ['look-3', 'Contemporary Classic', 'Modern Fusion', 'women', '1572804013309-59a88b7e92f1', 'Clean contemporary lines with traditional Indian sensibilities.', 'Soft Silk Crepe & Organza'],
  ['look-4', 'Statement Look', 'Occasion Highlight', 'occasion', '1566737236500-c8ac43014a67', 'A standout silhouette for memorable evenings and wedding receptions.', 'Georgette with Delicate Gold Embroidery'],
  ['look-5', 'Modern Ethnic', 'Heritage Craft', 'ethnic', '1617627143750-d86bc21e42bb', 'Timeless Rajasthani aesthetics refined for a contemporary look.', 'Hand-block Inspired Cotton Silk'],
  ['look-6', 'Occasion Edit', 'Celebration Wear', 'occasion', '1518049362265-d5b2a6467637', 'Soft pastel hues and tasteful accents for festive occasions.', 'Fine Tussar Silk with Resham Embroidery'],
  ['look-7', 'Pastel Grace', 'Day Occasion', 'new-arrivals', '1529139574466-a303027c1d8b', 'Soft hues for daytime festivities and family gatherings.', 'Pastel Chiffon with Mirror Work Trim'],
  ['look-8', 'Celebration Ensemble', 'Men & Occasion', 'men', '1507679799987-c73779587ccf', 'Sharp menswear tailoring with clean collar lines and festive styling.', 'Raw Silk & Structured Jacquard'],
] as const;

const looks = rows.map(([id, title, category, categorySlug, imageId, description, fabricNote]) => ({
  id,
  title,
  category,
  categorySlug,
  image: photo(imageId),
  description,
  details: ['Curated boutique styling', 'Comfortable tailored silhouette', 'Available to explore in store'],
  enquiryMessage: `Hello Pahnave Wale Bhaiya, I am interested in ${title}. Could you please share more details?`,
  fabricNote,
}));

const collections = [
  ['women', 'Women', 'Contemporary Silhouettes & Graceful Drapes', '1610030469983-98e550d6193c'],
  ['men', 'Men', 'Refined Classics & Structured Fits', '1507679799987-c73779587ccf'],
  ['ethnic-wear', 'Ethnic Wear', 'Timeless Heritage & Festive Silhouettes', '1583391733956-3750e0ff4e8b'],
  ['occasion-wear', 'Occasion Wear', 'Celebration Ensembles & Festive Glamour', '1566737236500-c8ac43014a67'],
  ['new-arrivals', 'New Arrivals', 'Fresh In-Store Arrivals this Season', '1515886657613-9f3515b0c78f'],
].map(([id, name, subtitle, imageId]) => ({
  id,
  name,
  subtitle,
  description: subtitle,
  image: photo(imageId),
  tag: name,
}));

const store = {
  name: 'Pahnave Wale Bhaiya',
  tagline: 'Style That Feels Like You.',
  headline: 'Style That Feels Like You.',
  subheadline: 'Discover contemporary fashion for every occasion at Pahnave Wale Bhaiya, Ajmer.',
  fullAddress: 'Front of Holy Family Hospital, Mayo Link Road, near 9 No. Petrol Pump, Nagra, Ajmer, Rajasthan 305007, India',
  addressLines: [
    'Front of Holy Family Hospital',
    'Mayo Link Road',
    'Near 9 No. Petrol Pump',
    'Nagra, Ajmer, Rajasthan 305007',
  ],
  googleMapsUrl: 'https://maps.app.goo.gl/1boS74EE8uDHqX3PA',
  instagramUrl: 'https://www.instagram.com/pehnavarj01/',
  instagramHandle: '@pehnavarj01',
  whatsappNumber: '918005785709',
  whatsappDisplayNumber: '+91 80057 85709',
  storeTimings: '11:00 AM – 9:00 PM',
  workingDays: 'Open All 7 Days',
};

async function seed() {
  try {
    const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/pehnava-rj01';
    await connectDatabase(mongoUri);

    await Promise.all(looks.map((item) => Look.updateOne({ id: item.id }, item, { upsert: true })));
    await Promise.all(collections.map((item) => Collection.updateOne({ id: item.id }, item, { upsert: true })));
    await Store.updateOne({}, store, { upsert: true });

    console.info('Successfully seeded store info, 5 collections, and 8 lookbook entries into MongoDB.');
    process.exit(0);
  } catch (error) {
    console.error('Failed to seed MongoDB:', error);
    process.exit(1);
  }
}

seed();
