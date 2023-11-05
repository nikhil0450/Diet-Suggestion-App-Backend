const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Route to register a new user
router.post('/register', AuthController.registerUser);

// Route to log in a user
router.post('/login', AuthController.loginUser);

module.exports = router;
