import React, { Component } from 'react';

import './SignUp.scss';

import Header from '../Header/Header';

export class FourthStep extends Component {

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

          <section className='Form Reset-height'>
            <div className='White Long'>
              <div>
                <span>{stepper}</span>
              </div>

              <h2>{title}</h2>

              <form className='FourthStep__Form'>

                <div className='Input__container'>
                  <label>
                    Marca
                    <input
                      type='text'
                      name='brand'
                      onChange={handleChange('brand')}
                      defaultValue={values.brand}
                    />
                  </label>
                </div>

                <div className='Input__container'>
                  <label>
                    Categoría
                    <select name='category' defaultValue={values.category} onChange={handleChange('category')}>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                      <option value='option4'>Option 4</option>
                    </select>
                  </label>
                </div>

                <div className='Input__container'>
                  <label>
                    Talla
                    <input
                      type='text'
                      name='lastName'
                      onChange={handleChange('lastName')}
                      defaultValue={values.lastName}
                    />
                  </label>
                </div>

                <div className='Input__container'>
                  <label>
                    Estado
                    <select name='quality' defaultValue={values.quality} onChange={handleChange('quality')}>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                      <option value='option4'>Option 4</option>
                    </select>
                  </label>
                </div>

                <h3>Datos de ubicación</h3>

                <div className='Input__container'>
                  <label>
                    Departamento
                    <select name='state' defaultValue={values.state} onChange={handleChange('state')}>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                      <option value='option4'>Option 4</option>
                    </select>
                  </label>
                </div>

                <div className='Input__container'>
                  <label>
                    Ciudad
                    <select name='city' defaultValue={values.city} onChange={handleChange('city')}>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                      <option value='option4'>Option 4</option>
                    </select>
                  </label>
                </div>

                <button className='Preview__button'>¿Cómo se ve?</button>

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
                    Publicar
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      );
    }
}

export default FourthStep;
