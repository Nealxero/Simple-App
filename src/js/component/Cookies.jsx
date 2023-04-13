import React from "react";
import { useState } from "react";

import "/workspace/Simple-App/src/styles/cookies.css";

const CookieBanner = () => {
  //El que es funconal

  /* const [cookieAccepted, setCookieAccepted] = useState(false);

  const acceptCookies = () => {
    setCookieAccepted(true);
    localStorage.setItem("cookieAccepted", true);
  };

  const renderCookieBanner = () => {
    if (cookieAccepted || localStorage.getItem("cookieAccepted")) {
      return null;
    } */

  // este codigo es para poder ver las cookies cada vez que refresque la pagina para su modificacion de forma mas comoda
  const [accepted, setAccepted] = useState(
    sessionStorage.getItem("cookieAccepted")
  );

  const handleAccept = () => {
    sessionStorage.setItem("cookieAccepted", true);
    setAccepted(true);
    
    
  };

  return (
    
     
        <div className="cookie-banner">
          <p>This website uses cookies to ensure you get the best experience.</p>
          <button onClick={handleAccept}>Accept</button>
        </div>
      
    
  );
};

 //return renderCookieBanner(); };

export default CookieBanner;
