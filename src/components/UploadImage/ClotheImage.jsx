import React, { Component } from 'react';
import axios from 'axios';

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
          onChange={this.fileSelectedHandler}
        />
        <button onClick={this.fileUploadHandler}>Subir Foto Prenda</button>
      </div>
    );
  }
}

export default ClotheImage;
