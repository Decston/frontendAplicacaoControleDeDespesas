import React from 'react';
import { Link, Route } from 'react-router-dom';
import routesConfig from './routesConfig';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';
import store from './store';
import './App.css';

function App() {

  return (
    <div>
      <Provider store={store}>
        <div className="menu">
          <Link className="link" to="/"> Home </Link>
          <Link className="link" to="/ativos"> Ativos </Link>
          <Link className="link" to="/passivos"> Passivos </Link>
        </div>
        <div className="pages">
          {routesConfig.map((value, key) => {
            return <Route 
              key={key}
              path={value.path}
              component={value.component}
              exact={value.exact}
            ></Route>
          })}
        </div>
      </Provider>
    </div>
  );
}

export default App;
