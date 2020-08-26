import React, { createContext, useState, useReducer } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [user, setUser] = useState('');

  const value = { token: 'gato', userId: '_id', userArticles: 0 };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );

};

export default UserContext;
