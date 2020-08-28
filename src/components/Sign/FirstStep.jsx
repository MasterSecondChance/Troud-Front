import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SignUp.scss';

import Header from '../HeaderLight/HeaderLight';

export class FirstStep extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.next();
  }

  render() {
    const { values, handleChange, stepper, title } = this.props;
    return (
      <div>
        <Header />
        <section className='Form'>
          <div className='White'>
            <div className='Form__stepper'>
              <span tabIndex="1">{stepper}</span>
            </div>
            <h2 tabIndex="2">{title}</h2>
            <form>
              <div className='Input__container'>
                <label>
                  Nombre
                    <input
                    type='text'
                    name='userName'
                    onChange={handleChange('userName')}
                    defaultValue={values.userName}
                    aria-label="Nombre de usuario"
                  />
                </label>
              </div>
              <div className='Input__container'>
                <label>
                  Teléfono
                    <input
                    type='text'
                    name='phone'
                    onChange={handleChange('phone')}
                    defaultValue={values.phone}
                    aria-label="Teléfono"
                  />
                </label>
              </div>
              <div className='Input__container'>
                <label>
                  Contraseña
                    <input
                    type='password'
                    name='password'
                    onChange={handleChange('password')}
                    defaultValue={values.password}
                    aria-label="Contraseña"
                  />
                </label>
              </div>
              <p className='Account__confirmation'>
                ¿Ya tienes una cuenta?
                  <Link className='Account__confirmation--link' to='/signin' aria-label='Iniciar sesión'>¡Inicia sesión!</Link>
              </p>
              <button
                onClick={this.continue}
                className='Center'
                aria-label="Botón continuar"
              >
                Siguiente
                </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default FirstStep;
