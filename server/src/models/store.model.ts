import { Schema, model } from 'mongoose';
const storeSchema = new Schema({ name: String, tagline: String, headline: String, subheadline: String, fullAddress: String, addressLines: [String], googleMapsUrl: String, instagramUrl: String, instagramHandle: String, whatsappNumber: String, whatsappDisplayNumber: String, storeTimings: String, workingDays: String }, { timestamps: true, versionKey: false });
export const Store = model('Store', storeSchema);
