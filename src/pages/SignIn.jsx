import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import '../components/Sign/SignIn.scss';
import SignInImage from '../assets/static/trode-card2x.png';

import Header from '../components/Header/Header';

const SignIn = (props) => {

  const history = useHistory();
  const [values, setValues] = useState('');
  const [profile, setProfile] = useState(0);

  const userValues = {
    phone: '',
    password: '',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    event.preventDefault();
    history.push('/home');
  };

  return (
    <div>
      <Header />
      <div className='SignIn'>
        <section className='SignIn--img'>
          <img src={SignInImage} alt="Signin"/>
        </section>
        <section className='SignIn__container'>

          <div className='SignIn__description-text'>
            <p>Tu aplicación para buscar, encontrar e intercambiar ropa.</p>
            <h2>Inicia sesión</h2>
          </div>

          <form className='SignIn__Form' onSubmit={handleSubmit}>

            <div className='Input__container'>
              <label>
                Teléfono
                <input
                  id='phone'
                  name='phone'
                  type='number'
                  onChange={handleInputChange}
                />
                <small />
              </label>
            </div>

            <div className='Input__container'>
              <label>
                Contraseña
                <input
                  id='password'
                  name='password'
                  type='password'
                  onChange={handleInputChange}
                />
                <small />
              </label>
            </div>

            <button
              type='submit'
              aria-label='Botón iniciar sesión'
            >
              Ingresar
            </button>

            <p className='Account__confirmation'>
              ¿No tienes una cuenta?
              <Link className='Account__confirmation--link' to='/signup' aria-label='Registrarse'>¡Regístrate!</Link>
            </p>
          </form>
        </section>
      </div>

    </div>
  );
};

export default SignIn;
