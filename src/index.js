import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css/normalize.css";
import "./styles/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
