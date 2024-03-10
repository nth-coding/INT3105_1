const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const products = {
  '1': { id: '1', name: 'Product 1', price: '30.000d', userId: '1' },
  // Add more products as needed
};

app.use(cors());

app.get('/products/:id', (req, res) => {
  const product = products[req.params.id];
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ error: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`);
});