import React from "react";
import '../../CSS/Mercado-PagoButton.css';




export const MercadoPagoButton = () => {
  const handlePayment = () => {
    // Lógica para procesar el pago con Mercado Pago
    console.log("Procesando el pago con Mercado Pago...");
  };

  return (
    <div className="mercado-pago-button-container">
      <button onClick={handlePayment}>Pagar con Mercado Pago</button>
    </div>
  );
};


