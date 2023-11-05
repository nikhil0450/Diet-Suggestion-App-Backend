const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const verifyToken = require('../controllers/AuthMiddleware');

// Route to get user information by user ID
router.get('/:userId', UserController.getUserById);

// Route to update user profile
router.put('/:userId', UserController.updateUserProfile);

module.exports = router;
