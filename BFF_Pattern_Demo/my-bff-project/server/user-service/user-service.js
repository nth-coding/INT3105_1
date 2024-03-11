const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

const users = require('../data/users.json');
app.use(cors());

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
  const user = users[req.params.id - 1];
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ error: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});