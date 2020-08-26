import React, { createContext, useState } from 'react';

export const DataContext = createContext()

const DataProvider = ({ children }) => {

  const [userData, setUserData] = useState(
    {
      userId: '',
      userPhone: 0,
      urlPhoto: '',
      userName: '',
      token: '',
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
      userId: data.user._id,
      userPhone: data.user.phone,
      urlPhoto: data.user.urlPhoto,
      userName: data.user.userName,
      token: data.access_token,
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