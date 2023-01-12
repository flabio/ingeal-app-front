import React, { useEffect } from "react";
import Swal from "sweetalert2";
import "../../assets/login.css";
import { useAuthStore, useForm } from "../../hooks";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

export const LoginPage = () => {
  const { startLogin, errorMessage } = useAuthStore();
  const { loginEmail, loginPassword, onInputChange } = useForm(loginFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la auntenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <>
      <form onSubmit={loginSubmit}>
        <h1>Login</h1>
        <div>
          <input
            type="email"
            className="form-control"
            placeholder="Correo"
            name="loginEmail"
            value={loginEmail}
            onChange={onInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            name="loginPassword"
            value={loginPassword}
            onChange={onInputChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-outline-primary"
          >Login</button>
        </div>
      </form>
    </>
  );
};
