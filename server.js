const express = require('express');
const app = express();
const { register, collectDefaultMetrics } = require('prom-client');

// Collect default metrics (e.g., process and system metrics)
collectDefaultMetrics();

// Serve static files
app.use(express.static('public'));

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  try {
    const metrics = await register.metrics();
    res.set('Content-Type', register.contentType);
    res.end(metrics);
  } catch (error) {
    res.status(500).end(`Error collecting metrics: ${error.message}`);
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
