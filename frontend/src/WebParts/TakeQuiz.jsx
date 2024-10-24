import React from 'react';

const TakeQuiz = () => {

    const MyQuiz = JSON.parse(localStorage.getItem('MyQuiz'));
    console.log(MyQuiz);

    return (
        <div className='take-quiz-container'>
            <div className="take-quiz-box">
                {/* <h1>{MyQuiz.title}</h1> */}

            </div>
        </div>
    );
};

export default TakeQuiz;