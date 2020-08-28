import React, { Component } from 'react';
import axios from 'axios';

import './UploadImages.scss';

class ClotheImage extends Component {

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
        sessionStorage.setItem('clotheImage', res.data.path.profilePicture);
      });
  }

  render() {

    return (
      <div className='Upload__Image'>

        <input
          type='file'
          name='file'
          id='file'
          onChange={this.fileSelectedHandler}
        />
        <label htmlFor='file'><div>+</div></label>

        <button
          onClick={this.fileUploadHandler}
          className='Upload__image-button'
        >
          Subir prenda
        </button>
      </div>
    );
  }
}

export default ClotheImage;
