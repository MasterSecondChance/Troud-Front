import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUpload, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';



const Header = () => {

  return (
    <>
      <div className="Header">

        <div className="Header__Main">
          <Link to="/home">
            <FontAwesomeIcon className="faHome" icon={faHome} title="Trode" />
          </Link>
        </div>

        <div className="Header__Menu">
          <Link to="/home">
            <FontAwesomeIcon className="faHome" icon={faHome} title="Trode" />
          </Link>
          <FontAwesomeIcon className="faUpload" icon={faUpload} title="Buscar" />
          <FontAwesomeIcon className="faEnvelope" icon={faEnvelope} title="Añadir" />
          <Link to='/user'>
            <FontAwesomeIcon className="faUser" icon={faUser} title="Cuenta" />
          </Link>
        </div>
      </div>
    </>
  )
}
export default Header;