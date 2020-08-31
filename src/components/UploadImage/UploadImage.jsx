import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './UploadImages.scss';

class UploadImage extends Component {

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
    axios.post('https://trode.afcarrion.vercel.app/api/images', fd, {
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
        sessionStorage.setItem('profilePic', res.data.path.profilePicture);
      });
  }

  render() {

    return (
      <>
        <ToastContainer />
        <div className='Upload__Image'>
          <span>Selecciona tu foto</span>
          <input
            type='file'
            name='file'
            id='file'
            onChange={this.fileSelectedHandler}
            aria-label='Botón seleccionar imagen'
            tabIndex='3'
          />
          <label htmlFor='file'><div>+</div></label>
          <span>Ahora haz clic en subir foto</span>
          <button
            onClick={this.fileUploadHandler}
            className='Upload__image-button'
            aria-label='Botón subir imagen'
            tabIndex='4'
          >
            Subir foto
          </button>
        </div>
      </>
    );
  }
}

export default UploadImage;
