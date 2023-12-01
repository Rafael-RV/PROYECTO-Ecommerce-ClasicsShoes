import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useApiProducts } from '../services/products';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import { UserContext } from '../contextApi/UserContext';
import '../CSS/DetailsShoes.css';

export const DetailsShoes = () => {
  const { productId } = useParams();
  const { data } = useApiProducts();
  const [productDetails, setProductDetails] = useState(null);
  const { token } = useContext(UserContext);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (data) {
        const details = data.find(product => product._id === productId);
        setProductDetails(details);
      }
    };

    fetchProductDetails();
  }, [productId, data]);

  const FuncionComprar = async () => {
    try {

        const response = await axios.post(
          
          "https://clasics-shoes-api.onrender.com/v1/Mercado_Pago",
   
          {
            modelo: productDetails.modelo,
            precio: productDetails.precio,
            currency_id: "CLP",
            quantity: 1,
          }
        );

        window.location.href = response.data;

    } catch (error) {
      console.error("Error en la solicitud:", error);
      if (error.response) {
        console.error("Respuesta del servidor:", error.response.data);
        console.error("Código de estado:", error.response.status);
        alert("Hubo un problema al procesar la compra. Por favor, inténtalo de nuevo más tarde.");
      } else {
        // Agregamos un log adicional en la consola si hay un error sin respuesta
        console.error("Error sin respuesta del servidor:", error.message);
      }
    }
  };

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
              <p> {productDetails.modelo}</p>
              <p>Color: {productDetails.color}</p>
              <p>Precio: {productDetails.precio} CLP</p>
              {token ? (
                <div>
                  <button onClick={FuncionComprar} className="btn btn-primary btn-comprar">Comprar</button>
                </div>
              ) : (
                <p>Inicia sesión para comprar</p>
              )}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};
