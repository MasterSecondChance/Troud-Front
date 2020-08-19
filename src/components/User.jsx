import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function User(props) {
  return (
    <>
      <Header />
      <ul>
        <li>Modificar Datos</li>
        <li>Publicacion</li>
        <li>Cerrar Sesion</li>
      </ul>
      <Footer />
    </>
  );
}

export default User;