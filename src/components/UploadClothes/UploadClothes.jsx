import React, { Component } from 'react';

import ThirdStep from '../Sign/ThirdStep';
import FourthStep from '../Sign/FourthStep';

class EditClothes extends Component {

  state = {
    step: 1,
    description: '',
    piece: '',
    gender: '',
    brand: '',
    size: '',
    category: '',
    quality: '',
    state: '',
  }

  next = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  }

  previous = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  }

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  }

  render() {

    const { step } = this.state;
    const { description, piece, gender, brand, size, category, statephone } = this.state;
    const values = { description, piece, gender, brand, size, category, statephone };

    switch (step) {
      case 1:
        return (
          <ThirdStep
            previous={this.previous}
            next={this.next}
            handleChange={this.handleChange}
            values={values}
            stepper='Paso 1 de 2'
            title='Sube tu prenda'
          />
        );

      case 2:
        return (
          <FourthStep
            previous={this.previous}
            next={this.next}
            handleChange={this.handleChange}
            values={values}
            stepper='Paso 2 de 2'
            title='Sube tu prenda'
          />
        );
    }
  }
}

export default EditClothes;
