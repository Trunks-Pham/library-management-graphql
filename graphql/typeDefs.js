const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Author {
    _id: ID!
    name: String!
    age: Int
    nationality: String
    books: [Book]  # Changed to array of Book type
    biography: String
    website: String
    email: String
    phone: String
    awards: String
    socialMediaHandles: SocialMediaHandles
  }

  type SocialMediaHandles {
    twitter: String
    facebook: String
    instagram: String
  }

  type Book {
    _id: ID!
    title: String!
    genre: String
    pages: Int
    publishedDate: String
    author: Author  # Changed to single Author type
    summary: String
    language: String
    ISBN: String
    publisher: String
    reviews: [Review]
  }

  type Review {
    reviewer: String
    content: String
    rating: Int
  }

  type Query {
    authors: [Author]  # Changed to array of Author type
    author(id: ID!): Author
    books: [Book]  # Changed to array of Book type
    book(id: ID!): Book
  }

  type Mutation {
    addAuthor(
      name: String!,
      age: Int,
      nationality: String,
      biography: String,
      website: String,
      email: String,
      phone: String,
      awards: String,
      socialMediaHandles: SocialMediaInput
    ): Author

    updateAuthor(
      _id: ID!,
      name: String,
      age: Int,
      nationality: String,
      biography: String,
      website: String,
      email: String,
      phone: String,
      awards: String,
      socialMediaHandles: SocialMediaInput
    ): Author

    deleteAuthor(id: ID!): Author

    addBook(
      title: String!,
      genre: String,
      pages: Int,
      publishedDate: String,
      author: ID,
      summary: String,
      language: String,
      ISBN: String,
      publisher: String,
      reviews: [ReviewInput]
    ): Book

    updateBook(
      _id: ID!,
      title: String,
      genre: String,
      pages: Int,
      publishedDate: String,
      author: ID,
      summary: String,
      language: String,
      ISBN: String,
      publisher: String,
      reviews: [ReviewInput]
    ): Book

    deleteBook(id: ID!): Book
  }

  input SocialMediaInput {
    twitter: String
    facebook: String
    instagram: String
  }

  input ReviewInput {
    reviewer: String
    content: String
    rating: Int
  }
`;

module.exports = typeDefs;
