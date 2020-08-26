import React from 'react';
import '../assets/styles/containers/App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Inbox from '../pages/Inbox';
import ProfileSettings from '../pages/ProfileSettings';
import UploadClothes from '../pages/UploadClothes';
import NotFound from '../pages/NotFound';
import User from '../components/User/User';
import FirstStep from '../components/Sign/FirstStep';
import FullCard from '../components/FullCard/FullCard';
import EditClothes from '../components/EditClothes/EditClothes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/firststep' component={FirstStep} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/fullcard' component={FullCard} />
        <Route exact path='/user' component={User} />
        <Route exact path='/inbox' component={Inbox} />
        <Route exact path='/settings' component={ProfileSettings} />
        <Route exact path='/modify' component={EditClothes} />
        <Route exact path='/upload' component={UploadClothes} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
