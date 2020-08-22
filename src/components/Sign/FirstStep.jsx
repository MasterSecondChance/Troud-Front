import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SignUp.scss';

import Header from '../Header/Header';

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
                <span>{stepper}</span>
              </div>

              <h2>{title}</h2>

              <form>

                <div className='Input__container'>
                  <label>
                    Nombre
                    <input
                      type='text'
                      name='name'
                      onChange={handleChange('name')}
                      defaultValue={values.name}
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
                    />
                  </label>
                </div>

                <div className='Input__container'>
                  <label>
                    Confirmar contraseña
                    <input
                      type='password'
                      name='confirm-password'
                      onChange={handleChange('Confirmpassword')}
                      defaultValue={values.Confirmpassword}
                    />
                  </label>
                </div>

                <p className='Account__confirmation'>
                  ¿Ya tienes una cuenta?
                  <Link className='Account__confirmation--link' to='/signin' aria-label='Registrarse'>¡Inicia sesión!</Link>
                </p>

                <button
                  onClick={this.continue}
                  className='Center'
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
