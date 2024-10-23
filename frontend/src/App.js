import MyNavbar from "./WebParts/newnav";
import MyCarousel from "./WebParts/myCarousel";
import MyHeroes from "./WebParts/MyHeroes";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateQuiz from './WebParts/myQuiz'; 
import MyLogin from './WebParts/myLogin';
import Signup from "./WebParts/Signup";
import './styles/App.css';
// import PrivateRoute from "./WebParts/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyLogin />} />
      <Route path="/login" element={<MyLogin />} />
      <Route path="/register" element={<Signup />} />

      <Route 
        path="/home" 
        element={
          // <PrivateRoute>
            <>
              <MyNavbar />
              <MyHeroes />
              <MyCarousel />
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
    </Routes>
  );
}

export default App;
