import React from 'react';

import './Events.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

const Events = () => {
    return (
        <Container id='events' fluid>
            <Row>
                <Col>
                    <a href='Events/DecemberHackJam'>
                        <img id="sports-jam-img" src='/img/sports-jam-diciembre-2023/sports-jam-barqia-onklub.png'
                            style={{
                                
                                top: '-50px',
                                left: '0',
                                opacity: '0.8',
                                width: '100%',
                                zIndex: '0'
                            }}
                        />
                    </a>
                </Col>
            </Row>
            

            <Row id='event-link'>
                <Col style={{ textAlign: 'center'}}>
                    <a className='neon' href='/Events/DecemberHackJam'
                        style={{
                            top: '430px',
                            left: '295px',
                        }}>
                            17 de diciembre 2023<br />
                            {'->'} Sitio web del evento {'<-'}
                    </a>
                </Col>
            </Row>
            
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

export default Events;