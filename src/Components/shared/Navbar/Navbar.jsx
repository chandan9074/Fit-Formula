//import pakages
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import fit_formula from './images/fit-formula.png';

// import files 
import './navbar.css'

const Navigation = () => {

    const {user, logout} = useAuth()
    return ( 
        <Navbar collapseOnSelect expand="lg" className="hello" variant="dark">
            <Container>
            <Navbar.Brand href="/"><img src={fit_formula} alt="" className="nav-logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto md:ml-20">
                    <Nav.Link>
                        <Link to="/"  className="nav-btn text-xl">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/products"  className="nav-btn text-xl">Product</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/excercise"  className="nav-btn text-xl">Excercise</Link>
                    </Nav.Link>
                </Nav>
                <Nav>
                    {user.photoURL? <Nav.Link><img src={user.photoURL} alt="" className="nav-user-img" /></Nav.Link>:null}
                    <Nav.Link className=" text-xl">{user.displayName}</Nav.Link>
                    {user.email? 
                <Nav.Link>
                        <Link to="/"  className="nav-btn nav-account-btn  text-xl" onClick={logout}>Logout</Link>
                    </Nav.Link>:
                    <Nav.Link >
                        <Link to="/accounts"  className="nav-btn nav-account-btn  text-xl" onClick={logout}>Login | Registration</Link>
                    </Nav.Link>    
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Navigation;