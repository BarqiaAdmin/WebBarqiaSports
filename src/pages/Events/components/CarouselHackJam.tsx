import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

const CarouselHackJam = () => {
  return (
    <Carousel data-bs-theme="light" style={{ margin: 'auto', marginBottom: '60px' }}>
      <Carousel.Item>
        {/**
        <video className='hide-on-mobile' muted loop autoPlay style={{ width: '50%'}}>
            <source src='/videos/barqia-vr-7.mp4' />
        </video>
         */}
        <img src='/img/barqia-sports-jam-1.jpg' />
        <Carousel.Caption>
          {/**
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/**
        <video className='hide-on-mobile' muted loop autoPlay style={{ width: '50%'}}>
            <source src='/videos/barqia-ai-2.mp4' />
        </video>
         */}
        <img src='/img/barqia-hackjam.jpg' />
        <Carousel.Caption>
          {/**
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/**
        <video className='hide-on-mobile' muted loop autoPlay style={{ width: '50%'}}>
            <source src='/videos/barqia-vr-6.mp4' />
        </video>
        */}
        <img src='/img/barqia-sports-jam-3.jpg' />
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

export default CarouselHackJam;