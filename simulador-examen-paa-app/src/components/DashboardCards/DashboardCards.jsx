import "./styles.css";
import Card from "react-bootstrap/Card";

function DashboardCards() {
  return (
    <div className="card-container">
      <Card className="individual-card">
        <Card.Header>PAA</Card.Header>
        <Card.Body>
          <Card.Title>Simulador de Prueba de Aptitud Académica</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <button type="button" class="btn btn-dark">
            Dark
          </button>
        </Card.Body>
      </Card>
      <Card className="individual-card">
        <Card.Header>PAM</Card.Header>
        <Card.Body>
          <Card.Title>Simulador de Prueba de Aptitud Matemática</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <button type="button" class="btn btn-dark">
            Dark
          </button>
        </Card.Body>
      </Card>
      <Card className="individual-card-last">
        <Card.Header>PCNNS</Card.Header>
        <Card.Body>
          <Card.Title>
            Simulador de Prueba de Conocimientos de Ciencias Naturales y de la
            Salud
          </Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <button type="button" class="btn btn-dark">
            Dark
          </button>
        </Card.Body>
      </Card>
      <Card className="individual-card-last">
        <Card.Header>RANKING</Card.Header>
        <Card.Body>
          <Card.Title>Ranking General</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <button type="button" class="btn btn-dark">
            Dark
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DashboardCards;
