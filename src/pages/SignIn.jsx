import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUsers, userLogin } from "../../api";
import Header from "../components/HeaderLight/HeaderLight";
import "../components/Sign/SignIn.scss";

function SignIn(props) {
  const navigate = useNavigate();

  const [values, setValues] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleGetUsers = async (e) => {
    event.preventDefault();
    try {
      const login = await getUsers(token);
      // history.push('/home');
    } catch (error) {
      console.log(error);
      toast("Error al cargar Usuarios", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const login = await userLogin(values.phone, values.password);
      sessionStorage.setItem("userData", JSON.stringify(login));
      //Redirect
      if (login.articles == 0) {
        navigate("/upload");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      // toast('Usuario o Contraseña Erronea', {
      //   type: 'error',
      //   autoClose: 2000,
      // });
    }
  };

  return (
    <div>
      <ToastContainer />
      <Header />
      <div className="SignIn">
        <section className="SignIn--img">
          <img src="https://trode-s3.s3.amazonaws.com/public/trode-card@2x.png" alt="Signin" />
        </section>
        <section className="SignIn__container">
          <div className="SignIn__description-text">
            <p tabIndex="1">Tu aplicación para buscar, encontrar e intercambiar ropa.</p>
            <h2 tabIndex="2">Inicia sesión</h2>
          </div>

          <form className="SignIn__Form" onSubmit={handleLogin}>
            <div className="Input__container">
              <label>
                Teléfono
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={handleInputChange}
                  aria-label="Teléfono"
                />
                <small />
              </label>
            </div>

            <div className="Input__container">
              <label>
                Contraseña
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleInputChange}
                  aria-label="Contraseña"
                />
                <small />
              </label>
            </div>

            <button type="submit" aria-label="Botón iniciar sesión">
              Ingresar
            </button>

            <p className="Account__confirmation">
              ¿No tienes una cuenta?
              <Link className="Account__confirmation--link" to="/signup" aria-label="Registrarse">
                ¡Regístrate!
              </Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}

export default SignIn;
