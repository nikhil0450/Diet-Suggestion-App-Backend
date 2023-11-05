const DietPlan = require('../models/DietPlan');

const calculateBMIAndGetDietPlan = (req, res) => {
  try {
    const { height, weight } = req.body;

    
    if (!height || !weight) {
      return res.status(400).json({ message: 'Please provide both height and weight' });
    }

    
    const heightInMeters = height / 100; 
    const bmi = weight / (heightInMeters * heightInMeters);

    DietPlan.findOne({ minBMI: { $lte: bmi }, maxBMI: { $gte: bmi } })
      .then((dietPlan) => {
        if (dietPlan) {
          res.status(200).json({ bmi, dietPlan });
        } else {
          res.status(404).json({ message: 'No matching diet plan found' });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: 'Server error' });
      });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { calculateBMIAndGetDietPlan };
