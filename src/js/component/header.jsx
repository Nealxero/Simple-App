import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import ReactPlayer from "react-player";
import "/workspace/Simple-App/src/styles/header.css";

function Header() {

  return (
    <div  id="headerCard">
      <div>
      <iframe className="headeriframe" src="https://www.youtube.com/embed/_SluAK6cWvM?controls=0&playsinline=1&mute=1&rel=0&modestbranding=1&autoplay=1&loop=1&playlist=_SluAK6cWvM&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <img src="https://arcadeplanet.es/wp-content/uploads/2021/09/logo-carga-1.png" className="video-overlay"></img>
      </div>
    </div>
  );
}

export default Header;
// https://www.youtube.com/embed/_SluAK6cWvM