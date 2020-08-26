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
    const newUser = await serviceInstance.post('/users', user);
    console.log('Nuevo Usuario Creado');
    return { phone: user.phone, userId: newUser.data.data };
  } catch (error) {
    console.log(error);
  }
};

export const getArticleByPhone = async (phone) => {
  try {
    const data = await serviceInstance.get(`/articles?phoneOwner=${phone}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createArticle = async (clothe) => {
  try {
    await serviceInstance.post('/articles', clothe);
    console.log('Nueva prenda Creada');
  } catch (error) {
    console.log(error);
  }
};

export const updateArticle = async (clothe) => {
  try {
    await serviceInstance.put(`/articles/${id}`, clothe);
    console.log('Prenda Actualizada');
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
    await serviceInstance.put(`/users/${id}`, user);
    console.log('Usuario Actualizado');
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (user, pass) => {
  try {
    const data = await serviceInstance.post('/auth/token', {}, {
      auth: {
        username: user,
        password: pass,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (token) => {
  try {
    const { data } = await serviceInstance.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createReaction = async (reaction) => {
  try {
    const { data } = await serviceInstance.post('/reactions', reaction);
    return data.match;
  } catch (error) {
    console.log(error);
  }
};

export default serviceInstance;
