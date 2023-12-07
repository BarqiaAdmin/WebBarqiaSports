import React from 'react';

import './AboutUs.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavBar from '../components/NavBar/NavBar.tsx';

import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard.tsx'

import VideoTech1 from '../components/VideoTech1/VideoTech1.tsx';
import VideoGlobe from '../components/VideoGlobe/VideoGlobe.tsx';
import VideoRugby from '../components/VideoRugby/VideoRugby.tsx';
import VideoWhatWeDo from '../components/VideoWhatWeDo/VideoWhatWeDo.tsx';

const AboutUs = () => {
    return (
        <Container id='about-us'>
            <Row id='about-us-text'>
                <Col style={{ background: 'rgba(0, 0, 0, 0.7)' }} >
                    <VideoGlobe/>
                        <h1>Our mission</h1>
                        
                        <p>Our mission is to drive a leading immersive fan engagement platform, where sports, clubs, athletes and fans from around the world converge to forge deeper, more realistic relationships between all parties involved. We seek to build a space where the passion for sport translates into authentic and meaningful connections, promoting the interaction and active participation of all actors in the sporting world.</p>

                        <p>We strive to foster an environment that allows fans to have unique and enriching experiences, while providing sports, clubs and athletes with the tools and technology necessary to strengthen their bond with their audience and take their engagement to the next level. Ultimately, our mission is to drive the evolution of relationships in the world of sport, bringing about a deeper and more authentic approach between all those involved.</p>

                        <p>
                            <img src='/img/barqia-about-us-1.jpg' />
                        </p>
                        
                        <h1>Our story</h1>
                        <p>Barqia Sports was born as a result of the merger of an Argentine company, known as Barqia, and a Spanish one, Padel Fantasy. Our contact occurred thanks to participation in a reference event for startups and entrepreneurs at an international level. After several months of conversations, reflections and exchange of passions, we had the extraordinary idea of ​​founding Barqia Sports, a comprehensive fan engagement platform.</p>
                        
                        <p>We share the same common interests and aspirations, focused on the application of cutting-edge and futuristic technology for the benefit of clubs, athletes and fans, with the purpose of creating a fully immersive platform with absolute connectivity between all the parties involved.</p>

                        <p>
                            <img src='/img/barqia-about-us-2.jpg' />
                        </p>
                        
                        <h1>Our vision</h1>
                        <p>To be the leading immersive fan engagement platform where all sports, clubs, athletes and fans from around the world meet with the aim of creating a deeper and more realistic relationship between all parties.</p>

                        <p>
                            <img src='/img/barqia-about-us-3.jpg' />
                        </p>
                </Col>
            </Row>

            <Row id="team-cards">    
                <h1>The Team</h1>
                <Col sm={12} md={6} lg={3}>
                    <TeamMemberCard
                        image='img/barqia-felipe-barquin.jfif'
                        name='Felipe Barquin'
                        title='CEO'
                        degree='Founder of Barqia'
                        description='A technology company focused on development with AI.'
                    />
                </Col>
                
                <Col sm={12} md={6} lg={3}>
                    <TeamMemberCard
                        image='img/barqia-fernando-carmona.jfif'
                        name='Fernando Carmona'
                        title='COO'
                        degree='Sports Business Management'
                        description='Co-Founder of Padel Fantasy. Fantasy game app from the world of sports.'
                    />
                </Col>
                <Col sm={12} md={6} lg={3} >
                    <TeamMemberCard
                        image='img/barqia-diego-gomez.png'
                        name='Diego Gómez'
                        title='CTO'
                        degree='Degree in Information Systems'
                        description='Project Manager Specialist of Interactive Space in VR/AR'
                    />
                </Col>
                <Col sm={12} md={6} lg={3} >
                    <TeamMemberCard
                        image='img/barqia-padel-fantasy-logo.png'
                        name='David del Saz'
                        title='CFO'
                        degree='Double degree in Business Administration and Law'
                        description='Co-Founder of Padel Fantasy. Fantasy game app from the world of sports.'
                    />
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

export default AboutUs;