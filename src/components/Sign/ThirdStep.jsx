import React, { Component } from 'react';

import './SignUp.scss';

import Header from '../HeaderLight/HeaderLight';

export class ThirdStep extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.next();
  }

  back = (e) => {
    e.preventDefault();
    this.props.previous();
  }

  render() {

    const { values, handleChange, stepper, title } = this.props;

    return (
      <div>

        <Header />

        <section className='Form'>

          <div className='White'>
            <div className='Stepper__container'>
              <span>{stepper}</span>
            </div>

            <h2>{title}</h2>

            <h3>Datos del artículo</h3>

            <form>

              <div className='Input__container'>
                <label>
                  Prenda
                  <input
                    type='text'
                    name='piece'
                    onChange={handleChange('piece')}
                    defaultValue={values.piece}
                  />
                </label>
              </div>

              <div className='Input__container'>
                <label>
                  Descripción
                  <textarea
                    type='text'
                    name='description'
                    placeholder='Describe tu prenda.'
                    onChange={handleChange('description')}
                    defaultValue={values.description}
                  />
                </label>
              </div>

              <div className='Input__container'>
                <label>
                  Género
                  <select name='gender' defaultValue={values.gender} onChange={handleChange('gender')}>
                    <option value=''>Género de la prenda</option>
                    <option value='Hombre'>Hombre</option>
                    <option value='Mujer'>Mujer</option>
                    <option value='Unisex'>Unisex</option>
                  </select>
                </label>
              </div>

              <div className='Back-next__buttons'>
                <button
                  onClick={this.back}
                  className='Back__button'
                >
                  Atrás
                </button>

                <button
                  onClick={this.continue}
                  className='Next__button'
                >
                  Siguiente
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default ThirdStep;
