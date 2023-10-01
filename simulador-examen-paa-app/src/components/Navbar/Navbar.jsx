import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles.css";

function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-black bg-gradient font-size-nav"
    >
      <Container>
        <Navbar.Brand href="/" className="color-container-nav">
          Simulador Admisiones UNAH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/ranking" className="color-container-nav">
              Ranking
            </Nav.Link>
            <Nav.Link href="/carreras" className="color-container-nav">
              Carreras
            </Nav.Link>
            <Nav.Link href="/simuladores" className="color-container-nav">
              Simuladores
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              eventKey={2}
              href="/login"
              className="color-container-nav"
            >
              Iniciar Sesión
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="/registro"
              className="color-container-nav"
            >
              Registrarse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
