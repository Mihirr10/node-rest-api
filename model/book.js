const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publicationYear: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("book", bookSchema);
module.exports = Book;
