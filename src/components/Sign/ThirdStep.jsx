import React, { Component } from 'react';
import axios from 'axios';

import './SignUp.scss';

import Header from '../HeaderLight/HeaderLight';

export class ThirdStep extends Component {

  state = {
    selectedFile: null,
  }

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('https://trode.afcarrion.vercel.app/api/images', fd)
      .then((res) => {
        console.log(res);
      });
  }

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

            <div className="UploadClothe">
              <input
                className="UploadClothe__input"
                type="file"
                name="file"
                id="file"
                onChange={this.fileSelectedHandler}
              />
              <label className="UploadClothe__label" htmlFor="file"><div>+</div></label>
              <button onClick={this.fileUploadHandler}>Subir foto</button>
            </div>

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
