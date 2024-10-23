const express = require('express')
const app = express()
const port = 4000

const cors = require('cors');
const connectToMongo = require('./mongodb');

connectToMongo();

app.use(express.json());
app.use(cors());

// Available Routes
app.use('/auth', require('./routes/auth'));
app.use('/create', require('./routes/quiz'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});