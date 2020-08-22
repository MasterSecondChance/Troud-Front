import React, { Component } from 'react';
import UploadImage from './UploadImage';

import './SignUp.scss';

import Header from '../Header/Header';

export class SecondStep extends Component {

    continue = (e) => {
      e.preventDefault();
      this.props.next();
    }

    back = (e) => {
      e.preventDefault();
      this.props.previous();
    }

    render() {

      const { stepper, title } = this.props;

      return (
        <div>

          <Header />

          <section className='SecondStep__container'>

            <div className='Stepper__container'>
              <span>{stepper}</span>
              <button onClick={this.continue}>Omitir</button>
            </div>

            <h2>{title}</h2>

            <UploadImage />

            <div className='Back-next__buttons'>
              <button
                onClick={this.back}
                className="Back__button"
              >
                Atrás
              </button>

              <button
                onClick={this.continue}
                className="Next__button"
              >
                Siguiente
              </button>
            </div>

          </section>
        </div>
      );
    }
}

export default SecondStep;
