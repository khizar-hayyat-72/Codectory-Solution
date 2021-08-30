import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import './navbar.css';
import logo from './logo.png';


const header = () => {

    const h = window.clientHeight; 
    console.log(h)

    return(
        <>
            <Navbar collapseOnSelect className='header navbar navbar-expand-md'   expand="lg"  sticky="top"> 
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="134"
                            height="42"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <div>
                                <ul className='nav '>
                                    <li className='nav-item'>
                                        <NavLink to="/" className='nav-link'>Home</NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to="/about" className='nav-link'>About</NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to="/services" className='nav-link'>Services</NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to="/projects" className='nav-link'>Projects</NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to="/contact" className='nav-link'>Contact Us</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Nav>
                      
                        <Nav>
                          <button className='nav_btn'>Contact Us</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>               
        </>
    );
};


export default header;