import React from 'react';

import './Contact.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import VideoTech1 from '../components/VideoTech1/VideoTech1.tsx'

const Contact = () => {
    return (
        <Container id="contact-component" fluid style={{color: 'white', padding: '0'}}>
            <VideoTech1 />
            <div style={{background: 'transparent', zIndex: '1', position: 'relative'}}>
                {/**<div className="row calendly-inline-widget" data-url="https://calendly.com/jpbadino"></div>*/}
                
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                
                <div className="contact2" style={{backgroundImage: '(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg)'}} id="contact">
                </div>
            </div>

            <Container style={{ position: 'relative'}} >
                <Row>
                    <Col>
                        <h1 style={{ textAlign: 'center' }} >
                            Connect with us
                        </h1>
                        <p>
                            <img src='/img/barqia-map.png' style={{ margin: '20px 0', width: '100%' }} />
                        </p>
                    </Col>
                    <Col lg={6} style={{ margin: 'auto' }}>
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    Name:
                                </Form.Label>
                                <Form.Control type='text' placeholder='Enter your first name' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Last name:
                                </Form.Label>
                                <Form.Control type='text' placeholder='Enter your last name' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Email address:
                                </Form.Label>
                                <Form.Control type='text' placeholder='Enter your email address' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Enquiry:
                                </Form.Label>
                                <Form.Control as='textarea' rows={3} />
                            </Form.Group>
                            <Form.Group style={{ margin: '20px 0', textAlign: 'center'}} >
                                <p>
                                    <Button className='barqia-button' type='submit'>
                                        Send query
                                    </Button>
                                    <br />
                                    We will answer you shortly.
                                </p>
                                
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            
            
            <Container id='footer' style={{ background: 'black', border: '1px solid rgba(256, 256, 256, 0.2)', borderRadius: '10px', padding: '50px', position: 'relative', zIndex: '2'}}>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <img className='hide-on-mobile' src='/img/barqia-symbol.png' style={{ width: '75px'}} />
                    </Col>
                </Row>
                <hr style={{ margin: '40px 0'}} />
                <Row id='barqia-social-networks'>
                    <Col style={{ textAlign: 'center' }}>
                        <a target="_blank" href='https://www.youtube.com/@barqiasports'><img src='/img/icon-youtube.png' style={{ filter: 'brightness(0) invert(1)', width: '37px' }} /></a>
                        <a target="_blank" href='https://www.linkedin.com/company/barqiasports/?originalSubdomain=es'><img src='/img/icon-linkedin.png' style={{ filter: 'brightness(0) invert(1)', margin: '0 40px', marginTop: '-10px', width: '37px'}}  /></a>
                        <a target="_blank" href='https://www.instagram.com/barqiasports/'><img src='/img/icon-instagram.png' style={{ filter: 'brightness(0) invert(1)', width: '37px' }} /></a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={{ color: 'white', fontSize: '15px', marginTop: '45px', textAlign: 'center' }}>
                            2023 Barqia - All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Contact;