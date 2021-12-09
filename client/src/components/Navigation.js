import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {
  return (
    <>
      <div className="navContainer">
        <Link to="/" className="link">
          Forced Fun
        </Link>

        <nav className="navbar">
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/add" className="link">
            Add question
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navigation;