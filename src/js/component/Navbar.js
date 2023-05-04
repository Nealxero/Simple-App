import "/workspace/Simple-App/src/styles/navbar.css";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  function toggleNav() {
    setIsNavExpanded(!isNavExpanded);
  }
  const closeMenu = () => {
    setIsNavExpanded(false);
  };

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img src="https://arcadeplanet.es/wp-content/uploads/2021/09/logo-carga-1.png" ></img>
      </a>
      <button
        className="hamburger"
        onClick={() => {
          toggleNav();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg"className="h-5 w-5"viewBox="0 0 20 20"fill="white" >
         <path fillRule="evenodd"  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd" /> 
        </svg>
      </button>
      <div
        className={`navigation-menu ${isNavExpanded ? "expanded" : ""}`}
      >
        <ul>
          <li>
            <a href="#headerCard" onClick={closeMenu}>Inicio</a>
          </li>
          <li>
            <a href="https://arcadeplanet.es/listado">Colección</a>
          </li>
          <li>
            <a href="#Mapa" onClick={closeMenu}>Direccion</a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
