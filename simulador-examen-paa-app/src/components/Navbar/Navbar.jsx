import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Simulador Admisiones UNAH</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/ranking">Ranking</Nav.Link>
            <Nav.Link href="/carreras">Carreras</Nav.Link>
            <NavDropdown title="Simuladores" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/PAA">Prueba PAA</NavDropdown.Item>
              <NavDropdown.Item href="/PAM">Prueba PAM</NavDropdown.Item>
              <NavDropdown.Item href="/PCCNS">Prueba PCCNS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/informacion">
                Información
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/login">
              Iniciar Sesión
            </Nav.Link>
            <Nav.Link eventKey={2} href="/registro">
              Registrarse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
