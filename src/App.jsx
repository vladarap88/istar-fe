import './App.css'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import LandingPage from './components/LandingPage';
import FormPage from './components/FormPage';
import Animals from './components/Animals';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/animals" element={<Animals />} />
      </Routes>
    </Router>
  );
}

export default App;
