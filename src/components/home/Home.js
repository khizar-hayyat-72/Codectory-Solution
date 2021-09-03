import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import './home.css'
import banner from './banner.jpg'
import pic1 from './1.png'
import pic2 from './2.png'
import pic3 from './3.png'
import pic4 from './4.png'
import About_section from './About-section'



const Home = () => {
 
return (
    <>
        <Container className='container'>
            {/*Row -1*/}
            <Row className='row-1'>
                <Col lg = {6} md={12} sm={12} xs={12} className='col-1'>
                    <div className='col-1-content'>
                        <span className="col1-span">We are vibrant</span>
                        <h1 className='col1-heading'>IT Professionals</h1>
                        <p className='col1-para'>We are a team of young and motivated geeks, committed <br></br> to provide state of the art solutions around the globe.</p>
                    </div>
                    <div className='col-1-button'>
                        <button type="button" className='col1-button'>
                            Get Started
                        </button>
                    </div>
                </Col >
                <Col lg={6}>
                    <img className ='row-1-banner' src={banner} width='778px' height='783px' ></img>
                </Col>
            </Row>

                {/*Row -2*/}
            <Row>
                <Col className='row2-head' sm={12}> 
                    <span className='sub-title'>What We Offer</span>
                    <h2 className='row2-head-2'>Our Featured Solutions</h2>
                </Col>    
            </Row>

            {/*Row -3*/}
            <Row className='Row-3'>
                <Col lg={3} md={6} sm={12} className='row-3-data'>
                    <img src={pic1} width='114' height='109' alt='Codectory'></img><br></br>
                    <a href ='#'>Custom Software</a>
                    <p>We develop custom software solutions. Our expertise includes the development of large Enterprise Resource Planning software (ERP), and small desktop utility software. The solutions help our clients make intelligent, data-driven, and result-oriented decisions to implement their strategies.</p>
                </Col>
                <Col lg={3} md={6} sm={12} className='row-3-data'>
                    <img src={pic2} width='114' height='109' alt='Codectory'></img><br></br>
                    <a href ='#'>Mobile Development</a>
                    <p>From small mobile utilities to complex apps and graphics-intensive games, our team of dedicated iOS and Android developers will convert your app idea into an affordable reality. We use the best development strategies to develop appealing applications.</p>
                </Col>
                <Col lg={3} md={6} sm={12} className='row-3-data'>
                    <img src={pic3} width='114' height='109' alt='Codectory'></img> <br></br>                  
                    <a href ='#'>Web Development</a>
                    <p>Our web development team crafts beautiful yet responsive websites and web applications based on your requirements that will help address your business needs using the power of the world wide web. The web solutions provide comprehensive analytical dashboards as you desire.</p>
                </Col>
                <Col lg={3} md={6} sm={12} className='row-3-data'>
                    <img src={pic4} width='114' height='109' alt='Codectory' className='servicesimge'></img><br></br>
                    <a href ='#'>Branding & Marketing</a>
                    <p>Our team of digital media marketers can take your marketing, Search Engine Optimization (SEO) and Social Media Marketing (SMM) campaigns to the next level. Our dedicated digital marketing experts help our clients effectively target exactly the audience that is desired following the best strategies.</p>
                </Col>
            </Row>
            
            {/*Row-4*/}
            <Row>
                <Col className='row4-head mt-5'>
                    <span className='offer-button'><a href='#'>Our Services </a></span>
                   
                </Col>    
            </Row>

            {/*Row-5*/}
               <Row>
                   <Col>
                    <About_section/>
                   </Col>
               </Row>

            {/* Row-6*/}
                <Row className='row6'>
                    <Col lg={12} md={12} sm={12} xs={12} >
                                <h1 className='row-6-heading'>Do you have any projects?</h1> 
                                <div >
                                    <button className = 'btn-row-6' >contact us</button>
                                </div>
                        
                    </Col>
                </Row> 

            {/*Row-7*/}
                
        </Container>
      
    </>
);
};


export default Home;