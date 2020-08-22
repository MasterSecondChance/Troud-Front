import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Category from '../components/Categories/Category';
import Hero from '../components/Hero/Hero';
import messagesIllustration from '../assets/hero-image@2x.png';

const Home = (props) => {

  return (
    <>
      <Header />
      <Hero
        title="Mis Mensajes"
        image={messagesIllustration}
      />
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