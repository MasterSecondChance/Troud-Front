import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import UserContext from './utils/UserContext';

const user = { token: 'asd123', userId: '123456' };

ReactDOM.render(
  <UserContext.Provider value={user}>
    <App />
  </UserContext.Provider>
  , document.getElementById('app'),
);
