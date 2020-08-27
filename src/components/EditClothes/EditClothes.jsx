import React, { useState, useEffect, useContext } from 'react';

import { getArticleByPhone } from '../../../api/index';
import { DataContext } from '../../utils/DataContext';
import ThirdStep from '../Sign/ThirdStep';
import FourthStep from '../Sign/FourthStep';

const EditClothes = () => {

  const { userData } = useContext(DataContext);

  const [step, setStep] = useState(1);
  const [article, setArticle] = useState({
    description: '',
    piece: '',
    gender: '',
    brand: '',
    size: '',
    category: '',
    quality: '',
    state: '',
  });

  const { description, piece, gender, brand, size, category, statephone } = article;
  const values = { description, piece, gender, brand, size, category, statephone };

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
        const result = await getArticleByPhone(userData.userPhone);
        setArticle(result.data.data);
        console.log(article);
      } catch (error) {
        console.log(error.response.data.message, 'Algo fallo');
      }
    };

    getArticle();
  }, []);

  const renderForm = () => {
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
