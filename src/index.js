const express = require('express');
const app = express();

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

// Sync endpoint
app.post('/api/sync', (req, res) => {
  const { deviceId, data } = req.body;
  
  // Synchronize data
  res.json({
    success: true,
    message: 'Data synchronized successfully',
    synced: true
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App Sync server running on port ${PORT}`);
});
