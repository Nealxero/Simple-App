import React from "react";
import Navbar from "./Navbar.js";
import Header from "./header.jsx";
import CookieBanner from "./Cookies.jsx";
import Content from "./Content.jsx";
import Nosotros from "./Nosotros.jsx";
import ArcadeScheduleAndPrices from "./Schedule&Price.jsx";
//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ArcadeScheduleAndPrices/>
      <Content />
      <Nosotros/>
      <CookieBanner />
    </div>
  );
};

export default Home;
