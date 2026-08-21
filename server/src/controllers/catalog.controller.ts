import type { Request, Response, NextFunction } from 'express';
import { Collection } from '../models/collection.model.js';
import { Look } from '../models/look.model.js';
import { Store } from '../models/store.model.js';

export const listLooks = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const looks = await Look.find().sort({ id: 1 }).lean();
    res.json(looks);
  } catch (error) {
    next(error);
  }
};

export const getLook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const look = await Look.findOne({ id: req.params.id }).lean();
    if (!look) {
      res.status(404).json({ message: 'Look not found' });
      return;
    }
    res.json(look);
  } catch (error) {
    next(error);
  }
};

export const listCollections = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const collections = await Collection.find().sort({ id: 1 }).lean();
    res.json(collections);
  } catch (error) {
    next(error);
  }
};

export const getStore = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const store = await Store.findOne().lean();
    if (!store) {
      res.status(404).json({ message: 'Store information not found. Run the seed script.' });
      return;
    }
    res.json(store);
  } catch (error) {
    next(error);
  }
};
