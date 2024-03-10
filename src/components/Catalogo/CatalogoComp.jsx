import React from "react";
import { Link } from 'react-router-dom';
import { useApiProducts } from "../../services/products";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../Catalogo/catalogPage.css';

export const CatalogoComp = () => {
  const { data } = useApiProducts();

  return (
    <Container fluid className='catalog-container'>
      <Row className='justify-content-center'>
        {data && data.map((product) => (
          <Col key={product._id} xs={12} sm={6} md={4} lg={4} className='card-item'>
            <Card>
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
          </Col>
        ))}
      </Row>
    </Container>
  );
};
