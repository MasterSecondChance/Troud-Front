import React, { useState, useEffect } from 'react';
import './MyClothes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import api, { getUserById } from '../../../api';

const MyClothes = () => {

  const profileImage = 'https://www.pngkey.com/png/full/357-3577496_discord-profile.png';
  const clothe = 'https://st2.depositphotos.com/2885805/5996/v/450/depositphotos_59961247-stock-illustration-businesswoman-clothes-icons.jpg';

  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await getUserById('5f44aed1e88cf100081b6814');
        //const result = await api.get('/users/5f3af1332028ba483c674c7b');
        setUser(result.data.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    getUser();
  }, []);

  return (
    <div className='MyClothes'>
      <div className='MyClothes__Profile'>
        <img className='MyClothes__Profile--Image' src={user.urlPhoto} alt='Profile' />
        <div className='MyClothes__Profile--Info'>
          <span className='MyClothes__Profile--Info-Name'>{user.userName}</span>
          <span className='MyClothes__Profile--Info-Number'>{user.phone}</span>
          <span className='MyClothes__Profile--Info-Count'>10 Prendas</span>
        </div>
        <div className='MyClothes__Profile--Config'>
          <Link to='/settings'>
            <FontAwesomeIcon className='icon faCog' icon={faCog} title='Config' />
          </Link>
        </div>
      </div>
      <div className='MyClothes__Clothes'>
        <h1>Mis Prendas</h1>
        <div className='MyClothes__Clothes-List'>

          <Link to='/fullcard' className='MyClothes__Clothes-List-Items'><img src={clothe} alt='img' /></Link>
          <Link to='/fullcard' className='MyClothes__Clothes-List-Items'><img src={clothe} alt='img' /></Link>
          <Link to='/fullcard' className='MyClothes__Clothes-List-Items'><img src={clothe} alt='img' /></Link>
          <Link to='/fullcard' className='MyClothes__Clothes-List-Items'><img src={clothe} alt='img' /></Link>
          <Link to='/fullcard' className='MyClothes__Clothes-List-Items'><img src={clothe} alt='img' /></Link>
          <Link to='/fullcard' className='MyClothes__Clothes-List-Items'><img src={clothe} alt='img' /></Link>
          <Link to='/fullcard' className='MyClothes__Clothes-List-Items'><img src={clothe} alt='img' /></Link>
          <Link to='/fullcard' className='MyClothes__Clothes-List-Items'><img src={clothe} alt='img' /></Link>
          <Link to='/fullcard' className='MyClothes__Clothes-List-Items'><img src={clothe} alt='img' /></Link>
          <Link to='/fullcard' className='MyClothes__Clothes-List-Items'><img src={clothe} alt='img' /></Link>

        </div>
      </div>
    </div>
  );
};

export default MyClothes;
