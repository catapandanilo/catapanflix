import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component= { App } exact />
      <Route component= { () => (<div>Page 404</div>) } />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
