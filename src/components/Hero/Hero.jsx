import React from "react";
import "./Hero.scss";

const Hero = ({ title, image }) => {
  return (
    <section className="Hero">
      <div>
        <div className="Hero__circle" />
        <h1 className="Hero__title" tabIndex="0">
          {title}
        </h1>
        <figure className="Hero__imageContainer">
          <img className="Hero__image" src={image} width="440" role="presentation" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
