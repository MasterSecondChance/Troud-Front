import React from "react";
import { Link } from "react-router-dom";

import "./NoChats.scss";

const NoChats = () => {
  return (
    <article className="NoChats">
      <figure className="NoChats__imageContainer">
        <img
          className="NoChats__image"
          width="120"
          src="https://trode-s3.s3.amazonaws.com/public/chats.svg"
          alt="404"
        />
      </figure>
      <h1 className="NoChats__title">Aún no tienes ningún match</h1>
      <p className="NoChats__description">
        Sigue explorando y encuentra la prenda que estás buscando.
      </p>
      <Link className="NoChats__button" to="/home" aria-label="Explorar">
        Explorar
      </Link>
    </article>
  );
};

export default NoChats;
