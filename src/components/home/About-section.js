import React from 'react';
import './About-section.css';
import { Container, Row, Col} from 'react-bootstrap';
import about from './about-img.jpg'

const About = () =>{
    return(
        <>
            <Container>
                <Row className='about-row'>
                    <Col lg={6} md={12} sm={12} className='about-img'> 
                        <img src={about} className='about-img1'></img>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='about-content'>
                        <div className='about-content'>
                            <span className='sub-title-about'>About Us</span>
                            <h2>Engaging New Audiences Through Smart Approach</h2>
                            <p><strong>Codectory</strong> is a Group of IT Professionals providing wide range of services in IT Fields.</p>
                            <p>We at <strong>Codectory</strong> provide hight tech and low cost solutions to solve your complex problems by building technological solutions<b/>
                            We strive continuously to develop our expertise for the benefits of our clients, we understand your demands and focus on your satisfaction.</p>
                            <button type="button" className='button'>
                                DICOVER MORE
                            </button>
                                          
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    );
};



export default About;