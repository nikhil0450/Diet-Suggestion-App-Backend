const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to Database`);
  } catch (error) {
    console.error(`Error connecting to Database`);
    process.exit(1);
  }
};

module.exports = connectDB;
