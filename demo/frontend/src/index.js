import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';
import createRootReducer from 'reducers';
import config from 'config';
import App from 'App';
import { doInit } from 'actions/auth';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export function getHistory() {
  return history;
}

axios.defaults.baseURL = config.baseURLApi;
axios.defaults.headers.common['Content-Type'] = "application/json";
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

export const store = createStore(
  createRootReducer(history),
  compose(applyMiddleware(routerMiddleware(history), ReduxThunk))
);

store.dispatch(doInit());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
