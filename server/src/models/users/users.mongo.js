const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

// Connects usersSchema with the "launches" collection
module.exports = mongoose.model('User', usersSchema);
