//import pakages
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import files 


const Navigation = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg" className="bg-gray-800 opacity-25" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Fit Formula</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Home op1</Nav.Link>
                <Nav.Link href="#pricing">Home op2</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">User image</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Signup
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Navigation;