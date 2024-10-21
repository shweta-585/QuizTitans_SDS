const express = require('express')
const app = express()
const port = 4000

const connectToMongo = require('./mongodb');

connectToMongo();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
