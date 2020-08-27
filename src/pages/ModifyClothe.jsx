import React, { useEffect, useContext, useState } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import EditClothes from '../components/EditClothes/EditClothes';

const ModifyClothe = (props) => {
  const {
    match: {
      params: {
        articleId: id,
      },
    },
  } = props;

  return (
    <>
      <Header />
      <Hero
        title='Modifica tu prenda'
        image='https://trode-s3.s3.amazonaws.com/public/hero-modify-garment.svg'
      />
      <EditClothes id={id} />
    </>
  );
};

export default ModifyClothe;
