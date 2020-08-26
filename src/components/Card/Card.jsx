/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState, useContext } from 'react';
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import { faMars, faVenus, faTimes, faHeart, faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api, { getUserById, createReaction, getArticles, getArticleByCategory } from '../../../api';
import { DataContext } from '../../utils/DataContext';

function Card() {

  const { category } = useContext(DataContext);

  const [articles, setArticles] = useState([]);

  const changeImageLeft = () => {
    alert('Left: Foto Anterior');
  };

  const changeImageRigth = () => {
    alert('Rigth: Foto Siguiente');
  };

  const handleDislike = async (type, idArticle, phoneUser, phoneOwner) => {
    try {
      await createReaction({
        type: type,
        idArticle: idArticle,
        phoneUser: phoneUser,
        phoneOwner: phoneOwner,
      })
      toast('No te gusta', {
        type: 'error',
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (type, idArticle, phoneUser, phoneOwner) => {
    try {
      await createReaction({
        type: type,
        idArticle: idArticle,
        phoneUser: phoneUser,
        phoneOwner: phoneOwner,
      })
      toast('Te gusta', {
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuperLike = async (type, idArticle, phoneUser, phoneOwner) => {
    try {
      await createReaction({
        type: type,
        idArticle: idArticle,
        phoneUser: phoneUser,
        phoneOwner: phoneOwner,
      })
      toast('Te Super Encanta', {
        type: 'success',
        autoClose: 5000,
      });
      const supers = document.querySelectorAll('.small')
      supers.forEach(item => {
        item.style.display = "none";
      })
      const displaySupers = () => {
        supers.forEach(item => {
          item.style.display = "initial";
        })
      }
      setTimeout(displaySupers, 60000)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const geArticles = async () => {
      try {
        if (!category.category) {
          console.log('Todos');
          const result = await getArticles();
          setArticles(result.data.data);
        }
        if (category.category) {
          console.log('Filtrado');
          const result = await getArticleByCategory(category.category);
          setArticles(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    geArticles();
  }, [category]);

  return (
    <>
      <ToastContainer />

      {
        articles.map(article => (

          <div className='Card' key={article._id}>
            <div className='Card__Info'>
              <div className='Card__Info__Header'>
                {/* <div>
                  <img className='Card__Info__Header--Pic' src={profilePic} alt='' />
                </div> */}
                <span className='Card__Info__Header--name'>Articulo: {article.name}</span>
              </div>
              <div className='Card__Info__Img'>
                <img className='Card__Info__Img__Image' src={article.urlPhoto} alt='Img Card' />
                {article.gender === 'male' ?
                  <div className='Card__Info__Img__Gender'><FontAwesomeIcon className='faMars' icon={faMars} title='Hombre' /></div>
                  :
                  <div className='Card__Info__Img__Gender'><FontAwesomeIcon className='faVenus' icon={faVenus} title='Mujer' /></div>
                }
                <div className='Card__Info__Img__Size'>Talla: {article.size}</div>
                {/* <div className='ChevronLeft' onClick={changeImageLeft} role='button' tabIndex='0'>
                  <FontAwesomeIcon className='faChevronLeft' icon={faChevronLeft} title='faChevronLeft' />
                </div>
                <div className='ChevronRight' onClick={changeImageRigth} role='button' tabIndex='0'>
                  <FontAwesomeIcon className='faChevronRight' icon={faChevronRight} title='faChevronRight' />
                </div> */}
                <div className='center'>
                  <div
                    className='left' role='button'
                    tabIndex='0'
                    onClick={() => {
                      handleDislike('Dislike', article._id, '3203889058', article.phoneOwner) //Pending fix
                    }}
                  />
                  <div
                    className='right'
                    role='button'
                    tabIndex='0'
                    onClick={() => {
                      handleLike('Like', article._id, '3203889058', article.phoneOwner) //Pending fix
                    }}
                  />
                </div>
              </div>
              {/* <p className='Card__Info__Name'>{article.name}</p> */}
              <div className='Card__Info__Desc'>
                <p className='Card__Info__Desc--Info'><b>Descripccion: </b> {article.description}</p>
              </div>
            </div>
            <div className='Card__Actions'>
              <FontAwesomeIcon
                className='icon faTimes'
                icon={faTimes}
                title='No Me Gusta'
                onClick={() => {
                  handleDislike('Dislike', article._id, '3203889058', article.phoneOwner) //Pending fix
                }}
              />
              <FontAwesomeIcon
                className='icon small faBolt'
                icon={faStar}
                title='Super Like'
                onClick={() => {
                  handleSuperLike('SuperLike', article._id, '3203889058', article.phoneOwner) //Pending fix
                }}
              />
              <FontAwesomeIcon
                className='icon faHeart'
                icon={faHeart}
                title='Me gusta'
                onClick={() => {
                  handleLike('Like', article._id, '3203889058', article.phoneOwner) //Pending fix
                }}
              />
            </div>
          </div>
        ))
      }
    </>
  );
}

export default Card;
