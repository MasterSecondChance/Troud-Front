import React from 'react';
import './FullCard.scss'
import Header from '../../components/Header/Header';
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart, faBolt } from '@fortawesome/free-solid-svg-icons';

const image = 'https://i.pinimg.com/originals/80/a5/1a/80a51a0b7293317a273207178aa12358.jpg';
const circle = 'https://www.onlygfx.com/wp-content/uploads/2017/11/grunge-circle-frame-6.png'

function FullCard() {
  return (
    <>
      <Header />
      <div className="FullCard">
        <div className="FullCard__Info">
          <div className="FullCard__Info__Header">
            <div>
              <img className="FullCard__Info__Header--Pic" src={circle} alt="" />
            </div>
            <span>Nombre del Perfil</span>
          </div>
          <div className="FullCard__Info__Img">
            <img className="FullCard__Info__Img__Image" src={image} alt="Img FullCard" />
            <div className="FullCard__Info__Img__Gender">Hombre</div>
            <div className="FullCard__Info__Img__Size">Talla: S</div>
          </div>
          <p className="FullCard__Info__Name">Nombre de la prenda</p>
          <div className="FullCard__Info__Desc">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium</p>
          </div>
          <div className="FullCard__Details">
            <div className="FullCard__Details--item">
              <label className="FullCard__Details--item-title">Marca</label>
              <p className="FullCard__Details--item-text">Detalle de Marca</p>
            </div>
            <div className="FullCard__Details--item">
              <label className="FullCard__Details--item-title">Estado</label>
              <p className="FullCard__Details--item-text">Detalle de Estado</p>
            </div>
            <div className="FullCard__Details--item">
              <label className="FullCard__Details--item-title">Categoria</label>
              <p className="FullCard__Details--item-text">Detalle de Categoria</p>
            </div>
            <div className="FullCard__Details--item">
              <label className="FullCard__Details--item-title">Ciudad</label>
              <p className="FullCard__Details--item-text">Detalle de Ciudad</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default FullCard;