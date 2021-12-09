import React from 'react';
import logo from '../images/questionMark.jpeg'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="navContainer">
      <Link to="/">
        <img src={logo} alt="logo" height="100" width="150" />
      </Link>
      <nav className="navbar">
        <div>
          <Link to="/about" className="link">About</Link>
          <Link to="/add"className="link">Add a question</Link>
          <Link to="/contact"className="link">Contact Us</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;