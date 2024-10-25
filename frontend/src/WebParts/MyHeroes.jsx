import React from 'react'
import '../styles/heroes.css'

function MyHeroes() {
  return (
    <div>

      <div className="hero-section">

        <div className="heading">

          <h1 className="heading-main">QuizTitans GO!!</h1>
          <p className="heading-sub"> We've got all the quizzes you love to binge! <br />Come on in and hunker down for the long haul. </p>

        </div>
        <div className="user-login">
          <h2>Student Register</h2>
          <button className='stud-reg-btn'>Register</button>
        </div>

      </div>
    </div>
  )
}

export default MyHeroes
