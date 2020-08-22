import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Category from '../components/Categories/Category';

const Home = (props) => {

  return (
    <>
      <Header />
      <Category />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
};

export default Home;