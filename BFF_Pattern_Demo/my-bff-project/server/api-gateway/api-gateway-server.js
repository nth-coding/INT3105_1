const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 4000;

app.use(cors());

app.get('/product/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const productData = await axios.get(`http://localhost:3001/products/${id}`);
    res.send(productData.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

app.get('/user/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await axios.get(`http://localhost:3002/users/${id}`);
    res.send(userData.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});