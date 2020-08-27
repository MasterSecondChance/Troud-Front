import React, { Component, useContext } from 'react';
import './Confirm.scss';
import { useHistory } from 'react-router-dom';
import Header from '../HeaderLight/HeaderLight';
import api, { createUser, createArticle, updateArticle } from '../../../api';
import { DataContext } from '../../utils/DataContext';

const Confirm = (props) => {

  const { userData } = useContext(DataContext);

  const history = useHistory();

  const back = (e) => {
    e.preventDefault();
    props.previous();
  };

  const handleUpdateClothe = async () => {
    try {
      await createArticle({ ...clothe, phoneOwner: userData.userPhone, idOwner: userData.userId });
    } catch (error) {
      toast(error, {
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
      console.log(newUser);
      const newClothe = await createArticle({ ...clothe, phoneOwner: newUser.phone, idOwner: newUser.userId });
      history.push('/home');
    } catch (error) {
      toast(error, {
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
    urlPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
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
    urlPhoto: 'https://static.anuevayork.com/wp-content/uploads/2016/01/25231532/Que-ropa-llevar-Nueva-York-tiempo-y-estacion-1500x1021.jpg',
  };

  return (
    <>
      <Header />
      <section className='Confirm'>
        <div className='Confirm__Card'>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Nombre</p>
            <p className='Confirm__Card__Item--text'>{userName}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Teléfono</p>
            <p className='Confirm__Card__Item--text'>{phone}</p>
          </div>
        </div>

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
            <button className='Next__button' onClick={handleFirstCreate}>Confirmar</button> :
            <button className='Next__button' onClick={handleUpdateClothe}>Confirmar</button>}
        </div>
      </section>
    </>
  );
};

export default Confirm;
