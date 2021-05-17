import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GetData from './GetData';
// import Board from './Board';
import {  Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import reportWebVitals from './reportWebVitals';
import { Switch } from '@material-ui/core';
import FrontC from './frontC';

// const hint = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <FrontC />
    {/* <GetData /> */}
    {/* <App /> */}
    {/* <Switch>
      <Route path="/app" component={App} />
      <Route path="/countapp" component={counterApp} />
      <Route path="/admipg" component={adminPgLayout} />
      <redirect from="/" to="/app" />
    </Switch> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
