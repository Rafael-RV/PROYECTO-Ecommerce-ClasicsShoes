import React from "react";
import { Link } from 'react-router-dom';
import { useApiProducts } from "../../services/products";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../CSS/catalogPage.css';

export const CatalogoComp = () => {
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
                  Color: {product.color}
                  <br />
                  Precio: {product.precio} CLP
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
