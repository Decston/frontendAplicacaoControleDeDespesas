import React from 'react';
import { Link, Route } from 'react-router-dom';
import routesConfig from './routesConfig';
import { Provider } from 'react-redux';

import store from './store';
import './App.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <div className="App">
          <Link to="/">Home </Link>
          - 
          <Link to="/ativos"> Ativos </Link>
          -
          <Link to="/passivos"> Passivos</Link>     
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
