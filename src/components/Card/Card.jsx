/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import { faMars, faVenus, faTimes, faHeart, faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api, { getUserById } from '../../../api';

const image = 'https://trode-s3.s3.amazonaws.com/deport-col-1598131064350.jpg';
const profilePic = 'https://droplr.com/wp-content/uploads/2020/06/iconfinder_discord_2308078-512x400.png';

function Card() {

  const [articles, setArticles] = useState([]);

  const changeImageLeft = () => {
    alert('Left: Foto Anterior');
  };

  const changeImageRigth = () => {
    alert('Rigth: Foto Siguiente');
  };

  const handleDislike = () => {
    alert('Dislike');
  };

  const handleLike = () => {
    toast('Has Dado Like');
  };

  const handleSuperLike = () => {
    toast('Super Hiper Like', {
      type: 'success',
      autoClose: 3000,
    });
  };

  useEffect(() => {
    const geArticles = async () => {
      try {
        const result = await api.get('/articles/');
        setArticles(result.data.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    geArticles();
  }, []);

  console.log(articles);

  return (
    <>
      <ToastContainer />

      {
        articles.map(article => (

          <div className='Card' key={article._id}>
            <div className='Card__Info'>
              <div className='Card__Info__Header'>
                <div>
                  <img className='Card__Info__Header--Pic' src={profilePic} alt='' />
                </div>
                <span className='Card__Info__Header--name'>Dueño: {article.phoneOwner}</span>
              </div>
              <div className='Card__Info__Img'>
                <img className='Card__Info__Img__Image' src={article.urlPhoto} alt='Img Card' />
                <div className='Card__Info__Img__Gender'><FontAwesomeIcon className='faMars' icon={faMars} title='Hombre' /></div>
                <div className='Card__Info__Img__Size'>Talla: S</div>
                <div className='ChevronLeft' onClick={changeImageLeft} role='button' tabIndex='0'>
                  <FontAwesomeIcon className='faChevronLeft' icon={faChevronLeft} title='faChevronLeft' />
                </div>
                <div className='ChevronRight' onClick={changeImageRigth} role='button' tabIndex='0'>
                  <FontAwesomeIcon className='faChevronRight' icon={faChevronRight} title='faChevronRight' />
                </div>
                <div className='center'>
                  <div onClick={handleDislike} className='left' role='button' tabIndex='0' />
                  <div onClick={handleLike} className='right' role='button' tabIndex='0' />
                </div>
              </div>
              <p className='Card__Info__Name'>Nombre de la prenda</p>
              <div className='Card__Info__Desc'>
                <p>{article.description}</p>
              </div>
            </div>
            <div className='Card__Actions'>
              <FontAwesomeIcon onClick={handleDislike} className='icon faTimes' icon={faTimes} title='No Me Gusta' />
              <FontAwesomeIcon onClick={handleSuperLike} className='icon small faBolt' icon={faStar} title='Super Like' />
              <FontAwesomeIcon onClick={handleLike} className='icon faHeart' icon={faHeart} title='Me gusta' />
            </div>
          </div>

        ))
      }

    </>
  );
}

export default Card;
