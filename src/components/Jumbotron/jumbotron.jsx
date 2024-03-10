import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
// import '../Jumbotron/jumbotron.css';

export const Jumbotron = () => {
    return (
        <Container fluid className='jumbotron-container'>
            <Row className='justify-content-center align-items-center'>
                <Col>
                    <div className="jumbotron-text text-center">
                        <h1 className='jumbotron-title'>Descubre la Elegancia en Cada Paso</h1>
                        {/* <p>Bienvenido a nuestra colección exclusiva de calzado artesanal. Cada par cuenta una historia de elegancia y tradición, cuidadosamente elaborado con los mejores materiales y atención al detalle.</p> */}
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center'>
                <Col xs={10} md={8} lg={8}>
                    <Carousel className='carousel'>
                        <Carousel.Item className='carousel-item'>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

        </Container>
    );
}
