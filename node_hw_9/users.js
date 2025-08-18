// Имитация БД
const users = [
  {
    id: 1,
    username: 'user1',
    password: '$2b$10$Fj5js.okIeTULDXBSdM7LOHwH4K/j5Q1iw/nW2Ae1y.5.H1AxRz7u', // хэш для "password123"
    email: 'user1@example.com',
    name: 'User One',
    mustChangePassword: true,
    role: 'admin'
  },
  {
    id: 2,
    username: 'user2',
    password: '$2b$10$Fj5js.okIeTULDXBSdM7LOHwH4K/j5Q1iw/nW2Ae1y.5.H1AxRz7u', // хэш для "password123"
    email: 'user2@example.com',
    name: 'User Two',
    mustChangePassword: true,
    role: 'user'
  },
];

export default users;
