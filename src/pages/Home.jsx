import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Category from '../components/Categories/Category';
import { useHistory } from 'react-router-dom';

const Home = () => {

  return (
    <>
      <Header />
      <Category />
      <Card />
    </>
  );
};

export default Home;