import React, { Component } from 'react';

import { getArticleById } from '../../../api/index';
import ThirdStep from '../Sign/ThirdStep';
import FourthStep from '../Sign/FourthStep';
import Confirm from '../Sign/Confirm';

class EditClothes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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

  componentDidMount() {
    this.getArticle();
  }

  next = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

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
  };

  getArticle = async () => {
    this.setState({ loading: true, error: null });
    try {
      const result = await getArticleById(this.props.id);
      this.setState({ loading: false, data: result.data.data });
    } catch (error) {
      toast(error, {
        type: 'error',
        autoClose: 2000,
      });
      this.setState({ loading: false, error });
    }
  };

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
            header={false}
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
            header={false}
          />
        );

      case 3:
        return (
          <Confirm
            previous={this.previous}
            next={this.next}
            handleChange={this.handleChange}
            values={values}
            id={this.props.id}
            header={false}
          />
        );
    }
  }
}

export default EditClothes;
