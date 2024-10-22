const express = require('express');
const router = express.Router();
const User = require('../models/UserDB');
const bcrypt = require('bcrypt');
const cors = require('cors');

// Middleware to parse JSON request bodies
router.use(express.json());
const app = express();
app.use(cors());

router.post("/login", (req, res) => {
    const {email, password} = req.body;
    User.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    });
});

router.post("/register", (req, res) => {
    User.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
});

module.exports = router;