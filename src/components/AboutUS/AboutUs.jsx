import React from 'react';
import '../AboutUS/AboutUS.css';
import { Col, Row } from 'react-bootstrap';

export const AboutUs = () => {
    return (
        <div className="about-us-container">
            <Row>
                <Col md={7}>
                    <img
                        src="https://media.istockphoto.com/id/1346241042/es/foto/hombre-eligiendo-zapatos-cl%C3%A1sicos-mientras-hace-compras-en-la-tienda-masculina.jpg?s=1024x1024&w=is&k=20&c=nbHGqwhA1Ych_I3o8AT6KgCfM1Jl6RqXkg01707q3vw="
                        alt="Fabricando zapato"
                        className="about-us-image"
                    />
                </Col>
                <Col md={5}>
                    <div className="about-us-description">
                        <p className='bienvenidos'>Bienvenidos a ClasicsShoes</p>

                        <p>Donde la elegancia y la tradición están desde 1897 y
                            se fusionan para crear un calzado excepcional. En nuestro rincón artesanal,
                            la pasión por los detalles y la dedicación a la artesanía tradicional
                            se encuentran con cada par de zapatos que creamos.

                            En cada paso de nuestro proceso de fabricación, desde la selección
                            del cuero fino hasta la meticulosa atención al detalle en cada costura,
                            nuestros artesanos expertos trabajan incansablemente para dar vida a
                            zapatos que no solo son una prenda, sino una expresión de estilo y sofisticación.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
