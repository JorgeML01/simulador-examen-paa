import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

function RegisterForm() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUpSuccess = () => {
    navigate("/login");
    window.location.reload();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://ill-red-giraffe-tux.cyclic.cloud/register",
        {
          email,
          password,
          name,
        }
      );

      console.log(response.data);
      handleSignUpSuccess();
    } catch (error) {
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

  const handleChangeName = (event) => {
    setName(event.target.value);
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
              <h2 className="fw-bold mb-2 text-uppercase">CREAR CUENTA</h2>
              <p className="text-white-50 mb-5">
                ¡Por favor llena el formulario!
              </p>
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Nombre completo"
                id="formControlLg1"
                type="name"
                size="lg"
                name="name"
                onChange={handleChangeName}
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Dirección de correo"
                id="formControlLg2"
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
                id="formControlLg3"
                type="password"
                size="lg"
                name="password"
                onChange={handleChangePassword}
              />
              {renderErrorMessage("password")}
              {renderErrorMessage("credentials")}

              <button
                type="button"
                className="btn btn-light"
                onClick={handleSubmit}
              >
                Crear cuenta
              </button>

              <div className="d-flex flex-row mt-3 mb-5"></div>
              <div>
                <p className="mb-0">
                  ¿Ya tienes una cuenta?{" "}
                  <a href="/login" className="text-white-50 fw-bold">
                    Iniciar sesión
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

export default RegisterForm;
