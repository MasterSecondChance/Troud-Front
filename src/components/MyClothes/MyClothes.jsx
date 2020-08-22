import React from 'react';
import './MyClothes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MyClothes = () => {

  const profileImage = 'https://www.pngkey.com/png/full/357-3577496_discord-profile.png'
  const clothe = 'https://st2.depositphotos.com/2885805/5996/v/450/depositphotos_59961247-stock-illustration-businesswoman-clothes-icons.jpg'

  return (
    <div className="MyClothes">
      <div className="MyClothes__Profile">
        <img className="MyClothes__Profile--Image" src={profileImage} alt="image" />
        <div className="MyClothes__Profile--Info">
          <span className="MyClothes__Profile--Info-Name">Sofia Alarcon</span>
          <span className="MyClothes__Profile--Info-Number">320 388 9058</span>
          <span className="MyClothes__Profile--Info-Count">10 Prendas</span>
        </div>
        <div className="MyClothes__Profile--Config">
          <Link to="/settings">
            <FontAwesomeIcon className="icon faCog" icon={faCog} title="Config" />
          </Link>
        </div>
      </div>
      <div className="MyClothes__Clothes">
        <h1>Mis Prendas</h1>
        <div className="MyClothes__Clothes-List">

          <Link to="/fullcard" className="MyClothes__Clothes-List-Items"><img src={clothe} alt="img" /></Link>
          <Link to="/fullcard" className="MyClothes__Clothes-List-Items"><img src={clothe} alt="img" /></Link>
          <Link to="/fullcard" className="MyClothes__Clothes-List-Items"><img src={clothe} alt="img" /></Link>
          <Link to="/fullcard" className="MyClothes__Clothes-List-Items"><img src={clothe} alt="img" /></Link>
          <Link to="/fullcard" className="MyClothes__Clothes-List-Items"><img src={clothe} alt="img" /></Link>
          <Link to="/fullcard" className="MyClothes__Clothes-List-Items"><img src={clothe} alt="img" /></Link>
          <Link to="/fullcard" className="MyClothes__Clothes-List-Items"><img src={clothe} alt="img" /></Link>
          <Link to="/fullcard" className="MyClothes__Clothes-List-Items"><img src={clothe} alt="img" /></Link>
          <Link to="/fullcard" className="MyClothes__Clothes-List-Items"><img src={clothe} alt="img" /></Link>
          <Link to="/fullcard" className="MyClothes__Clothes-List-Items"><img src={clothe} alt="img" /></Link>

        </div>
      </div>
    </div>
  );
};

export default MyClothes;