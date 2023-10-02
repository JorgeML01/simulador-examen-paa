import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

function LoginForm() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSuccess = () => {
    navigate("/");
    window.location.reload();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://ill-red-giraffe-tux.cyclic.cloud/login",
        {
          email,
          password,
        }
      );

      Cookies.set("accessToken", response.data.data.accessToken);
      Cookies.set("refreshToken", response.data.data.refreshToken);

      handleLoginSuccess();
    } catch (error) {
      // Login error
      if (error.response) {
        if (error.response.status === 400 || error.response.status === 401) {
          setErrorMessages({
            field: "credentials",
            message: "Invalid email or password.",
          });
        }
      } else if (error.request) {
        console.error("No se recibió respuesta del servidor...");
        setErrorMessages({
          field: "credentials",
          message: "Invalid email or password.",
        });
      } else {
        console.error("Error al hacer la solicitud:", error.message);
      }
    }
  };

  const renderErrorMessage = (field) => {
    if (errorMessages.field === field) {
      return <div className="error">{errorMessages.message}</div>;
    } else {
      return null;
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Inicio de Sesión</h2>
              <p className="text-white-50 mb-5">
                ¡Ingresa tu correo y contraseña!
              </p>
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Dirección de correo"
                id="formControlLg1"
                type="email"
                size="lg"
                name="email"
                onChange={handleChangeEmail}
              />
              {renderErrorMessage("email")}
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Contraseña"
                id="formControlLg2"
                type="password"
                size="lg"
                name="password"
                onChange={handleChangePassword}
              />
              {renderErrorMessage("password")}
              {renderErrorMessage("credentials")}
              <p className="small mb-3 pb-lg-2">
                <a className="text-white-50" href="#!">
                  ¿Olvidaste la contraseña?
                </a>
              </p>
              <button
                type="button"
                className="btn btn-light"
                onClick={handleSubmit}
              >
                Ingresar
              </button>
              {/*   */}
              <div className="d-flex flex-row mt-3 mb-5"></div>
              <div>
                <p className="mb-0">
                  ¿No tienes una cuenta?{" "}
                  <a href="/login" className="text-white-50 fw-bold">
                    Regístrate
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginForm;
