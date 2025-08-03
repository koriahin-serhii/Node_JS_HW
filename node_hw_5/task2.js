import http from 'http';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3003;

const server = http.createServer((req, res) => {
  try {
    throw new Error('Simulated error for testing');
  } catch (error) {
    const errorMessage = `${new Date().toISOString()} - ${error.message}\n`;
    fs.appendFile('error.log', errorMessage, (err) => {
      if (err) {
        console.error('Failed to write to log file:', err);
      }
    });
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
