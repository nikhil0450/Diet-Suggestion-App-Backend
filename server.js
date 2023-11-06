const express = require('express');
// const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db'); 
const app = express();
dotenv.config(); // Load environment variables from .env file

// // Middleware
// const allowedOrigins = ['http://localhost:3000', 'https://6548ace362392e7bf49ab559--golden-madeleine-7367e5.netlify.app/home'];
// app.use(cors({ origin: allowedOrigins }));
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
