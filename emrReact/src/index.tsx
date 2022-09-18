import React from 'react';
import ReactDOM from "react-dom/client";
import './scss/index.scss';
import './scss/sidebar-custom.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

import App from './App';
import '@core/utils/i18n';
import { Provider } from 'react-redux';
import { store } from './@core/+state/store';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

