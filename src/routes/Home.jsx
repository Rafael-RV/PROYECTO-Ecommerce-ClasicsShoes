import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Jumbotron } from '../components/Jumbotron/jumbotron';
import { CatalogButton } from '../components/CatalogButton/CatalogButton';
import { AboutUs } from '../components/AboutUS/AboutUs'

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <AboutUs />
        </Col>
      </Row>
      <Row>
        <Col>
          <Jumbotron />
        </Col>
      </Row>
      <Row>
        <Col>
          <CatalogButton />
        </Col>
      </Row>
    </Container>
  );
};


