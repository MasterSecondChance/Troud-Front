import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Form.scss'


const SignIn = (props) => {

  let history = useHistory();
  const [values, setValues] = useState('')
  const [profile, setProfile] = useState(0);

  const userValues = {
    email: '',
    password: '',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    event.preventDefault();
    history.push("/home");
  }

  return (
    <div className='Sign'>
      <form className="Sign__Form" onSubmit={handleSubmit}>
        <h2>Inicia sesión</h2>
        <div>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Ingrese su correo"
            onChange=""
            onChange={handleInputChange}
          />
          <small />
        </div>

        <div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Ingrese su Contraseña"
            onChange={handleInputChange}
          />
          <small />
        </div>
        <input type='submit' name='' value='Iniciar sesión' aria-label='Botón iniciar sesión' />
        <p className='signup'>
          ¿No tienes una cuenta?
            <Link to="/signup" aria-label='Registrarse'>Regístrate.</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
