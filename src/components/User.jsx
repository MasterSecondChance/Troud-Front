import React from 'react';
import Header from './Header/Header';

const User = (props) => {
  return (
    <>
      <Header />
      <ul>
        <li>Modificar Datos</li>
        <li>Publicacion</li>
        <li>Cerrar Sesion</li>
      </ul>
    </>
  );
}

export default User;