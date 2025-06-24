import axios from 'axios';
import React, { Component } from 'react';

import './SignUp.scss';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../HeaderLight/HeaderLight';
import ClotheImage from '../UploadImage/ClotheImage';

class ThirdStep extends Component {

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
    axios.post(import.meta.env.VITE_IMAGE_UPLOAD_URL || 'https://trode.afcarrion.vercel.app/api/images', fd, {
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent.loaded / progressEvent.total * 100);
        if (progressEvent.loaded / progressEvent.total == 1) {
          toast('Foto subida con exito', {
            type: 'success',
            autoClose: 2000,
          });
        }

      },
    })
      .then((res) => {
        sessionStorage.setItem('clotheImage', res.data.path.profilePicture);
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
        <ToastContainer />
        {this.props.header ? <Header /> : ''}
        <section className='Form'>
          <div className='White'>
            <div className='Stepper__container'>
              <span>{stepper}</span>
            </div>
            {(() => {
              if (this.props.action === 'initialGarment') {
                return <h2>{title}</h2>;
              }
              return '';
            })()}

            {/* <div className="UploadClothe">
              <input
                className="UploadClothe__input"
                type="file"
                name="file"
                id="file"
                onChange={this.fileSelectedHandler}
              />
              <label className="UploadClothe__label" htmlFor="file"><div>+</div></label>
              <button onClick={this.fileUploadHandler}>Subir foto</button>
            </div> */}
            <h3>Selecciona la imagen de la prenda</h3>
            <ClotheImage />
            <h3>Datos del artículo</h3>
            <form>
              <div className='Input__container'>
                <label>
                  Prenda
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
                  Descripción
                  <span className='Input__character-limit'>Máximo 30 caracteres</span>
                  <textarea
                    type='text'
                    name='description'
                    placeholder='Describe tu prenda.'
                    onChange={handleChange('description')}
                    defaultValue={values.description}
                    maxLength='30'
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
                {this.props.action === 'initialGarment' ? (
                  <button
                    onClick={this.back}
                    className='Back__button'
                  >
                    Atrás
                  </button>
                ) : ''}
                <button
                  onClick={this.continue}
                  className='Next__button'
                >
                  Continuar
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
