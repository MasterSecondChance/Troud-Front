import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SignUp.scss'

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
    <div className='SignUp'>
      <form className="SignUp__Form" onSubmit={handleSubmit}>
        <h2>Crea tu cuenta</h2>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Ingrese su Nombre"
          onChange={handleInputChange}
          aria-label='Usuario'
        />
        <input
          id="phone"
          name="phone"
          type="number"
          placeholder="Ingrese su numero de Telefono"
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
          value='Continuar'
          aria-label='Botón registrarse'
        />
      </form>
    </div>
  );
};

export default SignUp;