import axios from 'axios';

const serviceInstance = axios.create({
  baseURL: 'https://trode.afcarrion.vercel.app/api',
});

export const uploadImage = async (id) => {
  try {
    const data = await serviceInstance.post();
    return data;
  } catch (error) {
    console.log(error);
  }
};

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

export const getArticleById = async (id) => {
  try {
    const data = await serviceInstance.get(`/articles/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticles = async (phone) => {
  try {
    const data = await serviceInstance.get('/articles');
    return data;
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

export const getArticleByCategory = async (category) => {
  try {
    const data = await serviceInstance.get(`/articles/categories/${category}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticlesUnreaction = async (phone) => {
  try {
    const data = await serviceInstance.get(`/articles/unreaction/${phone}`);
    console.log(data, phone);
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
    return data.data;
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
    console.log(reaction);
    const { data } = await serviceInstance.post('/reactions', reaction);
    return data.match;
  } catch (error) {
    console.log(error);
  }
};

export default serviceInstance;
