import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUpload, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const HeaderForm = () => {
  return (
    <header className='Header'>
      <Link to="/home">
        <h1 className='Header__Title'>Trode</h1>
      </Link>
      <ul className='Header__Menu'>
        <li>
          <Link to="/home">
            <FontAwesomeIcon className="faHome" icon={faHome} title="Inicio" /> <span className="Header__Menu--itemMenu">Inicio</span>
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <FontAwesomeIcon className="faEnvelope" icon={faEnvelope} title="Mensajes" /> <span className="Header__Menu--itemMenu">Mensajes</span>
          </Link>
        </li>
        <li>
          <Link to="/user">
            <FontAwesomeIcon className="faUser" icon={faUser} title="Perfil" /> <span className="Header__Menu--itemMenu">Perfil</span>
          </Link>
        </li>
        <li className="Header__Menu--Upload">
          <Link to="/upload">
            <FontAwesomeIcon className="faUpload" icon={faUpload} title="Subir" /> <span className="Header__Menu--itemMenu">Subir</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default HeaderForm;
