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

        <section className='ThirdStep__container'>

          <div className='Stepper__container'>
            <span>{stepper}</span>
          </div>

          <h2>{title}</h2>

          <h3>Datos del artículo</h3>

          <form className='ThirdStep__Form'>

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
                  <input
                  type='text'
                  name='description'
                  onChange={handleChange('description')}
                  defaultValue={values.description}
                />
              </label>
            </div>

            <div className='Form__checkbox'>
              <label>
                Mujer
                  <input
                  type='checkbox'
                  name='female'
                  onChange={handleChange('female')}
                  defaultValue={values.female}
                  className='Female__checkbox'
                />
              </label>

              <label>
                Hombre
                  <input
                  type='checkbox'
                  name='male'
                  onChange={handleChange('male')}
                  defaultValue={values.male}
                  className='Female__checkbox'
                />
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
        </section>
      </div>
    );
  }
}

export default ThirdStep;
