import React from "react";
import "/workspace/Simple-App/src/styles/trailer.css";

const Content = () => {
  return (
    <div id="Trailer">
      <h1> Conocenos </h1>
      <h2>Arcade Planet es el mayor salón de videojuegos de España, y gracias a la singularidad de sus máquinas arcade exclusivas, está considerado uno de los locales arcade abierto al público más importantes de Europa.</h2>
      
      <div className="divider" />
      <iframe
        width="60%"
        height="450"
        src="https://www.youtube.com/embed/UPPAIdcbagI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h1> Encuentranos </h1>
      <p>C/ Siroco 17 (Dos hermanas SEVILLA)</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.049458193789!2d-5.925111588648594!3d37.27025427200046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126cdf33ff7b0f%3A0x1369c886e03487df!2sArcade%20Planet%20-%20Sevilla%20Retro!5e0!3m2!1ses!2ses!4v1681913289365!5m2!1ses!2ses"
        width="60%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Content;
