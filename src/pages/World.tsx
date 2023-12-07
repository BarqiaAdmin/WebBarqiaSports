import React from 'react';

import './World.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import VideoWorld from '../components/VideoWorld/VideoWorld.tsx'

const World = () => {
    return (
        <Container fluid>
            <VideoWorld />
            <Form style={{background: 'rgba(0, 0, 0, 0.7)', borderRadius: '10px', color: 'white', margin: '20px auto', maxWidth: '600px', padding: '50px 80px', position: 'relative'}}>
                <h1 style={{textAlign: 'center'}}>Enter BARQIA's World Experience</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" style={{background: 'rgba(0, 0, 0, 0.7)', color: 'white'}}/>
                    <Form.Text className="text-muted" style={{color: 'white !important'}}>
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" style={{background: 'rgba(0, 0, 0, 0.7)', color: 'white'}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember password" />
                </Form.Group>
                <p style={{textAlign: 'center'}}>
                    
                        <a href={process.env.PUBLIC_URL + "WebGL/index.html"} style={{ color: 'white' }} >
                            <Button className="barqia-button" style={{padding: '10px 20px'}}>
                                Enter World
                            </Button>
                        </a>
                    
                </p>
            </Form>
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
      );
}

export default World;