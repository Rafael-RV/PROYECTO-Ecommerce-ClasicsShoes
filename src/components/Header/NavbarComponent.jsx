import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import '../../CSS/header.css'

export const 
NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/PROYECTO-ECOMMERCE-ClasicsShoes/home">
          <img src={logo} alt="Logo de Classics Shoes" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/PROYECTO-ECOMMERCE-ClasicsShoes/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/PROYECTO-ECOMMERCE-ClasicsShoes/catalogo">Catalogo</Nav.Link>
            <Nav.Link as={Link} to="/PROYECTO-ECOMMERCE-ClasicsShoes/miPerfil">Mi Perfil</Nav.Link>
            <NavDropdown title="Inicia sesión/Registrate" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/PROYECTO-ECOMMERCE-ClasicsShoes/login">
                Inicia Sesión
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/PROYECTO-ECOMMERCE-ClasicsShoes/signup">
                Registrate
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

