import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import $ from "jquery";
import "./@core/utils/i18n";
(window as any).jQuery = $;
(window as any).$ = $;
(global as any).jQuery = $;

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);