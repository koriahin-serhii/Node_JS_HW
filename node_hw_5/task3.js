import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3003;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.method === 'PUT') {
    res.statusCode = 200;
    res.end('PUT request received');
  } else if (req.method === 'DELETE') {
    res.statusCode = 200;
    res.end('DELETE request received');
  } else {
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
