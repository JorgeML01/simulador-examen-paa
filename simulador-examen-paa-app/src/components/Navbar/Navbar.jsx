import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import "./styles.css";

function NavigationBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function checkLoginStatus() {
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");

    if (accessToken && refreshToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  function handleLogout() {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    navigate("/");
    window.location.reload();
  }

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary font-size-nav"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/">Simulador Admisiones UNAH</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/perfil" className="color-container-nav">
              Perfil
            </Nav.Link> */}
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
          {isLoggedIn ? (
            <Nav.Link
              eventKey={2}
              onClick={handleLogout}
              className="color-container-nav"
            >
              Logout
            </Nav.Link>
          ) : (
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
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
