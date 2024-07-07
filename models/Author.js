const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  nationality: String,
  books: [String], // Array of book IDs
  biography: String,
  website: String,
  email: String,
  phone: String,
  awards: [String],
  socialMediaHandles: {
    twitter: String,
    facebook: String,
    instagram: String,
  }
});

module.exports = mongoose.model('Author', authorSchema);
