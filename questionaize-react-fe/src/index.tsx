import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import $ from 'jquery';
import './@core/utils/i18n';
import { Provider } from 'react-redux';
import  {store}  from './@core/+state/store';
(window as any).jQuery = $;
(window as any).$ = $;
(global as any).jQuery = $;


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
