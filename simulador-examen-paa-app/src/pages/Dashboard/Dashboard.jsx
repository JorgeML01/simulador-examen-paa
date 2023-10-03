import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import MainCarousel from "../../components/Carousel/";
import DashboardCards from "../../components/DashboardCards";
import "./styles.css";

function Dashboard() {
  const tokenAccess = Cookies.get("accessToken");
  const tokenRefresh = Cookies.get("refreshToken");
  let decodedToken = "";

  if (tokenAccess && tokenRefresh) {
    decodedToken = jwt_decode(tokenAccess);
  }

  const name = decodedToken.name;
  let welcomeMessage = "";

  if (name) {
    welcomeMessage = "¡Bienvenido, " + name + "!";
  } else {
    welcomeMessage = "¡Bienvenido!";
  }

  return (
    <>
      <div className="welcome-message">{welcomeMessage}</div>
      <MainCarousel />
      <DashboardCards />
    </>
  );
}

export default Dashboard;
