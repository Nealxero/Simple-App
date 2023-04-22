import React from "react";

const ArcadeScheduleAndPrices = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px ",
        margin: "auto",
        marginTop: "20px",
        border: "1px solid black",
        maxWidth: "500px",
      }}
    >
      <div style={{ margin: "10px", color: "#C9A86A" }}>
        <h2>Nuestro horario habitual</h2>
        <p>Viernes = 17:00 - 21:00</p>
        <p>Sábados/Domingos/Festivos = 11:00 - 15:00 y 17:00 - 21:00</p>
      </div>
      <div style={{ margin: "10px", color: 'green' }}>
        <h2>Precios:</h2>
        <p>Entrada General: 10€</p>
        <p>Entrada Infantil (menores de 10 años): 8€</p>
      </div>
      <div style={{ margin: "10px" }}>
        {" "}
        <p>Juega sin limites y sin echar monedas en las recreativas</p>
        <p
          style={{
            color: "red",
          }}
        >
          *Limitado a la sesion correspondiente elegida*
        </p>
       </div>
    </div>
  );
};

export default ArcadeScheduleAndPrices;
