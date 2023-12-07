import React from 'react';

import NavBar from '../components/NavBar/NavBar.tsx';

import { Container, Row, Col } from 'react-bootstrap';

const CaseStudies = () => {
    return (
        <Container>
            <Row>
                <Col className='col-12'>
                    <iframe style={{width: '100%'}} src="https://www.youtube.com/embed/K7zDrT7aYa4" title="BARQIA - Matchday 360° - Gales v Argentina" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Col>
                <Col className='col-12'>
                    <iframe style={{width: '100%'}} src="https://www.youtube.com/embed/Lrh5vq9dYjQ" title="Experiencia Inmersiva De Un Evento Deportivo 🏉⚽️" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Col>
                <Col className='col-12'>
                    <iframe style={{width: '100%'}} src="https://www.youtube.com/embed/ov0tlEYgz7s" title="BARQIA - Realidad Aumentada 360° - Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Col>
                <Col className='col-12'>
                    <iframe style={{width: '100%'}} src="https://www.youtube.com/embed/P8lI9vSgFGc" title="BARQIA - Cobertura con Drone - BAC v SIC" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Col>
                <Col className='col-12'>
                    <iframe style={{width: '100%'}} src="https://www.youtube.com/embed/eJWy7Txey4s" title="En La Cancha Pero Desde Mi Casa Con Las Gafas VR 😱" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Col>
                <Col className='col-12'>
                    <iframe style={{width: '100%'}} src="https://www.youtube.com/embed/2bBC5qQSEzE?list=PLEqYsDf1-KFQo6VSupbcqbl1TU-n1SSgH" title="Entrevista en 360º con el CEO de Barqia" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Col>
                <Col className='col-12'>
                    <iframe style={{width: '100%'}} src="https://www.youtube.com/embed/mjbV3VxDm1o?list=PLEqYsDf1-KFQo6VSupbcqbl1TU-n1SSgH" title="BARQIA - KickOff 360° Rugby League - Argentina v Brasil" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Col>
                <Col className='col-12'>
                    <iframe style={{width: '100%'}} src="https://www.youtube.com/embed/kunftZ_2Mug?list=PLEqYsDf1-KFQo6VSupbcqbl1TU-n1SSgH" title="BARQIA - Virtual Tour 360° en Olivos Rugby Club" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Col>
                <Col className='col-12'>
                    <iframe style={{width: '100%'}} src="https://www.youtube.com/embed/7OSCys_d76w?list=PLEqYsDf1-KFQo6VSupbcqbl1TU-n1SSgH" title="BARQIA - Matchday 360° en Olivos Rugby Club" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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

export default CaseStudies;