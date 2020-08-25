import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

const ModifyGarment = () => {
  return (
    <>
      <Header />
      <Hero
        title='Modifica tu prenda'
        image='https://trode-s3.s3.amazonaws.com/public/hero-modify-garment.svg'
      />
    </>
  );
};

export default ModifyGarment;
