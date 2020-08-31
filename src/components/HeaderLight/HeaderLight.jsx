import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderLight.scss';

const HeaderForm = () => {
  return (
    <div className='HeaderLight'>
      <Link to='/'>
        <figure className='HeaderLight__logoContainer'>
          <img className='HeaderLight__logoContainer' tabIndex='0' width='85' src='https://trode-s3.s3.amazonaws.com/public/troud-logotipo-negative-corporate-color.svg' alt='troud' />
        </figure>
      </Link>
    </div>
  );
};

export default HeaderForm;
