const express = require('express');
const router = express.Router();
const cors = require('cors');
const User = require('../models/QuizDB');

// Middleware to parse JSON request bodies
router.use(express.json());
const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
));

router.get("/show", async(req, res) => {
    try {
        const quizzes = await User.find();
        res.status(200).json(quizzes);
    } catch (error) {
        console.log("Error getting Quiz Data", error);
        res.status(500).json("Error retrieving quizzes");
    }
});

router.post('/create', async(req, res) => {
    
    try {
        console.log("Server says Hi");
        console.log(req.body);  
        const { title, description, questions, extra } = req.body;

        const user = new User({ title, description, questions, extra });
        console.log(user);
        await user.save();

        res.status(200).json("Quiz Saved Successfully");
    } catch (error) {
        console.log("Error saving data", error);
        res.status(500).json("Error");
    }

});

module.exports = router;