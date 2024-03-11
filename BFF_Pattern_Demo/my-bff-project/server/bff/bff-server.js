const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(cors());

app.get('/users-and-products', async (req, res) => {
  try {
    const productData = await axios.get('http://localhost:4000/products');
    const userData = await axios.get('http://localhost:4000/users');
    res.send({ products: productData.data, users: userData.data });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

app.get('/users-and-products/:id', async (req, res) => {
  try {
    const productData = await axios.get(`http://localhost:3001/products/${req.params.id}`);
    const userData = await axios.get(`http://localhost:3002/users/${req.params.id}`);
    
    // Remove the id field from product and user data
    const { id, ...productWithoutId } = productData.data;
    const { id: userId, ...userWithoutId } = userData.data;

    res.send({ product: productWithoutId, user: userWithoutId });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`BFF server listening at http://localhost:${port}`);
});