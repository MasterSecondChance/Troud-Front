import React from 'react';
import './Card.scss'
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faTimes, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const image = 'https://i.pinimg.com/originals/80/a5/1a/80a51a0b7293317a273207178aa12358.jpg';
const profilePic = 'https://droplr.com/wp-content/uploads/2020/06/iconfinder_discord_2308078-512x400.png'

function Card() {
  return (
    <div className="Card">
      <div className="Card__Info">
        <div className="Card__Info__Header">
          <div>
            <img className="Card__Info__Header--Pic" src={profilePic} alt="" />
          </div>
          <span className="Card__Info__Header--name">Nombre del Perfil</span>
        </div>
        <div className="Card__Info__Img">
          <img className="Card__Info__Img__Image" src={image} alt="Img Card" />
          <div className="Card__Info__Img__Gender"><FontAwesomeIcon className="faMars" icon={faMars} title="Hombre" /></div>
          <div className="Card__Info__Img__Size">Talla: S</div>
        </div>
        <p className="Card__Info__Name">Nombre de la prenda</p>
        <div className="Card__Info__Desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium</p>
        </div>
      </div>
      <div className="Card__Actions">
        <FontAwesomeIcon className="icon faTimes" icon={faTimes} title="Trode" />
        <FontAwesomeIcon className="icon small faBolt" icon={faStar} title="Trode" />
        <FontAwesomeIcon className="icon faHeart" icon={faHeart} title="Trode" />
      </div>
    </div>
  );
}

export default Card;