const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(cors());

app.get('/complex-data/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const productData = await axios.get(`http://localhost:3001/products/${id}`);
    const userData = await axios.get(`http://localhost:3002/users/${productData.data.userId}`);
    res.send({ product: productData.data, user: userData.data });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

app.get('/custom-data/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const productData = await axios.get(`http://localhost:3001/products/${id}`);
    res.send({ productName: productData.data.name, productPrice: productData.data.price });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`BFF server listening at http://localhost:${port}`);
});