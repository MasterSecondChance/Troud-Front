import React from 'react';
import './Card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons';


function Card() {
  return (
    <div className="Card">
      <div className="Card__Title">Titulo</div>
      <div className="Card__Categorie">Categoria</div>
      <img className="Card__Image" src="Imagen" alt="Img Card" />
      <div className="Card__Desc">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium</p>
      </div>
      <div className="Card__Likes">
        Super <FontAwesomeIcon className="faHeart" icon={faHeart} title="Trode" />
      </div>
    </div>
  );
}

export default Card;