import React from 'react';
import './AboutUs.css';
import { Carousel } from 'react-bootstrap';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugiat commodi unde provident, quas nulla quae voluptatum laborum minima. Repellat delectus facilis, quibusdam animi totam harum nihil labore quasi ipsa?
        </p>
      </div>
      <div className="about-us-carousel">
        <Carousel interval={2000} controls={false} indicators={false} fade>
          <Carousel.Item>
            <img
              src="https://via.placeholder.com/300x200?text=Image+1"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://via.placeholder.com/300x200?text=Image+2"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://via.placeholder.com/300x200?text=Image+3"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://via.placeholder.com/300x200?text=Image+4"
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://via.placeholder.com/300x200?text=Image+5"
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default AboutUs;
