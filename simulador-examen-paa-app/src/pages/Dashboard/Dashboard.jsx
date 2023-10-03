import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import MainCarousel from "../../components/Carousel/";
import "./styles.css";

function Dashboard() {
  const tokenAccess = Cookies.get("accessToken");
  const tokenRefresh = Cookies.get("refreshToken");
  let decodedToken = "";

  if (tokenAccess && tokenRefresh) {
    decodedToken = jwt_decode(tokenAccess);
  }
  const name = decodedToken.name;

  return (
    <>
      <div className="welcome-message">¡Bienvenido, {name}!</div>
      <MainCarousel />
    </>
  );
}

export default Dashboard;
