const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  genre: String,
  pages: Number,
  publishedDate: Date,
  author: String, // Author ID
  summary: String,
  language: String,
  ISBN: String,
  publisher: String,
  reviews: [{
    reviewer: String,
    content: String,
    rating: Number
  }]
});

module.exports = mongoose.model('Book', bookSchema);
