import React from 'react';
import '../assets/styles/containers/App.scss';

import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Inbox from '../pages/Inbox';
import ProfileSettings from '../pages/ProfileSettings';
import User from '../components/User/User';
import FirstStep from '../components/Sign/FirstStep';
import FullCard from '../components/FullCard/FullCard';
import Modify from '../components/Sign/ThirdStep';


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
        <Route exact path='/modify' component={Modify} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
