import React from 'react';
import ReactDOM from "react-dom/client";
import './scss/index.scss';
import './scss/sidebar-custom.scss';
import App from './App';
// import $ from 'jquery';
import './@core/utils/i18n';

import { Provider } from 'react-redux';
import { store } from './@core/+state/store';
import { ToastContainer } from 'react-toastify';
// (window as any).jQuery = $;
// (window as any).$ = $;
// (global as any).jQuery = $;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </Provider>
</React.StrictMode>,
);

