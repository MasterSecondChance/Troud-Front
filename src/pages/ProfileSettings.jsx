import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ProfilePersonal from '../components/ProfilePersonal/ProfilePersonal';

const ProfileSettings = () => {
  return (
    <>
      <Header />
      <Hero
        title="Ajustes"
        image="https://trode-s3.s3.amazonaws.com/public/hero-settings.svg"
      />
      <ProfilePersonal />
    </>
  )
}

export default ProfileSettings