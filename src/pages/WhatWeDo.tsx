import React from 'react';

import './WhatWeDo.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import VideoWhatWeDo from '../components/VideoWhatWeDo/VideoWhatWeDo.tsx'

const WhatWeDo = () => {
    return (
        <Container id='what-we-do'>
            <VideoWhatWeDo />
            <Row id='what-we-do-text'>
                <h1>What we do</h1>

                <p>We are the leading IMMERSIVE FAN ENGAMENT PLATFORM perfect for clubs, athletes and fans of all sports worldwide. Participate in all the immersive experiences, earn points, get benefits and help to grow your favorite club or athlete.</p>

                <p>Thanks to our cutting-edge technology, this allows us to capture the maximum attention of the fans and create a closer bond between them and their favourite clubs or athletes. Sports entities will have the opportunity to create their own digital value and make it grow while generating greater interaction with their fans on the Barqia Sport World platform.</p>

                <p>
                    <img src='/img/barqia-what-we-do-3.jpg' />
                </p>

                <p>The opportunities that Barqia Sports offers clubs and athletes are multiple, from becoming strategic partners to achieve a technological transformation, to creating their own virtual sports city with immersive VR content, statistics, blockchain technology, artificial intelligence and even augmented reality.
                </p>

                <p>Join the Barqia Sports World platform, interact and level up!</p>

                <p>
                    <img src='/img/barqia-what-we-do-2.jpg' />
                </p>

                <p>On the side of the sports entities and athletes, they will be able to grow their level and therefore increase their digital assets thanks to the interaction of their fans in the activities or experiences within Barqia Sports World. The fans of each club, while interacting or participating in the experiences within Barqia Sports World, will be earning points and therefore obtaining real benefits from their club or athlete.</p>

                <p>
                    <img src='/img/barqia-what-we-do-1.jpg' />
                </p>
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

export default WhatWeDo;