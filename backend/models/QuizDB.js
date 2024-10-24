const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    question: {
        type: String,
        required: true
    },
    correct_opt: {
        type: String,
        required: true
    },
    wrong_opt1: {
        type: String,
        required: true
    },
    wrong_opt2: {
        type: String,
        required: true
    },
    wrong_opt3: {
        type: String,
        required: true
    }
});

const QuizSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    questions: [QuestionSchema],
    extra: {
        type: String,
        default: "off"
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    update_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('quiz', QuizSchema)