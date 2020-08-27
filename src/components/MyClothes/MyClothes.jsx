import React, { useState, useEffect, useContext } from 'react';
import './MyClothes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import api, { getUserById, getArticleByPhone } from '../../../api';
import { DataContext } from '../../utils/DataContext';

const MyClothes = () => {

  const { userData } = useContext(DataContext);

  console.log(userData);

  const profileImage = 'https://www.pngkey.com/png/full/357-3577496_discord-profile.png';
  const clothe = 'https://st2.depositphotos.com/2885805/5996/v/450/depositphotos_59961247-stock-illustration-businesswoman-clothes-icons.jpg';

  const [user, setUser] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const dataUser = await getUserById(userData.userId);
        setUser(dataUser.data.data);
      } catch (error) {
        toast(error, {
          type: 'error',
          autoClose: 2000,
        });
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const getArticles = await getArticleByPhone(userData.userPhone);
        const getedArticles = getArticles.data.data;
        setArticles(getedArticles);
      } catch (error) {
        toast(error, {
          type: 'error',
          autoClose: 2000,
        });
      }
    };
    getArticles();
  }, []);

  return (
    <div className='MyClothes'>
      <div className='MyClothes__Profile'>
        <img className='MyClothes__Profile--Image' src={userData.urlPhoto} alt='Profile' />
        <div className='MyClothes__Profile--Info'>
          <span className='MyClothes__Profile--Info-Name'>{user.userName}</span>
          <span className='MyClothes__Profile--Info-Number'>{user.phone}</span>
          <span className='MyClothes__Profile--Info-Count'>
            {userData.userArticles}
            {' '}
            Prendas
          </span>
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

          {Object.keys(articles).map((id) => (
            <Link
              to={`/details/${articles[id]._id}`}
              className='MyClothes__Clothes-List-Items'
              key={articles[id]._id}
            >
              <img src={articles[id].urlPhoto} alt='img' />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyClothes;
