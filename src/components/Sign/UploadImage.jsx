import React, { Component } from 'react';

import './SignUp.scss';

export class UploadImage extends Component {

    state = {
      profileImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    }

    imageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          this.setState({ profileImage: reader.result });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
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

      const { profileImage } = this.state;

      return (
        <div className="Upload-image__container">
          <img src={profileImage} alt='Profile' />
          <input type='file' name='upload-image' id='input' accept='image/*' onChange={this.imageHandler} />
          <label htmlFor='input' />
        </div>
      );
    }
}

export default UploadImage;
