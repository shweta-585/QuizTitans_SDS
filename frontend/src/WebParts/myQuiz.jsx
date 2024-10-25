import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/quiz.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
// import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';

const CreateQuestions = () => {

  const navigator = useNavigate();
  const [questions, setQuestions] = useState([{ id: 0, question: '', correct_opt: '', wrong_opt1: '', wrong_opt2: '', wrong_opt3: '' }]);

  const addNewQuestion = () => {
    const lastQues = questions[questions.length - 1];
    console.log(lastQues)
    if (!lastQues.question || !lastQues.correct_opt || !lastQues.wrong_opt1 || !lastQues.wrong_opt2 || !lastQues.wrong_opt3) {
      console.log(lastQues);
      return;
    }
    setQuestions([...questions, { id: questions.length, question: '', correct_opt: '', wrong_opt1: '', wrong_opt2: '', wrong_opt3: '' }]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    if (updatedQuestions.length === 0) {
      navigator('/create');
    }
    const changeIds = updatedQuestions.map((question, idx) => ({
      id: idx,
      ...question,
    }));
    setQuestions(changeIds);
  };

  const HandleUpload = async () => {
    
    const lastQues = questions[questions.length - 1];
    if (!lastQues.question || !lastQues.correct_opt || !lastQues.wrong_opt1 || !lastQues.wrong_opt2 || !lastQues.wrong_opt3) {
      return;
    }

    const quizInfo = JSON.parse(localStorage.getItem('quizInfo'));
    console.log(quizInfo);

    const quizData = {
      ...quizInfo,
      questions
    } 
    
    // send data to server
    try {
      console.log("Hello");
      const response = await axios.post('http://localhost:4000/quiz/create', quizData);
      console.log(response.data);
      navigator('/create');
    } catch (error) {
      console.error("Error details:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
        console.error("Status code:", error.response.status);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  }

  return (
    <div>
      <div className="quiz-container">
        <div className="quiz-box">
          {questions.map((question, index) => (
            <form key={index} className="quiz-form">
              {index === questions.length - 1 && (
                <button type='button' className='upload-quiz' onClick={() => HandleUpload(questions)}>Upload</button>
              )}
              <div>
                <label>Question {index + 1}</label>
                <textarea
                  className="quiz-input ques"
                  type="text"
                  placeholder="Create question.."
                  value={question.question || ''}
                  onChange={(e) => {
                    const newQuestion = [...questions];
                    newQuestion[index].question = e.target.value;
                    setQuestions(newQuestion);
                  }}
                  required />
              </div>

              <div>
                <label className="label-answer">Correct answer </label><br />

                <label className="options-label" htmlFor={`correct_opt-${index}`}>1</label>
                <textarea
                  id={`correct_opt-${index}`}
                  className="options"
                  type="text"
                  value={question.correct_opt || ''}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index].correct_opt = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  required
                /><br />

                <label className="label-answer">Other answers </label><br />
                <label className="options-label" htmlFor={`wrong_opt1-${index}`}>2</label>
                <textarea
                  id={`wrong_opt1-${index}`}
                  className="options"
                  type="text"
                  value={question.wrong_opt1 || ''}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index].wrong_opt1 = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  required
                /><br />

                <label className="options-label" htmlFor={`wrong_opt2-${index}`}>3</label>
                <textarea
                  id={`wrong_opt2-${index}`}
                  className="options"
                  type="text"
                  value={question.wrong_opt2 || ''}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index].wrong_opt2 = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  required
                /><br />

                <label className="options-label" htmlFor={`wrong_opt3-${index}`}>4</label>
                <textarea
                  id={`wrong_opt3-${index}`}
                  className="options"
                  type="text"
                  value={question.wrong_opt3 || ''}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index].wrong_opt3 = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  required
                /><br />
              </div>

              <button type="button" className="add-ques" onClick={addNewQuestion}><AddIcon /></button>
              <button type="button" className="save-ques" onClick={() => removeQuestion(index)}><DeleteIcon /></button>
              {/* <button type="button" className="save-ques" onClick={handleSubmit}><SaveIcon /></button> */}
            </form>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateQuestions;