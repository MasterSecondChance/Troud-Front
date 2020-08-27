import React, { useEffect, useState } from 'react';
import './Message.scss';
import Icon from '../../assets/fonts/icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMatchs, deleteMatchs } from '../../../api';
import { useHistory } from 'react-router-dom';

const msg = 'PEPITO, acabas de hacer match con el usuario NOMBRE_OTRO_USUARIO, por la prenda: PRENDA_A_LA_QUE_LE_DOY_LIKE'

const Message = () => {

  const [matchs, setMatchs] = useState([]);
  const history = useHistory();

  const handleDeleteMatchs = async (id) => {
    try {
      await deleteMatchs(id);
      history.push('/inbox');
    } catch (error) {
      console.log(error);
      toast('No se pudo borrar el Match', {
        type: 'error',
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    const geArticles = async () => {
      try {
        const matchs = await getMatchs();
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
      <section className="ListOfMessages">
        {
          matchs.map(item => (

            <div className='Message' key={item._id}>
              <div>
                <h3 className='Message__user' tabIndex='0'>{item.nameFirst}</h3>
                <time className='Message__date' tabIndex='0'>08/22/20</time>
              </div>
              <div>
                <button className='Message__delete button' onClick={() => {
                  handleDeleteMatchs(item._id)
                }}>
                  <Icon icon='delete' />
                </button>
                <a className='Message__chat button' target="_blank" href={`https://api.whatsapp.com/send?phone=${item.phoneFirst}&text=hola%20soy%20${item.secondFirst}`}>
                  <Icon icon='message' />
                </a>
              </div>
            </div>
          ))}
      </section>

    </>
  );
};

export default Message;
