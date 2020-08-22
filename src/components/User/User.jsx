import React from 'react';
import MyClothes from '../MyClothes/MyClothes';
import Header from '../Header/Header'

const User = (props) => {
  return (
    <>
      <Header />
      <MyClothes />
      <ul>
        <li>Modificar Datos</li>
        <li>Publicacion</li>
        <li>Cerrar Sesion</li>
      </ul>
    </>
  );
}

export default User;