const express = require('express');
const { addToQueue } = require('./queue');
const { PORT } = require('./config');

const app = express();
app.use(express.json());

app.post('/task', (req, res) => {
  const { user_id } = req.body;
  if (!user_id) {
    return res.status(400).json({ error: 'user_id is required' });
  }
  
  addToQueue(user_id);
  res.status(202).json({ message: 'Task added to queue' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
