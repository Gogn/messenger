import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import { Provider } from 'react-redux';
import store from "./Store/store";

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Provider>
);

export default App;
