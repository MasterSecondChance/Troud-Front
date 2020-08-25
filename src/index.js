import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import UserContext from './utils/UserContext';

const user = { token: 'gato', userId: '_id' }

ReactDOM.render(
  <UserContext.Provider value={user}>
    <App />
  </UserContext.Provider>
  , document.getElementById('app'));
