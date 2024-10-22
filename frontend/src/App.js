import MyNavbar from "./WebParts/newnav";
import MyCarousel from "./WebParts/myCarousel";
import MyHeroes from "./WebParts/MyHeroes";
import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import CreateQuiz from './WebParts/myQuiz'; 
import MyLogin from './WebParts/myLogin';
import Signup from "./WebParts/Signup";
import './styles/App.css'

function App() {
  return (
  <>
    
    <Router>
      <Routes>

        <Route path="/" element={ <MyLogin /> }/>

        <Route path="/login" element={ <MyLogin /> }/>

        <Route path="/register" element={<Signup />} />

        <Route path="/home" element={
          <>
            <MyNavbar />
            <MyHeroes />
            <MyCarousel />
          </>
        } />

        <Route path="/create" element={
          <>
            <MyNavbar />
            <CreateQuiz />
          </>
        } />

      </Routes>
    </Router>

  </>
  );
}

export default App;
