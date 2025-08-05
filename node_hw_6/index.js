import express from 'express';
import dotenv from 'dotenv';
import db from './db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

// GET
app.get('/', (req, res) => {
  try {
    res.send('Hello, World!');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// GET /products
app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching data');
    }
    res.json(results);
  });
});

// POST /products
app.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).send('Name and price are required');
  }

  db.query(
    'INSERT INTO products (name, price) VALUES (?, ?)',
    [name, price],
    (err, result) => {
      if (err) {
        return res.status(500).send('Error adding product');
      }
      res.send('Product added successfully');
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
