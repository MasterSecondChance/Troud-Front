import React, { Component } from 'react';

import ThirdStep from '../Sign/ThirdStep';
import FourthStep from '../Sign/FourthStep';
import Confirm from '../Sign/Confirm';

class UploadClothes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      step: 1,
      data: {
        type: '',
        size: '',
        name: '',
        brand: '',
        condition: '',
        gender: '',
        description: '',
        color: '',
        urlPhoto: '',
        city: '',
      },
    };
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
    this.setState({
      data: {
        ...this.state.data,
        [input]: e.target.value,
      },
    });
  }

  render() {

    const { step } = this.state;
    const { data: { type, size, name, brand, condition, gender, description, color, urlPhoto, city } } = this.state;
    const values = { type, size, name, brand, condition, gender, description, color, urlPhoto, city };

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

export default UploadClothes;
