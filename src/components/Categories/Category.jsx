import React from 'react';
import './Category.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faShoePrints, faHatCowboy, faUserSecret, faMitten, faSocks } from '@fortawesome/free-solid-svg-icons';

const Category = () => {
  return (
    <div className="Category">
      <div className="Category__Item">
        <FontAwesomeIcon className="faTshirt" icon={faTshirt} title="Hombre" />
        <span className="Category__Item-Name">Camisetas</span>
      </div>
      <div className="Category__Item">
        <FontAwesomeIcon className="faShoePrints" icon={faShoePrints} title="Hombre" />
        <span className="Category__Item-Name">Calzado</span>
      </div>
      <div className="Category__Item">
        <FontAwesomeIcon className="faHatCowboy" icon={faHatCowboy} title="Hombre" />
        <span className="Category__Item-Name">Sombreros</span>
      </div>
      <div className="Category__Item">
        <FontAwesomeIcon className="faMitten" icon={faMitten} title="Hombre" />
        <span className="Category__Item-Name">Accesorios</span>
      </div>
      <div className="Category__Item">
        <FontAwesomeIcon className="faUserSecret" icon={faUserSecret} title="Hombre" />
        <span className="Category__Item-Name">Chaquetas</span>
      </div>
      <div className="Category__Item">
        <FontAwesomeIcon className="faSocks" icon={faSocks} title="Hombre" />
        <span className="Category__Item-Name">Interior</span>
      </div>
    </div>
  );
};

export default Category;