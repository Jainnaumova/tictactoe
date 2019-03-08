import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
<link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Gloria+Hallelujah|Laila|Permanent+Marker|Sedgwick+Ave" rel="stylesheet">
// import "../public/index.css";

import store from "./store";
import Root from "./components/root";

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("main")
);
