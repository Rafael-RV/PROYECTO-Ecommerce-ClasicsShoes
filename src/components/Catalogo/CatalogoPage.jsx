// componentes/Catalogo/CatalogoPage.jsx

import React from "react";
import { Link } from 'react-router-dom'; // Importa Link
import { useApiProducts } from "../../services/products";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../CSS/catalogPage.css';

export const CatalogoPage = () => {
  const { data } = useApiProducts();

  return (
    <div className='catalog-container'>
      {data && (
        <div className='card-container'>
          {data.map((product) => (
            <Card key={product._id} className='card-item'>
              <Card.Img variant="top" src={product.imagen} alt={product.modelo} />
              <Card.Body>
                <Card.Title>{product.modelo}</Card.Title>
                <Card.Text>
                  <p>Color: {product.color}</p>
                  <p>Precio: {product.precio}</p>
                </Card.Text>
                <Link to={`/detalles-producto/${product._id}`}> 
                  <Button variant="primary">Ver detalles</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
