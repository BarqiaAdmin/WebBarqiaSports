import React from 'react';

import './Countdown.css';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

import Countdown from 'react-countdown';

const CountdownComponent = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            console.log('Countdown finished');
        } else {
            return (
                <Container id='countdown' style={{ position: 'relative', zIndex: '1'}}>
                    <Row>
                        <Col xs={3} sm={3}>
                            <h1>
                                { days }
                            </h1>
                            <p>
                                Días
                            </p>
                        </Col>

                        <Col xs={3} sm={3}>
                            <h1>
                                { hours }
                            </h1>
                            <p>
                                Horas
                            </p>
                        </Col>

                        <Col xs={3} sm={3}>
                            <h1>
                                { minutes }
                            </h1>
                            <p>
                                Min
                            </p>
                        </Col>

                        <Col xs={3} sm={3}>
                            <h1>
                                { seconds }
                            </h1>
                            <p>
                                Seg
                            </p>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }

    return (
        <Countdown date={Date.parse('2023-12-17')} renderer={renderer} autoStart={true} />
    )
}

export default CountdownComponent;