import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { connectDatabase } from './config/database.js';
import { errorHandler } from './middleware/error-handler.js';
import { catalogRouter } from './routes/catalog.routes.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL ?? 'http://localhost:4200' }));
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'pehnava-rj01-api' }));
app.use('/api', catalogRouter);
app.use(errorHandler);

const port = Number(process.env.PORT ?? 5000);
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/pehnava-rj01';

connectDatabase(mongoUri)
  .then(() => {
    app.listen(port, () => console.info(`Pehnava RJ01 API listening on port ${port}`));
  })
  .catch((error) => {
    console.warn(`MongoDB not connected (${error.message}). Starting server in fallback mode on port ${port}...`);
    app.listen(port, () => console.info(`Pehnava RJ01 API listening on port ${port} (MongoDB offline)`));
  });
