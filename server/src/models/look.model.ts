import { Schema, model } from 'mongoose';
const lookSchema = new Schema({ id: { type: String, required: true, unique: true }, title: { type: String, required: true }, category: { type: String, required: true }, categorySlug: { type: String, required: true }, image: { type: String, required: true }, description: { type: String, required: true }, details: { type: [String], default: [] }, enquiryMessage: { type: String, required: true }, accentColor: String, badge: String, fabricNote: String }, { timestamps: true, versionKey: false });
export const Look = model('Look', lookSchema);
