import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import { getMatchByPhone, deleteMatchs } from '../../../api';
import NoChats from '../NoChats/NoChats';
import './Message.scss';

const Message = () => {

  const [matchs, setMatchs] = useState([]);
  const history = useHistory();

  const handleDeleteMatchs = async (phoneFirst, phoneSecond) => {
    try {
      await deleteMatchs(phoneFirst, phoneSecond);
      toast('Ya no te gusta.', {
        type: 'info',
        autoClose: 3000,
      });
      history.push('/inbox');
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
        history.push('/');
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

  console.log(matchs);

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
                        className='Message__delete button'
                        onClick={() => {
                          handleDeleteMatchs(item.phoneFirst, item.phoneSecond);
                        }}
                      >
                        <FontAwesomeIcon className='faTrash' icon={faTrash} title='Eliminar' />
                      </button>
                      <a className='Message__chat button' target='_blank' href={`https://api.whatsapp.com/send?phone=${item.phoneSecond}&text=hola%20soy%20${item.nameFirst} y me gusta tu '${item.firstArticleName}'`}>
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
};

export default Message;
