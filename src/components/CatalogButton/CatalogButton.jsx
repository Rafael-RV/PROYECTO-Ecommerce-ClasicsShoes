import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../CSS/CatalogButton.css';

export const CatalogButton = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div className="Container-catalog ">
      <Link to="/catalogo">
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
          className="ver-catalogo-btn"
        >
          {isLoading ? 'Loading…' : 'Ver Catálogo'}
        </Button>
      </Link>
    </div>
  );
};
