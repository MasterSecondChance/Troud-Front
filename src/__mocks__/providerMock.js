import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

// Redux declarations
// import initialState from '../initialState';
// import reducer from '../reducers';
// const store = createStore(reducer, initialState);
// const store = createStore(reducer);

const history = createMemoryHistory();

const ProviderMock = ({ children }) => (
  <Provider>
    <Router history={history}>
      {children}
    </Router>
  </Provider>
);

export default ProviderMock;
