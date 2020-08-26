import React, { useEffect, useState, useContext } from 'react';
import './ProfilePersonal.scss';
import api, { getUserById, updateUser } from '../../../api';
import { useHistory } from 'react-router-dom';
import { DataContext } from '../../utils/DataContext';

const ProfilePersonal = () => {

  const { userData } = useContext(DataContext);

  const history = useHistory();
  const [user, setUser] = useState([]);
  const [values, setValues] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(userData.userId, {
      userName: values.name,
      password: values.password,
      email: values.email,
      phone: user.phone
    });
  };

  const handleLogout = () => {
    history.push('/');
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await getUserById(userData.userId);
        setUser(result.data.data);
      } catch (error) {
        console.log(error.response.data.message, 'Algo fallo');
      }
    };

    getUser();
  }, []);

  return (
    <article className='ProfilePersonal'>
      <div>
        <figure className='ProfilePersonal__photoContainer'>
          <img className='ProfilePersonal__photo' width='90' src={user.urlPhoto} role='presentation' />
        </figure>
        <a className='ProfilePersonal__edit-photo'>
          Cambiar foto
          <br />
          de perfil
        </a>
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
  );
};

export default ProfilePersonal;
