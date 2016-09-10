import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import routes from './routes';
import { Router, browserHistory } from 'react-router';
// browser history if http://blog.com/post/id if post/id change send to router and router need to change
// hash history if http://blog.com/#post/id if post/id change send to router and router need to change
// just what part of url react-router care about
import reducers from './reducers';
import promise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));