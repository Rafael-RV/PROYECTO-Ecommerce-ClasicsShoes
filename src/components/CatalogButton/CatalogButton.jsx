import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../CatalogButton/CatalogButton.css';

export const CatalogButton = () => {
  return (
    <div className="Container-catalog">
      <Link to="/catalogo">
        <Button variant="primary" className="ver-catalogo-btn">
          Ver Catálogo
        </Button>
      </Link>
    </div>
  );
};
