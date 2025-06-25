import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ListOfMessages from "../components/ListOfMessages/ListOfMessages";

const Inbox = () => {
  return (
    <>
      <Header />
      <Hero
        title="Mis Mensajes"
        image="https://trode-s3.s3.amazonaws.com/public/hero-messages.svg"
      />
      <ListOfMessages />
    </>
  );
};

export default Inbox;
