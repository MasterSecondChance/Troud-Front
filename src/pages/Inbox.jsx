import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ListOfMessages from '../components/ListOfMessages/ListOfMessages';
import messagesIllustration from '../assets/hero-image@2x.png';

const Inbox = () => {
  return (
    <>
      <Header/>
      <Hero
        title="Mis Mensajes"
        image={messagesIllustration}
      />
      <ListOfMessages />
    </>
  )
}

export default Inbox