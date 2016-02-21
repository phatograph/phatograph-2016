import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import { Router, Route, Link } from 'react-router';
let createBrowserHistory = require('history/lib/createBrowserHistory');

import style from './../css/style.css';
import landing from './../css/landing.css';
import Resume from './resume.js';
import { NameHeading, Contact } from './shared.js';

let App = React.createClass({
  render() {
    return (
      <div className={landing.container}>
        <table className={style.data}>
          <tbody>
            <tr>
              <td>
                <h2>
                  <img className={landing.me} src="http://www.gravatar.com/avatar/669eba01a4293df2f86fb10857efa0af?s=640" alt="me" />
                </h2>
              </td>
              <td>
                <NameHeading />
                <h6 className={landing.h6}>
                  Front-end &middot; Node.js &middot;<br />Ruby on Rails developer
                </h6>
                <ul className={landing.links}>
                  <li><a href="resume" target="_blank">Résumé</a></li>
                  <li><a href="http://blog.phatograph.com" target="_blank">Blog</a></li>
                  <li><a href="https://github.com/phatograph" target="_blank">GitHub</a></li>
                  <li><a href="https://uk.linkedin.com/in/phatograph" target="_blank">LinkedIn</a></li>
                  <li>
                    <a href="https://twitter.com/phatograph" target="_blank">
                      Twitter
                      <small>Are you sure you want to see me rant?</small>
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <p className={landing.copyright}>
                  2016 &copy; phatograph.com
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
