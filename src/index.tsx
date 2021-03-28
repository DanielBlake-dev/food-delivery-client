import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import { StoreProvider } from "./components/StoreProvider/StoreProvider";
import "./style/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreProvider>
        <App />
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
