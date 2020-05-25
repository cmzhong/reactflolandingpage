import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineChrome } from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';



function NavBar() {
  return (
    <Navbar sticky="top" style={{ background: "#272a30" }} variant="dark">
      <Navbar.Brand>
        <LinkScroll to="hero" smooth={true} >reactFLO</LinkScroll>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><LinkScroll to="features" smooth={true} style={{ color: '#F6780D' }}>Features</LinkScroll></Nav.Link>
        <Nav.Link>
          <LinkScroll to="team" smooth={true} style={{ color: '#F6780D' }}>Team</LinkScroll>
        </Nav.Link>
      </Nav>
      <Nav className="test">
        <Nav.Link href="https://github.com/oslabs-beta/ReactFLO"> <GoMarkGithub style={{ color: '#F6780D' }} size={32} /></Nav.Link>
        <Nav.Link href="linktochromehere"><AiOutlineChrome style={{ color: '#F6780D' }} size={36} /></Nav.Link>
      </Nav>
    </Navbar>
  )
}


export default NavBar;