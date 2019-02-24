import thunkMiddleware from "redux-thunk";
import loggingMiddleware from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      loggingMiddleware
    )
  )
);
