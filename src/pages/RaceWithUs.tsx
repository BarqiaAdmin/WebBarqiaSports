import React from 'react';

import './RaceWithUs.css';

import NavBar from '../components/NavBar/NavBar.tsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import VideoKick from '../components/VideoKick/VideoKick.tsx'

const RaceWithUs = () => {
    return (
        <Container id='race-with-us' style={{color: 'white', padding: '100px 0'}}>
            <VideoKick />            
            <div id='race-with-us-content' className="row" style={{background: 'transparent', zIndex: '1', position: 'relative'}}>
                <Row>
                    <div id='ovalo'>
                        <div id='estadio-1' className='estadio'>
                            1
                            <img src='/img/levels/barqia-level-1.png' />
                            <div className='estadio-descripcion'>
                                <h1>Level 1</h1>
                                <ul>
                                    <li>360° Filming</li>
                                </ul>
                                <p>
                                    Includes filming with 360º cameras (4k) of a match or training session
                                </p>
                            </div>
                        </div>
                        
                        <div id='estadio-2' className='estadio'>
                            2
                            <img src='/img/levels/barqia-level-2.png' />
                            <div className='estadio-descripcion'>
                                <h1>Level 2</h1>
                                <ul>
                                    <li>360° Filming - Advanced</li>
                                    <li>Trivia Assembly (1)</li>
                                </ul>
                                <p>
                                    Filming with 360º cameras (4K and 8K)   and carrying out a trivia related to  filming
                                </p>
                            </div>
                        </div>

                        <div id='estadio-3' className='estadio'>
                            3
                            <img src='/img/levels/barqia-level-3.png' />
                            <div className='estadio-descripcion'>
                                <h1>Level 3</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia Assembly (2)</li>
                                </ul>
                                <p>
                                    Add a 360º interview to the filming,    also include the use of a drone and a  trivia for each filming
                                </p>
                            </div>
                        </div>

                        <div id='estadio-4' className='estadio'>
                            4
                            <img src='/img/levels/barqia-level-4.png' />
                            <div className='estadio-descripcion'>
                                <h1>Level 4</h1>
                                <ul>
                                    <li>360° Filming</li>
                                    <li>360° Interview</li>
                                    <li>Trivia Assembly (2)</li>
                                    <li>360° Virtual Tour</li>
                                </ul>
                                <p>
                                    In addition to the films and trivia,    experience the immersive world, add a  virtual tour of your club for your fans  and show them what this world is like    through the VR glasses that Barqia     Sports will provide you
                                </p>
                            </div>
                        </div>
                        
                        <div id='estadio-5' className='estadio'>
                            5
                            <img src='/img/levels/barqia-level-5.png' />
                            <div className='estadio-descripcion' style={{ marginTop: '-300px'}}>
                                <h1>Level 5</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia assembly (1)</li>
                                    <li>360° Virtual Tour</li>
                                    <li>Immersive VR Experience</li>
                                    <li>Expert advisor in technological     transformation</li>
                                </ul>
                                <p>
                                    From this level onwards, we provide you     with 360 support to guide you at all    times to complete each step of the     digital transformation. We added a team     member at the disposal of the sports    entity to carry out detailed monitoring.
                                </p>
                            </div>
                        </div>
                        
                        <div id='estadio-6' className='estadio'>
                            6
                            <img src='/img/levels/barqia-level-6.png' />
                            <div className='estadio-descripcion'>
                                <h1>Level 6</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia assembly (1)</li>
                                    <li>360° Virtual Tour</li>
                                    <li>Immersive VR Experience</li>
                                    <li>Expert advisor in technological     transformation</li>
                                    <li>Immersive trivial in augmented  reality</li>
                                </ul>
                                <p>
                                    The path towards a mixed reality begins.    The combination of Augmented Reality   with Virtual Reality will make the fans'  experience much more entertaining
                                </p>
                            </div>
                        </div>

                        <div id='estadio-7' className='estadio'>
                            7
                            <img src='/img/levels/barqia-level-7.png' />
                            <div className='estadio-descripcion' style={{ marginTop: '-300px'}}>
                                <h1>Level 7</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia assembly (1)</li>
                                    <li>360° Virtual Tour</li>
                                    <li>Immersive VR Experience</li>
                                    <li>Expert advisor in technological     transformation</li>
                                    <li>Immersive trivial in augmented  reality</li>
                                    <li>Immersive live streaming with 360   cameras</li>
                                </ul>
                                <p>
                                    Stream the games, training sessions,    moments that you want to show to your  fans LIVE and in 360º. A totally     innovative and novel way to conquer the     fan and with time and the incorporation     of VR glasses, you will be one step     ahead of your competitors
                                </p>
                            </div>
                        </div>
                        
                        <div id='estadio-8' className='estadio'>
                            8
                            <img src='/img/levels/barqia-level-8.png' />
                            <div className='estadio-descripcion'>
                                <h1>Level 8</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia assembly (1)</li>
                                    <li>360° Virtual Tour</li>
                                    <li>Immersive VR Experience</li>
                                    <li>Expert advisor in technological transformation</li>
                                    <li>Immersive trivial in augmented reality</li>
                                    <li>Immersive live streaming with 360 cameras</li>
                                    <li>Development oof a fantasy game</li>
                                    <li>Creation of an NFT collection</li>
                                </ul>
                                <p>
                                    In addition to 360º filming and streaming, Virtual Reality and Augmented Reality, many are talking about blockchain technology, especially a young audience that you are surely interested in captivating. Incorporate this technology too and don't leave anyone out
                                </p>
                            </div>
                        </div>
                        
                        <div id='estadio-9' className='estadio'>
                            9
                            <img src='/img/levels/barqia-level-9.png' />
                            <div className='estadio-descripcion' style={{ marginLeft: '-150px', marginTop: '-400px'}}>
                                <h1>Level 9</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia assembly (1)</li>
                                    <li>360° Virtual Tour</li>
                                    <li>Immersive VR Experience</li>
                                    <li>Expert advisor in technological     transformation</li>
                                    <li>Immersive trivial in augmented  reality</li>
                                    <li>Immersive live streaming with 360   cameras</li>
                                    <li>Development oof a fantasy game</li>
                                    <li>Creation of an NFT collection</li>
                                    <li>AI Statistics</li>
                                    <li>NFT Dynamics</li>
                                </ul>
                                <p>
                                    Your audience and your technical team   will be fascinated by real-time   statistics thanks to AI applied to    filming. Thanks to this algorithm, not     only will you be able to obtain very    valuable information, but your fans will   also be able to participate and even  invest in the development of your club   or a professional career, whether it is   an athlete or someone from the ranks who  has not yet been able to exploit it all  its potential
                                </p>
                            </div>
                        </div>
                        
                        <div id='estadio-10' className='estadio'>
                            10
                            <img src='/img/levels/barqia-level-10.png' />
                            <div className='estadio-descripcion' style={{ marginLeft: '-250px', marginTop: '-300px'}}>
                                <h1>Level 10</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia assembly (1)</li>
                                    <li>360° Virtual Tour</li>
                                    <li>Immersive VR Experience</li>
                                    <li>Expert advisor in technological transformation</li>
                                    <li>Immersive trivial in augmented reality</li>
                                    <li>Immersive live streaming with 360 cameras</li>
                                    <li>Development oof a fantasy game</li>
                                    <li>Creation of an NFT collection</li>
                                    <li>AI Statistics</li>
                                    <li>NFT Dynamics</li>
                                    <li>Augmented reality applied to sponsors</li>
                                    <li>Virtual Reality</li>
                                </ul>
                                <p>
                                    For 360 development of your business,   you also need sponsors, sponsors, and we  also think about them. Contact us and we     will tell you how you can apply our     technologies so that no one is left out
                                </p>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row id='levels-mobile'>
                    <div className="col-lg-12 col-sm-6 col-xs-1 barqia-level">
                        <Row>
                            <Col lg={6} sm={12}>
                                <h1>Level 1</h1>
                                <ul>
                                    <li>360° Filming</li>
                                </ul>
                                <p>
                                    Includes filming with 360º cameras (4k) of a match or training session
                                </p>
                            </Col>

                            <Col lg={6} sm={12}>
                                <p>
                                    <img src='/img/levels/barqia-level-1.png' style={{ width: '225px'}} />
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="col-lg-12 col-sm-6 col-xs-1 barqia-level">
                        <Row>
                            <Col lg={6} sm={12}>
                                <h1>Level 2</h1>
                                <ul>
                                    <li>360° Filming - Advanced</li>
                                    <li>Trivia Assembly (1)</li>
                                </ul>
                                <p>
                                    Filming with 360º cameras (4K and 8K) and carrying out a trivia related to filming
                                </p>
                            </Col>

                            <Col lg={6} sm={12}>
                                <p>
                                    <img src='/img/levels/barqia-level-2.png' />
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="col-lg-12 col-sm-6 col-xs-1 barqia-level">
                        <Row>
                            <Col lg={6} sm={12}>
                                <h1>Level 3</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia Assembly (2)</li>
                                </ul>
                                <p>
                                    Add a 360º interview to the filming, also include the use of a drone and a trivia for each filming
                                </p>
                            </Col>

                            <Col lg={6} sm={12}>
                                <p>
                                    <img src='/img/levels/barqia-level-3.png' />
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="col-lg-12 col-sm-6 col-xs-1 barqia-level">
                        <Row>
                            <Col lg={6} sm={12}>
                                <h1>Level 4</h1>
                                <ul>
                                    <li>360° Filming</li>
                                    <li>360° Interview</li>
                                    <li>Trivia Assembly (2)</li>
                                    <li>360° Virtual Tour</li>
                                </ul>
                                <p>
                                    In addition to the films and trivia, experience the immersive world, add a virtual tour of your club for your fans and show them what this world is like through the VR glasses that Barqia Sports will provide you
                                </p>
                            </Col>

                            <Col lg={6} sm={12}>
                                <p>
                                    <img src='/img/levels/barqia-level-4.png' />
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="col-lg-12 col-sm-6 col-xs-1 barqia-level">
                        <Row>
                            <Col lg={6} sm={12}>
                                <h1>Level 5</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia assembly (1)</li>
                                    <li>360° Virtual Tour</li>
                                    <li>Immersive VR Experience</li>
                                    <li>Expert advisor in technological transformation</li>
                                </ul>
                                <p>
                                    From this level onwards, we provide you with 360 support to guide you at all times to complete each step of the digital transformation. We added a team member at the disposal of the sports entity to carry out detailed monitoring.
                                </p>
                            </Col>

                            <Col lg={6} sm={12}>
                                <p>
                                    <img src='/img/levels/barqia-level-5.png' />
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="col-lg-12 col-sm-6 col-xs-1 barqia-level">
                        <Row>
                            <Col lg={6} sm={12}>
                                <h1>Level 6</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia assembly (1)</li>
                                    <li>360° Virtual Tour</li>
                                    <li>Immersive VR Experience</li>
                                    <li>Expert advisor in technological transformation</li>
                                    <li>Immersive trivial in augmented reality</li>
                                </ul>
                                <p>
                                    The path towards a mixed reality begins. The combination of Augmented Reality with Virtual Reality will make the fans' experience much more entertaining
                                </p>
                            </Col>

                            <Col lg={6} sm={12}>
                                <p>
                                    <img src='/img/levels/barqia-level-6.png' />
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="col-lg-12 col-sm-6 col-xs-1 barqia-level">
                        <Row>
                            <Col lg={6} sm={12}>
                                <h1>Level 7</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia assembly (1)</li>
                                    <li>360° Virtual Tour</li>
                                    <li>Immersive VR Experience</li>
                                    <li>Expert advisor in technological transformation</li>
                                    <li>Immersive trivial in augmented reality</li>
                                    <li>Immersive live streaming with 360 cameras</li>
                                </ul>
                                <p>
                                    Stream the games, training sessions, moments that you want to show to your fans LIVE and in 360º. A totally innovative and novel way to conquer the fan and with time and the incorporation of VR glasses, you will be one step ahead of your competitors
                                </p>
                            </Col>

                            <Col lg={6} sm={12}>
                                <p>
                                    <img src='/img/levels/barqia-level-7.png' />
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="col-lg-12 col-sm-6 col-xs-1 barqia-level">
                        <Row>
                            <Col lg={6} sm={12}>
                                <h1>Level 8</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia assembly (1)</li>
                                    <li>360° Virtual Tour</li>
                                    <li>Immersive VR Experience</li>
                                    <li>Expert advisor in technological transformation</li>
                                    <li>Immersive trivial in augmented reality</li>
                                    <li>Immersive live streaming with 360 cameras</li>
                                    <li>Development oof a fantasy game</li>
                                    <li>Creation of an NFT collection</li>
                                </ul>
                                <p>
                                    In addition to 360º filming and streaming, Virtual Reality and Augmented Reality, many are talking about blockchain technology, especially a young audience that you are surely interested in captivating. Incorporate this technology too and don't leave anyone out
                                </p>
                            </Col>

                            <Col lg={6} sm={12}>
                                <p>
                                    <img src='/img/levels/barqia-level-8.png' />
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="col-lg-12 col-sm-6 col-xs-1 barqia-level">
                        <Row>
                            <Col lg={6} sm={12}>
                                <h1>Level 9</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia assembly (1)</li>
                                    <li>360° Virtual Tour</li>
                                    <li>Immersive VR Experience</li>
                                    <li>Expert advisor in technological transformation</li>
                                    <li>Immersive trivial in augmented reality</li>
                                    <li>Immersive live streaming with 360 cameras</li>
                                    <li>Development oof a fantasy game</li>
                                    <li>Creation of an NFT collection</li>
                                    <li>AI Statistics</li>
                                    <li>NFT Dynamics</li>
                                </ul>
                                <p>
                                    Your audience and your technical team will be fascinated by real-time statistics thanks to AI applied to filming. Thanks to this algorithm, not only will you be able to obtain very valuable information, but your fans will also be able to participate and even invest in the development of your club or a professional career, whether it is an athlete or someone from the ranks who has not yet been able to exploit it all its potential
                                </p>
                            </Col>

                            <Col lg={6} sm={12}>
                                <p>
                                    <img src='/img/levels/barqia-level-9.png' />
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="col-lg-12 col-sm-6 col-xs-1 barqia-level">
                    <Row>
                        <Col lg={6} sm={12}>
                            <h1>Level 10</h1>
                                <ul>
                                    <li>360° Filming - Premium</li>
                                    <li>360° Interview</li>
                                    <li>Trivia assembly (1)</li>
                                    <li>360° Virtual Tour</li>
                                    <li>Immersive VR Experience</li>
                                    <li>Expert advisor in technological transformation</li>
                                    <li>Immersive trivial in augmented reality</li>
                                    <li>Immersive live streaming with 360 cameras</li>
                                    <li>Development oof a fantasy game</li>
                                    <li>Creation of an NFT collection</li>
                                    <li>AI Statistics</li>
                                    <li>NFT Dynamics</li>
                                    <li>Augmented reality applied to sponsors</li>
                                    <li>Virtual Reality</li>
                                </ul>
                                <p>
                                    For 360 development of your business, you also need sponsors, sponsors, and we also think about them. Contact us and we will tell you how you can apply our technologies so that no one is left out
                                </p>
                            </Col>

                            <Col lg={6} sm={12}>
                                <p>
                                    <img src='/img/levels/barqia-level-10.png' />
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Row>
                
            </div>
            <Container id='footer' style={{ background: 'black', border: '1px solid rgba(256, 256, 256, 0.2)', borderRadius: '10px', margin: '150px 0 50px 0', padding: '50px', position: 'relative', zIndex: '0'}}>
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

export default RaceWithUs;



