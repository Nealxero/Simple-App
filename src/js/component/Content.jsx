import React from "react";
import Card from "./Card.jsx";
import "../../styles/trailer.css";

const imageUrls = [
  "https://arcadeplanet.es/wp-content/uploads/2021/04/IMG_0035-1024x736.jpg",
  "https://arcadeplanet.es/wp-content/uploads/2021/11/ASTRO.jpg",
  "https://arcadeplanet.es/wp-content/uploads/2021/11/TAIKO.jpg",
  "https://arcadeplanet.es/wp-content/uploads/2021/04/IMG_0218-2048x1365.jpg",
  "https://arcadeplanet.es/wp-content/uploads/2021/04/IMG_0057-1024x683.jpg",
  "https://arcadeplanet.es/wp-content/uploads/2021/03/IMG_0122-1024x683.jpg",
  "https://arcadeplanet.es/wp-content/uploads/2021/04/IMG_0325-1024x683.jpg",
  "https://arcadeplanet.es/wp-content/uploads/2021/04/IMG_0337-1024x683.jpg",
  "https://arcadeplanet.es/wp-content/uploads/2021/04/IMG_0021-1024x698.jpg",
];

const Content = () => {
  return (
    <div id="Trailer" >
      
      <div className="card-group">
        {" "}
        {imageUrls.map((imageUrl) => (
          <Card key={imageUrl} imageUrl={imageUrl} />
        ))}
      </div>
      <h4 className="MachineClick">
        ¡Conoce nuestra increible colección de máquinas!{" "}
      </h4>
      <a href="https://arcadeplanet.es/listado">
        <button className="MachineBtn"> Haz Click Aqui </button>
      </a>
      <iframe className="YtbEmbed"
        width="70%"
        height="450"
        src="https://www.youtube.com/embed/UPPAIdcbagI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <p>C. Siroco, 17, 41702 Dos Hermanas, Sevilla</p>
      <iframe className="MapEmbed" id="Mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.049458193789!2d-5.925111588648594!3d37.27025427200046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126cdf33ff7b0f%3A0x1369c886e03487df!2sArcade%20Planet%20-%20Sevilla%20Retro!5e0!3m2!1ses!2ses!4v1681913289365!5m2!1ses!2ses"
        width="70%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Content;
