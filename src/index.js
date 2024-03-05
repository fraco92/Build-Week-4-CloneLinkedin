import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//redux
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import peopleReducer from "../src/reducers/people/peopleSlice";

const reducer = combineReducers({
  peopleData: peopleReducer,
});

const store = configureStore({
  reducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
