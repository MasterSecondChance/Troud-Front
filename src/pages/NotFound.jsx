import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "../assets/styles/pages/NotFound.scss";

class NotFound extends PureComponent {
  render() {
    return (
      <div className="NotFoundPage">
        <div className="NotFound">
          <figure className="NotFound__imageContainer">
            <img
              className="NotFound__image"
              width="240"
              src="https://trode-s3.s3.amazonaws.com/public/not-found.svg"
              alt="404"
            />
          </figure>
          <h1 className="NotFound__title">¡Oops!</h1>
          <p className="NotFound__description">No encontramos la página que estabas buscando.</p>
          <Link className="NotFound__button" to="/" aria-label="Inicio">
            Ir al inicio
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
