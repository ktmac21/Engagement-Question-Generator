import React from 'react';
import logo from '../images/questionMark.png'

const Navigation = () => {
  return (
    <>
      <nav href="/">
        <img src={logo} alt="logo" height="30" width="100" />

        <div link="/about">About</div>
        <div link="/addQuestion">Add a question!</div>

        <div link="/contact">Contact Us</div>
      </nav>
    </>
  );
};

export default Navigation;