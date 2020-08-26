import React from 'react';
import './FullCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faEllipsisV, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const image = 'https://st2.depositphotos.com/2885805/5996/v/450/depositphotos_59961247-stock-illustration-businesswoman-clothes-icons.jpg';
const profilePic = 'https://droplr.com/wp-content/uploads/2020/06/iconfinder_discord_2308078-512x400.png';

const FullCard = () => {

  return (
    <>
      <Header />
      <div className='FullCard'>
        <div className='FullCard__Info'>

          <div className='FullCard__imag-wrapper'>
            <div className='FullCard__Info__Header'>
              <div className='FullCard__Info__Header--Title'>
                <div>
                  <img className='FullCard__Info__Header--Pic' src={profilePic} alt='' />
                </div>
                <span>Nombre del Perfil</span>
              </div>
              <Link to='/modify'>
                <FontAwesomeIcon className='options faEllipsisV' icon={faEllipsisV} title='Opciones' />
              </Link>
            </div>
            <div className='FullCard__Info__Img'>
              <img className='FullCard__Info__Img__Image' src={image} alt='Img FullCard' />
              <div className='FullCard__Info__Img__Gender'><FontAwesomeIcon className='faMars' icon={faMars} title='Hombre' /></div>
              <div className='FullCard__Info__Img__Size'>Talla: S</div>
            </div>
          </div>

          <div className='FullCard__Info-wrapper'>
            <p className='FullCard__Info__Name'>Nombre de la prenda</p>
            <div className='FullCard__Info__Desc'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium</p>
            </div>
            <div className='FullCard__Details'>
              <div className='FullCard__Details--item'>
                <p className='FullCard__Details--item-title'>Marca</p>
                <p className='FullCard__Details--item-text'>Standar</p>
              </div>
              <div className='FullCard__Details--item'>
                <p className='FullCard__Details--item-title'>Estado</p>
                <p className='FullCard__Details--item-text'>Casi Nuevo</p>
              </div>
              <div className='FullCard__Details--item'>
                <p className='FullCard__Details--item-title'>Categoria</p>
                <p className='FullCard__Details--item-text'>Accesorios</p>
              </div>
              <div className='FullCard__Details--item'>
                <p className='FullCard__Details--item-title'>Ciudad</p>
                <p className='FullCard__Details--item-text'>Bogota</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullCard;
