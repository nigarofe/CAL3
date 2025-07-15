import { Request, Response } from 'express';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeDatabase } from './db.js';
import createPostRoutes from './routes_post.js';
import createGetRoutes from './routes_get.js';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const db = initializeDatabase();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../compiled')));
app.use(express.static(path.join(__dirname, '../src')));


const postRoutes = createPostRoutes(db);
app.use('/api', postRoutes);

const getRoutes = createGetRoutes(db);
app.use('/api', getRoutes);


app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});