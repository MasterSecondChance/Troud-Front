import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusCircle, faUser, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../utils/DataContext';

import './Header.scss';

const HeaderForm = () => {

  const { userData } = useContext(DataContext);
  const [state, setState] = useState();

  return (
    <header className='Header'>
      <Link to='/home'>
        <h1 className='Header__Title'>Trode</h1>
      </Link>
      <ul className='Header__Menu'>
        <li className='Menu-Item'>
          <Link className='Header__Menu--Item' to='/home'>
            <FontAwesomeIcon className='icon faHome' icon={faHome} title='Inicio' />
            <span className='Header__Menu--itemMenu'>Explorar</span>
          </Link>
        </li>
        <li className='Menu-Item'>
          <Link className='Header__Menu--Item' to='/inbox'>
            <FontAwesomeIcon className='icon faCommentAlt' icon={faCommentAlt} title='Mensajes' />
            <span className='Header__Menu--itemMenu'>Mensajes</span>
          </Link>
        </li>
        <li className='Menu-Item'>
          <Link className='Header__Menu--Item' to='/user'>
            <FontAwesomeIcon className='icon faUser' icon={faUser} title='Perfil' />
            <span className='Header__Menu--itemMenu'>Perfil</span>
          </Link>
        </li>
        <li className='Header__Menu--Upload Menu-Item'>
          <Link className='Header__Menu--Item' to='/upload'>
            <FontAwesomeIcon className='icon faPlusCircle' icon={faPlusCircle} title='Subir' />
            <span className='Header__Menu--itemMenu'>Subir</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default HeaderForm;
