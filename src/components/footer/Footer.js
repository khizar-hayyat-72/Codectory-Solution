import React from 'react';
import './Footer.css';
import {Container,Row,Col} from 'react-bootstrap';
import logo from './logo.png'
import {FaFacebook} from "react-icons/fa";


const Footer = () => {
    return(
        <>
            <Container>
            <Row className='footer'>
                <Col lg={3} md={6} sm={12} >
                <div className = 'First-col'>
                    <img src = {logo} className='logo'></img>
                    <p>We provide professional IT services according to your need.</p>
                </div>
                </Col>
                <Col lg={3} md={6} sm={12} className='Second-Col'>
                    <h3 className='col-heading'>Company</h3>
                    <ul>
                        <li><a href='#'>About Us </a></li>
                        <li><a href='#'>Services </a></li>
                        <li><a href='#'>Projects </a></li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12} className='Third-Col'>
                    <h3 className='col-heading'>Support</h3>
                    
                    <ul>
                        <li><a href='#'>Contact Us </a></li>
                    </ul>
                </Col>
                <Col lg={3} md={6} sm={12} >
                <h3 className='col-heading'>Address</h3>
                    <div className='col-4-content'>
                        <p>2nd Floor, Saeed Appartments, 33/1 Queens Road, Lahore, Pakistan</p> <span>042-36299394</span>
                    </div>

                    <div className='col-4-content Email'>
                        <p>Email : <a href='mailto:info@codectory.com' className='footer-contact'>info@codectory.com</a></p>
                        
                    </div>
                    <div className='col-4-content Phone'>
                        <p>Phone :  <a href='tel:+923114112960' className='footer-contact'>+92 311 4112960</a></p>
                    </div>
                    <div>
                       
                    </div>
                </Col>
            </Row>
            <Row>
                  <Col>
                    <div class="col-lg-12 col-md-12">
                        <div class="copyright-area ">
                            <p>Copyright 2018 - 2021 @ <a href="https://www.codectory.com" className='footer-contact'>Codectory</a>. All rights reserved</p>
                        </div>
	        	    </div>
                  </Col>
            </Row>
            </Container>
              
        </>
    );
}


export default Footer;