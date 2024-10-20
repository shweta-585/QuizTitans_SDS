import React from 'react'
import '../styles/heroes.css'

function MyHeroes() {
  return (
    <div>
      <div className="hero-section">
        <div className="heading">
            <h1 className="heading-main">QuizTitans GO!!</h1>
            <p className="heading-sub"> We've got all the quizzes you love to binge! <br/>Come on in and hunker down for the long haul. </p>
        </div>
        <div className="searchbar">
            <input className="search-box" type="search" placeholder="search for quizzes"/>
            <ul className="search-options">
                <li>Anime</li>
                <li>Movies</li>
                <li>Science</li>
                <li>Nature</li>
            </ul>
        </div>

    </div>
    </div>
  )
}

export default MyHeroes
