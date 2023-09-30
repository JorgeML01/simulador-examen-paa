import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

      localStorage.setItem("accessToken", response.data.data.accessToken);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);

      handleLoginSuccess();
    } catch (error) {
      // Handle login errors
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
    <div className="login-form-container">
      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
      <p className="text-white-50 mb-5">
        Please enter your login and password!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-4"
          placeholder="Email address"
          type="email"
          name="email"
          onChange={handleChangeEmail}
          required
        />
        {renderErrorMessage("email")}
        <input
          className="form-control mb-4"
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChangePassword}
          required
        />
        {renderErrorMessage("password")}
        {renderErrorMessage("credentials")}
        <button type="submit" className="btn btn-primary btn-block">
          Iniciar Sesión
        </button>
      </form>
      {/* Other UI elements */}
    </div>
  );
}

export default LoginForm;
