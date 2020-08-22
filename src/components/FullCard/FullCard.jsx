import React from 'react';
import './FullCard.scss'
import Header from '../../components/Header/Header';
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faEllipsisV, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const image = 'https://st2.depositphotos.com/2885805/5996/v/450/depositphotos_59961247-stock-illustration-businesswoman-clothes-icons.jpg';
const profilePic = 'https://droplr.com/wp-content/uploads/2020/06/iconfinder_discord_2308078-512x400.png'

const FullCard = () => {

  return (
    <>
      <Header />
      <div className="FullCard">
        <div className="FullCard__Info">
          <div className="FullCard__Info__Header">
            <div className="FullCard__Info__Header--Title">
              <div>
                <img className="FullCard__Info__Header--Pic" src={profilePic} alt="" />
              </div>
              <span>Nombre del Perfil</span>
            </div>
            <FontAwesomeIcon className="options faEllipsisV" icon={faEllipsisV} title="Hombre" />
          </div>
          <div className="FullCard__Info__Img">
            <img className="FullCard__Info__Img__Image" src={image} alt="Img FullCard" />
            <div className="FullCard__Info__Img__Gender"><FontAwesomeIcon className="faMars" icon={faMars} title="Hombre" /></div>
            <div className="FullCard__Info__Img__Size">Talla: S</div>
          </div>
          <p className="FullCard__Info__Name">Nombre de la prenda</p>
          <div className="FullCard__Info__Desc">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium</p>
          </div>
          <div className="FullCard__Details">
            <div className="FullCard__Details--item">
              <label className="FullCard__Details--item-title">Marca</label>
              <p className="FullCard__Details--item-text">Standar</p>
            </div>
            <div className="FullCard__Details--item">
              <label className="FullCard__Details--item-title">Estado</label>
              <p className="FullCard__Details--item-text">Casi Nuevo</p>
            </div>
            <div className="FullCard__Details--item">
              <label className="FullCard__Details--item-title">Categoria</label>
              <p className="FullCard__Details--item-text">Accesorios</p>
            </div>
            <div className="FullCard__Details--item">
              <label className="FullCard__Details--item-title">Ciudad</label>
              <p className="FullCard__Details--item-text">Bogota</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default FullCard;