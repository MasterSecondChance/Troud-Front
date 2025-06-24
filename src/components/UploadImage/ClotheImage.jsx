import axios from 'axios';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './UploadImages.scss';

class ClotheImage extends Component {

  state = {
    selectedFile: null,
  }

  fileSelectedHandler = async (event) => {
    await this.setState({
      selectedFile: event.target.files[0],
    });
    this.fileUploadHandler();
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post(import.meta.env.VITE_IMAGE_UPLOAD_URL || 'https://trode.afcarrion.vercel.app/api/images', fd, {
      onUploadProgress: (progressEvent) => {
        toast(`Cargando imagen: ${(progressEvent.loaded / progressEvent.total * 100).toFixed(2)} %`, {
          type: 'info',
          autoClose: 2000,
        });
        if (progressEvent.loaded / progressEvent.total == 1) {
          toast('Foto subida con éxito', {
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
          />
          <label htmlFor='file'><div>+</div></label>
          <span>Ahora haz clic en subir foto</span>
          <button
            onClick={this.fileUploadHandler}
            className='Upload__image-button'
          >
            Subir prenda
          </button>
        </div>
      </>
    );
  }
}

export default ClotheImage;
