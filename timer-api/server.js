const express = require('express');
const app = express();
const cors = require('cors'); 
const { Counter, register } = require('prom-client'); 

app.use(cors());

// Create a new Prometheus counter
const timeApiCounter = new Counter({
  name: 'time_api_requests_total',
  help: 'Total number of requests to /api/time',
});

app.get('/api/time', (req, res) => {
  timeApiCounter.inc();
  res.json({ currentTime: new Date().toISOString() });
});

// Add the /metrics endpoint
app.get('/metrics', async (req, res) => {
  try {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
  } catch (error) {
    res.status(500).end(`Error collecting metrics: ${error.message}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Time API listening on port ${PORT}`);
});
