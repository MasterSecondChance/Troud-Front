import React from 'react';
import './ProfilePersonal.scss';
const profilePic = 'https://droplr.com/wp-content/uploads/2020/06/iconfinder_discord_2308078-512x400.png';

const ProfilePersonal = () => {
  return (
    <article className="ProfilePersonal">
      <div>
        <figure className="ProfilePersonal__photoContainer">
          <img className="ProfilePersonal__photo" width="90" src={profilePic} role="presentation"/>
        </figure>
        <a className="ProfilePersonal__edit-photo">
          Cambiar foto<br />
          de perfil
        </a>
      </div>
      <form>
        <div className='Input__container'>
          <label>
            Nombre
            <input
            type='text'
            name='name'
            defaultValue="Sofia Alarcón"
            />
          </label>
        </div>
        <div className='Input__container'>
          <label>
            Teléfono
            <input
            type='text'
            name='phone'
            defaultValue="3057891236"
            />
          </label>
        </div>
        <div className="ProfilePersonal__change-password">
          <input id="changePassword" type="checkbox" />
          <label for="changePassword">Cambiar contraseña</label>
          <div className="expand">
            <div className='Input__container'>
              <label>
                Nueva contraseña
                <input
                type="password"
                name="password"
                />
              </label>
            </div>
            <div className='Input__container'>
              <label>
                Confirmar contraseña
                <input
                type="password"
                name="password"
                />
              </label>
            </div>
          </div>
        </div>
        <button className="ProfilePersonal__button">Guardar cambios</button>
      </form>
      <div className="logged-options">
        <a className="logged-options__logout" href="#">Cerrar sesión</a>
        <a className="logged-options__delete" href="#">Borrar cuenta</a>
      </div>
    </article>
  )
}

export default ProfilePersonal