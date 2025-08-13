import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db.js";

import Book from "./models/book.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// CRUD routes for Book
// Get all books
app.get("/books", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// Create a new book
app.post("/books", async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const newBook = await Book.create({ title, author, year });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: "Failed to create book", details: error.message });
  }
});

// Update a book by id
app.put("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, year } = req.body;
    const [updated] = await Book.update({ title, author, year }, { where: { id } });
    if (updated) {
      const updatedBook = await Book.findByPk(id);
      res.json(updatedBook);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Failed to update book" });
  }
});

// Delete a book by id
app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: "Book deleted" });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "Failed to delete book" });
  }
});

// Проверка подключения к БД
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
})();

// Пример роута
app.get("/", (req, res) => {
  res.send("Hello World from Express + Sequelize");
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});