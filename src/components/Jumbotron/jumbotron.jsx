// Jumbotron.js

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import '../../CSS/jumbotron.css'; 

export const Jumbotron = () => {
    return (
        <div className='jumbotron-container'>
            <Carousel className='carousel'>
                <Carousel.Item className='carousel-item'>
                    <img
                        className=" carousel-image"
                        src={img2}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="carousel-image"
                        src={img3}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className=" carousel-image"
                        src={img1}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <div className="jumbotron-text">
                <h1 className='jumbotron-title'>Descubre la Elegancia en Cada Paso</h1>
                <p>Bienvenido a nuestra colección exclusiva de calzado artesanal. Cada par cuenta una historia de elegancia y tradición, cuidadosamente elaborado con los mejores materiales y atención al detalle.</p>
            </div>
        </div>
    );
}
