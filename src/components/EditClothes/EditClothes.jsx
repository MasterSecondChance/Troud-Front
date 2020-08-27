import React, { useState, useEffect } from 'react';

import { getArticleById } from '../../../api/index';
import ThirdStep from '../Sign/ThirdStep';
import FourthStep from '../Sign/FourthStep';
import Confirm from '../Sign/Confirm';

const EditClothes = (props) => {

  const [step, setStep] = useState(1);
  const [article, setArticle] = useState({
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
  });

  const next = () => {
    setStep(step + 1);
  };

  const previous = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    setArticle({ [input]: e.target.value });
  };

  useEffect(() => {
    const getArticle = async () => {
      try {
        const result = await getArticleById(props.id);
        setArticle(result.data.data);
      } catch (error) {
        toast(error, {
          type: 'error',
          autoClose: 2000,
        });
      }
    };

    getArticle();
  }, []);

  const renderForm = () => {
    const { type, size, name: piece, brand, condition, gender, description, color, urlPhoto, city } = article;
    const values = { type, size, piece, brand, condition, gender, description, color, urlPhoto, city };
    switch (step) {
      case 1:
        return (
          <ThirdStep
            previous={previous}
            next={next}
            handleChange={handleChange}
            values={values}
            stepper='Paso 1 de 2'
          />
        );

      case 2:
        return (
          <FourthStep
            previous={previous}
            next={next}
            handleChange={handleChange}
            values={values}
            stepper='Paso 2 de 2'
          />
        );

      case 3:
        return (
          <Confirm
            previous={previous}
            next={next}
            handleChange={handleChange}
            values={values}
            id={props.id}
          />
        );
    }
  };

  return (
    <div>
      {
        renderForm()
      }
    </div>
  );
};

export default EditClothes;
