const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const startServer = async () => {
  const app = express();

  // Kết nối đến MongoDB
  mongoose.connect('mongodb://localhost:27017/library-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  });

  // Thiết lập ApolloServer
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  // Khởi động server
  app.listen({ port: 4000 }, () =>
    console.log(`Server is running at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
