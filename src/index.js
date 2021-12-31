import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FirebaseContext from "./Context/FirebaseContext";
import RepositoryContext from "./Context/RepositoryContext";

import * as firebase from './firebase';
import * as repository from './Repository';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <RepositoryContext.Provider value={{ repository }}>
        <App />
      </RepositoryContext.Provider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
