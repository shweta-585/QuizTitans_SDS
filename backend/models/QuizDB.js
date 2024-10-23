import mongoose from 'mongoose';
const { Schema } = mongoose;

const QuestionSchema = new Schema({
    index: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    opt1: {
        type: String,
        required: true
    },
    opt2: {
        type: String,
        required: true
    },
    opt3: {
        type: String,
        required: true
    },
    opt4: {
        type: String,
        required: true
    }
});

const QuizSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    questions: [QuestionSchema],
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