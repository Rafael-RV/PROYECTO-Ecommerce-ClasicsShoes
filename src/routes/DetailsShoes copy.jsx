// import { useEffect, useState, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { useApiProducts } from '../services/products';
// import { Container, Row, Col, Image } from 'react-bootstrap';
// import axios from 'axios';
// import { UserContext } from '../contextApi/UserContext';
// import '../CSS/DetailsShoes.css';

// export const DetailsShoes = () => {
//   const { productId } = useParams();
//   const { data } = useApiProducts();
//   const [productDetails, setProductDetails] = useState(null);
//   const { token } = useContext(UserContext);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       if (data) {
//         const details = data.find(product => product._id === productId);
//         setProductDetails(details);
//       }
//     };

//     fetchProductDetails();
//   }, [productId, data]);

//   const FuncionComprar = async () => {
//     try {
//       const unitPrice = parseFloat(productDetails?.unit_price);
      
//       if (!isNaN(unitPrice)) {
//         const response = await axios.post(
//           "http://127.0.0.1:3005/Mercado_Pago",
//           {
//             title: productDetails?.modelo,
//             unit_price: 12,
//             currency_id: "CLP",
//             quantity: 1,
//           }
//         );
  
//         window.location.href = response.data;
//       } else {
//         alert("El precio del producto no es un número válido.");
//       }
//     } catch (error) {
//       console.error("Error en la solicitud:", error);
//       if (error.response) {
//         console.error("Respuesta del servidor:", error.response.data);
//         console.error("Código de estado:", error.response.status);
//         alert("Hubo un problema al procesar la compra. Por favor, inténtalo de nuevo más tarde.");
//       }
//     }
//   };
  

//   return (
//     <Container>
//       <h2>Datos del Calzado:</h2>
//       {productDetails && (
//         <Row>
//           <Col xs={12} md={6}>
//             <Image src={productDetails.imagen} alt="imagen del zapato" fluid />
//           </Col>
//           <Col xs={12} md={6}>
//             <div>
//               <p> {productDetails.modelo}</p>
//               <p>Color: {productDetails.color}</p>
//               <p>Precio: {productDetails.precio} CLP</p>
//               {token ? (
//                 <div>
//                   <button onClick={FuncionComprar}>Comprar</button>
//                 </div>
//               ) : (
//                 <p>Inicia sesión para comprar</p>
//               )}
//             </div>
//           </Col>
//         </Row>
//       )}
//     </Container>
//   );
// };







// ------------------------------




// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Container, Card, Col, Row, Alert, Image } from 'react-bootstrap';
// import { UserContext } from '../contextApi/UserContext';

// export const DetailsShoes = () => {
//   const { productId } = useParams();
//   const [productDetails, setProductDetails] = useState(null);

//   // Utilizamos useContext para acceder al contexto del usuario
//   const { isLogged } = useContext(UserContext);

//   const [showLoginMessage, setShowLoginMessage] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`https://clasics-shoes-api.onrender.com/v1/products/${productId}`);
//         if (response.data.message === 'Products') {
//           const productFound = response.data.detail.find((p) => p._id === productId);

//           if (productFound) {
//             setProductDetails(productFound);
//           } else {
//             console.error('Producto no encontrado:', productId);
//           }
//         } else {
//           console.error('Respuesta de la API inesperada:', response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, [productId]);

//   const formatPrice = (price) => {
//     if (typeof price === 'number') {
//       return price.toLocaleString('es-ES', {
//         style: 'currency',
//         currency: 'CLP',
//       });
//     }
//     return 'Precio no válido';
//   };

//   const FuncionComprar = async () => {
//     if (isLogged) {
//       try {
//         const response = await axios.post('https://clasics-shoes-api.onrender.com/Mercado_Pago', productDetails);
//         window.location.href = response.data;
//       } catch (error) {
//         console.error('Error al intentar comprar:', error);
//         if (error.response) {
//           console.error('Respuesta del servidor:', error.response.data);
//           console.error('Código de estado:', error.response.status);
//         } else if (error.request) {
//           console.error('No se recibió respuesta del servidor');
//         } else {
//           console.error('Error:', error.message);
//         }
//       }
//     } else {
//       setShowLoginMessage(true);
//     }
//   };

//   if (!productDetails) {
//     return (
//       <Container className="mt-5">
//         <div className="ptop"></div>
//         <h2 className="titleSectionCard mt-5 ms-2 mb-4">Producto no encontrado</h2>
//         {/* Puedes adaptar aquí tu componente de contacto y pie de página si es necesario */}
//       </Container>
//     );
//   }

//   return (
//     <Container fluid className="g-0">
//       {/* Puedes adaptar aquí tu componente de carrusel si es necesario */}
//       <Container className="mb-5">
//         <h2 className="titleSection">Detalles del Calzado</h2>
//         <Card className="bodyCard h-100">
//           <Card.Body className="d-flex flex-column">
//             <Row>
//               <Col md={6} className="carImg">
//                 <Image src={productDetails.imagen} alt={productDetails.modelo} className="cardImg" fluid />
//               </Col>
//               <Col md={6}>
//                 <Card.Title className="bodyCardMarca">
//                   {productDetails.modelo} <br />
//                 </Card.Title>
//                 <Card.Text>
//                   <div className="bodyCardParagraph pb-2">Color: {productDetails.color}</div>
//                   <div className="bodyCardParagraph pb-2">Precio: {formatPrice(productDetails.precio)} CLP</div>
//                   {/* Puedes adaptar aquí otros detalles del producto */}
//                 </Card.Text>
//                 <Col md={12} className=' mt-4'>
//                   {showLoginMessage && !isLogged && (
//                     <Alert variant="warning">
//                       Debes iniciar sesión para comprar.
//                     </Alert>
//                   )}
//                   <button className='btn btn-own' onClick={FuncionComprar} disabled={!isLogged}>
//                     Comprar Mercadopago
//                   </button>
//                 </Col>
//               </Col>
//             </Row>
//           </Card.Body>
//         </Card>
//       </Container>
//       {/* Puedes adaptar aquí tu componente de contacto y pie de página si es necesario */}
//     </Container>
//   );
// };
