import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import api, { userLogin, getUsers } from '../../api';
import { DataContext } from '../utils/DataContext';

import '../components/Sign/SignIn.scss';
import SignInImage from '../assets/static/trode-card2x.png';
import Header from '../components/HeaderLight/HeaderLight';

const SignIn = (props) => {

  const history = useHistory();
  const { saveUserData } = useContext(DataContext);

  const [values, setValues] = useState('');

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjQ0OWNkZWI5ZDkwZTAwMDdlMDY0NTMiLCJlbWFpbCI6IlVzdWFyaW9QcnVlYmExQGdtYWlsLmNvbSIsImlhdCI6MTU5ODM5NjYyNiwiZXhwIjoxNTk4Mzk4NDI2fQ.GhR32tQ7gRti1xGes9JIBc-13fB9X48WhkmS-noPfgU';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleGetUsers = async (e) => {
    event.preventDefault();
    try {
      const login = await getUsers(token);
      console.log(login);
      // history.push('/home');
    } catch (error) {
      toast(error, {
        type: 'error',
        autoClose: 2000,
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const login = await userLogin(values.phone, values.password);
      //Set values in context
      saveUserData(login);
      //Redirect
      if (login.articles == 0) {
        history.push('/upload');
      } else {
        history.push('/home');
      }
    } catch (error) {
      toast(error, {
        type: 'error',
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      <Header />
      <div className='SignIn'>
        <section className='SignIn--img'>
          <img src={SignInImage} alt='Signin' />
        </section>
        <section className='SignIn__container'>

          <div className='SignIn__description-text'>
            <p>Tu aplicación para buscar, encontrar e intercambiar ropa.</p>
            <h2>Inicia sesión</h2>
          </div>

          <form className='SignIn__Form' onSubmit={handleLogin}>

            <div className='Input__container'>
              <label>
                Teléfono
                <input
                  id='phone'
                  name='phone'
                  type='text'
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
