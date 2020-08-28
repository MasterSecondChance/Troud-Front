import React, { useState, useEffect, useContext } from 'react';
import './MyClothes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getUserById, getArticleByPhone } from '../../../api';
import 'react-toastify/dist/ReactToastify.css';

const MyClothes = () => {

  const history = useHistory();

  const [user, setUser] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      if (!sessionStorage) {
        history.push('/');
      }
      try {
        const dataUser = await getUserById(JSON.parse(sessionStorage.getItem('userData')).user._id);
        setUser(dataUser.data.data);
      } catch (error) {
        console.log(error);
        toast('Error al cargar Usuario', {
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
        const getArticles = await getArticleByPhone(JSON.parse(sessionStorage.getItem('userData')).user.phone);
        const getedArticles = getArticles.data.data;
        setArticles(getedArticles);
      } catch (error) {
        console.log(error);
        toast('Error al cargar Articulos', {
          type: 'error',
          autoClose: 2000,
        });
      }
    };
    getArticles();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className='MyClothes'>
        <div className='MyClothes__Profile'>
          <img className='MyClothes__Profile--Image' src={user.urlPhoto} alt='Profile' />
          <div className='MyClothes__Profile--Info'>
            <span className='MyClothes__Profile--Info-Name'>{user.userName}</span>
            <span className='MyClothes__Profile--Info-Number'>{user.phone}</span>
            {JSON.parse(sessionStorage.getItem('userData')) && (
              <span className='MyClothes__Profile--Info-Count'>
                {JSON.parse(sessionStorage.getItem('userData')).articles}
                {' '}
                Prendas
              </span>
            )}
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
                id={articles[id]._id}
              >
                <img src={articles[id].urlPhoto} alt='img' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyClothes;
