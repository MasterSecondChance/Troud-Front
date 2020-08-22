import React from 'react';
import ReactDOM from 'react-dom';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Modal.scss';

function Modal(props) {

  return ReactDOM.createPortal(
    <div className='Modal'>
      <div className='Modal__container'>
        <div className='Modal__close-icon'>
          <FontAwesomeIcon
            icon={faTimes}
            className='Icon'
          />
        </div>
        <img
          src='https://cdn.onlinewebfonts.com/svg/img_237204.png'
          alt='Okay'
          className='Modal__image'
        />
        <div className='Modal__text'>
          <h1>¡Whoo Hoo!</h1>
          <p>Tu registro ha sido exitoso.</p>
        </div>
        <button
          className='Modal__button-explore'
        >
          Explorar
        </button>
      </div>

    </div>,
    document.getElementById('modal'),
  );
}

export default Modal;
