import {Navbar,Nav,Container,} from 'react-bootstrap'
import React from "react";
export const NavBar = () =>{
    return(

        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container >
        <Navbar.Brand href="#home">Hello React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/About">About Me</Nav.Link>
            <Nav.Link href="/Calculator">Calculator</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

);
}
