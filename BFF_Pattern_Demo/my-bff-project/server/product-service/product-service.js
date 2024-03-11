const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const products = require('../data/products.json');

app.use(cors());

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/products/:id', (req, res) => {
  const product = products[req.params.id - 1];
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ error: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`);
});