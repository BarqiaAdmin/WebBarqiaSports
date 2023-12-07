import React from 'react';

import './Footer.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <Container id='footer' style={{ background: 'black', border: '1px solid rgba(256, 256, 256, 0.2)', borderRadius: '10px', padding: '50px', position: 'relative', zIndex: '2'}}>
            <Row>
                <Col style={{ textAlign: 'center' }}>
                    <img className='hide-on-mobile' src='/img/barqia-symbol.png' style={{ marginRight: '10px', width: '75px'}} />
                    <img className='hide-on-mobile' src='/img/barqia-symbol-onklub.png' style={{ filter: 'invert(1)', marginLeft: '-8px', marginTop: '10px', width: '50px'}} />

                    <img className='hide-on-desktop' src='/img/barqia-symbol.png' style={{ width: '50px'}} />
                    <img className='hide-on-desktop' src='/img/barqia-symbol-onklub.png' style={{ filter: 'invert(1)', marginTop: '10px', width: '30px'}} />
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
                    <p style={{ fontSize: '15px', marginTop: '45px', textAlign: 'center' }}>
                        2023 Barqia - All Rights Reserved.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;