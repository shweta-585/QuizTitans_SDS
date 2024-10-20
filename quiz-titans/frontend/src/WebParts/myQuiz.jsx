import React from 'react'
import '../styles/quiz.css'

const CreateQuiz = () => {
  return (
    <div>
      <div className="container">
        <div className="quiz-main">
          <div className="question">
              <label>Question1 </label>
              <textarea className="ques" type="text" placeholder="add question"/>
              <textarea className="answer" type="text" placeholder='Your answer..'></textarea>
              <input type='submit' value={'Save'} className='save-ques'/>
              <input type='submit' name='newQuestion' value={'Add Question'} className='add-ques'/>
          </div>
        </div>
    </div>
    </div>
  )
}

export default CreateQuiz
