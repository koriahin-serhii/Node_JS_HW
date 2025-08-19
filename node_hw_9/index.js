import express from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import users from './users.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10;

app.use(express.json());

app.post('/register', async (req, res) => {
  try {
    const { username, email, password, name } = req.body;
    if (!username || !email || !password || !name) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res
        .status(400)
        .json({ error: 'User with this email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = {
      id: users.length + 1,
      username,
      password: hashedPassword,
      email,
      name,
      role: 'user', // новые пользователи по умолчанию получают роль user
    };
    users.push(newUser);
    res.status(201).send(`User ${username} registered`);
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).send('Wrong password or email');
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).send('Wrong password or email');
  }

  if (user.mustChangePassword) {
    return res.status(403).json({
      error: 'You must change your password',
      redirect: '/change-password',
    });
  }

  res.json({
    message: 'Successful login',
    userId: user.id,
    role: user.role,
  });
});

app.post('/change-password', async (req, res) => {
  const { email, newPassword } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

  user.password = hashedPassword;
  user.mustChangePassword = false;

  res.json({ message: 'Password successfully changed. You can now log in.' });
});

// Маршрут для изменения email
app.post('/change-email', async (req, res) => {
  const { currentEmail, newEmail, password } = req.body;

  // Проверяем существование пользователя
  const user = users.find((u) => u.email === currentEmail);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Проверяем, не занят ли новый email
  const emailExists = users.find((u) => u.email === newEmail);
  if (emailExists) {
    return res.status(400).json({ error: 'This email is already in use' });
  }

  // Проверяем пароль
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  // Обновляем email
  user.email = newEmail;

  res.json({
    message: 'Email successfully changed',
    user: {
      username: user.username,
      email: user.email,
    },
  });
});

app.post('/delete-account', async (req, res) => {
  const { email, password } = req.body;

  const userIndex = users.findIndex((u) => u.email === email);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const user = users[userIndex];

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  users.splice(userIndex, 1);

  res.json({ 
    message: 'Account successfully deleted'
  });
});

// Middleware для проверки роли администратора
function checkAdminRole(req, res, next) {
  const { email } = req.body;
  const user = users.find((u) => u.email === email);

  if (!user || user.role !== 'admin') {
    return res.status(403).json({
      error: 'Access denied. Admin role required.',
    });
  }

  req.user = user;
  next();
}

app.get('/admin', checkAdminRole, (req, res) => {
  res.json({
    message: 'Welcome to admin panel',
    user: {
      username: req.user.username,
      email: req.user.email,
      role: req.user.role,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
