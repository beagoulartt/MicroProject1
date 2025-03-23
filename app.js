const express = require('express');
const path = require('path');
const app = express();
const port = 3005;

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Load book data
const MINIPROJECT1 = require('./data/books.json');

app.get('/api/books', (req, res) => {
  res.json(MINIPROJECT1);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});