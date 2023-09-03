import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselSlide = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5912360/pexels-photo-5912360.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/161913/germany-history-architecture-medieval-161913.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/18119880/pexels-photo-18119880/free-photo-of-dan-ba-tr-bo-hoa-m-m-c-i.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/13835003/pexels-photo-13835003.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5511506/pexels-photo-5511506.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Fouth slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselSlide;
