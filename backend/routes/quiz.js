const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const cors = require('cors');

// Middleware to parse JSON request bodies
router.use(express.json());
const app = express();
app.use(cors());

router.get('/quiz', (req, res) => {
    res.send('Hello');  
});

module.exports = router;