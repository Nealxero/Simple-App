import React from "react";
import Navbar from "./Navbar.js";
import Header from "./header.jsx";
import CookieBanner from "./Cookies.jsx";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CookieBanner />
    </div>
  );
};

export default Home;
