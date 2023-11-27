import React, { useContext } from "react";
import { UserContext } from "../../contextApi/UserContext";
import "../../CSS/Mercado-PagoButton.css";

export const MercadoPagoButton = () => {
  const { token } = useContext(UserContext);

  const handlePayment = () => {
    // Lógica para procesar el pago con Mercado Pago
    console.log("Procesando el pago con Mercado Pago...");
  };

  return (
    <div className="mercado-pago-button-container">
      {token ? (
        <button onClick={handlePayment}>Pagar con Mercado Pago</button>
      ) : (
        <p>Inicia sesión para comprar</p>
      )}
    </div>
  );
};
