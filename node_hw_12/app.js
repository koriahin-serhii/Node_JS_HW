import express from 'express';
import { connectToDatabase, getDB } from './db/index.js';
import { ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

// CRUD for products
app.post('/products', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    if (!name || price === undefined || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const db = getDB();
    const result = await db
      .collection('products')
      .insertOne({ name, price, description });
    res.status(201).json({ _id: result.insertedId, name, price, description });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/products', async (req, res) => {
  try {
    const db = getDB();
    const products = await db.collection('products').find().toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const db = getDB();
    const product = await db
      .collection('products')
      .findOne({ _id: new ObjectId(req.params.id) });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/products/:id', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const update = {};
    if (name !== undefined) update.name = name;
    if (price !== undefined) update.price = price;
    if (description !== undefined) update.description = description;
    const db = getDB();
    const result = await db
      .collection('products')
      .findOneAndUpdate(
        { _id: new ObjectId(req.params.id) },
        { $set: update },
        { returnDocument: 'after' }
      );
    if (!result.value)
      return res.status(404).json({ error: 'Product not found' });
    res.json(result.value);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/products/:id', async (req, res) => {
  try {
    const db = getDB();
    const result = await db
      .collection('products')
      .deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0)
      return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

connectToDatabase()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port: http://localhost:${PORT}`);
    })
  )
  .catch((error) => {
    console.error('Error starting server:', error);
  });
