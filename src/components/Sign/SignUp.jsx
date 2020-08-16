import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Form.scss'

const SignUp = (props) => {

  let history = useHistory();
  const [values, setValues] = useState('')

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
        <h2>Crea una cuenta</h2>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Ingrese su correo"
          onChange={handleInputChange}
          aria-label='Usuario'
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Ingrese su Contraseña"
          onChange={handleInputChange}
          aria-label='Contraseña'
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Ingrese su Contraseña"
          aria-label='Confirmar contraseña'
        />
        <input
          type='submit'
          name='signup'
          value='Registrarse'
          aria-label='Botón registrarse'
        />
        <p className='signup'>
          ¿Ya tienes una cuenta?
            <Link to="/" aria-label='Inicia Sesion' href='#'>Inicia Sesion.</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;