import { Router } from 'express';
import { getLook, getStore, listCollections, listLooks } from '../controllers/catalog.controller.js';

export const catalogRouter = Router();

catalogRouter.get('/products', listLooks);
catalogRouter.get('/products/:id', getLook);
catalogRouter.get('/collections', listCollections);
catalogRouter.get('/store', getStore);
