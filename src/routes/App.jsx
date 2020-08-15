import React from 'react';
import '../assets/styles/containers/App.scss';

import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Containers from '../components/Containers/Containers';
import Layout from '../components/Layout';
import HelloWorld from '../components/HelloWorld/HelloWorld';

function App() {
  return (
    // <ProductsProvider>
    <BrowserRouter>
      <Layout>
        <Containers>
          <Switch>
            <Route exact path='/' component={HelloWorld} />
          </Switch>

          <ul>
            <li>
              <Link to='/anotherpage'>Test Router</Link>
            </li>
          </ul>
        </Containers>
      </Layout>
    </BrowserRouter>
    // </ProductsProvider>
  );
}

export default App;
