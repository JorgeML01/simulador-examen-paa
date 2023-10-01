import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function Dashboard() {
  const tokenAccess = Cookies.get("accessToken");
  const tokenRefresh = Cookies.get("refreshToken");
  let decodedToken = "";

  if (tokenAccess && tokenRefresh) {
    decodedToken = jwt_decode(tokenAccess);
  }
  const name = decodedToken.name;
  console.log(name);

  return <>¡Bienvenido {name}!</>;
}

export default Dashboard;
