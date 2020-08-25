import React, { Component } from 'react'
import '../MyClothes/MyClothes.scss';
import './SignUp.scss';
import api, { createUser, createArticle, updateArticle } from '../../../api';

const Confirm = (props) => {

  const back = e => {
    e.preventDefault();
    props.previous();
  }

  const handleupdateClothe = async () => {
    try {
      await updateArticle(user);
    } catch (error) {
      console.log(error);
    }
  }

  // const date = new Date();
  const date = '2020-08-23 23:33';

  const handleFirstCreate = async () => {
    try {
      await createUser(user);
      await createArticle(clothe);
      console.log(user, clothe);
    } catch (error) {
      console.log(error);
    }
  };

  const { values: { userName, password, phone, piece, type, gender, description, city, brand, size, color, condition } } = props;
  const user = {
    userName: userName,
    email: 'email@example.com',
    phone: phone,
    password: password,
    urlPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png'
  }

  const clothe = {
    city: city,
    type: type,
    gender: gender,
    description: description,
    brand: brand,
    size: size,
    name: piece,
    color: color,
    condition: condition,
    date: date,
    urlPhoto: 'https://static.anuevayork.com/wp-content/uploads/2016/01/25231532/Que-ropa-llevar-Nueva-York-tiempo-y-estacion-1500x1021.jpg',
    phoneOwner: '3203889058',
    idOwner: '5f44aed1e88cf100081b6814'
  }

  return (
    <section className='FullCard__Info'>
      <div className='FullCard__Details'>
        <div className='FullCard__Details--item'>
          <p className='FullCard__Details--item-title'>Nombre</p>
          <p className='FullCard__Details--item-text'>{userName}</p>
        </div>
        <div className='FullCard__Details--item'>
          <p className='FullCard__Details--item-title'>Usuario</p>
          <p className='FullCard__Details--item-text'>{userName}</p>
        </div>
        <div className='FullCard__Details--item'>
          <p className='FullCard__Details--item-title'>Telefono</p>
          <p className='FullCard__Details--item-text'>{userName}</p>
        </div>
      </div>
      <div className='FullCard__Details'>
        <div className='FullCard__Details--item'>
          <p className='FullCard__Details--item-title'>Ciudad</p>
          <p className='FullCard__Details--item-text'>{city}</p>
        </div>
        <div className='FullCard__Details--item'>
          <p className='FullCard__Details--item-title'>Genero</p>
          <p className='FullCard__Details--item-text'>{gender}</p>
        </div>
        <div className='FullCard__Details--item'>
          <p className='FullCard__Details--item-title'>Categoria</p>
          <p className='FullCard__Details--item-text'>{type}</p>
        </div>
        <div className='FullCard__Details--item'>
          <p className='FullCard__Details--item-title'>Descripcion</p>
          <p className='FullCard__Details--item-text'>{description}</p>
        </div>
        <div className='FullCard__Details--item'>
          <p className='FullCard__Details--item-title'>Marca</p>
          <p className='FullCard__Details--item-text'>{brand}</p>
        </div>
        <div className='FullCard__Details--item'>
          <p className='FullCard__Details--item-title'>Talla</p>
          <p className='FullCard__Details--item-text'>{size}</p>
        </div>
        <div className='FullCard__Details--item'>
          <p className='FullCard__Details--item-title'>Nombre de Prenda</p>
          <p className='FullCard__Details--item-text'>{piece}</p>
        </div>
        <div className='FullCard__Details--item'>
          <p className='FullCard__Details--item-title'>Color</p>
          <p className='FullCard__Details--item-text'>{color}</p>
        </div>
        <div className='FullCard__Details--item'>
          <p className='FullCard__Details--item-title'>Condicion</p>
          <p className='FullCard__Details--item-text'>{condition}</p>
        </div>
      </div>

      <button onClick={back}>Atrás</button>

      <button className="Next__button" onClick={handleFirstCreate}>Confirmar y continuar</button>


      {/* 
      {user.prendas > 0 ?
        <button onClick={handleFirstCreate}>Confirmar y continuar</button>
        :
        <button onClick={handleupdateClothe}>Modificar</button>
      } */}


    </section>
  )
}

export default Confirm;