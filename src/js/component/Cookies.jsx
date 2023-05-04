import React from "react";
import { useState } from "react";

import "../../styles/cookies.css";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleAccept = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="cookie-banner">
          <p>This website does NOT use cookies since its just a front page example</p>
          <button onClick={handleAccept}>I Understand</button>
        </div>
      )}
    </>
  );
};

export default CookieBanner;