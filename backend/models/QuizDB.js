import mongoose from 'mongoose';
const { Schema } = mongoose;

const QuizSchema = new Schema({
    index: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
  });

  module.exports = mongoose.model('quiz', QuizSchema)