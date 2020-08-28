import React, { Component } from 'react';
import './SignUp.scss';
import Header from '../HeaderLight/HeaderLight';

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
                  Color
                    <input
                    type='text'
                    name='color'
                    onChange={handleChange('color')}
                    defaultValue={values.color}
                  />
                </label>
              </div>

              <div className='Input__container'>
                <label>
                  Categoría
                    <select name='type' defaultValue={values.type} onChange={handleChange('type')}>
                    <option value="">Elige el tipo de prenda...</option>
                    <option value="Camisetas">Camisetas</option>
                    <option value="Pantalones">Pantalones</option>
                    <option value="Calzado">Calzado</option>
                    <option value="Accesorios">Accesorios</option>
                  </select>
                </label>
              </div>

              <div className='Input__container'>
                <label>
                  Talla
                    <input
                    type='text'
                    name='size'
                    onChange={handleChange('size')}
                    defaultValue={values.size}
                  />
                </label>
              </div>

              <div className='Input__container'>
                <label>
                  Estado
                    <select name='condition' defaultValue={values.condition} onChange={handleChange('condition')}>
                    <option value="">Estado de tu prenda...</option>
                    <option value='Nuevo'>Nuevo</option>
                    <option value='Usado'>Usado</option>
                  </select>
                </label>
              </div>

              <h3>Datos de ubicación</h3>

              <div className='Input__container'>
                <label>
                  Ciudad
                    <select name='city' defaultValue={values.city} onChange={handleChange('city')}>
                    <option value=""></option>
                    <optgroup label="Cundinamarca">
                      <option value="Bogotá">Bogotá</option>
                      <option value="Soacha">Soacha</option>
                    </optgroup>
                    <optgroup label="Antioquia">
                      <option value="Medellín">Medellín</option>
                      <option value="Sabaneta">Sabaneta</option>
                    </optgroup>
                    <optgroup label="Valle del Cauca">
                      <option value="Cali">Cali</option>
                      <option value="Buga">Buga</option>
                    </optgroup>
                  </select>
                </label>
              </div>

              {/* <button className='Preview__button'>¿Cómo se ve?</button> */}

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
