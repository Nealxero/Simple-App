import React from "react";
import "../../styles/Schedule&Price.css";

const ArcadeScheduleAndPrices = () => {
  return (
    <div id="PriceBox" className="flicker-in-2"
  >
      <div className="ScheduleStyle" >
        <h2 >Nuestro horario habitual</h2>
        <p>Viernes = 17:00 - 21:00</p>
        <p>Sábados/Domingos/Festivos = 11:00 - 15:00 y 17:00 - 21:00</p>
      </div>
      <div className="PriceStyle ">
        <h2>Precios:</h2>
        <p>Entrada General: 10€</p>
        <p>Entrada Infantil (menores de 10 años): 8€</p>
      </div>
      <div className="ExtraStyle">
        
        <p>Juega sin limites y sin echar monedas en las recreativas</p>
        <p
          className="Disclaimer"
        >
          *Limitado a la sesion correspondiente elegida*
        </p>
       </div>
    </div>
  );
};

export default ArcadeScheduleAndPrices;
