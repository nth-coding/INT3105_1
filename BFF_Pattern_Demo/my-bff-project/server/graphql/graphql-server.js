const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const axios = require('axios');
const cors = require('cors');
const DataService = require('./data-service');

const schema = buildSchema(`
  type Product {
    name: String
    price: Float
  }

  type User {
    name: String
    email: String
  }

  type Query {
    getProduct(id: Int!): Product
    getUser(id: Int!): User
  }
`);

const productService = new DataService('http://localhost:3001/products');
const userService = new DataService('http://localhost:3002/users');

const root = {
  getProduct: async ({ id }) => {
    const data = await productService.getData(id);
    return { name: data.name, price: data.price };
  },
  getUser: async ({ id }) => {
    const data = await userService.getData(id);
    return { name: data.name, email: data.email };
  },
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(5000, () => console.log('GraphQL Server running on http://localhost:5000/graphql'));