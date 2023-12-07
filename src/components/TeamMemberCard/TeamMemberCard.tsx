import React from 'react';

import Card from 'react-bootstrap/Card';

const TeamMemberCard = (props) => {
    return (
        <Card style={{height: '520px', marginTop: '20px', textAlign: 'center'}}>
            <Card.Img variant="top" src={props.image} style={{
                borderRadius: '100%', 
                margin: 'auto', 
                marginTop: '20px',
                objectFit: 'cover',
                width: '90%'
            }}/>
            <Card.Body>
                <Card.Title>
                    <h3 style={{fontSize: '23px', fontWeight: 'bold'}}>{props.name}</h3>
                </Card.Title>
                <Card.Text>
                    <h5>
                        <strong>{props.title}</strong>
                    </h5>
                </Card.Text>
                <Card.Text>
                    <h6>{props.degree}</h6>
                </Card.Text>
                <Card.Text>
                    <p style={{lineHeight: '1.5em'}}>
                        <em>{props.description}</em>
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default TeamMemberCard;