import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import appReducer from './reducers/appReducer'
import './index.css';
import App from './components/App';

import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(appReducer, composeWithDevTools());
// window.store = store;

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
);