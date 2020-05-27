import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineChrome } from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';
import ReactLogo from '../../images/reactw.png';



function NavBar() {
  return (
    <Navbar className="navbar" sticky="top" style={{ background: "#272a30" }} variant="dark">
      <Navbar.Brand>
        <LinkScroll to="hero" smooth={true}>
          <img
            src={ReactLogo}
            height="auto"
            width="85"
            className="d-inline-block align-top"
            alt="Reactflo Logo"
            style={{ marginTop: "5px" }}
          />
        </LinkScroll>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <span>
          <Nav.Link>
            <LinkScroll to="features" smooth={true} style={{ color: '#F6780D' }}>Features</LinkScroll>
          </Nav.Link>
        </span>
        <span>
          <Nav.Link>
            <LinkScroll to="team" smooth={true} style={{ color: '#F6780D' }}>Team</LinkScroll>
          </Nav.Link>
        </span>
      </Nav>
      <Nav>
        <Nav.Link href="https://github.com/oslabs-beta/ReactFLO"> <GoMarkGithub style={{ color: '#F6780D', marginTop: "2px" }} size={32} /></Nav.Link>
        <Nav.Link href="linktochromehere"><AiOutlineChrome style={{ color: '#F6780D' }} size={36} /></Nav.Link>
      </Nav>
    </Navbar>
  )
}


export default NavBar;