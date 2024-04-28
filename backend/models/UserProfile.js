const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Assuming you have a User model for authentication
    required: true,
    unique: true  // Ensures one profile per user
  },
  username: {
    type: String,
    required: true
  }
});

// Middleware to handle `updatedAt`
userProfileSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
