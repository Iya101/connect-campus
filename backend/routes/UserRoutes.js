const express = require('express');
const bcryptjs = require('bcryptjs');
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const User = require('../models/User');
const UserProfile = require('../models/UserProfile');
const router = express.Router();
const auth = require('../middleWare/Auth');


// Register User
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user
  user = new User({
      username,
      email,
      password: hashedPassword
  });
  await user.save();
  res.status(201).send('User registered');
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server error');
}
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
      // Validate user
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // Generate JWT
      const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: 3600 });
      res.json({
          token,
          user: {
              id: user._id,
              username: user.username,
              email: user.email
          }
      });
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
});

userRouter.post('/tokenIsValid', async (req, res) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.json(false);
    const verified = jwt.verify(tokenParts[1], process.env.JWT_SECRET);
    if (!user) return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
  
module.exports = router;

// PUT route to update a user's username
router.put('/update-username', async (req, res) => {
  const { userId, newUsername } = req.body;

  try {
    // Find the user profile and update it
    const updatedProfile = await UserProfile.findOneAndUpdate(
      { userId: userId }, // filter by userId
      { username: newUsername }, // fields to update
      { new: true } // option to return the updated document
    );

    if (!updatedProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    res.status(200).json({ message: 'Username updated successfully', updatedProfile });
  } catch (error) {
    console.error('Failed to update username:', error);
    res.status(500).json({ message: 'Error updating username', error });
  }
});

// Register User and create a profile
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    // Optionally create a user profile at the same time
    const userProfile = new UserProfile({
      userId: user._id, // Assuming _id is used as the user ID in MongoDB
      username: user.username,
      email: user.email
    });
    await userProfile.save();

    res.status(201).send("User registered successfully with profile.");
  } catch (error) {
    res.status(400).send(error);
  }
});

// Create or update a user profile
router.post('/profile', async (req, res) => {
  const { userId, username, email } = req.body;
  try {
    let profile = await UserProfile.findOneAndUpdate({ userId }, { username, email }, { new: true, upsert: true });
    if (!profile) {
      profile = new UserProfile({ userId, username, email });
      await profile.save();
    }
    res.status(201).json({ message: 'Profile created/updated successfully', profile });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create/update profile', error });
  }
});

module.exports = router;

