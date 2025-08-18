import express from 'express';
import dotenv from 'dotenv';
import connectToDataBase from './config/db.js';
import Publisher from './models/Publisher.js';
import Magazine from './models/Magazine.js';
import Tag from './models/Tag.js';
import Article from './models/Article.js';

dotenv.config();

const PORT = process.env.PORT || 3003;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Home page');
});

app.listen(PORT, async () => {
  try {
    await connectToDataBase();
    console.log(`Server is running on port: http://localhost:${PORT}`);
  } catch (error) {
    console.error('Error starting the server:', error);
  }
});
