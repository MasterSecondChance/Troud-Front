import React from 'react';
import Header from './Header/Header';
import MyClothes from './MyClothes/MyClothes';

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