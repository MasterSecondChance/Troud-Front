import { faCommentAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteMatchs, getMatchByPhone } from '../../../api';
import NoChats from '../NoChats/NoChats';
import './Message.scss';

function Message() {

  const [matchs, setMatchs] = useState([]);
  const navigate = useNavigate();

  const handleDeleteMatchs = async (phoneFirst, phoneSecond) => {
    try {
      await deleteMatchs(phoneFirst, phoneSecond);
      toast('Ya no te gusta.', {
        type: 'info',
        autoClose: 3000,
      });
      navigate('/inbox');
    } catch (error) {
      console.log(error);
      toast('No se pudo borrar el match.', {
        type: 'error',
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    const geArticles = async () => {
      if (!sessionStorage) {
        navigate('/');
      }
      try {
        const matchs = await getMatchByPhone(JSON.parse(sessionStorage.getItem('userData')).user.phone);
        setMatchs(matchs.data);
      } catch (error) {
        toast('Error al cargar tus Matchs', {
          type: 'error',
          autoClose: 2000,
        });
      }
    };
    geArticles();
  }, []);

  return (
    <>
      <ToastContainer />
      {
        (() => {
          if (matchs.length === 0) {
            return (
              <NoChats />
            );
          }
          return (
            <section className='ListOfMessages'>
              {
                matchs.map((item) => (
                  <div className='Message' key={item._id}>
                    <div>
                      <img className='Message__image' src={item.urlPhotoArticleFirst} alt={item.firstArticleName} />
                      <div>
                        <h3 className='Message__user' tabIndex='0'>{item.nameSecond}</h3>
                        <span className='Message__garment' tabIndex='0'>
                          <b>Artículo: </b>
                          {item.secondArticleName}
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        type='button'
                        className='Message__delete button'
                        onClick={() => {
                          handleDeleteMatchs(item.phoneFirst, item.phoneSecond);
                        }}
                      >
                        <FontAwesomeIcon className='faTrash' icon={faTrash} title='Eliminar' />
                      </button>
                      <a className='Message__chat button' target='_blank' href={`${import.meta.env.VITE_WHATSAPP_API_URL || 'https://api.whatsapp.com/send'}?phone=57${item.phoneSecond}&text=hola%20soy%20${item.nameFirst} y me gusta tu '${item.firstArticleName}'`} rel='noreferrer'>
                        <FontAwesomeIcon className='faCommentAlt' icon={faCommentAlt} title='Mensaje' />
                      </a>
                    </div>
                  </div>
                ))
              }
            </section>
          );
        })()
      }
    </>
  );
}

export default Message;
