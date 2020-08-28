import React, { Component } from 'react';

import ThirdStep from '../components/Sign/ThirdStep';
import FourthStep from '../components/Sign/FourthStep';
import Confirm from '../components/Sign/Confirm';

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
    const { piece, description, gender, brand, color, category, size, type, condition, city } = this.state;
    const values = { piece, description, gender, brand, color, category, size, type, condition, city };

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
            action='aditionalGarment'
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

      case 3:
        return (
          <Confirm
            previous={this.previous}
            next={this.next}
            handleChange={this.handleChange}
            values={values}
            action='aditionalGarment'
          />
        );
    }
  }
}

export default EditClothes;
