// Create web server

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Run the server with the following command
// node comments.js

// Open your browser and go to http://localhost:3000
// You should see 'Hello World'