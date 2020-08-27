import React, { useEffect, useState, useContext } from 'react';
import './ProfilePersonal.scss';
import api, { getUserById, updateUser } from '../../../api';
import { useHistory } from 'react-router-dom';
import { DataContext } from '../../utils/DataContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfilePersonal = () => {

  const { userData } = useContext(DataContext);

  const history = useHistory();
  const [user, setUser] = useState([]);
  const [values, setValues] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  console.log(JSON.parse(sessionStorage.getItem("userData")).user._id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(JSON.parse(sessionStorage.getItem("userData")).user._id, {
        userName: values.name,
        email: values.email,
        phone: user.phone,
        password: values.password,
      });
      toast('Datos Guardados', {
        type: 'success',
        autoClose: 3000,
      })
    } catch (error) {
      console.log(error);
      toast('No se pudo guardar los datos', {
        type: 'error',
        autoClose: 2000,
      });
    }
  };

  const handleLogout = () => {
    sessionStorage.clear()
    history.push('/');
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await getUserById(JSON.parse(sessionStorage.getItem("userData")).user._id);
        setUser(result.data.data);
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

  return (
    <>
      <ToastContainer />
      <article className='ProfilePersonal'>
        <div>
          <figure className='ProfilePersonal__photoContainer'>
            <img className='ProfilePersonal__photo' width='90' src={user.urlPhoto} role='presentation' />
          </figure>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='Input__container'>
            <label>
              Nombre
            <input
                type='text'
                name='name'
                placeholder={user.userName}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className='Input__container'>
            <label>
              Email
            <input
                type='email'
                name='email'
                placeholder={user.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className='Input__container'>
            <label>
              Teléfono
            <p
                className="phone"
                placeholder={user.phone}
                type='text'
                name='phone'
              >{user.phone}</p>
            </label>
          </div>
          <div className='ProfilePersonal__change-password'>
            <input id='changePassword' type='checkbox' />
            <label htmlFor='changePassword'>Cambiar contraseña</label>
            <div className='expand'>
              <div className='Input__container'>
                <label>
                  Nueva contraseña
                <input
                    type='password'
                    name='password'
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className='Input__container'>
                <label>
                  Confirmar contraseña
                <input
                    type='password'
                    name='password2'
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <button className='ProfilePersonal__button'>Guardar cambios</button>
        </form>
        <div className='logged-options'>
          <a className='logged-options__logout' onClick={handleLogout}>Cerrar sesión</a>
        </div>
      </article>
    </>
  );
};

export default ProfilePersonal;
