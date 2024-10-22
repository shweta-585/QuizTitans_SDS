const express = require('express');
const router = express.Router();
const User = require('../models/UserDB');
const bcrypt = require('bcrypt');
const cors = require('cors');

// Middleware to parse JSON request bodies
router.use(express.json());
const app = express();
app.use(cors());

router.post("/register", async (req, res) => {
    try {
        console.log(req.body);
        const { email } = req.body;

        const exists = await User.exists({ email });

        if (exists) {
            console.log("User exists");
            return res.status(400).json("User already exists. Please log in.");
        }

        const user = new User(req.body);
        await user.save();

        res.status(201).json("User registered successfully");
    } catch (err) {
        if (err.code === 11000) {
            console.log("Duplicate key error");
            return res.status(400).json("User with this email already exists. Please log in.");
        }

        console.error(err);
        res.status(500).json("Error saving user");
    }
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                }
                else {
                    res.json("The password is incorrect")
                }
            }
            else {
                res.json("No record existed")
            }
        });
});

module.exports = router;