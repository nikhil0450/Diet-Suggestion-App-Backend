const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db'); 
const app = express();
dotenv.config(); // Load environment variables from .env file

// // Middleware
app.use(cors({ origin: '*' }));
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

const port = process.env.PORT ; // Use process.env.PORT for the port
app.listen(port, process.env.HOSTNAME, () => {
  console.log(`Server is running on port ${port}`);
});
