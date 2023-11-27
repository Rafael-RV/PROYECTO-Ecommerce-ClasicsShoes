import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApiProducts } from '../../services/products';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../CSS/DetailsShoes.css'
import { MercadoPagoButton } from '../Mercado-Pago/MercadoPagoButton';

export const DetailsShoes = () => {
  const { productId } = useParams();
  const { data } = useApiProducts();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (data) {
        const details = data.find(product => product._id === productId);
        setProductDetails(details);
      }
    };

    fetchProductDetails();
  }, [productId, data]);

  return (
    <Container>
      <h2>Datos del Calzado:</h2>
      {productDetails && (
        <Row>
          <Col xs={12} md={6}>
            <Image src={productDetails.imagen} alt="imagen del zapato" fluid />
          </Col>
          <Col xs={12} md={6}>
            <div>
              <p>Modelo: {productDetails.modelo}</p>
              <p>Color: {productDetails.color}</p>
              <p>Precio: {productDetails.precio}</p>
            <MercadoPagoButton/>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

