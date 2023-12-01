import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import { UserContext } from '../../contextApi/UserContext';
import '../../CSS/header.css';

export const NavbarComponent = () => {
  const { isAuth, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const clickLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar className='header'>
      <Container className='navBar'>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="Logo de Classics Shoes" className="img-fluid" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className="text-dark fs-5 me-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/catalogo" className="text-dark fs-5 me-3">
              Catalogo
            </Nav.Link>

            {isAuth && (
              <Nav.Link as={Link} to="/profile" className="text-dark fs-5 me-3">
                Mi Perfil
              </Nav.Link>
            )}

            <NavDropdown title="Inicia sesión" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login" className="text-dark fs-5">
                Inicia Sesión
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup" className="text-dark fs-5">
                Registrate
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {isAuth && (
            <button onClick={clickLogout} className="btn btn-primary fs-5">
              Cerrar Sesión
            </button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
