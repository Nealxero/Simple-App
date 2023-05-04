import React from "react";
import "../../styles/About.css";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Redes = () => { 
return (  <div className="social-title"> <h4>Siguenos en nuestras redes sociales</h4>
<div className="social-icons-container">

<a href="https://www.facebook.com/">
  <div className="social-icon-F">
    <FaFacebook className="icon-F" />
  </div>
</a>
<a href="https://www.instagram.com/">
  <div className="social-icon-I">
    <FaInstagram className="icon-I" />
  </div>
</a>
<a href="https://twitter.com/">
  <div className="social-icon-T">
    <FaTwitter className="icon-T" />
  </div>
</a>
</div>
</div>
)
}

export default Redes;