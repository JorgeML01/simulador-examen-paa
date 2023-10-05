import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import mathImage from "../../images/math-rank.png";
import healthImage from "../../images/ciencias-rank.jpg";
import spanishImage from "../../images/español-rank.png";
import "./styles.css";

function AllLeaderboards() {
  return (
    <CardGroup className="main-container">
      <Link className="card-link" to="/PAA">
        <Card className="card-rank">
          <Card.Img
            className="leaderboard-images"
            variant="top"
            src={spanishImage}
          />
          <Card.Body>
            <Card.Title className="text-center">Clasificación PAA</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Link className="card-link" to="/PAM">
        <Card className="card-rank">
          <Card.Img
            className="leaderboard-images"
            variant="top"
            src={mathImage}
          />
          <Card.Body>
            <Card.Title className="text-center">Clasificación PAM</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Link className="card-link" to="/PCCNS">
        <Card className="card-rank">
          <Card.Img
            className="leaderboard-images"
            variant="top"
            src={healthImage}
          />
          <Card.Body>
            <Card.Title className="text-center">Clasificación PCCNS</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </CardGroup>
  );
}

export default AllLeaderboards;
