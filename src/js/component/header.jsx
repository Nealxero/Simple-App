import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "/workspace/Simple-App/src/styles/header.css";


function Header() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id="headerCar">
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="https://elcomercio.pe/resizer/r6qahtZt8nbZr8J-tNc6tjNK74Y=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YWHPP35DDRCNFJFGRLHGYC3V6M.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="https://t3.ftcdn.net/jpg/03/06/59/52/360_F_306595210_sTtKiI1G7Ulo8q3OfAXpKvMrDXOEb8eJ.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjYWRlJTIwZ2FtZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
