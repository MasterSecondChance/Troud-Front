import React, { useState, useEffect } from 'react';
import './MyClothes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import api, { getUserById, getArticleByPhone } from '../../../api';

const MyClothes = () => {

  const profileImage = 'https://www.pngkey.com/png/full/357-3577496_discord-profile.png';
  const clothe = 'https://st2.depositphotos.com/2885805/5996/v/450/depositphotos_59961247-stock-illustration-businesswoman-clothes-icons.jpg';

  const [user, setUser] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const dataUser = await getUserById('5f45c3a523f0e84eb0f8062a');
        //const dataUser = await api.get('/users/5f3af1332028ba483c674c7b');
        setUser(dataUser.data.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const getArticles = await getArticleByPhone('3203889058');
        const getedArticles = getArticles.data.data;
        setArticles(getedArticles)
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    getArticles();
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

          {Object.keys(articles).map(id => (
            <Link to='/fullcard' className='MyClothes__Clothes-List-Items' key={articles[id]._id}><img src={articles[id].urlPhoto} alt='img' /></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyClothes;
