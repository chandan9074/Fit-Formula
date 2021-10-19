//import pakages
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

// import files 
import './navbar.css'

const Navigation = () => {

    const {user, logout} = useAuth()
    return ( 
        <Navbar collapseOnSelect expand="lg" className="hello" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Fit Formula</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features" className="text-white">Home</Nav.Link>
                    <Nav.Link href="#pricing">Home op1</Nav.Link>
                    <Nav.Link href="#pricing">Home op2</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link to="#deets">User image</Nav.Link>
                    {user.email? 
                <Nav.Link>
                        <Link to="/"  className="nav-btn" onClick={logout}>Logout</Link>
                    </Nav.Link>:
                    <Nav.Link href="/registration">
                        Registration
                    </Nav.Link>    
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Navigation;