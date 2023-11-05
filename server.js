const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db'); 
const app = express();
dotenv.config();

// Middleware
app.use(
  cors({
    "origin": "*",
    "methods": "GET,PUT,POST"
  })
);
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const bmiRoutes = require('./routes/bmiRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/bmi', bmiRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, process.env.HOSTNAME , () => {
  console.log(`Server is running on port ${PORT}`);
});
