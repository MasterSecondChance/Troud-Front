import React from 'react';
import '../assets/styles/containers/App.scss';

import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../components/Sign/SignIn'
import SignUp from '../components/Sign/SignUp';
import User from '../components/User';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/user' component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
