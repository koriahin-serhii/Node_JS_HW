import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  // Handle chat messages
  socket.on('chat message', (msg) => {
    console.log('Message received: ' + msg);
    // Broadcast the message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
