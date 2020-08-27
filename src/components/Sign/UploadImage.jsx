import React, { Component } from 'react';
import axios from 'axios';
import './SignUp.scss';

export class UploadImage extends Component {

  state = {
    profileImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    selectedFile: null
  }

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImage: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0]
    })
    this.uploadImage(e, e.target.files[0]);
  }

  continue = (e) => {
    e.preventDefault();
    this.props.next();
  }

  back = (e) => {
    e.preventDefault();
    this.props.previous();
  }

  uploadImage = async (e, image) => {
    console.log(e, image);
    const fd = new FormData();
    fd.append('file', image);
    console.log(image, 'positions');
    const sendImage = await axios.post('https://trode.afcarrion.vercel.app/api/images', fd, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Content-Type': 'multipart/form-data'
      },
    });
    console.log(sendImage);
  }

  render() {

    const { profileImage } = this.state;

    return (
      <div className="Upload-image__container">
        <img src={profileImage} alt='Profile' />
        <input className="Upload__photo-button" type='file' name='upload-image' id='input' accept='image/*' onChange={this.imageHandler} />
        <label htmlFor='input' />
      </div>
    );
  }
}

export default UploadImage;
