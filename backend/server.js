import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import FormData from './models/FormData.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI).then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('MongoDB Error:', err));

// Routes
app.post('/api/form', async (req, res) => {
  try {
    const form = new FormData(req.body);
    await form.save();
    res.status(201).json({ success: true, message: 'Form submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error submitting form' });
  }
});

// Root test
app.get('/', (req, res) => {
  res.send('Multistep Form Backend is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
