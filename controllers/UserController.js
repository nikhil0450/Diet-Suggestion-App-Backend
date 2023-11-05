const User = require('../models/User');

const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId; 

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userWithoutPassword = { ...user._doc };
    delete userWithoutPassword.password;

    res.status(200).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updateUserProfile = async (req, res) => {
  try {

    const { username, email, avatar, bio } = req.body;

    const updatedUserData = {
      username,
      email,
      avatar,
      bio,
    };

    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getUserById, updateUserProfile };
