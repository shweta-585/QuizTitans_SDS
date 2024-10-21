import React from 'react'
import '../styles/quiz.css'

const CreateQuiz = () => {
  return (
    <div>
      <div className="quiz-container">
        <div className="quiz-box">

          <form className='quiz-form'>

            <div>
              <label>Question </label>
              <textarea className="quiz-input ques" type="text" placeholder="add question" />
            </div>

            <div>
              <label>Your answer </label>
              <textarea className="quiz-input ans" type="text" placeholder='Your answer..'></textarea>
            </div>

            <button type='submit' value={'Save'} className='save-ques'>Save</button>

            <button type='submit' name='newQuestion' className='add-ques'>Add</button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default CreateQuiz
