import MyNavbar from "./WebParts/newnav";
import MyHeroes from "./WebParts/MyHeroes";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateQuestions from './WebParts/myQuiz';
import MyLogin from './WebParts/myLogin';
import Signup from "./WebParts/Signup";
import './styles/App.css';
import CreateQuiz from './WebParts/CreateQuiz';
import ViewQuiz from "./WebParts/ViewQuiz";
import TakeQuiz from "./WebParts/TakeQuiz";
import StudentNav from "./WebParts/StudentNav";
import PrivateRoute from "./WebParts/PrivateRoute";
import AdminHeroes from "./WebParts/AdminHeroes";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<MyLogin />} />
      <Route path="/register" element={<Signup />} />

      <Route path="/admin-dashboard"
        element={
          <PrivateRoute>
            <MyNavbar />
            <AdminHeroes />
          </PrivateRoute>
        } />

      <Route path="/student-dashboard"
        element={
          <PrivateRoute>
            <StudentNav />
            {/* <MyHeroes /> */}
            <ViewQuiz />
          </PrivateRoute>
        } />

      <Route path="/create" element={
        <>
          <MyNavbar />
          <CreateQuiz />
        </>
      } />

      <Route path="/quiz" element={
        <>
          <MyNavbar />
          <CreateQuestions />
        </>
      }
      />

      <Route path="/show" element={
        <>
          <MyNavbar />
          <ViewQuiz />
        </>
      }
      />

      <Route path="/attempt-quiz" element={
        <>
          <StudentNav />
          <TakeQuiz />
        </>
      }
      />

    </Routes>

  );
}

export default App;
