import React from 'react';
import './Card.scss'
import CSSTransitionGroup from 'react-transition-group'; // ES6
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faTimes, faHeart, faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const image = 'https://st2.depositphotos.com/2885805/5996/v/450/depositphotos_59961247-stock-illustration-businesswoman-clothes-icons.jpg';
const profilePic = 'https://droplr.com/wp-content/uploads/2020/06/iconfinder_discord_2308078-512x400.png'

function Card() {

  const changeImageLeft = () => {
    alert('Left: Foto Anterior');
  }

  const changeImageRigth = () => {
    alert('Rigth: Foto Siguiente');
  }

  const handleDislike = () => {
    alert('Dislike')
  }

  const handleLike = () => {
    alert('Like')
  }

  const handleSuperLike = () => {
    alert('Super Hiper Like')
  }

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
          <div className="ChevronLeft" onClick={changeImageLeft}>
            <FontAwesomeIcon className="faChevronLeft" icon={faChevronLeft} title="faChevronLeft" />
          </div>
          <div className="ChevronRight" onClick={changeImageRigth}>
            <FontAwesomeIcon className="faChevronRight" icon={faChevronRight} title="faChevronRight" />
          </div>
          <div className="center">
            <div onClick={handleDislike} className="left"></div>
            <div onClick={handleLike} className="right"></div>
          </div>
        </div>
        <p className="Card__Info__Name">Nombre de la prenda</p>
        <div className="Card__Info__Desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium</p>
        </div>
      </div>
      <div className="Card__Actions">
        <FontAwesomeIcon onClick={handleDislike} className="icon faTimes" icon={faTimes} title="No Me Gusta" />
        <FontAwesomeIcon onClick={handleSuperLike} className="icon small faBolt" icon={faStar} title="Super Like" />
        <FontAwesomeIcon onClick={handleLike} className="icon faHeart" icon={faHeart} title="Me gusta" />
      </div>
    </div>
  );
}

export default Card;