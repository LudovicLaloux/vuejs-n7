const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// ---------------- POSTS SERVICE --------------------- 
const todos = {};

app.get('/todo', (req, res) => {
  res.send(todos);
});

app.post('/todo', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  todos[id] = {
    id,
    title,
  };
  res.status(200).send(todos[id]);
});

app.get('/todo/:id', (req, res) => {
  res.send(todos[req.params.id] || []);
});

app.listen(4001, () => {
  console.log('App listening on http://localhost:4001');
});
