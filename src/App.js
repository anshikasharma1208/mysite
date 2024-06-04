import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Flower from './components/Flower';
import SignIn from './components/SignIn';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/flower" element={<Flower />} />
          <Route path="/SignIn" element={<SignIn/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
