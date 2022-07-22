import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StoreApp } from './StoreApp';
import { store } from './stores/store';
import './styles/styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <StoreApp />
  </Provider>,
  document.getElementById('root')
)