const express = require('express');
const bcryptjs = require('bcryptjs');
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const User = require('../models/User');
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