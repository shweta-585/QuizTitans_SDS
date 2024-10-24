import React, { useState } from 'react';
import '../styles/create_quiz.css'
import { useNavigate } from 'react-router-dom';

const CreateQuiz = () => {

  const [title, SetTitle] = useState('');
  const [description, SetDescrip] = useState('');
  const [extra, SetExtra] = useState(false);

  const navigator = useNavigate();

  const QuizMaking = async (e) => {
    console.log(extra);
    e.preventDefault();
    if (!title || !description ) {
      return;
    }
    const quizInfo = { title, description, extra };
    localStorage.setItem('quizInfo', JSON.stringify(quizInfo));
    console.log(quizInfo);
    navigator('/quiz');
  }

  return (
    <div className='create-quiz-box'>

      <form className='create-quiz-form' onSubmit={QuizMaking}>
        <label>Title</label>
        <textarea 
          className='title' 
          onChange={(e) => SetTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea 
          className='describe' 
          onChange={(e) => SetDescrip(e.target.value)}
          required
        />

        <label>Access Link</label>
        <input 
          className='future-access' 
          type="checkbox" 
          onChange={(e) => SetExtra(e.target.value)}
        />

        <button type="submit" className='submit' to='/quiz' >Create Quiz</button>

      </form>
    </div>
  );
}

export default CreateQuiz;
