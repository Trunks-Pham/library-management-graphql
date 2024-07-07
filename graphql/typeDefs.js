const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    age: Int
    nationality: String
    books: [String]
    biography: String
    website: String
    email: String
    phone: String
    awards: [String]
    socialMediaHandles: SocialMediaHandles
  }

  type SocialMediaHandles {
    twitter: String
    facebook: String
    instagram: String
  }

  type Book {
    id: ID!
    title: String!
    genre: String
    pages: Int
    publishedDate: String
    author: String
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
    authors: [Author]
    author(id: ID!): Author
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addAuthor(
      name: String!,
      age: Int,
      nationality: String,
      books: [String],
      biography: String,
      website: String,
      email: String,
      phone: String,
      awards: [String],
      socialMediaHandles: SocialMediaInput
    ): Author

    addBook(
      title: String!,
      genre: String,
      pages: Int,
      publishedDate: String,
      author: String,
      summary: String,
      language: String,
      ISBN: String,
      publisher: String,
      reviews: [ReviewInput]
    ): Book
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
