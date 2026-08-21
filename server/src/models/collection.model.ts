import { Schema, model } from 'mongoose';
const collectionSchema = new Schema({ id: { type: String, required: true, unique: true }, name: String, subtitle: String, description: String, image: String, tag: String, highlightCount: String, accentColor: String }, { timestamps: true, versionKey: false });
export const Collection = model('Collection', collectionSchema);
