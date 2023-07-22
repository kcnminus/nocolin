const express = require('express');
const app = express();
const port = 5000;

const blogPosts = [
  {id: 1, title: "First Blog Post", content: 'Lorem ipsum such and such'},
  {id: 2, title: "Second Blog Post", content: 'Lorem ipsum such and more'},
]

app.get('/api/posts', (req, res) => {
  res.json(blogPosts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});