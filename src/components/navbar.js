// src/components/Navbar.js
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

import image2 from "./image2.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={image2} alt="Navbar Background" className="navbar-bg" />
      <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/flower">Flower</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
