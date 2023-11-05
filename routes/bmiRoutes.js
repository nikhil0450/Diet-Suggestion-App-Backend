const express = require('express');
const router = express.Router();
const BMIController = require('../controllers/BMIController');


// Route to calculate BMI
router.post('/calculate', BMIController.calculateBMIAndGetDietPlan);

module.exports = router;
