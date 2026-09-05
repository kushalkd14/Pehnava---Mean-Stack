import 'dotenv/config';
import { connectDatabase } from './config/database.js';
import { Collection } from './models/collection.model.js';
import { Look } from './models/look.model.js';
import { Store } from './models/store.model.js';

const photo = (id: string) => `https://images.unsplash.com/photo-${id}?q=75&w=750&auto=format&fit=crop`;

const rows = [
    ['look-1', 'Everyday Kurti Edit', 'Premium Kurtis', 'premium-kurtis', '1610030469983-98e550d6193c', 'A relaxed-fit ensemble blending understated comfort with refined modern aesthetics.', 'Breathable Modal & Cotton Blend'],
    ['look-2', 'Festive Chanderi Suit', 'Heavy Fancy Suits', 'heavy-fancy-suits', '1583391733956-3750e0ff4e8b', 'Vibrant festive warmth with expressive motifs for gatherings and ceremonies.', 'Pure Chanderi with Zari Detailing'],
    ['look-3', 'Contemporary Fusion Set', 'Modern Grace', 'modern-grace', '1572804013309-59a88b7e92f1', 'Clean contemporary lines with traditional Indian sensibilities.', 'Soft Silk Crepe & Organza'],
    ['look-4', 'Statement Co-Ord Set', 'Co-Ord Sets', 'coord-sets', '1566737236500-c8ac43014a67', 'A standout silhouette for memorable evenings and boutique outings.', 'Georgette with Delicate Gold Embroidery'],

    ['look-6', 'Festive Anarkali Suit', 'Festive Collection', 'festive-collection', '1518049362265-d5b2a6467637', 'Soft pastel hues and tasteful accents for festive occasions.', 'Fine Tussar Silk with Resham Embroidery'],
    ['look-7', 'Short Kurti & Bottom Wear', 'Bottom Wear', 'bottom-wear', '1529139574466-a303027c1d8b', 'Trendy urban bottom wear paired with chic short kurtis.', 'Durable Cotton Twill'],
    ['look-8', 'Oversized Printed Tee', 'Oversized T-Shirts', 'oversized-tshirts', '1507679799987-c73779587ccf', 'Relaxed oversized graphic tees for modern street style.', '100% Premium Heavyweight Cotton'],
] as const;

const looks = rows.map(([id, title, category, categorySlug, imageId, description, fabricNote]) => ({
    id,
    title,
    category,
    categorySlug,
    image: photo(imageId),
    description,
    details: ['Curated boutique styling', 'Comfortable tailored silhouette', 'Available to explore in store'],
    enquiryMessage: `Hello Pehnava, I am interested in ${title}. Could you please share more details?`,
    fabricNote,
}));

const collections = [
    ['premium-kurtis', 'Premium Kurtis', 'Hand-Crafted Designer & Anarkali Kurtis', '1610030469983-98e550d6193c'],
    ['short-kurtis', 'Short Kurtis', 'Trendy & Breathable Everyday Kurtis', '1529139574466-a303027c1d8b'],

    ['heavy-fancy-suits', 'Heavy Fancy Suits', 'Regal Zari & Embroidery Festive Outfits', '1583391733956-3750e0ff4e8b'],
    ['coord-sets', 'Co-Ord Sets', 'Modern Matching Ethnic & Fusion Sets', '1566737236500-c8ac43014a67'],
    ['bottom-wear', 'Bottom Wear', 'Chic & Comfortable Utility Trousers & Pants', '1529139574466-a303027c1d8b'],
    ['oversized-tshirts', 'Oversized T-Shirts', 'Trendy & Relaxed Streetwear Tees', '1507679799987-c73779587ccf'],
    ['festive-collection', 'Festive Collection', 'Occasion-Ready Couture & Ceremonial Wear', '1518049362265-d5b2a6467637'],
].map(([id, name, subtitle, imageId]) => ({
    id,
    name,
    subtitle,
    description: subtitle,
    image: photo(imageId),
    tag: name,
}));

const store = {
    name: 'Pehnava',
    tagline: 'Style That Feels Like You.',
    headline: 'Style That Feels Like You.',
    subheadline: 'Discover contemporary fashion for every occasion at Pehnava, Ajmer.',
    fullAddress: 'Front Of Holy Family Hospital, Mayo Link Rd, near 9no. Petrol Pump, Nagra, Ajmer, Rajasthan 305001',
    addressLines: [
        'Front Of Holy Family Hospital',
        'Mayo Link Rd, near 9no. Petrol Pump',
        'Nagra, Ajmer, Rajasthan 305001',
    ],
    googleMapsUrl: 'https://maps.app.goo.gl/MBiSXGiSDfaGrEqq7',
    instagramUrl: 'https://www.instagram.com/pehnavarj01/',
    instagramHandle: '@pehnavarj01',
    whatsappNumber: '918005785709',
    whatsappDisplayNumber: '+91 80057 85709',
    storeTimings: '10:00 AM – 9:00 PM',
    workingDays: 'Open All 7 Days',
};

async function seed() {
    try {
        const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/pehnava-rj01';
        await connectDatabase(mongoUri);

        await Promise.all(looks.map((item) => Look.updateOne({ id: item.id }, item, { upsert: true })));
        await Promise.all(collections.map((item) => Collection.updateOne({ id: item.id }, item, { upsert: true })));
        await Store.updateOne({}, store, { upsert: true });

        console.info('Successfully seeded store info, collections, and lookbook entries into MongoDB.');
        process.exit(0);
    } catch (error) {
        console.error('Failed to seed MongoDB:', error);
        process.exit(1);
    }
}

seed();
