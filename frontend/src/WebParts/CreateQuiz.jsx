import React, { useState } from 'react';
import '../styles/create_quiz.css'
import { useNavigate } from 'react-router-dom';

const CreateQuiz = () => {

  const [title, SetTitle] = useState('');
  const [descrip, SetDescrip] = useState('');
  const [extra, SetExtra] = useState(false);

  const navigator = useNavigate();

  const QuizMaking = (e) => {
    e.preventDefault();
    console.log(title, descrip, extra);
    navigator('/quiz');
  }

  return (
    <div className='create-quiz-box'>

      <form className='create-quiz-form' onSubmit={QuizMaking}>
        <label>Title</label>
        <input 
          className='title' 
          type="text" 
          onChange={(e) => SetTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <input 
          className='describe' 
          type="text" 
          onChange={(e) => SetDescrip(e.target.value)}
          required
        />

        <label>Access Link</label>
        <input 
          className='future-access' 
          type="checkbox" 
          onChange={(e) => SetExtra(e.target.value)}
          required
        />

        <button type="submit" className='submit' to='/quiz' >Create Quiz</button>

      </form>
    </div>
  );
}

export default CreateQuiz;
