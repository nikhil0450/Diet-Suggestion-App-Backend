const mongoose = require('mongoose');

const dietPlanSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  minBMI: {
    type: Number,
    required: true,
  },
  maxBMI: {
    type: Number,
    required: true,
  },
  suggestedFoods: {
    type: [String], 
  },
  dailyCalorieIntake: {
    type: Number,
  }
});

const DietPlan = mongoose.model('DietPlan', dietPlanSchema);

module.exports = DietPlan;
