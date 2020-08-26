import React, { Component } from 'react'
import './Confirm.scss';
import Header from '../HeaderLight/HeaderLight';
import api, { createUser, createArticle, updateArticle } from '../../../api';
import { useHistory } from 'react-router-dom';

const Confirm = (props) => {

  let history = useHistory();

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

  const date = new Date();
  //const date = '2020-08-23 23:33';

  const handleFirstCreate = async () => {
    try {
      const newUser = await createUser(user);
      console.log(newUser);
      const newClothe = await createArticle({ ...clothe, phoneOwner: newUser.phone, idOwner: newUser.userId });
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const { values: { userName, password, phone, piece, type, gender, description, city, brand, size, color, condition } } = props;
  const user = {
    userName: userName,
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
    urlPhoto: 'https://static.anuevayork.com/wp-content/uploads/2016/01/25231532/Que-ropa-llevar-Nueva-York-tiempo-y-estacion-1500x1021.jpg',
  }

  return (
    <>
      <Header />
      <section className='Confirm'>
        1018435584        <div className='Confirm__Card'>
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
            <p className='Confirm__Card__Item--title'>Ciudad</p>
            <p className='Confirm__Card__Item--text'>{city}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Género</p>
            <p className='Confirm__Card__Item--text'>{gender}</p>
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
            <p className='Confirm__Card__Item--title'>Marca</p>
            <p className='Confirm__Card__Item--text'>{brand}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Talla</p>
            <p className='Confirm__Card__Item--text'>{size}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Tu Prenda</p>
            <p className='Confirm__Card__Item--text'>{piece}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Color</p>
            <p className='Confirm__Card__Item--text'>{color}</p>
          </div>
          <div className='Confirm__Card__Item'>
            <p className='Confirm__Card__Item--title'>Estado</p>
            <p className='Confirm__Card__Item--text'>{condition}</p>
          </div>
        </div>

        <div className="Confirm__Actions">
          <button onClick={back}>Volver</button>
          <button className="Next__button" onClick={handleFirstCreate}>Confirmar</button>
        </div>

        {/* 
      {user.prendas > 0 ?
        <button onClick={handleFirstCreate}>Confirmar y continuar</button>
        :
        <button onClick={handleupdateClothe}>Modificar</button>
      } */}


      </section>
    </>
  )
}

export default Confirm;