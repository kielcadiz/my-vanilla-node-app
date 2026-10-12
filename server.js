import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.get('/api/test', async (req, res) => {
  try {
    res.json({
      test: "rainy"
    });

  } catch (error) {
    console.error('Test API Error:', error.message);
    res.status(500).json({ error: `Failed to fetch test data from upstream service. ${error}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});