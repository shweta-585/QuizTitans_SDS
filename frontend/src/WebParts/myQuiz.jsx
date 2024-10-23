import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/quiz.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

const CreateQuestions = () => {
  const navigator = useNavigate();
  const [questions, setQuestions] = useState([{id: 0, ques: '', opt1: '', opt2: '', opt3: '', opt4: ''}]);

  const addNewQuestion = () => {
    const lastQues = questions[questions.length - 1];
    if (!lastQues.opt1 || !lastQues.opt2 || !lastQues.opt3 || !lastQues.opt4) {
      console.log(lastQues);
      return;
    }
    setQuestions([...questions, { id: questions.length, ques: '', opt1: '', opt2: '', opt3: '', opt4: '' }]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    if (updatedQuestions.length === 0) {
      // setShowForm(false);
      navigator('/create');
    }
    const changeIds = updatedQuestions.map((question, idx) => ({
      ...question,
      id: idx,
    }));
    setQuestions(changeIds);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const HandleUpload = () => {
    const lastQues = questions[questions.length - 1];
    if (!lastQues.opt1 || !lastQues.opt2 || !lastQues.opt3 || !lastQues.opt4) {
      console.log(lastQues);
      return;
    }
  }

  return (
    <div>
      <div className="quiz-container">
        <div className="quiz-box">
          {questions.map((question, index) => (
            <form key={index} className="quiz-form">
              {index === questions.length - 1 && (
                <button href="upload" className='upload-quiz' onClick={HandleUpload}>Upload</button>
              )}
              <div>
                <label>Question {index + 1}</label>
                <textarea
                  className="quiz-input ques"
                  type="text"
                  placeholder="Create question.."
                  value={question.ques || ''}
                  onChange={(e) => {
                    const newQuestion = [...questions];
                    newQuestion[index].ques = e.target.value;
                    setQuestions(newQuestion);
                  }}
                  required />
              </div>

              <div>
                <label className="label-answer">Correct answer </label><br />

                <label className="options-label" htmlFor={`opt1-${index}`}>1</label>
                <textarea
                  id={`opt1-${index}`}
                  className="options"
                  type="text"
                  value={question.opt1 || ''}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index].opt1 = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  required
                /><br />

                <label className="label-answer">Other answers </label><br />
                <label className="options-label" htmlFor={`opt2-${index}`}>2</label>
                <textarea
                  id={`opt2-${index}`}
                  className="options"
                  type="text"
                  value={question.opt2 || ''}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index].opt2 = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  required
                /><br />

                <label className="options-label" htmlFor={`opt3-${index}`}>3</label>
                <textarea
                  id={`opt3-${index}`}
                  className="options"
                  type="text"
                  value={question.opt3 || ''}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index].opt3 = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  required
                /><br />

                <label className="options-label" htmlFor={`opt4-${index}`}>4</label>
                <textarea
                  id={`opt4-${index}`}
                  className="options"
                  type="text"
                  value={question.opt4 || ''}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index].opt4 = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  required
                /><br />
              </div>

              <button type="button" className="add-ques" onClick={addNewQuestion}><AddIcon /></button>
              <button type="button" className="save-ques" onClick={() => removeQuestion(index)}><DeleteIcon /></button>
              <button type="button" className="save-ques" onClick={handleSubmit}><SaveIcon /></button>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateQuestions;