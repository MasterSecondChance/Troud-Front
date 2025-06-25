import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import UploadClothes from "../components/UploadClothes/UploadClothes";

const UploadClothe = () => {
  return (
    <>
      <Header />
      <Hero
        title="Sube tu prenda"
        image="https://trode-s3.s3.amazonaws.com/public/hero-upload-garment.svg"
      />
      <UploadClothes />
    </>
  );
};

export default UploadClothe;
