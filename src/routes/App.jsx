import React from 'react';
import '../assets/styles/containers/App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstStep from '../components/Sign/FirstStep';
import User from '../components/User/User';
import Details from '../pages/Details';
import Home from '../pages/Home';
import Inbox from '../pages/Inbox';
import ModifyClothe from '../pages/ModifyClothe';
import NotFound from '../pages/NotFound';
import ProfileSettings from '../pages/ProfileSettings';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UploadClothe from '../pages/UploadClothe';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/firststep' element={<FirstStep />} />
        <Route path='/home' element={<Home />} />
        <Route path='/details/:articleId' element={<Details />} />
        <Route path='/user' element={<User />} />
        <Route path='/inbox' element={<Inbox />} />
        <Route path='/settings' element={<ProfileSettings />} />
        <Route path='/modify/:articleId' element={<ModifyClothe />} />
        <Route path='/upload' element={<UploadClothe />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
