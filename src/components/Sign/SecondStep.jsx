import React, { Component } from "react";
//import UploadImage from './UploadImage';
import UploadImage from "../UploadImage/UploadImage";

import "./SignUp.scss";

import Header from "../HeaderLight/HeaderLight";

export class SecondStep extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.next();
  };

  back = (e) => {
    e.preventDefault();
    this.props.previous();
  };

  handleImageChange = (value) => {
    this.setState({ profileImage: value });
  };

  render() {
    const { stepper, title } = this.props;

    return (
      <div>
        <Header />
        <section className="SecondStep__container Form">
          <div className="White">
            <div className="Stepper__container">
              <span tabIndex="1">{stepper}</span>
              {/* <button onClick={this.continue}>Omitir</button> */}
            </div>
            <h2 tabIndex="2">{title}</h2>

            <UploadImage />

            <div className="Back-next__buttons">
              <button
                onClick={this.back}
                className="Back__button"
                aria-label="Botón atrás"
                tabIndex="5"
              >
                Atrás
              </button>

              <button
                onClick={this.continue}
                className="Next__button"
                aria-label="Botón continuar"
                tabIndex="6"
              >
                Continuar
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SecondStep;
