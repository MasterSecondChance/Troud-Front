import React from 'react';
import { createStore } from 'redux'
import { Router, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
// import initialState from '../initialState';
// import reducer from '../reducers';

// const store = createStore(reducer, initialState);
// const store = createStore(reducer);
const history = createBrowserHistory();

const ProviderMock = props => (
  <Provider>
    <Router history={history}>
      {props.children}
    </Router>
  </Provider>
);

export default ProviderMock;
