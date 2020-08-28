import React, { Component, useContext } from 'react';
import './Confirm.scss';
import { useHistory } from 'react-router-dom';
import Header from '../HeaderLight/HeaderLight';
import api, { createUser, createArticle, updateArticle } from '../../../api';
import { DataContext } from '../../utils/DataContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Confirm = (props) => {

  const { userData, profileImage } = useContext(DataContext);

  //console.log(profileImage);

  const history = useHistory();

  const back = (e) => {
    e.preventDefault();
    props.previous();
  };

  const handleAditionalClothe = async () => {
    try {
      await createArticle({ ...clothe, phoneOwner: JSON.parse(sessionStorage.getItem("userData")).user.phone, idOwner: userData.userId });
      console.log({ ...clothe, phoneOwner: userData.userPhone, idOwner: userData.userId });
      history.push('/home');
    } catch (error) {
      console.log(error);
      toast('No se pudo crear la prenda', {
        type: 'error',
        autoClose: 2000,
      });
    }
  };

  const date = new Date();
  //const date = '2020-08-23 23:33';

  const handleFirstCreate = async () => {
    try {
      const newUser = await createUser(user);
      sessionStorage.setItem('profilePic', '')
      const newClothe = await createArticle({ ...clothe, phoneOwner: newUser.phone, idOwner: newUser.userId });
      history.push('/');
    } catch (error) {
      console.log(error);
      toast('Error al Registrar', {
        type: 'error',
        autoClose: 2000,
      });
    }
  };

  const { values: { userName, password, phone, piece, type, gender, description, city, brand, size, color, condition } } = props;
  const user = {
    userName,
    phone,
    password,
    urlPhoto: sessionStorage.getItem('profilePic'),
    //urlPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
  };

  const clothe = {
    city,
    type,
    gender,
    description,
    brand,
    size,
    name: piece,
    color,
    condition,
    urlPhoto: sessionStorage.getItem('clotheImage'),
    // urlPhoto: 'https://static.anuevayork.com/wp-content/uploads/2016/01/25231532/Que-ropa-llevar-Nueva-York-tiempo-y-estacion-1500x1021.jpg',
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <section className='Confirm'>


        {props.action === 'initialGarment' ?
          <div className='Confirm__Card'>
            <div className='Confirm__Card__Item'>
              <p className='Confirm__Card__Item--title'>Imagen de perfil</p>
              <img className='Confirm__Card__Item--image' src={sessionStorage.getItem('profilePic')} alt="" />
            </div>
            <div className='Confirm__Card__Item'>
              <p className='Confirm__Card__Item--title'>Nombre</p>
              <p className='Confirm__Card__Item--text'>{userName}</p>
            </div>
            <div className='Confirm__Card__Item'>
              <p className='Confirm__Card__Item--title'>Teléfono</p>
              <p className='Confirm__Card__Item--text'>{phone}</p>
            </div>
          </div> :
          <></>
        }

        <div className='Confirm__Card'>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Tu Prenda</p>
            <p className='Confirm__Card__Item--text'>{piece}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Categoría</p>
            <p className='Confirm__Card__Item--text'>{type}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Descripción</p>
            <p className='Confirm__Card__Item--text'>{description}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Talla</p>
            <p className='Confirm__Card__Item--text'>{size}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Género</p>
            <p className='Confirm__Card__Item--text'>{gender}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Estado</p>
            <p className='Confirm__Card__Item--text'>{condition}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Marca</p>
            <p className='Confirm__Card__Item--text'>{brand}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Color</p>
            <p className='Confirm__Card__Item--text'>{color}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <div className='Confirm__Card__Item'>
              <p className='Confirm__Card__Item--title'>Ciudad</p>
              <p className='Confirm__Card__Item--text'>{city}</p>
            </div>
          </div>
        </div>

        <div className='Confirm__Actions'>
          <button onClick={back}>Volver</button>
          {props.action === 'initialGarment' ?
            <button className='Next__button' onClick={handleFirstCreate}>Confirmar Primera</button> :
            <button className='Next__button' onClick={handleAditionalClothe}>Confirmar Adicional</button>}
        </div>
      </section>
    </>
  );
};

export default Confirm;
