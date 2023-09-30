import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

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
              <h2 className="fw-bold mb-2 text-uppercase">SIGN UP</h2>
              <p className="text-white-50 mb-5">Please fill out the form!</p>
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                name="email"
                onChange={handleChangeEmail}
                requiere
              />
              {renderErrorMessage("email")}
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
                onChange={handleChangePassword}
                requiere
              />
              {renderErrorMessage("password")}
              {renderErrorMessage("credentials")}
              <p className="small mb-3 pb-lg-2">
                <a class="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={handleSubmit}
              >
                Iniciar Sesión
              </button>

              <div className="d-flex flex-row mt-3 mb-5">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>
              </div>
              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <a href="#!" class="text-white-50 fw-bold">
                    Sign Up
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
