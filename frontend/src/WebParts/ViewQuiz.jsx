import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/view_quizzes.css';
import { useNavigate } from 'react-router-dom';

const ViewQuiz = () => {

    const navigate = useNavigate();
    const [quizData, setQuizData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/quiz/show');
            setQuizData(response.data);
        } catch (error) {
            console.error('Error fetching quiz data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const takeQuiz = async (quizId) => {
        try {
            const MyQuiz = await axios.get(`http://localhost:4000/quiz/${quizId}`);
            localStorage.setItem('MyQuiz', JSON.stringify(MyQuiz.data));
            navigate('/attempt-quiz');
        } catch (error) {
            console.log("Error fetching data", error);
        }
    };

    return (
        <div className='view_container'>

            <ul className='view_list'>
                {quizData.map((quiz, index) => (
                    <li key={index} className='view_box'>
                        <h2>{quiz.title}</h2>
                        <p>{quiz.description}</p>
                        <button className='take-quiz-btn' onClick={() => takeQuiz(quiz._id)}>Take Quiz</button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default ViewQuiz;
