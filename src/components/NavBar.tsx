import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineChrome } from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';



function NavBar() {
  return (
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <LinkScroll to="hero" smooth={true} >reactFLO</LinkScroll>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><LinkScroll to="features" smooth={true}>Features</LinkScroll></Nav.Link>
        <Nav.Link>
        <LinkScroll to="demo" smooth={true}>Demo</LinkScroll>
        </Nav.Link>
        <Nav.Link>
        <LinkScroll to="team" smooth={true}>Connect</LinkScroll>
        </Nav.Link>
      </Nav>
      <Nav className="test">
        <Nav.Link href="https://github.com/oslabs-beta/ReactFLO"> <GoMarkGithub size={32}/></Nav.Link>
        <Nav.Link href="linktochromehere"><AiOutlineChrome size={36}/></Nav.Link>
      </Nav>
    </Navbar>
    </div>
  )
}


export default NavBar;