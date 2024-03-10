const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

const users = {
  '1': { id: '1', name: 'User 1' },
  // Add more users as needed
};

app.use(cors());

app.get('/users/:id', (req, res) => {
  const user = users[req.params.id];
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ error: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});