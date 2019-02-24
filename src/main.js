import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import "../public/index.css";

import store from "./store";
import Root from "./components/root";

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("main")
);
