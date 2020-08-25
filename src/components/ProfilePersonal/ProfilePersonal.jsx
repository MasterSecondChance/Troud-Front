import React, { useEffect, useState } from 'react';
import './ProfilePersonal.scss';
import api, { getUserById, updateUser } from '../../../api';
import UserContext from '../../utils/UserContext';

const profilePic = 'https://droplr.com/wp-content/uploads/2020/06/iconfinder_discord_2308078-512x400.png';

const ProfilePersonal = () => {

  const userLogged = useContext(UserContext);

  const [user, setUser] = useState([]);
  const [values, setValues] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser('5f407844006da6305c1206bf', {
      firstName: values.name,
      password: values.password,
      email: values.email,
      phone: user.phone
    });
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await getUserById('5f407844006da6305c1206bf');
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
          <img className='ProfilePersonal__photo' width='90' src={profilePic} role='presentation' />
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
              placeholder={user.firstName}
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
        <a className='logged-options__logout' href='#'>Cerrar sesión</a>
        <a className='logged-options__delete' href='#'>Borrar cuenta</a>
      </div>
    </article>
  );
};

export default ProfilePersonal;
