import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Category from '../components/Categories/Category';
import Hero from '../components/Hero/Hero';

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