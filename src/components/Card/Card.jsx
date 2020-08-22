import React from 'react';
import './Card.scss'
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart, faBolt } from '@fortawesome/free-solid-svg-icons';

const image = 'https://i.pinimg.com/originals/80/a5/1a/80a51a0b7293317a273207178aa12358.jpg';
const circle = 'https://www.onlygfx.com/wp-content/uploads/2017/11/grunge-circle-frame-6.png'

function Card() {
  return (
    <div className="Card">
      <div className="Card__Info">
        <div className="Card__Info__Header">
          <div>
            <img className="Card__Info__Header--Pic" src={circle} alt="" />
          </div>
          <span>Nombre del Perfil</span>
        </div>
        <div className="Card__Info__Img">
          <img className="Card__Info__Img__Image" src={image} alt="Img Card" />
          <div className="Card__Info__Img__Gender">Hombre</div>
          <div className="Card__Info__Img__Size">Talla: S</div>
        </div>
        <p className="Card__Info__Name">Nombre de la prenda</p>
        <div className="Card__Info__Desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium</p>
        </div>
      </div>
      <div className="Card__Actions">
        <FontAwesomeIcon className="icon faTimes" icon={faTimes} title="Trode" />
        <FontAwesomeIcon className="icon small faBolt" icon={faBolt} title="Trode" />
        <FontAwesomeIcon className="icon faHeart" icon={faHeart} title="Trode" />
      </div>
    </div>
  );
}

export default Card;