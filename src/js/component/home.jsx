import React from "react";
import Navbar from "./Navbar.js";
import Header from "./header.jsx";
import CookieBanner from "./Cookies.jsx";
import Content from "./Content.jsx";
import Redes from "./Redes.jsx";
import ArcadeScheduleAndPrices from "./Schedule&Price.jsx";
import Intro from "./Intro.jsx";
import "/workspace/Simple-App/src/styles/general.css";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Intro/> 
      <ArcadeScheduleAndPrices/>
      <Content />
     
      <Redes/>
      <CookieBanner />
    </div>
  );
};

export default Home;
