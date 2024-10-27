
# QuizTitans

A Quiz Maker App which gives you options to login as student or Admin. When Admin you get to create and view quizzes. You can share your Quiz with your students. Students can attempt the Quiz.
## Features

**Authentication:** Allow users to log in as either Student or Admin using Auth0. Based on the role, users will have different permissions.

**Role-Based Access:** 

*Admin*: Can create and manage quizzes, view all quizzes, and get shareable links for quizzes to distribute to students.
    
*Student*: Can view and attempt quizzes shared by the admin.

**Quiz Management:** Admins can create quizzes with a title, description, and questions.Store quizzes and responses in MongoDB for retrieval and updates.

**Quiz Attempt:** Students can access quizzes through shared links and submit responses. Their responses are stored in the database.
## Installation

1. **Navigate to the Backend Directory** and start the server:

   ```bash
   cd backend
   node server.js

2. **Open a New Terminal and navigate to the Frontend Directory,** then start the frontend application:

   ```bash
    cd frontend
    npm start
## 🛠 TechStack

**It is a **MERN** project**

**FrontEnd**: Javascript, HTML, CSS, React, MaterialUI

**BackEnd**: NodeJS, ExpressJS

**DataBase**: MongoDB Atlas


