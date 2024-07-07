const Author = require('../models/Author');
const Book = require('../models/Book');

const resolvers = {
  Query: {
    authors: () => Author.find(),
    author: (_, { id }) => Author.findById(id),
    books: () => Book.find(),
    book: (_, { id }) => Book.findById(id),
  },
  Mutation: {
    addAuthor: (_, args) => {
      const author = new Author(args);
      return author.save();
    },
    addBook: (_, args) => {
      const book = new Book(args);
      return book.save();
    }
  }
};

module.exports = resolvers;
