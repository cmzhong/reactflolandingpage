import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { GoMarkGithub } from 'react-icons/go'
import { AiOutlineChrome } from 'react-icons/ai'

function NavBar() {
  return (
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href='top-of-page'>reactFLO</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Features</Nav.Link>
        <Nav.Link href="#features">Demo</Nav.Link>
        <Nav.Link href="#pricing">Connect</Nav.Link>
      </Nav>
      <Nav className="test">
        <Nav.Link href="https://github.com/oslabs-beta/ReactFLO"> <GoMarkGithub size={32}/></Nav.Link>
        <Nav.Link href="linktochromehere"><AiOutlineChrome size={36} /></Nav.Link>
      </Nav>
    </Navbar>
    </div>
  )
}


export default NavBar;