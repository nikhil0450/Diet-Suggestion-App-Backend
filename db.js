const mongoose = require('mongoose');

const connectDB = async () => {
  console.log(process.env.NODE_ENVIRONMENT);
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to Database`);
  } catch (error) {
    console.error(`Error connecting to Database`);
    process.exit(1);
  }
};

module.exports = connectDB;
