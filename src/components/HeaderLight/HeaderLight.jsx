import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderLight.scss';

const HeaderForm = () => {
  return (
    <div className='HeaderLight'>
      <Link to="/home">
        <h1 className='HeaderLight__Title'>Trode</h1>
      </Link>
    </div>
  );
};

export default HeaderForm;
