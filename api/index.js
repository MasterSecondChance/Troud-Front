import axios from 'axios';

//Token initialized

if (!sessionStorage.length) {
  sessionStorage.setItem('userData', JSON.stringify({ access_token: 0 }));
}

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
  //Token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
  try {
    const data = await serviceInstance.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  //Token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
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

export const createUser = async (user) => {
  try {
    const newUser = await serviceInstance.post('/users', user);
    return { phone: user.phone, userId: newUser.data.data };
  } catch (error) {
    console.log(error);
  }
};

export const getArticles = async () => {
  //Token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
  try {
    const data = await serviceInstance.get('/articles', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticleById = async (id) => {
  //Token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
  try {
    const data = await serviceInstance.get(`/articles/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticleById = async (id) => {
  //token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
  try {
    const data = await serviceInstance.delete(`/articles/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticleByPhone = async (phone) => {
  //Token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
  try {
    const data = await serviceInstance.get(`/articles?phoneOwner=${phone}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticleByCategory = async (category , phone) => {
  //Token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
  try {
    const data = await serviceInstance.get(`/articles/categories/${category}/${phone}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticlesUnreaction = async (phone) => {
  //Token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
  try {
    const data = await serviceInstance.get(`/articles/unreaction/${phone}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createArticle = async (clothe) => {
  try {
    await serviceInstance.post('/articles', clothe);
  } catch (error) {
    console.log(error);
  }
};

export const updateArticle = async (id, clothe) => {
  //Token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
  try {
    await serviceInstance.put(`/articles/${id}`, clothe, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id, user) => {
  //Token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
  try {
    await serviceInstance.put(`/users/${id}`, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

export const createReaction = async (reaction) => {
  //Token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
  try {
    console.log(token);
    const { data } = await serviceInstance.post('/reactions', reaction, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createMatch = async (reaction) => {
  //Token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
  try {
    const { data } = await serviceInstance.post('/matches', reaction, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMatchs = async (reaction) => {
  //Token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
  try {
    const { data } = await serviceInstance.get('/matches', reaction, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMatchs = async (phoneFirst, phoneSecond) => {
  //Token
  const token = JSON.parse(sessionStorage.getItem('userData')).access_token;
  try {
    const { data } = await serviceInstance.delete(`/matches/${phoneFirst}/${phoneSecond}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMatchByPhone = async (phone) => {
  //Token
  const token = JSON.parse(sessionStorage.getItem("userData")).access_token;
  try {
    const { data } = await serviceInstance.get(`/matches/phone/${phone}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default serviceInstance;
