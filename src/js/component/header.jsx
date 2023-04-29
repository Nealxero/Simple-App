import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import ReactPlayer from 'react-player';
import "/workspace/Simple-App/src/styles/header.css";


function Header() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id="headerCar">
      <Carousel.Item interval={11111110} className="embed-responsive.embed-responsive-16by9">
      <ReactPlayer
  url="https://www.youtube.com/embed/_SluAK6cWvM?autoplay=1&enablejsapi=1&loop=1&mute=1&modestbranding=1&showinfo=0&controls=0&disablePictureInPicture=1"
  playing
  loop
  muted
  width="100%"
  height="650px"
  top='50%'
/>

       
      </Carousel.Item >
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="https://t3.ftcdn.net/jpg/03/06/59/52/360_F_306595210_sTtKiI1G7Ulo8q3OfAXpKvMrDXOEb8eJ.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjYWRlJTIwZ2FtZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="Third slide"
        />

        
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
