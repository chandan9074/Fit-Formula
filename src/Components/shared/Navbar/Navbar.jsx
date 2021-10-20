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
            <Navbar.Brand href="/">Fit Formula</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link href="#features" className="text-white">Home</Nav.Link> */}
                    <Nav.Link>
                        <Link to="/"  className="nav-btn">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/products"  className="nav-btn">Product</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/excercise"  className="nav-btn">Excercise</Link>
                    </Nav.Link>
                    {/* <Nav.Link href="#pricing">Home op2</Nav.Link> */}
                </Nav>
                <Nav>
                    <Nav.Link><img src={user.photoURL} alt="" className="nav-user-img" /></Nav.Link>
                    <Nav.Link>{user.displayName}</Nav.Link>
                    {user.email? 
                <Nav.Link>
                        <Link to="/"  className="nav-btn nav-account-btn" onClick={logout}>Logout</Link>
                    </Nav.Link>:
                    <Nav.Link >
                        <Link to="/accounts"  className="nav-btn nav-account-btn" onClick={logout}>Registration</Link>
                    </Nav.Link>    
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Navigation;