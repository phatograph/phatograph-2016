import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import { Router, Route, Link } from 'react-router';
let createBrowserHistory = require('history/lib/createBrowserHistory');

import Resume from './resume.jsx';

let App = React.createClass({
  render() {
    return (
      <p>Hello!!</p>
    );
  }
});

let routes = (
  <Router history={createBrowserHistory()}>
    <Route path='/' component={App} />
    <Route path='/resume' component={Resume} />
  </Router>
);

ReactDOM.render(routes, document.querySelector('#main'));