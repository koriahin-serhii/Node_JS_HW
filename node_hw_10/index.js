import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;

let users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('adminpass', 10),
    role: 'admin',
  },
  {
    id: 2,
    username: 'user',
    email: 'user@example.com',
    password: bcrypt.hashSync('userpass', 10),
    role: 'user',
  },
];
// Middleware для проверки роли
function authorizeRole(role) {
  return (req, res, next) => {
    const user = users.find((u) => u.id === req.user.id);
    if (!user || user.role !== role) {
      return res
        .status(403)
        .json({ message: 'Access denied: insufficient rights' });
    }
    next();
  };
}

// Middleware для проверки JWT
function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
}

// Маршрут для логина
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid password' });
  }
  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );
  res.json({ token });
});

// Маршрут для обновления JWT токена
app.post('/refresh-token', authenticateJWT, (req, res) => {
  // Получаем пользователя из токена
  const user = users.find((u) => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  // Генерируем новый токен с теми же данными
  const newToken = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
  res.json({ token: newToken });
});

// Маршрут для обновления роли пользователя (только для админов)
app.put('/update-role', authenticateJWT, authorizeRole('admin'), (req, res) => {
  const { id, role } = req.body;
  if (!id || !role) {
    return res
      .status(400)
      .json({ message: 'User ID and new role are required' });
  }
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  user.role = role;
  res.json({ message: 'Role updated successfully', user });
});

// Защищённый маршрут для обновления email
app.put('/update-email', authenticateJWT, (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }
  const user = users.find((u) => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  user.email = email;
  res.json({ message: 'Email updated', user });
});

// Защищённый маршрут для удаления аккаунта
app.delete('/delete-account', authenticateJWT, (req, res) => {
  const userId = req.user.id;
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  users = users.filter((u) => u.id !== userId);
  res.json({ message: 'Account deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
