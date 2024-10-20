import { Container } from "@mui/material";
import MyNavbar from "./WebParts/newnav";
import MyCarousel from "./WebParts/myCarousel";
import MyHeroes from "./WebParts/MyHeroes";
import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import CreateQuiz from './WebParts/myQuiz'; 
// import MyLogin from './WebParts/myLogin';

function App() {
  return (
  <>
    <Router>
    <MyNavbar />
    <Container>

      <Routes>
        <Route path="/" element={
          <>
            <MyHeroes />
            <MyCarousel />
          </>
        } />
        <Route path="/create" element={<CreateQuiz />} />
        {/* <Route path="/login" element={<MyLogin/>} /> */}
      </Routes>

    </Container>
    </Router>
  </>
  );
}

export default App;
