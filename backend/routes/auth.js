const express = require('express');
const router = express.Router();
const User = require('../models/UserDB');
const bcrypt = require('bcrypt');
const cors = require('cors');

// Middleware to parse JSON request bodies
router.use(express.json());
const app = express();
app.use(cors());

// // Handle user registration
// router.post('/register', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(409).json({ message: 'Email already exists.' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = new User({ email, password: hashedPassword });
//         await newUser.save();

//         res.status(201).json({ message: 'User created successfully', user: { email: newUser.email } });
//     } catch (error) {
//         console.error("Error saving user:", error);
//         res.status(500).json({ message: 'An error occurred while creating the user.' });
//     }
// });

// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: 'Email does not exist.' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: 'Invalid password.' });
//         }text/html; charset=utf-8

//         res.status(200).json({ message: 'Login successful', user: { email: user.email } });
//     } catch (error) {
//         console.error("Error logging in:", error);
//         res.status(500).json({ message: 'An error occurred during login.' });
//     }
// });


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