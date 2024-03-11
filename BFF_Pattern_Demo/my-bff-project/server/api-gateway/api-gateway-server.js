const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 4000;

app.use(cors());

app.get('/products', async (req, res) => {
  try {
    const productData = await axios.get('http://localhost:3001/products');
    res.send(productData.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const userData = await axios.get('http://localhost:3002/users');
    res.send(userData.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const productData = await axios.get(`http://localhost:3001/products/${req.params.id}`);
    res.send(productData.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const userData = await axios.get(`http://localhost:3002/users/${req.params.id}`);
    res.send(userData.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});