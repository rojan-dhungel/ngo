import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../Images/bg-1.webp"
          alt="Discover Premium Stationery Supplies"
        />
        <Carousel.Caption>
          <h5>Discover Premium <br/>Stationery Supplies</h5>
          <p>Elevate Your Office and Creative Projects with Our High-Quality, Eco-Friendly Products.</p>
          <p><a href="shop.html" id = 'btn-discover' className="btn btn-primary">Discover Now</a></p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../Images/bg-2.webp"
          alt="Quality Writing Instruments"
        />
        <Carousel.Caption>
          <h5>Quality Writing <br/>Instruments</h5>
          <p>We offer a full range of Radius pens, Pencils, and Geometry Boxes.</p>
          <p><a href="about.html"  id = 'btn-discover' className="btn btn-primary">Discover Now</a></p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../Images/bg-3.webp"
          alt="Office Stationery Supplies"
        />
        <Carousel.Caption>
          <h5>Office Stationery <br/>Supplies</h5>
          <p>Get all your stationery items here.</p>
          <p><a href="about.html" id = 'btn-discover' className="btn btn-primary">Discover Now</a></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
