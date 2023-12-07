import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

const CarouselHackJam2 = () => {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <video muted loop autoPlay style={{ width: '100%'}}>
            <source src='/videos/barqia-code-2.mp4' />
        </video>
        <Carousel.Caption>
          {/**
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <video muted loop autoPlay style={{ width: '100%'}}>
            <source src='/videos/barqia-vr-3.mp4' />
        </video>
        <Carousel.Caption>
          {/**
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <video muted loop autoPlay style={{ width: '100%'}}>
            <source src='/videos/world.mp4' />
        </video>
        <Carousel.Caption>
          {/**
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
           */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHackJam2;