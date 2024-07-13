const Author = require('../models/Author');
const Book = require('../models/Book');

const resolvers = {
  Query: {
    authors: async () => {
      try {
        return await Author.find();
      } catch (error) {
        console.error(`Failed to fetch authors: ${error.message}`);
        throw new Error(`Failed to fetch authors: ${error.message}`);
      }
    },
    author: async (_, { id }) => {
      try {
        return await Author.findById(id);
      } catch (error) {
        console.error(`Failed to fetch author: ${error.message}`);
        throw new Error(`Failed to fetch author: ${error.message}`);
      }
    },
    books: async () => {
      try {
        return await Book.find();
      } catch (error) {
        console.error(`Failed to fetch books: ${error.message}`);
        throw new Error(`Failed to fetch books: ${error.message}`);
      }
    },
    book: async (_, { id }) => {
      try {
        return await Book.findById(id);
      } catch (error) {
        console.error(`Failed to fetch book: ${error.message}`);
        throw new Error(`Failed to fetch book: ${error.message}`);
      }
    },
  },
  Author: {
    books: async (parent) => {
      try {
        return await Book.find({ author: parent._id });
      } catch (error) {
        console.error(`Failed to fetch books by author: ${error.message}`);
        throw new Error(`Failed to fetch books by author: ${error.message}`);
      }
    },
  },
  Book: {
    author: async (parent) => {
      try {
        return await Author.findById(parent.author);
      } catch (error) {
        console.error(`Failed to fetch author of book: ${error.message}`);
        throw new Error(`Failed to fetch author of book: ${error.message}`);
      }
    },
  },
  Mutation: {
    addAuthor: async (_, args) => {
      try {
        const author = new Author(args);
        return await author.save();
      } catch (error) {
        console.error(`Failed to add author: ${error.message}`);
        throw new Error(`Failed to add author: ${error.message}`);
      }
    },
    updateAuthor: async (_, { _id, ...args }) => {
      try {
        return await Author.findByIdAndUpdate(_id, args, { new: true });
      } catch (error) {
        console.error(`Failed to update author: ${error.message}`);
        throw new Error(`Failed to update author: ${error.message}`);
      }
    },
    deleteAuthor: async (_, { id }) => {
      try {
        // Xóa tác giả
        const deletedAuthor = await Author.findOneAndDelete({ _id: id });
        if (!deletedAuthor) {
          throw new Error('Author not found');
        }
        // Xóa các sách của tác giả đã xóa
        await Book.deleteMany({ author: id });
        return deletedAuthor;
      } catch (error) {
        console.error(`Failed to delete author: ${error.message}`);
        throw new Error(`Failed to delete author: ${error.message}`);
      }
    },
    addBook: async (_, args) => {
      try {
        const book = new Book(args);
        return await book.save();
      } catch (error) {
        console.error(`Failed to add book: ${error.message}`);
        throw new Error(`Failed to add book: ${error.message}`);
      }
    },
    updateBook: async (_, { _id, ...args }) => {
      try {
        return await Book.findByIdAndUpdate(_id, args, { new: true });
      } catch (error) {
        console.error(`Failed to update book: ${error.message}`);
        throw new Error(`Failed to update book: ${error.message}`);
      }
    },
    deleteBook: async (_, { id }) => {
      try {
        const deletedBook = await Book.findOneAndDelete({ _id: id });
        if (!deletedBook) {
          throw new Error('Book not found');
        }
        return deletedBook;
      } catch (error) {
        console.error(`Failed to delete book: ${error.message}`);
        throw new Error(`Failed to delete book: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
