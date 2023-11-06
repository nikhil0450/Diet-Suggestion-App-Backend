const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db'); 
const app = express();
dotenv.config(); // Load environment variables from .env file

// Middleware
app.use(cors());
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

const PORT = process.env.PORT || 5000; // Use process.env.PORT for the port
app.listen(PORT, process.env.HOSTNAME, () => {
  console.log(`Server is running on port ${PORT}`);
});
