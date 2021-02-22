import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { createStore, compose } from "redux";
import SnackbarProvider from "react-simple-snackbar";
import initialState from "./initialState";
import firebaseInstance from "./utils/firebase";
import "./assets/styles/main.styl";

firebaseInstance.getInstance();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById("root")
);
