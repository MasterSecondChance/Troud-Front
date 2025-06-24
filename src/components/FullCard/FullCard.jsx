import { faMars, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteArticleById, getArticleById } from '../../../api/index';
import './FullCard.scss';

const FullCard = (props) => {

  const navigate = useNavigate();
  const [article, setArticle] = useState({
    type: '',
    size: '',
    name: '',
    brand: '',
    condition: '',
    gender: '',
    description: '',
    color: '',
    urlPhoto: '',
    city: '',
  });

  const handleDeleteArticle = () => {
    const deleteArticle = async () => {
      try {
        await deleteArticleById(props.id);
        toast('Se eliminó la prenda', {
          type: 'success',
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate('/user');
        }, 3000);
      } catch (error) {
        toast('No fue posible eliminar la prenda', {
          type: 'error',
          autoClose: 2000,
        });
      }
    };

    deleteArticle();
  };

  useEffect(() => {
    const getArticle = async () => {
      try {
        const result = await getArticleById(props.id);
        setArticle(result.data.data);
      } catch (error) {
        toast(error, {
          type: 'error',
          autoClose: 2000,
        });
      }
    };

    getArticle();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className='FullCard'>
        <div className='FullCard__Info'>

          <div className='FullCard__imag-wrapper'>
            <div className='FullCard__Info__Header'>
              <button type='button' onClick={handleDeleteArticle}>
                <FontAwesomeIcon className='options delete' icon={faTrash} title='Eliminar' />
              </button>
              <Link to={`/modify/${props.id}`}>
                <FontAwesomeIcon className='options edit' icon={faPen} title='Editar' />
              </Link>
            </div>
            <div className='FullCard__Info__Img'>
              <img className='FullCard__Info__Img__Image' src={article.urlPhoto} alt='Img FullCard' />
              <div className='FullCard__Info__Img__Gender'><FontAwesomeIcon className='faMars' icon={faMars} title='Hombre' /></div>
              <div className='FullCard__Info__Img__Size'>{article.size}</div>
            </div>
          </div>

          <div className='FullCard__Info-wrapper'>
            <p className='FullCard__Info__Name'>{article.name}</p>
            <div className='FullCard__Info__Desc'>
              <p>{article.description}</p>
            </div>
            <div className='FullCard__Details'>
              <div className='FullCard__Details--item'>
                <p className='FullCard__Details--item-title'>Marca</p>
                <p className='FullCard__Details--item-text'>{article.brand}</p>
              </div>
              <div className='FullCard__Details--item'>
                <p className='FullCard__Details--item-title'>Estado</p>
                <p className='FullCard__Details--item-text'>{article.condition}</p>
              </div>
              <div className='FullCard__Details--item'>
                <p className='FullCard__Details--item-title'>Categoría</p>
                <p className='FullCard__Details--item-text'>{article.type}</p>
              </div>
              <div className='FullCard__Details--item'>
                <p className='FullCard__Details--item-title'>Ciudad</p>
                <p className='FullCard__Details--item-text'>{article.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullCard;
