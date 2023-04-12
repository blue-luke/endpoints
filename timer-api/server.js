const express = require('express');
const app = express();
const cors = require('cors'); 

app.use(cors());

app.get('/api/time', (req, res) => {
  res.json({ currentTime: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Time API listening on port ${PORT}`);
});
