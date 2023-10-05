import "./styles.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function DashboardCards() {
  return (
    <Container>
      <div className="card-container">
        <Row>
          <Col xs={12} md={12} lg={6} className="col-container">
            <Card className="individual-card d-flexh-100">
              <Card.Header>PAA</Card.Header>
              <Card.Body className="d-flex flex-column">
                <Card.Title>
                  Simulador de Prueba de Aptitud Académica
                </Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <div className="mt-auto d-flex justify-content-center">
                  <a href="/SimuladorPAA" className="btn btn-dark button-card">
                    Explorar
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={12} lg={6} className="col-container">
            <Card className="individual-card d-flexh-100">
              <Card.Header>PAM</Card.Header>
              <Card.Body className="d-flex flex-column">
                <Card.Title>
                  Simulador de Prueba de Aptitud Matemática
                </Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <div className="mt-auto d-flex justify-content-center">
                  <a href="/SimuladorPAM" className="btn btn-dark button-card">
                    Explorar
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={6} className="col-container">
            <Card className="individual-card-last d-flexh-100">
              <Card.Header>PCCNS</Card.Header>
              <Card.Body className="d-flex flex-column">
                <Card.Title>
                  Simulador de Prueba de Conocimientos de Ciencias Naturales y
                  de la Salud
                </Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <div className="mt-auto d-flex justify-content-center">
                  <a
                    href="/SimuladorPCCNS"
                    className="btn btn-dark button-card"
                  >
                    Explorar
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={12} lg={6} className="col-container">
            <Card className="individual-card-last d-flexh-100">
              <Card.Header>RANKING</Card.Header>
              <Card.Body className="d-flex flex-column">
                <Card.Title>Ranking general de todas las pruebas</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <div className="mt-auto d-flex justify-content-center">
                  <a href="/ranking" className="btn btn-dark button-card">
                    Explorar
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default DashboardCards;
