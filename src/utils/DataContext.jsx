import React, { createContext, useState } from 'react';

export const DataContext = createContext()

const DataProvider = ({ children }) => {

  const [userData, setUserData] = useState(
    {
      token: '',
      userId: '',
      userPhone: 0,
      userArticles: 0,
    }
  );
  const [category, setCategory] = useState(
    {
      category: ''
    }
  );

  const saveUserData = (data) => {
    setUserData({
      token: data.token,
      userId: data.userId,
      userPhone: data.userPhone,
      userArticles: data.articles,
    })
  }

  const saveCategory = (data) => {
    setCategory({ category: data })
  }

  return (
    <DataContext.Provider value={{ userData, saveUserData, category, saveCategory }}>
      {children}
    </DataContext.Provider>
  )

}

export default DataProvider;