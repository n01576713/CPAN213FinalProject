const express = require('express');
const app = express();
const PORT = 3000;

const games = require('./games.json');

app.get('/api/games', (req, res) => {
  res.json(games);
});

app.listen(PORT, () => {
  console.log(`Local server is running on port ${PORT}`);
});
