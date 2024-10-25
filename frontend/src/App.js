import MyNavbar from "./WebParts/newnav";
// import MyCarousel from "./WebParts/myCarousel";
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
import AdminUser from "./WebParts/AdminUser";
import AdminDashboard from "./WebParts/AdminDashboard";
// import PrivateRoute from "./WebParts/PrivateRoute";

function App() {
  return (
    <Routes>

      <Route path="/" element={<AdminUser />} />
      <Route path="/login" element={<MyLogin />} />
      <Route path="/register" element={<Signup />} />

      <Route 
        path="/admin"
        element={<AdminDashboard />}
      />

      <Route 
        path="/student"
        element={<ViewQuiz />}
      />

      <Route
        path="/home"
        element={
          // <PrivateRoute>
          <>
            <MyNavbar />
            <MyHeroes />
            {/* <MyCarousel /> */}
          </>
          // {/* </PrivateRoute> */}
        }
      />

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
          <MyNavbar />
          <TakeQuiz />
        </>
      }
      />

    </Routes>

  );
}

export default App;
