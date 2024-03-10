const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const axios = require('axios');
const cors = require('cors');

const schema = buildSchema(`
  type Product {
    name: String
    price: String
  }

  type Query {
    getProduct(id: Int!): Product
  }
`);

const root = {
  getProduct: async ({ id }) => {
    const response = await axios.get(`http://localhost:3001/products/${id}`);
    return { name: response.data.name, price: response.data.price };
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