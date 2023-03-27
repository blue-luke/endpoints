const express = require('express');
const app = express();
const { register, collectDefaultMetrics } = require('prom-client');

// Collect default metrics (e.g., process and system metrics)
collectDefaultMetrics();

// Serve static files
app.use(express.static('public'));

// Metrics endpoint
app.get('/metrics', (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(register.metrics());
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
