// Footer.js

import { Link } from 'react-router-dom';
import React from 'react';
import '../../CSS/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Información de contacto</h4>
            <p>Dirección: Calle Principal, Ciudad</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@clasicshoes.com</p>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <h5>Mi Cuenta</h5>
                <ul>
                  <li><Link to="/signup">Registrate</Link></li>
                  <li><Link to="/login">Inicia Sesión</Link></li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>Sobre Nosotros</h5>
                <p>Descubre la elegancia en cada paso con ClasicShoes. Ofrecemos una amplia selección de calzado clásico para cada ocasión.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
