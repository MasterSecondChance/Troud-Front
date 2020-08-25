import axios from 'axios';

const serviceInstance = axios.create({
  baseURL: 'https://trode.afcarrion.vercel.app/api',
});

export const getUserById = async (id) => {
  try {
    const data = await serviceInstance.get(`/users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (user) => {
  try {
    await serviceInstance.put(`/users/`, user)
    console.log('ok');
  } catch (error) {
    console.log(error);
  }
};

/**
 * 
 * @param {Object} user //user id
 * @param {String} id //user id
 * @param {String} name //Name to update
 * @param {String} password //Encrypted password
 */

export const updateUser = async (id, user) => {
  try {
    await serviceInstance.put(`/users/${id}`, user)
    console.log('ok');
  } catch (error) {
    console.log(error);
  }
};

export default serviceInstance;
