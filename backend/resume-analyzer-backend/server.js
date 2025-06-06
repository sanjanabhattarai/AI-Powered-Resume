const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');  // Import userRoutes

dotenv.config();

const app = express();

app.use(express.json());
connectDB();

app.use('/api', authRoutes);
app.use('/api', userRoutes);  // Use userRoutes under /api path

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
