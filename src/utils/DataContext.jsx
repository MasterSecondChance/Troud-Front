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

  const [profileImage, setProfileImage] = useState(
    {
      profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png'
    }
  )

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

  const saveImageURL = (data) => {
    setProfileImage({ profileImage: data })
  }

  return (
    <DataContext.Provider value={{ userData, saveUserData, category, saveCategory, profileImage, saveImageURL }}>
      {children}
    </DataContext.Provider>
  )

}

export default DataProvider;