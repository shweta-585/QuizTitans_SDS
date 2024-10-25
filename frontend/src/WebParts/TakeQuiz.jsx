import React from 'react';
import '../styles/take_quiz.css';

const TakeQuiz = () => {

    const MyQuiz = JSON.parse(localStorage.getItem('MyQuiz'));
    console.log(MyQuiz);

    const quizSubmitted = (e) => {
        e.preventDefault();
        const selectedAnswer = {};
        MyQuiz.questions.forEach((ques, index) => {
            const selectedOptions = document.querySelector(`input[name="question_${index}"]:checked`);
            selectedAnswer[`question_${index}`] = selectedOptions ? selectedOptions.value : null; 
        })
        console.log(selectedAnswer);
    }

    return (
        <div className="take-quiz-box">
            <h1 className='quiz-title'>{MyQuiz.title}</h1>
            <h5 className='quiz-descp'>{MyQuiz.description}</h5>
            {MyQuiz.questions.map((ques, index) => {

                const options = [ques.wrong_opt1, ques.wrong_opt2, ques.wrong_opt3, ques.correct_opt];
                const shuffledOptions = options.sort(() => Math.random() - 0.5);

                return (

                    <div key={index} className="take-quiz-box">

                        <div className="take-quiz-form">
                            <h4>{ques.question}</h4>
                            <div className="options">
                                {shuffledOptions.map((option, opt_index) => (
                                    <div key={opt_index} className="option">
                                        <label>
                                            <input type="radio" className='radio-btn' name={`question_${index}`} value={option} required />
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                );
            })}
            <button className='submit-btn' onClick={quizSubmitted}>Submit</button>
        </div>
    );
};

export default TakeQuiz;