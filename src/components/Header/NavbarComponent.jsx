import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import { UserContext } from '../../contextApi/UserContext';
import '../../CSS/header.css';

export const
  NavbarComponent = () => {
    const { isAuth, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const clickLogout = () => {
      logout();
      // Redirige a la página de inicio después de cerrar sesión
      navigate('/');
    }

    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Nav.Link as={Link} to="/">
            <img src={logo} alt="Logo de Classics Shoes" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/catalogo">Catalogo</Nav.Link>

              {/* Mostrar el enlace "Mi Perfil" solo cuando el usuario está autenticado */}
              {isAuth && (
                <Nav.Link as={Link} to="/profile">
                  Mi Perfil
                </Nav.Link>
              )}

              <NavDropdown title="Inicia sesión" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/login">
                  Inicia Sesión
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/signup">
                  Registrate
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {isAuth && <button onClick={clickLogout} className="logout-navbar-button ms-2">
              Cerrar Sesión
            </button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

