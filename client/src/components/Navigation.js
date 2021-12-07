import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../images/questionMark.png'

const Navigation = () => {

  return (
    <>
    
    <Navbar.Brand href="/"><img src={logo} alt="logo" height="30" width="100"/></Navbar.Brand>
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/addQuestion">Add a question!</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
    </Nav.Item>

  </Nav>
  
  </>
  );
}

export default Navigation;